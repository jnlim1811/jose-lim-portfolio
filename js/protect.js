(function () {
  "use strict";

  function isExempt(target) {
    return !!(target && target.closest && target.closest(".contact-section"));
  }

  document.addEventListener("copy", function (e) {
    if (!isExempt(e.target)) {
      e.preventDefault();
    }
  });

  document.addEventListener("selectstart", function (e) {
    if (!isExempt(e.target)) {
      e.preventDefault();
    }
  });

  document.addEventListener("contextmenu", function (e) {
    if (!isExempt(e.target)) {
      e.preventDefault();
    }
  });
})();
