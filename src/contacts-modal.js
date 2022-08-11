(() => {
  const refs = {
    openModalBtn: document.querySelector("[contacts-modal-open]"),
    closeModalBtn: document.querySelector("[contacts-modal-close]"),
    modal: document.querySelector("[contacts-modal]"),
    body: document.querySelector("[contacts-body]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();