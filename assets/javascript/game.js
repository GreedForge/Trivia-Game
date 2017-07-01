// Psudo Code
// 	variables:
// 		questions
// 			array of objects, each object has a question and a set of answers and correct answer id
// 			questions[
// 				question1{
// 					question:"is this a question",
// 					answers["answer1", "answer2", "answer3", "answer4"],
// 					correctAnwserId: 3
// 				}
// 			]
var questions = [{
    name: "question1",
    question: "Who played the 7th Samurai in 7 Samurai?",
    answers: ["Takashi Shimura", "Tatsuya Nakadai", "Keanu Reeves", "Toshirō Mifune"],
    correctAnwserId: 3,
    background: "assets/images/sevenSamuraiBackground.jpg"
}, {
    name: "question2",
    question: "Who was the director of Birds?",
    answers: ["Billy Wilder", "Alfred Hitchock", "Christopher Nolan", "David Fincher"],
    correctAnwserId: 1,
    background: "assets/images/theBirdsBackground.jpg"
}, {
    name: "question3",
    question: "Who is widely considered to be the most influencial film Martial Artist?",
    answers: ["Jackie Chan", "Jet Lee", "Bruce Lee", "Tony Jaa"],
    correctAnwserId: 2,
    background: "assets/images/enterTheDragonBackground.jpg"
}];
// 		currentquestionindex
var currentQuestionIndex = 0;
// 		currentQuestion
// 			stores current question object
var currentQuestion = questions[0];

// 		correct answers
var numCorrect = 0;
// 		wrong answers
var numWrong = 0;


var intervalId;

var numQuestions = 3;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;


//1000 will  run it every 1 second

var stopwatch = {

    time: 100,

    getTime: function() {
        return stopwatch.time;
    },

    reset: function() {

        stopwatch.time = 10;


        // DONE: Change the "display" div to "00:00."


        // DONE: Empty the "laps" div.

    },
    start: function() {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },
    stop: function() {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },

    count: function() {

        // DONE: increment time by 1, remember we cant use "this" here.
        stopwatch.time--;
        if (stopwatch.time == 0) {
            ////////////////////////////////// input game over stuff
            var gameOver = $("<div></div>");

        var gameOverTitle = $("<h2>");
        $(gameOverTitle).text("Game Over");
        $(gameOver).append(gameOverTitle)

        var gameOverRight = $("<p>");
        $(gameOverRight).text("Number of Correct Answers: " + numCorrect);
        $(gameOver).append(gameOverRight);

        var gameOverWrong = $("<p>");
        $(gameOverWrong).text("Number of Wrong Answers: " + numWrong);
        $(gameOver).append(gameOverWrong);

        $("#content-area").html(gameOver);

        stopwatch.stop();
        }

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.


        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#timer").html("Time Left: " + stopwatch.time);
    },

};



// 	Functions:


// 		render question
// 			add div time remaining to dom with associated timer
// 			add question div taken from currentQuestion object
// 			add answer divs with data-answer-id = answer id and text equal to question object.question
// 				also with class answers
function renderQuestion() {
	if (currentQuestionIndex < numQuestions) {
    stopwatch.start();
   

    // timer();

    $(".clickToStart").attr("class", "is-hidded").html("");


    //create overall question div
    var question = $("<div class = 'question'></div>");
    question.addClass(currentQuestionIndex);
    //create question text paragraph
    var pOne = $("<p>").text("Question: " + questions[currentQuestionIndex].question);
    question.append(pOne);
    //add answer paragraphs to question div
    for (var i = 0; i < 4; i++) {
        var answer = $("<div data_answer_id = " + i + "></div>");
        $(answer).attr("class", "answerClass");
        answer.text(questions[currentQuestionIndex].answers[i]);
        question.append(answer);
    }
    // add timer to timer div


    // add fully created question div to content area
    $("#content-area").html(question);
    $(".wrapper").css("background-image", "url(" + questions[currentQuestionIndex].background + ")");
}

else {
	var gameOver = $("<div></div>");

        var gameOverTitle = $("<h2>");
        $(gameOverTitle).text("Game Over");
        $(gameOver).append(gameOverTitle)

        var gameOverRight = $("<p>");
        $(gameOverRight).text("Number of Correct Answers: " + numCorrect);
        $(gameOver).append(gameOverRight);

        var gameOverWrong = $("<p>");
        $(gameOverWrong).text("Number of Wrong Answers: " + numWrong);
        $(gameOver).append(gameOverWrong);

        $("#content-area").html(gameOver);

        stopwatch.stop();
}

}

// 		do when one of the answer divs is pressed
// 		answer question
// 			display right or wrong repending on answer by checking correct answer id against the data-answer-id
// 			increment correct, wrong, or unanswered depending
// 			increment current question id
// 			run render question
function answerQuestion() {

    if (currentQuestionIndex < numQuestions) {
    	console.log(currentQuestionIndex);
        var correctA = questions[currentQuestionIndex].correctAnwserId;
        var chosenAnswer = $(this).attr("data_answer_id");
        console.log("correct Answer: " + correctA);
        console.log("chosen answer: " + chosenAnswer);

        if (chosenAnswer.toString() === correctA.toString()) {
        	console.log("we get here?");
            var rightAnswer = $("<div></div>");
            var pOne = $("<h2>").text("Correct!");
            rightAnswer.append(pOne);
            $("#content-area").html(rightAnswer);
            currentQuestionIndex++;
            numCorrect++;
            renderQuestion();
            

        } 
        else{
    	numWrong++;
    	currentQuestionIndex++;
    	renderQuestion();
    	
    }

    }


    else if (currentQuestionIndex === numQuestions) {

    	var gameOver = $("<div></div>");

        var gameOverTitle = $("<h2>");
        $(gameOverTitle).text("Game Over");
        $(gameOver).append(gameOverTitle)

        var gameOverRight = $("<p>");
        $(gameOverRight).text("Number of Correct Answers: " + numCorrect);
        $(gameOver).append(gameOverRight);

        var gameOverWrong = $("<p>");
        $(gameOverWrong).text("Number of Wrong Answers: " + numWrong);
        $(gameOver).append(gameOverWrong);

        $("#content-area").html(gameOver);

        stopwatch.stop();
    }



}




// 			if time runs out change content area div to time ran out page for that question and display answer

// 		do if correct answers + wrong answers + unaswered = numquestions
// 		gameover
// 			write over content area, game over
// 			dipslay number of correct, wrong, and unanswered questions
// 			display restart button

// 		do if restart button pressed
// 		restart
// 			set correct answers, wrong answers, unanswered, current quesiton index to 0
// 			run ask question

// 	On document click
// 		if clicked item has class answer run ask question

// 		if clicked item has class reset run reset



$("#content-area").on("click", ".answerClass" , answerQuestion);

$(".clickToStart").on("click", renderQuestion);