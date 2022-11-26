<template>
  <div
    class="back-to-top"
    :class="{ active: scrollPosition > 100 }"
    @click="scrollToTop"
  >
    <i class="back-to-top--icon"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 66px;
  height: 66px;
  cursor: pointer;
  z-index: 99;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 30%);
  transition: 0.5s;
}
.back-to-top i {
  display: flex;
  --icon-color: #000;
  transition: all 0.3s;
  transform-origin: center;
}
.back-to-top i::before {
  width: 30px;
  height: 16px;
  background: url(../static/icon-chevron-down.svg);
  background-repeat: no-repeat;
  content: "";
  position: relative;
  display: inline-block;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  transition: color 0.5s;
}
.back-to-top.active i {
  transform: rotate(180deg);
}
</style>
