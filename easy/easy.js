document.getElementById("backBtn").onclick = () => {
  location.href = "../index.html";
};

let attempts = 0;
let running = true;
let value = Math.floor(Math.random() * 10) + 1;

const guess = document.getElementById("guess");
const submit = document.getElementById("submitBtn");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");
const overlay = document.getElementById("overlay");

submit.addEventListener("click", checkGuess);

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("show");
  window.location.reload();
});

function showPopup(message) {
  popupMessage.textContent = message;
  popup.classList.add("show");
  overlay.classList.add("show");
}

function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  if (userValue < 1 || userValue > 10) {
    window.alert(`Please pick a number between 1 to 10`);
    return;
  }

  if (userValue === value) {
    hint.textContent = "Congratulation, you won!";
    showPopup("You won! 🎉");
  } else if (userValue < value) {
    hint.textContent = "Too low, try again!";
  } else if (userValue > value) {
    hint.textContent = "Too high, try again!";
  }

  attemptsText.textContent = "Attempts: " + attempts;

  guess.value = "";
}
