// QUIZ
let totalQuiz = 0;
let totalScore = 0;

function generateQuiz() {
  const topic = document.getElementById("quizTopic").value;
  const difficulty = document.getElementById("quizDifficulty").value;

  const score = Math.floor(Math.random() * 41) + 60;

  totalQuiz++;
  totalScore += score;

  document.getElementById("quizOutput").innerHTML =
    `<p><strong>Topic:</strong> ${topic}</p>
     <p><strong>Difficulty:</strong> ${difficulty}</p>
     <p><strong>Your Score:</strong> ${score}%</p>`;

  document.getElementById("totalQuiz").innerText = totalQuiz;
  document.getElementById("avgScore").innerText =
    Math.round(totalScore / totalQuiz) + "%";
}

// PERFORMANCE
function analyzePerformance() {
  if (totalQuiz === 0) {
    document.getElementById("analysisResult").innerHTML =
      "Take at least one quiz first!";
    return;
  }

  let weak = "Data Structures";

  if ((totalScore / totalQuiz) > 80) {
    weak = "None - Great Performance!";
  }

  document.getElementById("weakArea").innerText = weak;

  document.getElementById("analysisResult").innerHTML =
    `<p>Based on your scores, focus more on: <strong>${weak}</strong></p>`;
}

// AI (Demo)
async function askAI() {
  const question = document.getElementById("userQuestion").value;

  if (question.trim() === "") {
    alert("Please enter a question.");
    return;
  }

  document.getElementById("aiResponse").innerHTML =
    "<p>Thinking...</p>";

  setTimeout(() => {
    document.getElementById("aiResponse").innerHTML =
      `<p><strong>Your Question:</strong> ${question}</p>
       <p><strong>AI Response:</strong> This is a demo AI response.</p>`;
  }, 1000);
}
