<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/videoadd">Agregar Video</router-link>
      </li>
      <!-- <li>
        <router-link to="/videolist">Mas Videos</router-link>
      </li> -->
      <li>
        <router-link to="/map">Ver mapa</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" ::v-deep scoped>
.nav {
  ul {
    display: flex;

    li {
      margin-left: 20px;
    }
  }
}
</style>