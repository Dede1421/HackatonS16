<template>
  <article>
    <div class="card-head">
      <video :src="data.urlVideo" controls></video>
    </div>
    <div class="card-body">
      <h2>{{data.title}}</h2>
      <p>{{data.views}} visualizaciones</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nulla fugit iure qui sed reprehenderit totam placeat ab excepturi, a enim debitis. Laudantium, earum. Eos delectus labore recusandae sequi soluta!</p>
    </div>
    <div class="card-footer">
      <button>Ver detalle</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Object,
  },
  mounted() {
    console.log("data", this.data);
  },
};
</script>

<style lang="scss">
article {
  width: 255px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);

  video {
    width: 100%;
  }

  .card-body {
    padding: 10px 20px;
  }

  .card-footer {
    text-align: center;
  }
}
</style>