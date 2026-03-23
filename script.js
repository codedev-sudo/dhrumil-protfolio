const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const year = document.getElementById("year");
const themeToggle = document.getElementById("theme-toggle");
const storageKey = "portfolio-theme";

function setTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.body.setAttribute("data-theme", nextTheme);

  if (themeToggle) {
    themeToggle.textContent = nextTheme === "dark" ? "Light" : "Dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} theme`);
  }
}

const savedTheme = localStorage.getItem(storageKey);
setTheme(savedTheme || "light");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}
