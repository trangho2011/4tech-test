<template>
  <div class="image-slider">
    <div class="image-item">
      <div class="image">
        <img
          src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <h3 class="image-title">This is demo title</h3>
    </div>
    <div class="image-item">
      <div class="image">
        <img
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80"
          alt=""
        />
      </div>
      <h3 class="image-title">This is demo title</h3>
    </div>
    <div class="image-item">
      <div class="image">
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
          alt=""
        />
      </div>
      <h3 class="image-title">This is demo title</h3>
    </div>
    <div class="image-item">
      <div class="image">
        <img
          src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <h3 class="image-title">This is demo title</h3>
    </div>
    <div class="image-item">
      <div class="image">
        <img
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
          alt=""
        />
      </div>
      <h3 class="image-title">This is demo title</h3>
    </div>
  </div>
</template>
<script src="./partners.js"></script>
<script>
export default {};
</script>

<!-- <style> -->
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
body,
input,
button,
textarea,
select {
  outline: none;
  font-size: 12px;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
input {
  line-height: normal;
}
button {
  cursor: pointer;
}
body {
  padding: 20px;
}
.image-slider {
  padding-bottom: 50px;
}
.image {
  height: 500px;
  margin-bottom: 20px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.image-title {
  font-size: 20px;
  color: #8e8fb5;
}
.slick-initialized .slick-slide {
  margin: 0 10px;
}
.slick-arrow {
  position: absolute;
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
  transition: all 0.2s linear;
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
.slick-dots {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
}
.slick-dots button {
  font-size: 0;
  width: 15px;
  height: 15px;
  border-radius: 100rem;
  background-color: #eee;
  border: none;
  outline: none;
  transition: all 0.2s linear;
}
.slick-dots .slick-active button {
  background-color: #2cccff;
}
</style>