<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Demopage />
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
  </div>
</template>
<script>
import Demopage from "./Demopage.vue";

export default {
  data() {
    return {
      title: "Good morning sir",
      count: 0,
    };
  },
  components: { Demopage },
};
</script>
<style></style>
