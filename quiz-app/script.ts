const containerMain = document.getElementById("container-main");

console.log("containerMain", containerMain);

const url = "";

async function getQuestions() {
  const response = await fetch("");
  const data = await response.json();
  return data;
}

async function displayQuiz() {}
