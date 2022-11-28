<template>
  <div class>
    <Header />
    <Banner />
    <about-us />
    <Games />
    <Partners />
    <contact-us />
    <Footer />
    <BackToTopBtn />
  </div>
</template>

<script>
import Games from "../components/gameList/Games.vue";
export default {
  components: { Games },
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