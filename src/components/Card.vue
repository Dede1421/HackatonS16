<template>
  <article>
    <div class="card-head">
      <div class="buttons-card">
        <router-link :to="`/videoedit/${data.id}`">
          <button class="edit">Editar</button>
        </router-link>
        <button class="close" @click="remove">X</button>
      </div>
      <video :src="data.urlVideo" controls></video>
      <h2>{{data.title}}</h2>
    </div>
    <div class="card-body">
      <p>{{data.views}} visualizaciones</p>
      <p>{{data.description}}</p>
    </div>
    <div class="card-footer">
      <router-link :to="`/videodetail/${data.id}`">
        <button>Ver detalle</button>
      </router-link>
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
    // console.log("data", this.data);
  },
  methods: {
    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style lang="scss">
article {
  height: 398.25px;
  width: 255px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    padding: 0px 20px;
  }
  .buttons-card {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .edit {
    width: 50px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .close {
    width: 20px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: 0px;
    z-index: 10;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.05);
  }

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