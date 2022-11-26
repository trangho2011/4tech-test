<template>
  <section id="games">
    <div class="container-fluid container-lg">
      <div class="text-center mb-5">
        <h2 class="games--title">{{ $t("our_games") }}</h2>
        <p class="games--decription">
          {{ $t("games_decription") }}
        </p>
      </div>
      <ListCard />
    </div>
  </section>
</template>

<script>
import ListCard from "./ListCard.vue";
export default {
  components: { ListCard },
};
</script>

<style>
#games{
  padding: 100px 0 0;
}
.games--title {
  font-family: Playfair Display;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 3.6px;
  color: #000;
  margin-bottom: 0;
}
.games--decription {
  max-width: 860px;
  margin: 24px auto 0;
  color: #757575;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
</style>