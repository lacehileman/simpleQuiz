$(document).ready(function(e){
$('#navigation').on('click', function(){
	$('#subwrapper').remove();
	quiz.start();
})

$('#finish').on('click', function(){
	quiz.done();
})

$(function(){
	$('#finish')
		.hide();
})
$(function(){
	$('#restart')
		.hide();
})

let questions = [{
	question:"RGB stands for _?",
	answers:["Red-Green-Blue", "Rockets-Go-Boom", "Read-Grow-Bloom"],
	correctAnswer:"Red-Green-Blue"
},
{
	question:"CMYK stands for _?",
	answers:["Cry-Me-Your-King", "Cyan-Magenta-Yellow-Black", "Circle-Map-Yacht-Keep"],
	correctAnswer:"Cyan-Magenta-Yellow-Black"
},
{
	question:"How many planets are there?",
	answers:["Eight", "Nine", "Ten"],
	correctAnswer:"Nine"
}];

var quiz = {
    correct: 0,
    incorrect: 0,



    start: function () {
        $('#navigation').remove();
        $('#finish').show();
        $('#navigation')
        for (var i = 0; i < questions.length; i++) {
            $('#subWrapper').append('<br/><h2>' + questions[i].question  + '<br></h2>')
            $('#subWrapper').append('<br/>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subWrapper').append("<h2><input type='radio' name='question- " + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },

    done: function () {
        $.each($('input[name="question-0"]:checked'),
            function () {
                if ($(this).val() == questions[0].correctAnswer) {
                    quiz.correct++;
                } else {
                    quiz.incorrect++;
                }
        });
        $.each($('input[name="question-1"]:checked'),
            function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    quiz.correct++;
                } else {
                    quiz.incorrect++;
                }
            });
        $.each($('input[name="question-2"]:checked'),
            function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    quiz.correct++;
                } else {
                    quiz.incorrect++;
                }
            });                  
        this.endQuiz();

        },


    endQuiz: function () {  	
        $('#finish').remove();
        $('#subWrapper h2').remove();
        $('#subWrapper').append("<h3>Right: " + this.correct + "</h3>");
        $('#subWrapper').append("<h3>Wrong: " + this.incorrect + "</h3>");
        $('#subWrapper').append("<h3>Blank: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

}


});