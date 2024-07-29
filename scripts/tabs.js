import { scrollOptions } from "./scrollOptions.js";

export const tabs = () => {
  const tabItem = document.querySelectorAll(".menu__item");
  const tabItemContent = document.querySelectorAll(".main__content");
  const modalElem = document.querySelector(".modal_sidebar");

  let tabName = "";

  function selectTabItem() {
    tabItem.forEach((item) => {
      item.classList.remove("is-active");
    });

    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);

    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = "hidden";
      scrollOptions.enabledScroll();
    }, 300);
  }

  function selectTabContent(tabName) {
    tabItemContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }

  tabItem.forEach((item) => {
    item.addEventListener("click", selectTabItem);
  });
};
