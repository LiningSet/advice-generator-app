const generateBtn = document.querySelector(".generate-btn");
const adviceNumber = document.querySelector(".advice-number");
const adviceHTML = document.querySelector(".advice q");

async function fetchIt() {
  try {
    let url = `https://api.adviceslip.com/advice/${Math.floor(
      Math.random() * 245
    )}`;
    let response = await fetch(url);
    let data = await response.json();

    adviceNumber.textContent = data.slip.id;
    adviceHTML.textContent = data.slip.advice;
  } catch {
    throw new Error("fuuuuck");
  }
}
fetchIt();

generateBtn.addEventListener("click", () => {
  fetchIt();
});
