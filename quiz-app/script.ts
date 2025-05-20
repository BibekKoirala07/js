type screens = "first" | "second" | "third";

const containerMain: HTMLElement | null =
  document.getElementById("container-main");

let currentScreen: screens = "first";

const url = "";

async function getQuestions() {
  const response = await fetch("");
  const data = await response.json();
  return data;
}

async function displayQuiz() {
  const data = await getQuestions();
  if (containerMain) {
    containerMain.innerHTML = "";
  }
}

function displayFirstScreen() {
  if (containerMain) {
    containerMain.innerHTML = `
    <div id="start-screen">
      <div id="start-screen-inner">
        <h1 id="start-screen-inner-heading">Quizzical</h1>
        <p id="start-screen-inner-description">play our quiz to get prizes</p>
        <div id="start-screen-inner-button">
          <button id="start-screen-inner-btn">Start quiz</button>
        </div>
      </div>

    </div>
    `;
  }
}

function displayScreen() {
  displayFirstScreen();
}

displayScreen();
