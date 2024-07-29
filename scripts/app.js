import { tabs } from "./tabs.js";
import { modalController } from "./modalController.js";

const initApp = () => {
  tabs();

  modalController({
    modal: ".modal_sidebar",
    btnOpen: ".main__mobile-menu",
    btnClose: ".modal__close-btn",
  });
};

initApp();
