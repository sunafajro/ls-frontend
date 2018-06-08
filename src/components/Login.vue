<template>
  <div>
    <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">
      <center>
        <img :src="showImage" class="thumbnail" alt="Цветочки" />
      </center>
    </div>
    <div class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 text-center">
      <p class="text-center">
        Пожалуйста заполните следующие поля для входа:
      </p>
      <form @submit.prevent="login">
        <div :class="{ 'form-group': true, 'has-error': usernameFieldIsValid === false, 'has-success': usernameFieldIsValid === true }">
          <input type="text" class="form-control" v-model.trim="username" placeholder="введите ваш логин..." />
        </div>
        <div :class="{ 'form-group': true, 'has-error': passwordFieldIsValid === false, 'has-success': passwordFieldIsValid === true }">
          <input type="password" class="form-control" v-model.trim="password" placeholder="введите ваш пароль..." />
        </div>
        <div class="form-group">
          <div class="text-center">
            <button class="btn btn-primary" name="login-button">Вход</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getRandomInt } from "../utils";
import axios from "axios";

export default {
  props: {
    notify: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      username: "",
      password: "",
      usernameFieldIsValid: null,
      passwordFieldIsValid: null,
      error: false
    };
  },
  computed: {
    showImage() {
      const number = getRandomInt(1, 101);
      return `/images/flowers/${number}.jpg`;
    }
  },
  methods: {
    login() {
      if (this.validate()) {
        axios
          .get("/site/csrf")
          .then(response => {
            let data = Object.assign({}, response.data);
            data.LoginForm = {
              username: this.username,
              password: this.password
            };
            console.log(data);
            axios
              .post("/site/login", JSON.stringify(data), {
                headers: { "Content-Type": "application/json" }
              })
              .then(response => {
                if (response.data.status === true) {
                  this.notify("success", response.data.text);
                  window.location.replace(response.data.url);
                } else {
                  this.notify("error", response.data.text);
                  this.error = true;
                }
              })
              .catch(err => {
                this.notify(
                  "error",
                  err.message ? err.message : "Произошла ошибка!"
                );
                this.error = true;
              });
          })
          .catch(err => {
            this.notify(
              "error",
              err.message ? err.message : "Произошла ошибка!"
            );
            this.error = true;
          });
      }
    },
    validate() {
      let result = true;
      if (this.username) {
        this.usernameFieldIsValid = true;
      } else {
        this.usernameFieldIsValid = false;
        result = false;
        this.notify("error", "Поле логин должно быть заполнено!");
      }
      if (this.password) {
        this.passwordFieldIsValid = true;
      } else {
        this.passwordFieldIsValid = false;
        result = false;
        this.notify("error", "Поле пароль должно быть заполнено!");
      }
      return result;
    }
  }
};
</script>
