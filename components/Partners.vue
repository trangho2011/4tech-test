<template>
  <section id="partners">
    <div class="partners-wrap">
      <h2 class="partners--title">{{ $t("our_partners") }}</h2>
      <div id="partners" class="container">
        <div class="row">
          <div class="col-sm-12">
            <VueSlickCarousel :arrows="true" :dots="false" v-bind="settings">
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-1.png"
                  alt=""
                />
              </div>
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-2.png"
                  alt=""
                />
              </div>
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-3.png"
                  alt=""
                />
              </div>
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-4.png"
                  alt=""
                />
              </div>
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-5.png"
                  alt=""
                />
              </div>
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-6.png"
                  alt=""
                />
              </div>
              <div class="slider--image">
                <img
                  class="slider--img"
                  src="../static/image/logo-game-7.png"
                  alt=""
                />
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
              // dots: true,
              // arrows: false,
            },
          },
        ],
      },
    };
  },
};
</script>
<style>
#partners {
  padding: 50px 0 0;
}
.slider--img {
  margin: 0 auto;
}
.slider--image {
  transition: all 0.5s ease-in-out;
}
.slider--image:hover {
  transform: scale(1.1);
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
  position: relative;
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
  position: relative;
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
@media screen and (max-width: 576px) {
  .slick-next:before {
    transform: translateX(-50px);
  }
  .slick-prev:before {
    transform: translateX(35px);
  }
}
</style>