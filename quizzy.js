
// DOMelements:

var startEl = document.querySelector(".start");   
var counterEl = document.querySelector(".counter");
var quizEl = document.querySelector(".quizbody");
var scoreEl = document.querySelector(".scoreContainer");
var progressEl = document.querySelector(".progress");
var questionEl = document.querySelector(".question");
var choiceAEl = document.getElementById("A");
var choiceBEl = document.getElementById("B");
var choiceCEl = document.getElementById("C");
var choiceDEl = document.getElementById("D");



// Object containing the questions:
let questions = [

    {
        question: "Example Question 1?",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    },
    {
        question: "Example Question 2?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },
    {
        question: "Example Question 3?",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    },
    {
        question: "Example Question 4?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Correct",
        correct: "D"
    },
    {
        question: "Example Question 5?",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "B"
    },

];

// Variables to be used:

    // The index number of the last question:
    let lastQuestionIndex = questions.length-1;
    // The index number of the current question:
    let currentQuestionIndex = 0;
    // The variable that gives 10 seconds for each question:
    var questionTime = 10
    // This variable sets the initial value of the counter that shows how much time has elapsed for the question
    let count = 0;
    // renders the timer so that it counts down with the interval of seconds. We call it outside the functions so that any other function can call it and alter it. This is a global variable.
    let time;
    // This variable sets the initial score to zero. The score is how many questions the user got correct.
    let score = 0;

// Required Functions:

    // To start the quiz
    // To display a question
    // To show the progress of the quiz
    // To create and display the timer
    // To check the answer
    // Provide visual cue that answer is correct
    // Provide visual cue that answer is incorrect



// To start the quiz:

    function startQuiz() {
        // Set the div Container containing text "Click here to Start Quiz!!!!....." to become invisible
        startEl.style.display = "none";
        // Load the first question:
        displayQuestion();
        // Make the quiz body that contains the questions visible. Initially we made the body invisible, now we need to make it visible:
        quizEl.style.display = "block";
        // Show the progress bar:
        showProgress();
        // Display the timer
        createTimer();
        // Set the timer in intervals of 1000 ms:
        time = setInterval(createTimer, 1000);
      

    }

// display a question:
        // To move to the next question, we increment(++) the runningQuestionIndex by 1 

        function displayQuestion() {

            let q = questions[currentQuestionIndex];

            choiceAEl.innerHTML = q.choiceA;
            choiceBEl.innerHTML = q.choiceB;
            choiceCEl.innerHTML = q.choiceC;
            choiceDEl.innerHTML = q.choiceD;

            //Displays question on the webpage:
                // q.question is a command that displays a particular piece pf data called "question" stored within the object at a particular index, located within the questions array....
            questionEl.innerHTML = "<p>" + q.question + "</p>"
    
        }

// To show the progess of the quiz:

    function showProgress() {
        for (let questionIndex = 0; questionIndex <= lastQuestionIndex; questionIndex++) {
            // The code below states that the progress bar is tied to the question index number in the loop.
            progressEl.innerHTML += "<div class= 'prog' id="+ questionIndex +"></div>";
            
        }
    }

// Provide visual cue that the answer is correct:

    function correctAnswer() {
        document.getElementById(currentQuestionIndex).style.backgroundColor = "blue";
    }

// Provide visual cue that the answer is incorrect:

    function incorrectAnswer() {
        document.getElementById(currentQuestionIndex).style.backgroundColor = "red";
    }

// Create and display the timer:

    function createTimer() {
        if (count <= questionTime) {
            // If true we change the counter innerHTML to the current value of the variable count
            counterEl.innerHTML = count;
            count++;
        } else{
            // Set counter back to 0 if the user can't answer the question in time.
            count = 0;
            // The question is wrong so we run the incorrectAnswer() function.
            incorrectAnswer();
            //check if we have any more questions.
            if (currentQuestionIndex <= lastQuestionIndex) {
                // Increment question index to move to next question.
                currentQuestionIndex++;
                // Render the next question
                displayQuestion();
            } else { clearInterval(time);
                     // Show the score to the user:
                     showScore();
                
            }

        }

    }
    
// Show score to the user:
    // In order to understand the logic of the showScore function, study and understand the Ternary Operator

    function showScore() {

        // Make the div container with the class "scoreContainer" visible. We previously set this container to be invisible
        scoreEl.style.display = "block"; 
        // calculate the score percentage:
            //The score percentage is the value of the score divided by the length of the questions array multipled by 100 and converted to an integer.
        let scorePercent = Math.round(100 * score / questions.length);
        scoreEl.innerHTML += "<p>" + scorePercent +"%</p>";
    }

// Check to see whether the answer is correct:

    function checkSolution(answer) {

        if(questions[currentQuestionIndex].correct == answer) {
            // Answer is correct. Increment variable named score
            score++;
            // Change progess color to blue showing correct answer
            correctAnswer();
        } else {
            //Change progress color to red showing incorrect answer
            incorrectAnswer();
        }

        count = 0; // set count back to zero for the next question
        

        if(currentQuestionIndex <= lastQuestionIndex) {
            //Increment current question index to move to next question
            currentQuestionIndex++;
            //Display question at the current incremented index in the questions array.
            displayQuestion();
        } else {
            //Stop the quiz and clear the time interval
            clearInterval(time);
            //Show the score
            showScore();
        }

    }

// Event listeners
    //click on the div container that says "Click here to Start Quiz!!!!....." to trigger startQuiz function.
    startEl.addEventListener("click", startQuiz);

