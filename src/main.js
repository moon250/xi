import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import { en } from "./locales/en.json";
import { fr } from "./locales/fr.json";
import { createPinia } from "pinia";

const app = createApp(App);
const currentLocale = localStorage.hasOwnProperty("lang")
  ? localStorage.getItem("lang")
  : navigator.language.split("-")[0];

app.use(
  createI18n({
    locale: currentLocale,
    fallbackLocale: "en",
    globalInjection: true,
    legacy: false,
    messages: {
      fr,
      en,
    },
  }),
);

app.use(createPinia());

app.mount("#app");
