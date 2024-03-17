const questions = [
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

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question")!;
const optionsElement = document.getElementById("options")!;
const resultElement = document.getElementById("result")!;
const nextButton = document.getElementById("nextBtn")!;
const tryAgainButton = document.getElementById("tryAgainBtn")!;

function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";
    current.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option[0]));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption: string) {
    if (selectedOption === questions[currentQuestion].answer) {
        score += 10;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if (score === 50) {
        resultElement.textContent = "Congratulations! You got all questions correct. Your score is 50.";
    } else {
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
