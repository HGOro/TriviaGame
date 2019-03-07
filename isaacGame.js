$(document).ready(function(){
    var answerKey = {
        question1: 3,
        question2: 4,
    }

    $(".btn").on("click", function(event){
        event.preventDefault()

        $(".answers").each(function(){
            var correctTotal = 0;  
            if ($(this).is(":checked")=== true){        //as soon as they click on the button, make it true
               console.log($(this).is(":checked")=== true);

                var q =$(this).attr("name");            //goes to the right question
                var ans =$(this).attr("data-answer");   //gets the player's answer
                    if (ans == answerKey[q]){           //compares it to correct answer, q is a string that is referring to question1
                        correctTotal++;                 //if the answers match (are =), increment their score
                    }
                   
            }
        })   
    })
})