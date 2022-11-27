<template>
  <section id="contact-us">
    <div class="contact-us--wrap">
      <div class="contact-us container">
        <div class="row">
          <div
            class="col-md-4 text-center text-md-start contact-us--logo__wrap"
          >
            <div class="contact-us--logo">
              <img src="../static/logo.svg" alt="" />
            </div>
            <ul
              class="
                contact-us--socical
                row
                g-4
                justify-content-center justify-content-md-start
              "
            >
              <li class="col-auto">
                <a href="#" target="_blank"><i class="iconz-twitter"></i></a>
              </li>
              <li class="col-auto">
                <a href="#" target="_blank"><i class="iconz-face"></i></a>
              </li>
              <li class="col-auto">
                <a href="#" target="_blank"><i class="iconz-linked"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 text-center text-md-start">
            <div class="contact-us--address">
              <h3 class="contact-us--address__title">{{ $t("address") }}</h3>
              <ul class="contact-us--address__list">
                <li class="contact-us--address__item">
                  <i class="contact-us--address__location"></i>
                  <div>
                    <p class="contact-us--address__des">
                      {{ $t("address_1") }}
                    </p>
                    <p class="contact-us--address__des">
                      {{ $t("address_2") }}
                    </p>
                  </div>
                </li>
                <li class="contact-us--address__item">
                  <i class="contact-us--address__phone"></i>
                  <div class="address__phone--wrap">
                    <p class="contact-us--address__des">{{ $t("phone") }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 text-center text-md-start">
            <div class="contact-us--subscribe">
              <h3 class="contact-us--address__title">{{ $t("subcribe") }}</h3>
              <p class="contact-us--subscribe__des">
                {{ $t("subcribe_text") }}
              </p>
              <div class="contact-us--form__email">
                <input
                  type="text"
                  :placeholder="$t('mail_placeholder_2')"
                  class="form-control contact-us"
                />
                <a href="mailto:">
                  <button class="contact-us--btn__send-email">
                    <i class="contact-us icon-arrow-right"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.contact-us--wrap {
  position: relative;
  padding: 100px 0;
  background-image: url(../static/footer-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.contact-us--logo img {
  max-height: 96px;
  border-style: none;
  max-width: 100%;
  height: auto;
}
/* socical*/
.contact-us--socical li a {
  position: relative;
  display: block;
  transition: 0.3s;
}
.contact-us--socical li a:hover {
  transform: translateY(-5px);
}
.iconz-twitter {
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(../static/icon-twitter.svg);
}
.iconz-face {
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(../static/icon-facebook.svg);
}
.iconz-linked {
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(../static/icon-linkedin.svg);
}
ul.contact-us--socical {
  padding-left: 0;
  margin-top: 0px;
}

/* address */
.contact-us--address {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  margin-bottom: 20px;
}
.contact-us--address__title {
  font-size: 24px;
  margin-bottom: 40px;
}
.contact-us--address__des {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
}
.contact-us--address__list {
  list-style: none;
}
.contact-us--address__item {
  display: flex;
}

.contact-us--address__phone {
  margin-right: 8px;
  display: block;
  width: 40px;
  background: url(../static/icon-mobile.svg) center center / 100% 100% no-repeat;
}
.contact-us--address__location {
  margin-right: 8px;
  display: block;
  width: 70px;
  height: 40px;
  background: url(../static/icon-location.svg) center center / 100% 100%
    no-repeat;
}
.contact-us--address__item:first-of-type {
  margin-bottom: 1rem;
}
/* subscribe */
.contact-us--subscribe {
  color: #fff;
}
.contact-us--subscribe__des {
  font-size: 14px;
  font-weight: 300;
}
/* email */
.contact-us--form__email {
  position: relative;
  z-index: 1;
}
.contact-us--form__email input {
  padding: 15px 14px;
  border-radius: 8px;
  background-color: transparent;
  color: #fff;
}
.contact-us--form__email input:focus {
  background-color: transparent;
  color: #fff;
}
.contact-us.fomr-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.contact-us--btn__send-email {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 14px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
}
.contact-us.icon-arrow-right {
  --icon-color: #fff;
}
.contact-us--wrap > .icon-arrow-right::before {
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
@media screen and (max-width: 767px) {
  .contact-us--logo__wrap {
    margin-bottom: 68px;
  }
  .contact-us--address__title {
    text-align: left;
    margin-bottom: 20px;
  }
  .contact-us--subscribe__des {
    text-align: left;
  }
  .contact-us--address__location {
    width: 40px;
  }
  .contact-us--address__list {
    padding-left: 0px;
  }
  .address__phone--wrap {
    display: flex;
  }
}
</style>
