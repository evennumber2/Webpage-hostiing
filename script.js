document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll to top button (appears after scrolling)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆️";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease;
`;
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Dark mode toggle (add a button in HTML with id="darkModeToggle")
const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
      document.body.classList.contains("dark-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
  });
}
