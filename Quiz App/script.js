var questions = [
    {
        question: "قبر میں سوال کرنے والے فرشتوں کو کیا کہتے ہیں؟",
        options: ["A. منکر نکیر", "B. کرامن کاتبین ", "C. ملائکہ المقربین", "D. ملک الموت"],
        answer: "A"
    },
    {
        question: "انسان کے ساتھ ہر وقت رہنے والے دو فرشتوں کو کیا کہتے ہیں",
        options: ["A. ملائکہ المقربین", "B. منکر نکیر", "C. کرامن کاتبین", "D. ملک الموت"],
        answer: "C"
    },
    {
        question: "قرآنِ مجید کی پہلی سورت کا نام کیا ہے؟",
        options: ["A. سورہ فاتحہ", "B. سورۃ البقرہ", "C. سورہ اخلاص", "D. سورہ ال عمران"],
        answer: "A"
    },
    {
        question: "سوال : شبِ قدر بہتر ہے؟?",
        options: ["A. ہزار گھنٹوں سے", "B. ہزار دنوں سے", "C. ہزار مہینوں سے", "D. ہزار سالوں سے"],
        answer: "C"
    },
    {
        question: "اسلامی کیلنڈر میں ماہِ رمضان المبارک کا کونسا نمبر ہے؟",
        options: ["A. 7", "B. 12", "C. 9", "D. 5"],
        answer: "C"
    }
];
var currentQuestion = 0;
var score = 0;
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var resultElement = document.getElementById("result");
var nextButton = document.getElementById("nextBtn");
var tryAgainButton = document.getElementById("tryAgainBtn");
function showQuestion() {
    var current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";
    current.options.forEach(function (option) {
        var button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function () { return checkAnswer(option[0]); });
        optionsElement.appendChild(button);
    });
}
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score += 10;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    }
    else {
        showResult();
    }
}
function showResult() {
    if (score === 50) {
        resultElement.textContent = "Congratulations! You got all questions correct. Your score is 50.";
    }
    else {
        resultElement.textContent = "Your final score is " + score;
    }
    nextButton.style.display = "none";
    tryAgainButton.style.display = "inline";
}
function restartGame() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    resultElement.textContent = "";
    nextButton.style.display = "inline";
    tryAgainButton.style.display = "none";
}
nextButton.addEventListener("click", showQuestion);
tryAgainButton.addEventListener("click", restartGame);
showQuestion();
