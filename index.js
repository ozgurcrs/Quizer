const colors = ["e74f4f", "3ae08d", "d868d2", "0881ff"];
const timer = document.querySelector(".timer span");
const question = document.querySelector(".question p");
const userOption = document.querySelectorAll(".userOption");
const option = document.querySelectorAll(".option");
const answer = document.querySelectorAll(".answer");
const timerBoxShadow = document.querySelector(".timer");
const startGame = document.querySelector(".startGame");
let correctAnswer = "";
let questionCount = 0;
let time = 15;
addEventListener("DOMContentLoaded", () => {
    Start();
});


function Start(){
    let count=3;
    const startInterval = setInterval(() => {
        startGame.innerHTML = count;
        count--; 
        if(count <0){
            startGame.className = 'animate__backOutDown';
            startTimer();
            askQuestion(questionCount);
            clearInterval(startInterval);
            startGame.style.display = 'none';
        }
    },1000);
}

function sayAnswer(id){
    const userCorrect = answer[id].querySelector(".userOption").innerHTML;
    if(userCorrect == correctAnswer){
      answer[id].style.border = "4px solid #3ae08d";
      setTimeout(() => {
        time = 0;
        answer[id].style.border = "0";
      }, 2000);
    }
    else {
      answer[id].style.border = "4px solid #e74f4f";
      setTimeout(() => {
        time = 0;
        answer[id].style.border = "0";
      }, 2000);
    }
}

function startTimer() {
   time = 15;
  const timerInterval = setInterval(() => {
    timer.innerHTML = "0:" + time;
    time--;
    if(time < 10){
        timerBoxShadow.style.boxShadow = "0 1px 15px #ff0000"
    }
    if (time < 0) {
      clearInterval(timerInterval);
      if(data.length > questionCount){
        askQuestion(questionCount);
        startTimer();
        timerBoxShadow.style.boxShadow = "0 1px 15px #e3d3f7"
    
      }
    }
  }, 1000);
}

function askQuestion(index){
    const questionData = data[index];
    question.innerHTML = questionData.Question;
    userOption[0].innerHTML = questionData.A;
    userOption[1].innerHTML = questionData.B;
    userOption[2].innerHTML = questionData.C;
    userOption[3].innerHTML = questionData.D;
    correctAnswer = questionData.Correct;
    questionCount++;
    for(let i=0; i<4; i++){
        option[i].style.background = "#"+colors[i];
    }
}

const data = [
  {
    Question:
      "Tarihin sıfır noktası olarak bilinen, insanlık tarihinin ilk somut kalıntılarının bulunduğu Göbekli tepe hangi ilimizdedir?",
    A: "Şanlıurfa",
    B: "Rize",
    C: "Kastamonu",
    D: "Iğdır",
    Correct: "Şanlıurfa",
  },
  {
    Question:
      "Belli bir süre eğitimi tamamladıktan sonra alınan, sir okul ya da eğitim kurumu tarafından verilen belgenin adı?",
    A: "Dilekçe",
    B: "Noter Satışı",
    C: "Vekalet",
    D: "Diploma",
    Correct: "Diploma",
  },
  {
    Question:
      "Yeni bir işe girerken, iş yerlerine verdiğimiz kısa öz geçmişin kısa adı?",
    A: "Başvuru Kağıdı",
    B: "Tecrübe Kağıdı",
    C: "CV",
    D: "Diploma",
    Correct: "CV",
  },
  {
    Question: "FIFA’ya göre futbolun doğduğu ülke hangisidir?",
    A: "İngiltere",
    B: "Brezilya",
    C: "Çin",
    D: "Türkiye",
    Correct: "Çin",
  },
  {
    Question:
      "Demir Adam filminin yapımcısına göre, Demir Adam karakterinin yaratılması için kimden ilham alınmıştır?",
    A: "Bill Gates",
    B: "Steve Jobs",
    C: "Elon Musk",
    D: "Michael Jordan",
    Correct: "Elon Musk",
  },
];
