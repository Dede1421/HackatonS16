<template>
  <Layout>
    
    <!-- <VideoList /> -->
    <router-view />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
// import VideoList from "@/views/Video/VideoList";
export default {
  name: "App",
  components: {
    // VideoList,
    Layout,
  },
};
</script>

<style lang="scss">
</style>
