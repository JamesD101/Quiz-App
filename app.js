function populate() {
  if (quiz.isEnded()) {
    showScores();
  }else {
    document.getElementById("question").innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choice;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" +i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);

    }

    showProgress();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1 ;
  var element = document.getElementById('progress');
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }
};

function showScores(){
  var x = document.getElementById("initextt");
  x.innerHTML = "Result";
  var y = document.getElementById("but");
  y.innerHTML = " ";
  var z = document.getElementById("question");
  z.innerHTML = "Your score is : " + quiz.score ;
}

function tryAgain() {

}

var questions = [
  new Question("Which one is not an object oriented programming language ?", ["Java" , "C", "C++", "C#"], "C"),
  new Question("Which is used to style web pages", ["CSS" , "HTML", "JQUERY", "JAVASCRIPT"], "CSS"),
  new Question("There are _____ main component in object oriented programming", ["6" , "4", "2", "3"], "4"),
  new Question("Which language is used for WebApps", ["all" , "JAVASCRIPT", "Python", "PHP"], "all"),
  new Question("Which is not a Javascript Framework", ["Backbone.js" , "James.js", "Angular.js", "React.js"], "James.js")
];

var quiz = new Quiz(questions);

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

function Question(text, choice, answer) {
  this.text = text;
  this.choice = choice;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};


Quiz.prototype.guess = function(answer) {



    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
  }
  this.questionIndex++;
};

populate();
