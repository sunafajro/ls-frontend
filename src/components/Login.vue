<template>
  <div>
    <b-row align-h="center">
     <b-col sm="12" md="8" lg="6" xl="4">
        <center>
          <b-img thumbnail :src="showImage" alt="Цветочки" />
        </center>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col sm="12" md="8" lg="6" xl="4">
        <p class="text-center">
          Пожалуйста заполните следующие поля для входа:
        </p>
        <b-form @submit.prevent="login">
          <b-form-group label="Ваш логин:" label-for="form-login-username" :state="userNameInput">
            <b-form-input
              id="form-login-username"
              placeholder="введите ваш логин..."
              :state="userNameInput"
              type="text"
              :value="username"
              v-on:input="(e) => handleInput(e, 'username')"
            />
          </b-form-group>
          <b-form-group label="Ваш пароль:" label-for="form-login-password" :state="passwordInput">
            <b-form-input
              id="form-login-password"
              placeholder="введите ваш пароль..."
              :state="passwordInput"
              type="password"
              :value="password"
              v-on:input="(e) => handleInput(e, 'password')"
            />
          </b-form-group>
          <b-form-group>
            <div class="text-center">
              <b-button size="lg" type="submit" variant="primary">Вход</b-button>
            </div>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import bButton from "bootstrap-vue/es/components/button/button";
import bCol from "bootstrap-vue/es/components/layout/col";
import bForm from "bootstrap-vue/es/components/form/form";
import bFormGroup from "bootstrap-vue/es/components/form-group/form-group";
import bFormInput from "bootstrap-vue/es/components/form-input/form-input";
import bImage from "bootstrap-vue/es/components/image/img";
import bRow from "bootstrap-vue/es/components/layout/row";
import { getRandomInt } from "../utils";

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
      firstInput: false
    };
  },
  components: {
    "b-button": bButton,
    "b-col": bCol,
    "b-form": bForm,
    "b-form-group": bFormGroup,
    "b-form-input": bFormInput,
    "b-img": bImage,
    "b-row": bRow
  },
  computed: {
    showImage() {
      const number = getRandomInt(1, 101);
      return `/images/flowers/${number}.jpg`;
    },
    userNameInput() {
      return this.username !== "" ? true : this.firstInput ? false : null;
    },
    passwordInput() {
      return this.password !== "" ? true : this.firstInput ? false : null;
    }
  },
  methods: {
    handleInput(value, key) {
      this[key] = value;
      if (!this.firstInput) {
        this.firstInput = true;
      }
    },
    login() {
      if (this.validate()) {
        this.$store.dispatch({
          type: "getLogin",
          credentials: {
            username: this.username,
            password: this.password
          }
        });
      }
    },
    validate() {
      let result = true;
      if (!this.username) {
        result = false;
        this.notify("error", "Поле логин должно быть заполнено!");
      }
      if (!this.password) {
        result = false;
        this.notify("error", "Поле пароль должно быть заполнено!");
      }
      return result;
    }
  }
};
</script>
