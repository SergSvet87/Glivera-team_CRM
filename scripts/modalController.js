import { scrollOptions } from "./scrollOptions.js";

export const modalController = ({
  modal,
  btnOpen,
  btnClose,
  time = 600,
  open,
  close,
}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: none;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = (event) => {
    const target = event.target;
    const code = event.code;

    if (
      event === "close" ||
      (btnClose && target.closest(btnClose)) ||
      target === modalElem ||
      code === "Escape"
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
        modalElem.style.display = "none";
        scrollOptions.enabledScroll();

        if (close) {
          close();
        }
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = (e) => {
    if (open) {
      open({ btn: e.target });
    }

    setTimeout(() => {
      modalElem.style.visibility = "visible";
      modalElem.style.display = "flex";
      modalElem.style.opacity = 1;
    }, 300);

    window.addEventListener("keydown", closeModal);
    scrollOptions.disabledScroll();
  };

  buttonElems.forEach((buttonElem) => {
    buttonElem.addEventListener("click", openModal);
  });

  modalElem.addEventListener("click", closeModal);

  modalElem.closeModal = closeModal;
  modalElem.openModal = openModal;

  return { openModal, closeModal };
};
