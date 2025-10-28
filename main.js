import "./styles/reset.css";
import "./styles/main.scss";

import {
  openModal, closeModal, showSuccessPopup, hideSuccessPopup, 
} from "./modules/modals.js";
import { submitForm } from "./modules/sending.js";
import { validateForm } from "./modules/validate.js";

const openModalFormBtn = document.querySelector("#open-form");
const submitBtn = document.querySelector(".submit-button");

submitBtn.addEventListener("click", validateForm);

function initializeModalHandlers() {
  const closeBtn = document.getElementById("closeModal");
  const overlay = document.getElementById("modalOverlay");
  const form = document.querySelector(".modal__form-content");

  const popupClose = document.querySelector(".popup-close");
  const successPopup = document.getElementById("successPopup");

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal(); 
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      hideSuccessPopup();
    }
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const formData = {
        name: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
      };

      const submitBtn = document.querySelector(".submit-button");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      submitForm(formData)
        .then((result) => {
          if (result.success) {
            closeModal();
            showSuccessPopup();
            event.target.reset();
          }
          return result;
        })
        .finally(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    }
  }

  form.addEventListener("submit", handleFormSubmit);
  popupClose.addEventListener("click", hideSuccessPopup);
  successPopup.addEventListener("click", (event) => {
    if (event.target === successPopup) {
      hideSuccessPopup(); 
    }
  });
}

openModalFormBtn.addEventListener("click", openModal);
initializeModalHandlers();
