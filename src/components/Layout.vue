<template>
  <div class="layout">
    <Header />
    <Main>
      <slot></slot>
    </Main>
  </div>
</template>

<script>
import "@/assets/styles/main.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
export default {
  name: "Layout",
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss">
.layout {
  height: 100vh;
}

.header {
  background: orange;
}
</style>