document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const filters = document.querySelectorAll(".filter-button");
  const publications = document.querySelectorAll(".publication-item");
  const resultsLabel = document.querySelector("[data-results-label]");

  function applyFilter(filter) {
    let visibleCount = 0;

    publications.forEach((publication) => {
      const values = `${publication.dataset.type || ""} ${publication.dataset.topic || ""}`;
      const shouldShow = filter === "all" || values.split(" ").includes(filter);
      publication.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    filters.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (resultsLabel) {
      resultsLabel.textContent = `${visibleCount} output${visibleCount === 1 ? "" : "s"} displayed`;
    }
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  if (filters.length && publications.length) applyFilter("all");
});
