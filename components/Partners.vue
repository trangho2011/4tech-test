<!-- <template>
  <div class="container">
   <div class="row">
    <div class="col-12">
        <VueSlickCarousel v-bind="settings">
      <div class="slider--image">
        <img src="../static/image/logo-game-1.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../static/image/logo-game-2.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../static/image/logo-game-3.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../static/image/logo-game-4.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../static/image/logo-game-5.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../static/image/logo-game-6.svg" alt="" />
      </div>
      <div class="slider--image">
        <img src="../static/image/logo-game-7.svg" alt="" />
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
</style> -->

<template>
  <section id="partners">
    <div class="partners-wrap">
      <h2 class="partners--title">Our Partners</h2>
      <div id="partners" class="container">
        <div class="row">
          <div class="col-sm-12">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="settings">
              <div class="slider--image">
                <img src="../static/image/logo-game-1.svg" alt="" />
              </div>
              <div class="slider--image">
                <img src="../static/image/logo-game-2.svg" alt="" />
              </div>
              <div class="slider--image">
                <img src="../static/image/logo-game-3.svg" alt="" />
              </div>
              <div class="slider--image">
                <img src="../static/image/logo-game-4.svg" alt="" />
              </div>
              <div class="slider--image">
                <img src="../static/image/logo-game-5.svg" alt="" />
              </div>
              <div class="slider--image">
                <img src="../static/image/logo-game-6.svg" alt="" />
              </div>
              <div class="slider--image">
                <img src="../static/image/logo-game-7.svg" alt="" />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
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
#partners{
  padding: 50px 0 0;
}
.slider--image:hover {
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
}
.slick-prev:before {
  box-shadow: 0 4px 10px rgb(0 0 0 / 25%);
  z-index: 1000;
  display: block;
  content: "";
  font-size: 30px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.3s;
  border-radius: 12px;
  background-color: #cccccc;
  background-image: url(../static/icon-arrow-square-left.svg);
}

.slick-next:before {
  box-shadow: 0 4px 10px rgb(0 0 0 / 25%);
  z-index: 1000;
  display: block;
  content: "";
  font-size: 30px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.3s;
  border-radius: 12px;
  background-color: #cccccc;
  background-image: url(../static/icon-arrow-square-right.svg);
}
.partners-wrap {
  background: #f6f6f6;
  padding: 60px 0;
}
.partners--title {
  font-family: Playfair Display;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 3.6px;
  color: #000;
  margin-bottom: 0;
  text-align: center;
  margin-bottom: 40px;
}
</style>