// Create questions as an Object
// An object in array form is the best way because when you call an index number, you can select the group of relevant data efficiently. 
//

// We proceed through the questions incrementing++ through the index numbers from 0-(questions.length-1)
var questions = [
    {
        title: "Example Question 0:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 3:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 4:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 5:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 6:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
    {
        title: "Example Question 7:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "answer from choices"
    },
];

// Hook elements from the page (i.e var exampleEl = document.querySelector(".elementClass"))
// Hook container element
var quizBodyEl = document.getElementById("quizBody")

// Hook timer element
var timerDisplay = document.getElementById("timer")

// Create dynamic elements (i.e exampleDynamicEl = document.createElement("button"))
// Create <h1> to  show Starting Heading. This is not on the html and must be created dynamically.
var startText = document.createElement("h1");
// Create Button to Start Quiz. This is not on the html and must be created dynamically.
var startBtn = document.createElement("button");
// Create p tag to display the question. This is not on the html and must be created dynamically.
var questionText = document.createElement("p");


// Declare global variables
// Declare variable to store timer number
var timer = 10;
// Declare variable to store current index
var index = 0;


// Required Functions*****/
        // function that loads content when the page first loads. Will show a welcome page and a button that starts the quiz.
        // function that shows the question and starts the timer. This function will be triggered by the button created in the previous function.
        // function that handles the timer
        // function that handles and displays the next question
        // function to check the answer and display the next question


// function that loads content when page first loads:
function openingPage() {
        // Add text to Title Tag
        startText.textContent = "The Greatest Quiz in the Multiverse...";
        // Add text to Button
        startBtn.textContent = "Begin your Quest";
        // Append text to Container. We have to code the command to load the text content into the html container.
        quizBodyEl.appendChild(startText);
        // Append button to Container
        quizBodyEl.appendChild(startBtn);


}

// function that shows the question and starts the timer
function startQuiz() {
    // show timer function
    showTimer();

    // call next question function 
    nextQuestion();

}

// function the handles the timer
function showTimer() {
        // display timer to screen
        timerDisplay.textContent =timer;

        // create setInterval and store it to a variable
        var timeInterval = setInterval(function(){
            timer--;
            timerDisplay.textContent=timer;
            //if timer gets to zero, stop the timer:
            if (timer === 0) {
                clearInterval(timeInterval);
            }


        }, 1000)

                // inside setInterval and store it to a variable
                // inside setInterval function:
                // decrease timer by 1
                // display timer on screen
                // if timer goes down to 0, clear interval
            }

// function that handles and displays the next question
function nextQuestion() {
        // Declare a variable to store current question. Assign the current question.
            var currentQuestion = questions[index];
        // Empty container element
            quizBodyEl.textContent = "";
        // Add current question title to the question display variable
        questionText.textContent = currentQuestion.title;
        // Append the question display variable to the container
        quizBodyEl.appendChild(questionText);
        // Create a div element to wrap the "choices"
        var answersDiv = document.createElement("div");
        // for loop to:
                // - create button elements for each choice
                // - add a class to each button to be used with the event listener
                // - add text to each button from question choices
                // - append buttons to div element created to wrap choices
                
        for (let i = 0; i < currentQuestion.choices.length; i++) {
            var answerBtn = document.createElement("button");
            answerBtn.classList.add("choiceBtn");
            answerBtn.textContent = currentQuestion.choices[i];
            answersDiv.appendChild(answerBtn); 
        }

        // append div element to container
        quizBodyEl.appendChild(answersDiv);

};

// function to check the answer and display the following question
function checkAnswer(event) {

        // if event.target.matches(--choice button class--)
        if(event.target.matches(".choiceBtn")) {
            //***LOGIC TO CHECK FOR RIGHT ANSWER */
            // if answer to question is correct. Let user know question is correct.
            // increase index by one
            index++;
            // log correct score
            // show next question
            nextQuestion();
        } else {
            // Let user know question is incorrect.
            // Increase index by one
            index++;
            // log incorrect score
            // show next question.
            nextQuestion();
        }
        

        

}

// add event listener to "Begin Your Quest"
startBtn.addEventListener("click", startQuiz);

// add event listener to choice button. Hooking up to the whole element
document.addEventListener("click", checkAnswer);
// call function to show opening page
openingPage()


