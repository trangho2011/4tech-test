<template>
  <div class="card1">
    <img :src="game?.img" :alt="game?.title" />
    <div class="card1--detail">
      <h2 class="m-lg-3 m-1">{{ game?.title }}</h2>
      <p class="m-lg-3 m-1">
        {{ game?.decription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["game"],
};
</script>

<style lang="css" scoped>
.card1 {
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  box-shadow: 1px 1px 7px black;
  transition: all 0.5s ease-in-out;
}
img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}
.card1--detail {
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  color: white;
  bottom: 0;
  max-height: 90%;
}
h2 {
  font-size: 40px;
}
p {
  font-size: 13px;
}
.card1:hover {
  box-shadow: 2px 2px 10px black;
}
.card1:hover img {
  transform: scale(1.1);
}
@media screen and (max-width: 1199px) {
  h2 {
    font-size: 35px;
  }
}
@media screen and (max-width: 911px) {
  h2 {
    font-size: 25px;
  }
}
</style>