(function () {
  "use strict";

  var btn = document.getElementById("back-to-top");
  if (!btn) return;

  var SHOW_AFTER = 400;

  function onScroll() {
    if (window.scrollY > SHOW_AFTER) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
