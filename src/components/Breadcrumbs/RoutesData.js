export const RoutesData = {
  home: {
    title: "Главная",
    path: "/",
    children: {
      login: {
        title: "Вход",
        path: "/login"
      },
      news: {
        title: "Новости",
        path: "/news"
      },
      message: {
        title: "Сообщения",
        path: "/message",
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
