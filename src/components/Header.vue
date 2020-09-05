<template>
  <header class="header">
    <router-link to="/">VIDEO TV</router-link>
    <Nav />
  </header>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" ::v-deep scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff5252;
  padding: 20px;

  a {
    font-size: 2rem;
  }
}
</style>