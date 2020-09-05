<template>
  <div>
    <div id="container">
      <Card v-for="(video, index) in videos" :data="video" :key="index" />
    </div>
    <Modal />
  </div>
</template>

<script>
import "@/assets/styles/main.scss";

import Card from "@/components/Card";
import Modal from "@/components/Modal";
export default {
  name: "VideoList",
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/videos")
      .then((response) => response.json())
      .then((videos) => (this.videos = videos));
  },
};
</script>

<style lang="scss">
#container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
