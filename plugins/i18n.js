import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "../locales/en.json";
import vi from "../locales/vi.json";

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: "en",
    fallbackLocale: "en",
    silentTranslationWarn: true,
    messages: {
      en: en,
      vi: vi,
    },
  });
  
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};