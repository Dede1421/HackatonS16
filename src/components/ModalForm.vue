<template>
  <div class="js_modal modal-bg">
    <div class="modal">
      <form @submit.prevent="accept">
        <div class="modal-header">
          <h2>{{title}}</h2>
        </div>
        <div class="modal-body">
          <input v-model="name" type="text" placeholder="Titulo" required />
          <input v-model="video" type="text" placeholder="Url de video" required />
          <textarea
            v-model="description"
            class="js_description"
            cols="8"
            rows="8"
            placeholder="Descripción"
            maxlength="208"
            required
          ></textarea>
        </div>
        <div class="modal-footer">
          <button class="js_modal-accept btn-accept" type="submit">{{btName}}</button>
          <router-link to="/">
            <button class="js_modal-cancel btn-cancel" type="reset">Cancelar</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalForm",

  props: {
    title: String,
    btName: String,
    initialName: String,
    initialVideo: String,
    initialDescription: String,
  },
  data(){
    return{
      name: this.initialName,
      video: this.initialVideo,
      description: this.initialDescription
    }
  },
  methods: {
    accept() {
      const data = {
        title: this.name,
        urlVideo: this.video,
        description: this.description,
        views: 0,
      };
      
      this.$emit('accept', data)
    }
  },
};
</script>

<style lang="scss" ::v-deep scoped>
.modal-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  max-width: 500px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);

  .modal-header {
    padding: 20px;
  }

  .modal-body {
    text-align: center;
    padding: 0px 20px;
  }

  textarea {
    width: 90%;
    outline-color: rgba(0, 255, 255, 0.5);
    border: 1px solid #a2a2a2;
    resize: none;
    margin-top: 5px;
  }

  .modal-footer {
    text-align: center;
    padding: 15px;
  }
}

.btn-accept {
  width: 20%;
  background-color: #ff5252;
}

.btn-cancel {
  width: 20%;
}
</style>