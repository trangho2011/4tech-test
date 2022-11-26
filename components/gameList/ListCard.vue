<template>
  <div class="row">
    <div class="col-6 col-lg-3 order-1 card--element">
      <div class="mt-4" v-for="(game, index) in games1" :key="index">
        <Card :game="game" />
      </div>
    </div>
    <div class="col-6 col-lg-3 order-3 order-lg-2 card--element">
      <div class="mt-4" v-for="(game, index) in games2" :key="index">
        <Card :game="game" />
      </div>
    </div>
    <div class="col-6 col-lg-3 order-2 order-lg-3 card--element">
      <div class="mt-4" v-for="(game, index) in games3" :key="index">
        <Card :game="game" />
      </div>
    </div>
    <div class="col-6 col-lg-3 order-4 card--element">
      <div class="mt-4" v-for="(game, index) in games4" :key="index">
        <Card :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  data() {
    return {
      games1: [],
      games2: [],
      games3: [],
      games4: [],
    };
  },
  async fetch() {
    this.getGames();
  },
  methods: {
    getGames() {
      const data = [
        {
          title: "E-Space",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/e-space.svg"),
        },
        {
          title: "Pirates",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/Pirates.svg"),
        },
        {
          title: "Magic tree",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/magic-tree.svg"),
        },
        {
          title: "Kingland",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/Kingland.svg"),
        },
        {
          title: "Witch Party",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/witch-party.svg"),
        },
        {
          title: "Aborigines",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/Aborigines.svg"),
        },
        {
          title: "The Last Game",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/the-last-game.svg"),
        },
        {
          title: "Rocky",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/Rocky.svg"),
        },
        {
          title: "Cinderella",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/Cinderella.svg"),
        },
        {
          title: "G-Dragon",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/g-dragon.svg"),
        },
        {
          title: "Blue Fire",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/blue-fire.svg"),
        },
        {
          title: "Egypt Game",
          decription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: require("../../static/image/egypt-game.svg"),
        },
      ];
      data.forEach((d, index) => {
        if (index < 3) {
          this.games1.push(d);
        } else if (index >= 3 && index < 6) {
          this.games2.push(d);
        } else if (index >= 6 && index < 9) {
          this.games3.push(d);
        } else {
          this.games4.push(d);
        }
      });
    },
  },
};
</script>

<style>
@media (max-width: 991px) {
  .card--element:nth-child(3),
  .card--element:nth-child(4) {
    margin-top: 80px;
  }
  .card--element:nth-child(2),
  .card--element:nth-child(4) {
    transform: translate(0, -80px);
  }
}
@media (min-width: 992px) {
  .card--element:nth-child(2),
  .card--element:nth-child(4) {
    margin-top: 80px;
  }
}
</style>