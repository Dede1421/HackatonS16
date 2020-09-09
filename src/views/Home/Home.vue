<template>
  <div class="wrap-home">
    <router-link to="/videoadd">
      <button class="add-video">Agregar Video</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // VideoList,
  },
};
</script>

<style lang="scss">
.wrap-home {
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-video {
  background-color: #ff5252;
  width: 90%;
  padding: 20px;
  font-size: 1.3rem;
}
</style>