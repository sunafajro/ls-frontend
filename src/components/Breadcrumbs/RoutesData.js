export const RoutesData = {
  home: {
    title: "Главная",
    path: "/",
    children: {
      login: {
        title: "Вход",
        path: "/login"
      },
      admin: {
        title: "Администрирование",
        path: "/admin"
      },
      news: {
        title: "Новости",
        path: "/news"
      },
      kaslibro: {
        title: "Расходы",
        path: "/kaslibro"
      },
      messages: {
        title: "Сообщения",
        path: "/messages",
        children: {
          create: {
            title: "Создать сообщение",
            patch: "/message/create"
          }
        }
      },
      report: {
        title: "Отчеты",
        path: "/report"
      },
      sale: {
        title: "Скидки",
        path: "/sale"
      },
      reference: {
        title: "Справочники",
        path: "/reference"
      }
    }
  }
};
