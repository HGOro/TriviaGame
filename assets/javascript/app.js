$(document).ready(function(){

//function for the TIMER
//countdown clock timer from 60 seconds
//when timer count is equal to 0, stop timer, hide Gameplay and show Results
    var timerCount = 60;
    
    function countdown(){
        timerCount--;
        $("#countdown-timer").html(timerCount + " seconds left!");
        //stop game when timerCount gets to 0 (hide gameplay div and show results)
        if(timerCount === -1){
            //call function for tallying results
            $("#gameplay-container").hide();
            $("#results-container").show();
            answerCollect();

        };
        console.log(countdown);
        //need a function to stop countdown after submit is clicked or time reaches 0
    };

    function startCountdown(){
        setInterval(countdown, 1000);
    };

    //gameplay-container is hidden until start button is clicked
    $("#gameplay-container").hide();

    //start-button shows gameplay container
    //start-button hides start-container
    //start-button initiates countdown
    $("#start-button").on("click", function(){
        $("#gameplay-container").show();
        $("#start-container").hide();
        startCountdown();
        
    });
    
    //when submit-button is clicked
    //hide gameplay-container again
    //tally up the points (answerCollect function)
    //show results container
    $("#submit-button").on("click", function(){
        //call function for tallying results
        $("#gameplay-container").hide();
        $("#results-container").show();
        answerCollect();
    });
    
    //results container is hidden until submit-button is clicked
    $("#results-container").hide();

    //display how many correct, wrong, and unanswered
    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;

    


    //function to collect player answers
    //recognize the answer input for each question (:checked)
    //register the correct answers
    //add up number of answers correct
    //add up incorrect answers
    //add up unanswered, unanswered in this case will be undefined

    //I tried to do this more cleanly like in workshop, but oof, this is what worked
    function answerCollect(){
        var Q1 = $('input:radio[name="question1"]:checked').val();
        var Q2 = $('input:radio[name="question2"]:checked').val();
        var Q3 = $('input:radio[name="question3"]:checked').val();
        var Q4 = $('input:radio[name="question4"]:checked').val();
        var Q5 = $('input:radio[name="question5"]:checked').val();
        var Q6 = $('input:radio[name="question6"]:checked').val();
        var Q7 = $('input:radio[name="question7"]:checked').val();
        var Q8 = $('input:radio[name="question8"]:checked').val();
        var Q9 = $('input:radio[name="question9"]:checked').val();
        var Q10 = $('input:radio[name="question10"]:checked').val();

        //the following is basically one long answer key. 
        //Logical, but not practical.
        //3 answer options/results, so if, else if, else
        //++ to each result

        if(Q1 == undefined){
            unansweredCount++;
        }
        else if(Q1 == "Ritchie Valens"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q2 == undefined){
            unansweredCount++;
        }
        else if(Q2 == "Simon and Garfunkel"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q3 == undefined){
            unansweredCount++;
        }
        else if(Q3 == "Ringo Star"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
        
        if(Q4 == undefined){
            unansweredCount++;
        }
        else if(Q4 == "Detroit"){
            correctCount++;
        }
        else{
            wrongCount++;
        }
            
        if(Q5 == undefined){
            unansweredCount++;
        }
        else if(Q5 == "Jimi Hendrix"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q6 == undefined){
            unansweredCount++;
        }
        else if(Q6 == "The Jackson 5"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q7 == undefined){
            unansweredCount++;
        }
        else if(Q7 == "Earth, Wind, and Fire"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q8 == undefined){
            unansweredCount++;
        }
        else if(Q8 == "Creedence Clearwater Revival"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q9 == undefined){
            unansweredCount++;
        }
        else if(Q9 == "Yellow Brick Road"){
            correctCount++;
        }
        else{
            wrongCount++;
        }

        if(Q10 == undefined){
            unansweredCount++;
        }
        else if(Q10 == "The Supremes"){
            correctCount++;
        }
        else{
            wrongCount++;
        }


        //display results tally to results div
        $("#correctAns").html(correctCount);
        $("#wrongAns").html(wrongCount);
        $("#unAns").html(unansweredCount);


    }


    //checking player answers
    //this is the style we covered in workshop, but not 100% comprehended
    // so I'll stick to my original long style and apply some of the stuff discovered in workshop 

    //    var answerKey = {
    //        question1: 2,
    //        question2: 2,
    //        question3: 2,
    //        question4: 2,            
    //        question5: 2,
    //        question6: 2,
    //        question7: 2,
    //        question8: 2,
    //        question9: 2,
    //        question10: 2
    //    }
    //
    //    $(".btn").on("click", function(event){
    //        event.preventDefault()
    //
    //        $(".answers").each(function(){
    //            var correctTotal = 0;  
    //            if ($(this).is(":checked")=== true){        //as soon as they click on the button, make it true
    //               console.log($(this).is(":checked")=== true);
    //
    //                var q =$(this).attr("name");            //goes to the right question
    //                var ans =$(this).attr("data-answer");   //gets the player's answer
    //                    if (ans == answerKey[q]){           //compares it to correct answer, q is a string that is referring to question1
    //                        correctTotal++;                 //if the answers match (are =), increment their score
    //                    }
    //                
    //            }
    //        })   
    //    })
    



//still need
    //to display correct, wrong, and unanswered count
    //probaby a better function that actually registers user input and can tally, collect that info

    //reset game button
    




});




