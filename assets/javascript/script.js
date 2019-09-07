//theme of game TBD. Use base for now, change styling later. styling does not matter until script is completed.

//player is shown a random goal number to work to. 19-120. 
//Math.floor((Math.random() * 102) + 19);
//math.floor with a range needs the range between the two numbers(+1) + the lower number. -TESTED ON W3SCHOOLS
var computerNum = Math.floor((Math.random() * 102) + 19);
$(".computerNum").html(computerNum)
var wins = 0;
//write wins to html's span for wins
$("#wins").html(wins)
var losses = 0;
//write losses to html's span for losses.
$("#losses").html(losses)
//initial total to work from. going forward use value attr and pull from it for math
var playerTotal = 0;
//4 total buttons, bottom of page. 
//each button (crystal) needs to have a random number. (math.floor(math.random)) range of 1-12. I am using the value attribute to hold
//the random number for ease of adding the numbers.
//Math.floor((Math.random() * 12) + 1);
//math.floor with a range needs the range between the two numbers(+1) + the lower number.
var button1 = Math.floor((Math.random() * 12) + 1);
$(".button1").attr("value",button1)

var button2 = Math.floor((Math.random() * 12) + 1);
$(".button2").attr("value",button2)

var button3 = Math.floor((Math.random() * 12) + 1);
$(".button3").attr("value",button3)

var button4 = Math.floor((Math.random() * 12) + 1);
$(".button4").attr("value",button4)
console.log($(".button4").attr)


//number needs to be hidden besides from watching it add to player total. Display player total.

//reset function
var reset = function() {
button1 = Math.floor((Math.random() * 12) + 1);
$(".button1").attr("value",button1)
button2 = Math.floor((Math.random() * 12) + 1);
$(".button2").attr("value",button2)
button3 = Math.floor((Math.random() * 12) + 1);
$(".button3").attr("value",button3)
button4 = Math.floor((Math.random() * 12) + 1);
$(".button4").attr("value",button4)
computerNum = Math.floor((Math.random() * 102) + 19);
playerTotal = 0;
}

//add random button number to total score
$("img").on("click", function() {
    //"this" below refers to $("img").on above, NOT the window.
    var newTotal = playerTotal += parseInt($(this).attr("value"));
    $(".playerTotal").html(newTotal);
   //player wins if total score matches the random goal number. wins ++
    if (newTotal == computerNum) {
        wins ++;
        //game restarts regardless of outcome
        //reset() for all numbers, no page refresh.
        reset();
    }
    //player busts if it goes over. losses ++
    if (newTotal > computerNum) {
        losses ++;
        //game restarts regardless of outcome
        //reset() for all numbers, no page refresh.
        reset()
    }

    })
//display wins+losses directly on page with $("#id").html(var). 

