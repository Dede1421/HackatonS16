<template>
  <ModalForm
    title="Agregar Video"
    btName="Agregar"
    initialName=""
    initialVideo=""
    initialDescription=""
    @accept="crearVideo"
  />
</template>

<script>
import ModalForm from "@/components/ModalForm";
export default {
  name: "VideoAdd",
  components: {
    ModalForm,
  },

  methods: {
    crearVideo(data) {
      fetch("http://localhost:3000/videos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss">
</style>