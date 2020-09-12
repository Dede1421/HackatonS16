<template>
  <ModalForm v-if="video"
    title="Editar Video"
    btName="Guardar"
    :initialName="video.title"
    :initialVideo="video.urlVideo"
    :initialDescription="video.description"
    @accept="editVideo"
  />
</template>

<script>
import ModalForm from "@/components/ModalForm";
export default {
  name: "VideoEdit",
  components: {
    ModalForm,
  },

  data() {
    return {
      video: null,
    };
  },
  created() {
    this.fetchEdit();
  },

  methods: {
    fetchEdit() {
      const videoId = this.$route.params.id;
      console.log(videoId);
      
      
      fetch(`http://localhost:3000/videos/${videoId}`)
        .then((response) => response.json())
        .then((video) => (this.video = video));
    },
    editVideo(data){
      const videoId = this.$route.params.id;
      
      fetch(`http://localhost:3000/videos/${videoId}`, {
        method: "PUT",
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

<style>
</style>