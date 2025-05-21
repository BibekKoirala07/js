"use strict";
const containerMain = document.getElementById("container-main");
let currentScreen = "first";
const firstScreen = document.getElementById("first-screen-div");
containerMain?.append(firstScreen);
console.log("firstScreen", firstScreen);
console.log("conatinerMain", containerMain);
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
      <div id="questions">
        ${data.results.map((each, index) => {
                return `
          <div id="each-question-">
            <div id="each-question-heading">
              <h1>${each.question}</h1>
            </div>
            <div id="each-question-btns">
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
    <div id="h-screen flex items-center bg-red-500">
      <div id="text-center">
        <h1 id="text-2xl">Quizzical</h1>
        <p id="">play our quiz to get prizes</p>
        <div id="">
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
    }
    else if (currentScreen == "second") {
        displayQuiz();
    }
}
displayScreen();
