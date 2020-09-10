<template>
  <div class="container-detail">
    <h1>{{title}}</h1>
    <video src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
    <h2>{{title}}</h2>
    <p>{{views}} visualizaciones</p>
    <p>{{description}}</p>
    <p> Hola   {{id}}</p>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    id: String,
  },
  data() {
    return {
      title: "Titulo del video",
      views: 0,
      description: "description",
    };
  },
};
</script>

<style lang="scss">
.container-detail {
  height: 100%;
}
</style>
