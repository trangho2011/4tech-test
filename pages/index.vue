<template>
  <div class>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap"
      rel="stylesheet"
    />
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