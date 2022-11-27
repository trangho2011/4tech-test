<template>
  <section>
    <div class="header-wrap" :class="{ isSticky: scrollPosition > 50 }">
      <div class="header">
        <a src="#" class="header--logo__link">
          <div class="header--logo">
            <img src="../static/logo.svg" alt="logo" />
          </div>
        </a>
        <div class="header--list-item">
          <div class="header--item">
            <a class="header--item__link active" href="#about-us">{{ $t("about_us") }}</a>
          </div>
          <div class="header--item">
            <a class="header--item__link" href="#games">{{ $t("games") }}</a>
          </div>
          <div class="header--item">
            <a class="header--item__link" href="#partners">{{ $t("partners") }}</a>
          </div>
          <div class="header--item">
            <a class="header--item__link" href="#contact-us">{{ $t("contact_us") }}</a>
          </div>
          <div class="header--item">
            <button class="header--dropdown-toggle" @click="onCLickSelectedLangBtn" >
              <img v-if="langImgSrc == 'vi.png'" alt=""  src="../static/vi.png"/>
              <img v-if="langImgSrc == 'en.png'" alt=""  src="../static/en.png"/>
            </button>
            <ul
              class="dropdown-menu dropdown-menu-xl-end show"
              data-bs-popper="static"
              v-if="isSelected"
            >
              <li class="header--dropdown-item "  @click="onClickViLang" 
              :class="{active: langImgSrc=='vi.png' }"
              >
                <a href="#" class="stretched-link"></a>
                  <img src="../static/vi.png" alt="" class="dropdown-item-img" /><span
                    >Vietnamese</span></a>
              </li>
              <li class="header--dropdown-item "  @click="onClickEnLang" 
              :class="{active: langImgSrc=='en.png' }"
              
              >
                <a href="#" class="stretched-link">
                  <img src="../static/en.png" alt=""  class="dropdown-item-img"/><span>English</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="header--button"
          v-on:click="onClickToggle"
          :class="{ active: isToggle }"
        >
          <span class="header--button__icon"></span>
          <span class="header--button__icon"></span>
          <span class="header--button__icon"></span>
        </div>
      </div>
    </div>
    <div
      class="nav-wrap__mobile"
      :class="{ active: isToggle, disabled: !isToggle }"
    >
      <div class="nav--mobile__header" >
        <div class="nav--mobile__language">
          <button class="dropdown-toggle__btn" @click="onCLickSelectedLangBtn" >
             <img v-if="langImgSrc == 'vi.png'" alt=""  src="../static/vi.png"/>
             <img v-if="langImgSrc == 'en.png'" alt=""  src="../static/en.png"/>
            </button>
          <div class="header--item">
            <ul
              class="dropdown-menu dropdown-menu-xl-end show"
              data-bs-popper="static"
              v-if="isSelected"
            >
              <li class="header--dropdown-item "  @click="onClickViLang" 
              :class="{active: langImgSrc=='vi.png' }"
              >
                <a href="#" class="stretched-link"></a>
                  <img src="../static/vi.png" alt="" class="dropdown-item-img" /><span
                    >Vietnamese</span></a>
              </li>
              <li class="header--dropdown-item "  @click="onClickEnLang" 
              :class="{active: langImgSrc=='en.png' }"
              
              >
                <a href="#" class="stretched-link">
                  <img src="../static/en.png" alt=""  class="dropdown-item-img"/><span>English</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="nav--mobile__btn"
          v-on:click="onClickToggle"
          :class="{ active: isToggle }"
        >
          <span class="nav--button__icon"></span>
          <span class="nav--button__icon"></span>
          <span class="nav--button__icon"></span>
        </div>
      </div>
      <ul class="nav__mobile--ul">
        <li class="menu-item"  v-on:click="onClickToggle"><a href="#about-us">{{ $t("about_us") }}</a></li>
        <li class="menu-item"  v-on:click="onClickToggle"><a href="#games">{{ $t("games") }}</a></li>
        <li class="menu-item"  v-on:click="onClickToggle"><a href="#partners">{{ $t("partners") }}</a></li>
        <li class="menu-item"  v-on:click="onClickToggle"><a href="#contact-us">{{ $t("contact_us") }}</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      isToggle: false,
      langImgSrc: `${this.$i18n.locale}.png`,
      isSelected: false,
    };
  },
  created: function () {
    if (process.browser) {
      if (localStorage.getItem("lang")) {
        this.$i18n.locale = localStorage.getItem("lang");
      }
    }
  },
  methods: {
    onClickToggle: function () {
      this.isToggle = !this.isToggle;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    onClickEnLang: function () {
      this.langImgSrc = "en.png";
      // this.$router.push({
      //   query: {
      //     lang: 'en',
      //   },
      // });
      this.$i18n.locale = "en";
      if (process.browser) {
        localStorage.setItem("lang", "en");
      }
      this.isSelected = false;
    },
    onClickViLang: function () {
      this.langImgSrc = "vi.png";
      // this.$router.push({
      //   query: {
      //     lang: 'vi',
      //   },
      // });
      this.$i18n.locale = "vi";
      if (process.browser) {
        localStorage.setItem("lang", "vi");
      }
      this.isSelected = false;
    },
    onCLickSelectedLangBtn: function () {
      this.isSelected = !this.isSelected;
    },
    onBlurLangBtn: function () {
      this.isSelected = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style>
.header-wrap {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  padding: 20px 0;
  z-index: 10;
  transition: 0.2s;
}
.header-wrap.isSticky {
  background: linear-gradient(180deg, #0b044c, #1e1570);
  box-shadow: 0 0 10px #fff;
  padding: 15px 0;
}
.header {
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
}
.header--logo__link {
  cursor: pointer;
}
.header--logo > img {
  width: 82px;
}
.header--list-item {
  display: flex;
  align-items: center;
}
.header--item {
  padding: 0 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}
.header--item__link {
  position: relative;
  display: inline-block;
  padding: 10px 0;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  position: relative;
  padding: 10px 0;
  color: #fff;
}
.header--item__link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0%;
  margin: auto;
  height: 2px;
  background: #fff;
  pointer-events: none;
  opacity: 0;
  transition: 0.5s;
}
.header--item__link:hover {
  color: #fff;
}
.header--item__link:hover::before {
  opacity: 1 !important;
  width: 100% !important;
}
.header--button {
  display: none;
}
/* header mobile */
.nav-wrap__mobile {
  display: block;
  position: fixed;
  top: 0;
  height: 100%;
  left: -390px;
  width: 390px;
  opacity: 0;
  z-index: 1072;
  background: #fff;
  transition: all 0.25s;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #000;
}
.nav-wrap__mobile.active {
  left: 0;
  opacity: 1;
}
.nav--mobile__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 9px;
}
.nav__mobile--ul {
  list-style: none;
  padding: 16px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}
.nav__mobile--ul li:not(:last-child) {
  border-bottom: 1px solid #eee;
}
.nav__mobile--ul li a {
  color: #000;
  padding: 24px 0;
  display: block;
  text-decoration: none;
}
/* toggle */
.dropdown-toggle__btn {
  padding: 7px 12px 7px 18px;
  background: #f6f6f6;
  border: 1px solid #afafaf;
  border-radius: 8px;
  color: #000;
}
.dropdown-toggle__btn > img {
  border: none;
  background: transparent;
}
.nav--mobile__language {
  position: relative;
}
.dropdown-toggle_btn {
  padding: 7px 12px 7px 18px;
  background: #f6f6f6;
  border: 1px solid #afafaf;
  border-radius: 8px;
  color: #000;
}
.dropdown-menu {
  padding: 0 8px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.dropdown-toggle__btn > img {
  border: none;
  background: transparent;
  width: 26px;
}
.dropdown-toggle__btn:after {
  border-top: 5px solid;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  margin-left: 14px;
  display: inline-block;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
}
.dropdown-menu.show {
  display: block;
  padding: 0 3px;
  top: 58px !important;
  right: 58px !important;
}
.stretched-link {
  color: #000;
  text-decoration: none;
  margin-left: 3px;
}
/* toggle mobile */

.nav--mobile__btn {
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav--mobile__btn .nav--button__icon {
  width: 32px;
  transition: all 0.2s;
  background-color: #000;
  display: block;
  height: 2px;
  border-radius: 1px;
}
.hnav--mobile__btn > .nav--button__icon:first-of-type {
  transform: rotate(0);
}
.nav--mobile__btn > .nav--button__icon + .nav--button__icon {
  margin-top: 5px;
}
.nav--mobile__btn.active .nav--button__icon:first-of-type {
  transform: rotate(45deg);
  transform-origin: 14% 10%;
}
.nav--mobile__btn.active .nav--button__icon:nth-of-type(2) {
  opacity: 0;
}
.nav--mobile__btn.active .nav--button__icon:nth-of-type(3) {
  transform: rotate(-45deg);
  transform-origin: 18% 90%;
}

/* toggle */
.header--dropdown-toggle {
  background-color: transparent;
  outline: none;
  border: none;
}
.header--dropdown-toggle img {
  border-style: none;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  width: 32px;
}
.header--dropdown-toggle::after {
  display: block;
  border-top: 5px solid;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-bottom: 0;
  color: #fff;
}
.header--dropdown-item {
  position: relative;
  padding: 5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  color: #000;
  background: #fff;
  padding-left: 35px;
  display: flex;
  align-items: center;
}
.header--dropdown-item:first-of-type {
  border-bottom: 1px solid rgb(60, 60, 60);
}
.stretched-link:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}
.header--dropdown-item.active:before {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  width: 24px;
  height: 24px;
  background: url(../static/icon-tick.svg);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  pointer-events: none;
}

.dropdown-item-img {
  margin-right: 5px;
}
.stretched-link:hover {
  color: #000;
}
@media screen and (max-width: 1200px) {
  .header-wrap {
    background: linear-gradient(180deg, #0b044c, #1e1570);
    box-shadow: 0 0 10px #fff;
    padding: 10px 0;
  }
  .header--list-item {
    display: none;
  }
  /* button toggle */
  .header--button {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header--button .header--button__icon {
    width: 32px;
    transition: all 0.2s;
    background-color: #fff;
    display: block;
    height: 2px;
    border-radius: 1px;
  }
  .header--button > .header--button__icon:first-of-type {
    transform: rotate(0);
  }
  .header--button > .header--button__icon + .header--button__icon {
    margin-top: 5px;
  }
  .header--button.active .header--button__icon:first-of-type {
    transform: rotate(45deg);
    transform-origin: 14% 10%;
  }
  .header--button.active .header--button__icon:nth-of-type(2) {
    opacity: 0;
  }
  .header--button.active .header--button__icon:nth-of-type(3) {
    transform: rotate(-45deg);
    transform-origin: 18% 90%;
  }
}
@media screen and (max-width: 576px) {
  .nav-wrap__mobile {
    width: 100%;
  }
}
</style>
