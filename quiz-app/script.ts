type screens = "first" | "second" | "third";

const containerMain: HTMLElement | null =
  document.getElementById("container-main");

let currentScreen: screens = "first";

console.log("containerMain", containerMain);

const url = "";

async function getQuestions() {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  const data = await response.json();
  return data;
}

function displayQuiz() {
  if (containerMain) {
    containerMain.innerHTML = "";
  }
  getQuestions().then((data) => {
    console.log("data", data);
    if (containerMain) {
      containerMain.innerHTML = `
      <div>
        ${data.results.map((each: any, index: number) => {
          return `
          <div>
            <div>
              <h1>${each.question}</h1>
            </div>
            <div>
            <button>${each.incorrect_answers[0]}</button> 
            <button>${each.incorrect_answers[1]}</button> 

            <button>${each.incorrect_answers[2]}</button> 
            <button>${each.correct_answer}</button> 


            </div>       
          </div>
            `;
        })}
      </div>
      `;
    }
  });
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

  const startBtn = document.getElementById("start-screen-inner-btn");

  console.log("startBtn", startBtn);

  startBtn?.addEventListener("click", () => {
    currentScreen = "second";

    displayScreen();
  });
}

function displayScreen() {
  if (currentScreen == "first") {
    displayFirstScreen();
  } else if (currentScreen == "second") {
    displayQuiz();
  }
}

displayScreen();
