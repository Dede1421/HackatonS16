<template>
  <div class="container-detail" v-if="video">
    <h1>{{video.title}}</h1>
    <video :src="video.urlVideo"></video>
    <h2>{{video.title}}</h2>
    <p>{{video.views}} visualizaciones</p>
    <p>{{video.description}}</p>
    <!-- <p>Hola {{id}}</p> -->
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  // props: {
  //   id: String,
  // },
  data() {
    return {
      video: null,
    };
  },
  created() {
    this.fetchVideo();
  },
  methods: {
    fetchVideo() {
      const videoId = this.$route.params.id;
      console.log(videoId);
      fetch(`http://localhost:3000/videos/${videoId}`)
        .then((response) => response.json())
        .then((video) => (this.video = video));
    },
  },
};
</script>

<style lang="scss">
.container-detail {
  height: 100%;
}
</style>
