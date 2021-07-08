<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ title }}</h1>
    <div>
      <h3>카운팅 (vuex활용)</h3>
      <p>{{ $store.state.counter }}</p>
      <v-btn @click="$store.commit('decrease')">제거</v-btn>
      <v-btn @click="$store.commit('increase')">추가</v-btn>
    </div>

    <h2>commit</h2>
    <VueSlickCarousel v-bind="spins">
      <div v-for="(slide, index) in slides" :key="slide" :index="index" class="carousel">
        <div class="img-frame">
          <span class="live">LIVE</span>
          <span class="time">TIME --- ---- ---</span>
          <img :src="slide" class="spinimg" />
        </div>
        <div class="down">
          <div class="left">
            <div>Name</div>
            <div>number</div>
          </div>
          <div class="right">result/ point</div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots

export default {
  data() {
    return {
      spins: {
        arrows: true,
        dots: true,
        touchMove: true,
        swipeToSlide: true,
        variableWidth: true,
        autoplay: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        focusOnSelect: true,

        // useCSS: true,
      },
      title: "Good morning sir",
      count: 0,
      slides: [
        "https://picsum.photos/id/234/494/252",
        "https://picsum.photos/id/232/494/252",
        "https://picsum.photos/id/235/494/252",
        "https://picsum.photos/id/236/494/252",
        "https://picsum.photos/id/237/494/252",
        "https://picsum.photos/id/238/494/252",
        "https://picsum.photos/id/239/494/252",
      ],
      visibleSlide: 0,
    };
  },
  components: { VueSlickCarousel },
};
</script>
<style>
.carousel {
  display: flex;
}
.spinimg {
  width: 494px;
}
.img-frame {
  position: relative;
}
.down {
  display: flex;
  border: 1px solid;
  padding: 30px 20px;
  background-color: cadetblue;
}
.left {
  border: 1px solid;
  width: 70%;
  text-align: left;
}
.right {
  border: 1px solid;
  width: 30%;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
}
.live {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #88d9f3;
  padding: 4px 10px 4px 10px;
  border-radius: 3px;
  background-color: #09607b;
  font-size: 15px;
  font-weight: 500;
  margin: 16px 0 0 17px;
}
.time {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #88d9f3;
  padding: 4px 10px 4px 10px;
  border-radius: 3px;
  background-color: #09607b;
  font-size: 15px;
  font-weight: 500;
  bottom: 0;
  margin: 0 0 16px 17px;
}
</style>
