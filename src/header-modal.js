(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-header-modal-open]"),
    closeModalBtn: document.querySelector("[data-header-modal-close]"),
    modal: document.querySelector("[data-header-modal]"),
    body: document.querySelector("[data-body]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-header-mobile-open]"),
    modal: document.querySelector("[data-header-modal]"),
    body: document.querySelector("[data-body]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();