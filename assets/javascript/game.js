
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
var questions = [
		{
			name: "question1",
			question: "this is a question",
			answers: ["answer1", "answer2", "answer3", "answer4"],
			correctAnwserId: 3
		},
		{
			name: "question2",
			question: "this is a question",
			answers: ["answer1", "answer2", "answer3", "answer4"],
			correctAnwserId: 1
		},
		{
			name: "question3",
			question: "this is a question",
			answers:["answer1", "answer2", "answer3", "answer4"],
			correctAnwserId: 2
		}
];
// 		currentquestionindex
var currentQuestionIndex = 0
// 		currentQuestion
// 			stores current question object
var currentQuestion = questions[0];
// 		timerTime, amount of time for questions
var timerTime;
// 		correct answers
var numCorrect;
// 		wrong answers
var numWrong;
// 		unanswered
var numUnanswered;
// 		numquestions
var numQuestions;

var timerRunning = false;

var clock;



 //1000 will  run it every 1 second




	
// 	Functions:

	var time = 10;
	function timerWrapper(){
		clock = setInterval(timer, 1000);
		function timer(){
 		time--;
  		if (time <= 0){
    	clearInterval(clock);

  		}
  		$("#timer").text("Timer: " + time);
	}
}
// 		render question
// 			add div time remaining to dom with associated timer
// 			add question div taken from currentQuestion object
// 			add answer divs with data-answer-id = answer id and text equal to question object.question
// 				also with class answers
function renderQuestion(){
	
	// timer();
	

	
	clearInterval(clock);
	//create overall question div
	var question = $("<div class = 'question'></div>");
	question.addClass(currentQuestionIndex);
	//create question text paragraph
	var pOne = $("<p>").text("Question: " + questions[currentQuestionIndex].question);
	question.append(pOne);
	//add answer paragraphs to question div
	for(var i = 0; i < 4; i++){
		var answer = $("<div data_answer_id = " + i + "></div>");
		answer.addClass("answer")
		answer.text(questions[currentQuestionIndex].answers[i]);
		question.append(answer);
	}
	// add timer to timer div
	

	// add fully created question div to content area
	$("#content-area").html(question);

}

renderQuestion();
timerWrapper();
// 		do when one of the answer divs is pressed
// 		answer question
// 			display right or wrong repending on answer by checking correct answer id against the data-answer-id
// 			increment correct, wrong, or unanswered depending
// 			increment current question id
// 			run render question
function answerQuestion(){
		// clearInterval(counter);
		var correctA = questions[currentQuestionIndex].correctAnwserId;
		var test = $(this).attr("data_answer_id");
		

	if(test == correctA){
		console.log(test);
		var rightAnswer = $("<div></div>");
		var pOne = $("<h2>").text("Correct!");
		rightAnswer.append(pOne);
		var pTwo = $("<p class = 'click_here'>").text("Click here for next question");
		rightAnswer.append(pTwo);
		$("#content-area").html(rightAnswer);
		currentQuestionIndex++;
		time = 21;
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

$(document).on("click", ".answer" ,  answerQuestion);
$(document).on("click", ".click_here", renderQuestion);
