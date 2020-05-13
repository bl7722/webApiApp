var timeEl = document.querySelector(".time");
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var username= document.getElementById("name");
var usernameIn = document.getElementById("usernameIn");
var question = document.getElementById("question");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var usernameForm =document.getElementById("usernameForm")
var correct = ["red","square","Mercury"];
var userAnswers = [];

var exam = [
  { q: "What color has the lowest wavelength frequency?",
      a: 
          {a:"blue",
          b:"yellow",
          c:"red", 
          d:"orange"}},
          
  { q: "Which shape has a property of four 90 degree angles?",
      a: 
          {a:"square",
          b:"pentagon",
          c:"circle", 
          d:"octogon"}},

  { q: "What is the first planet from the sun?",
      a: 
          {a:"Jupiter",
          b:"Earth",
          c:"Mars", 
          d:"Mercury"},}];

startBtn.addEventListener("click", function(e){

        username.style.display = "none"
        quiz.style.display = "block";
        startBtn.style.display = "none";
 
        var secondsLeft = 15;//change to 75

        function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft ;

            if(secondsLeft === 0 || i === 3) {
            clearInterval(timerInterval);
            input();
            }
        }, 1000)};

        
        for( i = 0; i < 3;){
            question.textContent = exam[i].q;
            answerA.textContent = exam[i].a.a;
            answerB.textContent = exam[i].a.b;
            answerC.textContent = exam[i].a.c;
            answerD.textContent = exam[i].a.d;
 
            answerA.addEventListener("click", function(e){
                buttonPress = true
                e.preventDefault();
                userAnswers.push(answerA.textContent);

                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });

            answerB.addEventListener("click", function(e){
                buttonPress = true
                e.preventDefault();
                userAnswers.push(answerB.textContent);

                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });

            answerC.addEventListener("click", function(e){
                 buttonPress = true
                e.preventDefault();
                userAnswers.push(answerC.textContent);

                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });

            answerD.addEventListener("click", function(e){
                 buttonPress = true
                e.preventDefault();
                userAnswers.push(answerD.textContent);
 
                i++;
                question.textContent = exam[i].q;
                answerA.textContent = exam[i].a.a;
                answerB.textContent = exam[i].a.b;
                answerC.textContent = exam[i].a.c;
                answerD.textContent = exam[i].a.d;
            });
            break;
    }
        setTime();
    
    });

    function input(){

        username.style.display = "block"
        quiz.style.display = "none";
 
        submit.addEventListener("click", function(e){
         e.preventDefault();

            var userArray = []
            userArray.push(usernameIn.value)
            localStorage.setItem("Name", userArray);
            highscore();
        });


    };
    


 
    function highscore(){

            var total = 0
            for(var i = 0; i < correct.length; i++){

                if(correct[i] === userAnswers[i]){
                    total++
                };
            };
            
             var totalArray = []
             totalArray.push(total)
        
        
        localStorage.setItem("Score", finalArray);
        var usernameEnd = document.getElementById("username")
        var scoreEnd = document.getElementById("points")
        usernameEnd.textContent = localStorage.getItem("Name")
        scoreEnd.textContent = localStorage.getItem("Score")
        username.style.display = "none";
        score.style.display = "block";
    };











