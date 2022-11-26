<template>
  <section id="games">
    <div class="container-fluid container-lg">
      <div class="text-center">
        <h1>Our Games</h1>
        <p>
          As a pioneer of mobile app gamification, we take pride in originality
          and individuality, providing global players with state-of-the-art
          games that feature splendid storylines, sensational sound effects and
          magnificent animation that never cease to impress.
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
</style>