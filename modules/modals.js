
/**
 *
 */
export function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "none";
  document.body.style.overflow = "";
}


/**
 *
 */
export function hideSuccessPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "none";
}


/**
 *
 */
export function openModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}


/**
 *
 */
export function showSuccessPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "block";
}
