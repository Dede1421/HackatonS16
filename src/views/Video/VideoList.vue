<template>
  <div>
    <div id="container">
      <Card v-for="video in videos" :data="video" :key="video.id" @remove="videoToDelete = video.id" />
    </div>
    <Modal1 :isVisible="!!videoToDelete" @cancel="close" @accept="eliminar" />
  </div>
</template>

<script>
import "@/assets/styles/main.scss";

import Card from "@/components/Card";
import Modal1 from "@/components/Modal1";
export default {
  name: "VideoList",
  components: {
    Card,
    Modal1,
  },
  data() {
    return {
      videos: [],
      videoToDelete: null,
      arthur: {
        name: "arthur mauricio",
        imageURL: "http://lklklasd",
      },
      personas: [
        {
          name: "arthur mauricio",
          imageURL: "http://lklklasd",
        },
        {
          name: "andre mauricio",
          imageURL: "http://lklklasd",
        },
      ],
    };
  },
  mounted() {
    this.fetchVideos();
  },
  methods: {
    eliminar() {
      fetch(`http://localhost:3000/videos/${this.videoToDelete}`, {
        method: "DELETE",
      })
        .then(this.fetchVideos)
        .then(() => {
          this.close();
        });
    },
    close() {
      this.videoToDelete = null;
    },

    fetchVideos() {
      fetch("http://localhost:3000/videos")
        .then((response) => response.json())
        .then((videos) => (this.videos = videos));
    },
  },
};
</script>

<style lang="scss" ::v-deep scoped>
#container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
