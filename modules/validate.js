/**
 *
 */
export function validateForm() {
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const messageError = document.querySelector("#messageError");

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (!/^[a-zA-Zа-яА-ЯёЁ\s\-']{2,}$/.test(nameInput.value.trim())) {
    nameError.textContent = "Ошибка в имени";
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    emailError.textContent = "Ошибка в email";
    isValid = false;
  }

  const message = messageInput.value.trim();
  if (message.length < 10 || message.length > 1000) {
    messageError.textContent = "Сообщение должно быть от 10 до 1000 символов";
    isValid = false;
  }

  return isValid;
}
