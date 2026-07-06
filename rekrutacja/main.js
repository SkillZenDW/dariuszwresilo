// Rekrutacja. To jest proste. — interakcje strony sprzedażowej

document.addEventListener("DOMContentLoaded", function () {
  // ---------- Akordeon ----------
  document.querySelectorAll(".accordion-item__header").forEach(function (header) {
    header.addEventListener("click", function () {
      var item = header.closest(".accordion-item");
      var wasActive = item.classList.contains("is-active");

      // W obrębie tego samego akordeonu zwiń pozostałe elementy
      var accordion = item.closest(".accordion");
      accordion.querySelectorAll(".accordion-item.is-active").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-active");
          openItem.querySelector(".accordion-item__header").setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("is-active", !wasActive);
      header.setAttribute("aria-expanded", String(!wasActive));
    });
  });

  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
});
