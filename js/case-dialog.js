(function () {
  "use strict";

  var dialog = document.getElementById("case-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;

  var content = dialog.querySelector(".case-content");
  var closeBtn = dialog.querySelector(".dialog-close");
  var lastTrigger = null;

  function open(id, trigger) {
    var tpl = document.getElementById(id);
    if (!tpl) return;
    content.innerHTML = "";
    content.appendChild(tpl.content.cloneNode(true));
    lastTrigger = trigger;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("dialog-open");
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest && e.target.closest("[data-case]");
    if (trigger) open(trigger.getAttribute("data-case"), trigger);
  });

  closeBtn.addEventListener("click", function () {
    dialog.close();
  });

  // Click on the backdrop (outside the panel) closes the dialog
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", function () {
    document.body.classList.remove("dialog-open");
    if (lastTrigger) lastTrigger.focus();
  });
})();
