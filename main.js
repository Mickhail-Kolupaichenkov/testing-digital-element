import "./styles/reset.css";
import "./styles/main.scss";

const openModalFormBtn = document.querySelector("#open-form");

function openModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "none";
  document.body.style.overflow = "";
}

function initializeModalHandlers() {
  const closeBtn = document.getElementById("closeModal");
  const overlay = document.getElementById("modalOverlay");
  const form = document.querySelector(".modal__form-content");

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    closeModal();
  });
}

openModalFormBtn.addEventListener("click", openModal);
initializeModalHandlers();
