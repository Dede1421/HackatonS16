<template>
  <div class="js_modal modal-bg">
    <div class="modal">
      <form class="js_form">
        <div class="modal-header">
          <h2>Agregar Video</h2>
        </div>
        <div class="modal-body">
          <input class="js_name" type="text" placeholder="Titulo" required />
          <input class="js_image" type="text" placeholder="Url de video" required />
          <textarea
            class="js_description"
            cols="8"
            rows="8"
            placeholder="Descripción"
            maxlength="70"
            required
          ></textarea>
        </div>
        <div class="modal-footer">
          <button class="js_modal-accept btn-accept" type="submit">Aceptar</button>
          <button class="js_modal-cancel btn-cancel" type="reset">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style lang="scss">
.modal-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
    visibility: hidden;
    opacity: 0;
  transition: visibility 0s, opacity 0.5s;
}

.bg-active {
  visibility: visible;
  opacity: 1;
}

.modal {
  background-color: #fff;
  max-width: 500px;
  width: 100%;

  .modal-header {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
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