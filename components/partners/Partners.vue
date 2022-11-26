<template>
  <div class="container">
   <div class="row">
    <div class="col-12">
        <VueSlickCarousel v-bind="settings">
      <div class="slider--image">
        <img src="../../static/image/logo-game-1.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../../static/image/logo-game-2.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../../static/image/logo-game-3.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../../static/image/logo-game-4.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../../static/image/logo-game-5.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../../static/image/logo-game-6.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../../static/image/logo-game-7.svg" alt="" />
      </div>
    </VueSlickCarousel>
    </div>
   </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow:
          "<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
        nextArrow:
          "<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>",
        // prevArrow: `<button type='button' class='slick-prev slick-arrow'><</button>`,
        // nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
img {
  display: block;
  /* max-width: 100%; */
  object-fit: cover;
}
.slick-arrow {
  background-color: #000;
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 1;
  z-index: 5;
  transition: all 0.2s linear; */
}
.slick-arrow:hover {
  background-color: #2cccff;
  color: white;
}
.slick-prev {
  left: 0;
}
.slick-next {
  right: 0;
}
</style>