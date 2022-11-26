<template>
  <div class>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    />
    <!-- <Games /> -->
    <Partners />
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <ul>
      <li class="my-list">{{ $t("buy") }}</li>
      <li class="my-list">{{ $t("congratulation") }}</li>
      <li class="my-list">{{ $t("not_enough") }}</li>
      <li>
        <select v-model="$i18n.locale" @change="lang($i18n.locale)">
          <option
            v-for="(lang, i) in $i18n.availableLocales"
            :key="`Lang${i}`"
            :value="lang"
          >
            {{ lang }}
          </option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
import Games from "../components/gameList/Games.vue";
import Partners from "../components/partners/Partners.vue";
export default {
  components: { Games, Partners },
  name: "IndexPage",
  created: function () {
    if (process.browser) {
      if (localStorage.getItem("lang")) {
        if (this.$route.query.lang) {
          this.$i18n.locale = this.$route.query.lang;
        } else {
          this.$i18n.locale = localStorage.getItem("lang");
        }
      }
    }
  },
  methods: {
    lang: function (l) {
      this.$router.push({
        query: {
          lang: l,
        },
      });
      this.$i18n.locale = l;
      if (process.browser) {
        localStorage.setItem("lang", l);
      }
    },
  },
};
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  display: block;
}
ul li {
  display: inline-block;
}
.my-list {
  color: blue;
  cursor: pointer;
}
</style>