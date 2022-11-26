<template>
  <div class="banner--wrap">
    <div class="banner">
      <div class="banner--content">
        <h2 class="banner--title">{{ $t("getting_ready_title") }}</h2>
        <div class="banner--countdown">
          <div>
            <p class="-number">{{ days }}</p>
            <p>{{ $t("days") }}</p>
          </div>
          <div class="-dots">:</div>
          <div>
            <p class="-number">{{ hours }}</p>
            <p>{{ $t("hours") }}</p>
          </div>
          <div class="-dots">:</div>
          <div>
            <p class="-number">{{ minutes }}</p>
            <p>{{ $t("minutes") }}</p>
          </div>
          <div class="-dots">:</div>
          <div>
            <p class="-number">{{ second }}</p>
            <p>{{ $t("second") }}</p>
          </div>
        </div>
        <div class="banner--text">
          {{ $t("banner_text") }}
        </div>
        <div class="banner--form__email">
          <input
            type="text"
            placeholder="Enter your email"
            class="form-control"
          />
          <a href="mailto:">
            <button class="banner--btn__send-email">
              <i class="icon-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="banner--pattern"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 30,
      hours: 23,
      minutes: 59,
      second: 60,
    };
  },
  methods: {
    countDown: function () {
      const handleCount = () => {
        this.second = this.second - 1;
        if (this.second === 0) {
          this.second = 60;
          this.minutes = this.minutes - 1;
        }
        if (this.minutes === 0) {
          this.minutes = 60;
          this.hours = this.hours - 1;
        }
        if (this.hours === 0) {
          this.hours = 24;
          this.days = this.days - 1;
        }
        if (this.days === 0) return;
      };
      setInterval(() => {
        handleCount();
      }, 1000);
    },
  },
  mounted() {
    this.countDown();
  },
};
</script>

<style>
.banner--wrap:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) -25%, transparent);
  pointer-events: none;
}
.banner {
  background: url(../static/banner-bg.png) center center / 100% 100% no-repeat;
  padding: 200px 0 160px;
  background-size: cover;
}
.banner--content {
  max-width: 664px;
  margin: 0 auto;
}
.banner--title {
  font-size: 59px;
  line-height: 100px;
  color: #fff;
  text-align: center;
  font-family: "Playfair Display SC", serif;
  font-weight: 700;
}

.banner--countdown {
  font-family: "Playfair Display SC", serif;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  width: 100%;
  max-width: 756px;
  padding: 26px 40px;
  background: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 25%);
  border-radius: 21px;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.6px;
  color: #000;
  text-align: center;
  margin-bottom: 100px;
}
.-dots {
  font-size: 44px;
  line-height: normal;
  line-height: 80px;
  color: #000;
}
.banner--countdown .-number {
  font-size: 44px;
  line-height: normal;
  letter-spacing: 0;
}
.banner--text {
  margin-bottom: 32px;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.banner--form__email {
  position: relative;
  z-index: 1;
}
.banner--form__email input {
  padding: 15px 14px;
  border-radius: 8px;
}
.fomr-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.banner--btn__send-email {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 14px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
}
.icon-arrow-right {
  --icon-color: #000;
}
.icon-arrow-right::before {
  width: 24px;
  height: 24px;
  -webkit-mask-image: url(../static/icon-long-arrow-righ.svg);
  content: "";
  position: relative;
  display: inline-block;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  background-color: var(--icon-color);
  transition: color 0.5s;
}
.banner--pattern {
  position: absolute;
  left: 0;
  bottom: -2%;
  width: 44.5%;
  height: 91%;
  background-image: url(../static/banner-pattern-fairy.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}
@media screen and (max-width: 575px) {
  .banner--pattern {
    position: relative;
    border: 0;
    width: 100%;
    height: 0;
    padding-top: 69%;
    max-width: 342px;
    margin: -160px 0 0 15%;
  }
  .banner--content {
    padding: 64px 0 60px;
    max-width: 540px;
  }
  .banner--countdown {
    margin-bottom: 40px;
  }
  .banner {
    padding-bottom: 126px;
  }
}
@media screen and (max-width: 767px) {
  .banner--title {
    font-size: 40px;
    line-height: 50px;
  }
  .banner--content {
    padding: 0 12px;
  }
}
</style>
