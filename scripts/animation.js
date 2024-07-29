export const animation = () => {
  let options = {
    root: document.querySelector(".container.wrapper"),
    threshold: 1.0,
  };
  let contentItemObserver = new IntersectionObserver(callback, options);
  document.querySelectorAll(".element-animation").forEach((el) => {
    contentItemObserver.observe(el);
  });

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("element-show");
        contentItemObserver.unobserve(entry.target);
      }
    });
  }
};
