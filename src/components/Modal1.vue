<template>
  <transition name="modal">
    <div class="delete-container" v-if="isVisible">
      <div class="delete-card">
        <div class="delete-header">
          <h2>Eliminar Video</h2>
          <button class="close-modal" @click="$emit('cancel')">X</button>
        </div>
        <div class="delete-body">
          <p>¿Esta seguro(a) que quieres eliminar este video?</p>
        </div>
        <div class="delete-footer">
          <button class="btn-eliminar" @click="$emit('accept')">Eliminar</button>
          <button class="btn-cancel" @click="$emit('cancel')">Cancelar</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal1",
  props: {
    isVisible: Boolean,
  },
  methods: {
    close() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang= "scss">
.delete-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  /* visibility: hidden;
  opacity: 0; */
  /* transition: visibility 0s, opacity 0.5s; */
  z-index: 11;
}

.modal-enter-active,
.modal-leave-active {
  transition: visibility 0s, opacity 0.5s;
  /* visibility: visible;
  opacity: 1; */
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.delete-card {
  background-color: #fff;
  width: 400px;
  margin: 20px;

  .delete-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .close-modal {
      padding: 0px;
      color: #000;
      font-size: 1rem;
      font-weight: bold;
      width: 0;
    }
  }
  .delete-body {
    padding: 20px;
  }

  .delete-footer {
    padding: 20px;
    text-align: center;
  }
}

.btn-eliminar {
  width: 20%;
  background-color: #ff5252;
}

.btn-cancel {
  width: 20%;
}
</style>