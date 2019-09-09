//below code forces page to load before javascript activates.
$(document).ready(function () {
    //player is shown a random goal number to work to. 19-120. 
    //math.floor with a range needs the range between the two numbers(+1) + the lower number. -TESTED ON W3SCHOOLS
    var computerNum = Math.floor((Math.random() * 102) + 19);
    $(".computerNum").html(computerNum)
    var wins = 0;
    var losses = 0;
    //initial total to work from. going forward use value attr and pull from it for math
    var playerTotal = 0;
    //4 total buttons, bottom of page. 
    //each button (crystal) needs to have a random number. (math.floor(math.random)) range of 1-12. I am setting the
    //random number that is generated to the value attribute of the images for adding below.
    var button1 = Math.floor((Math.random() * 12) + 1);
    $(".button1").attr("value", button1)
    var button2 = Math.floor((Math.random() * 12) + 1);
    $(".button2").attr("value", button2)
    var button3 = Math.floor((Math.random() * 12) + 1);
    $(".button3").attr("value", button3)
    var button4 = Math.floor((Math.random() * 12) + 1);
    $(".button4").attr("value", button4)

    //reset function, changes the computer's number and value attr of buttons to once again random numbers.
    //it also reloads the logic for the lucky diamond, so it can occur more than once.
    var reset = function () {
        computerNum = Math.floor((Math.random() * 102) + 19);
        $(".computerNum").html(computerNum)
        button1 = Math.floor((Math.random() * 12) + 1);
        $(".button1").attr("value", button1)
        button2 = Math.floor((Math.random() * 12) + 1);
        $(".button2").attr("value", button2)
        button3 = Math.floor((Math.random() * 12) + 1);
        $(".button3").attr("value", button3)
        button4 = Math.floor((Math.random() * 12) + 1);
        $(".button4").attr("value", button4)
        playerTotal = 0;
        if (computerNum % 10 === 0) {
            $("#lucky").empty()
            $("#lucky").append("<img id='diamond' src='assets/images/diamond.png' alt='diamond'>")
        }
        else {
            return;
        };
        //The diamond ID is added above, and the entire div is cleared when this button is used.
        $("#diamond").on("click", function () {
            wins++;
            $("#wins").html(wins)
            $("#lucky").empty()
            reset();
        })

    }



    //function for adding button's value to total score
    $("img").on("click", function () {
        //"this" below refers to $("img").on above, NOT the window.
        //parseInt is used to take the number as an integer instead of a string. 
        //+= is the syntax for x = x + y
        var newTotal = playerTotal += parseInt($(this).attr("value"));
        $(".playerTotal").html(newTotal);

        //shout out to http://jsfiddle.net/UWYzr/ for showing me you can switch (true)
        switch (true) {
            case (newTotal === computerNum):
                wins++;
                //write wins to html's span for wins
                $("#wins").html(wins)
                //game restarts regardless of outcome
                //reset() for all numbers, no page refresh.
                reset();
                break;
            case (newTotal > computerNum):
                losses++;
                //write losses to html's span for losses.
                $("#losses").html(losses)
                //game restarts regardless of outcome
                //reset() for all numbers, no page refresh.
                reset()
                break;
            default:
                return;
        }
    });

    //the % works as a remainder operator. this statements works on the logic of "if the remainder(not answer) of computerNum/10 is 0,
    //it is divisible by 10 and the logic should run to make lucky diamond appear."
    if (computerNum % 10 === 0) {
        $("#lucky").empty()
        $("#lucky").append("<img id='diamond' src='assets/images/diamond.png' alt='diamond'>")
    }
    else {
        return;
    }

    //The diamond ID is added above, and the entire div is cleared when this button is used.
    $("#diamond").on("click", function () {
        wins++;
        $("#wins").html(wins)
        $("#lucky").empty()
        reset();
    })

});

//This way also works for the main game logic, but I use it often. I opted to learn switch statements instead.
//Stack overflow says the switch method is measurably slower than if/else logic.

//player wins if total score matches the random goal number. wins increase
//     if (newTotal == computerNum) {
//         wins++;
//         //write wins to html's span for wins
//         $("#wins").html(wins)
//         //game restarts regardless of outcome
//         //reset() for all numbers, no page refresh.
//         reset();
//     }
//player busts if it goes over. losses increase
//     else if (newTotal > computerNum) {
//         losses++;
//         //write losses to html's span for losses.
//         $("#losses").html(losses)
//         //game restarts regardless of outcome
//         //reset() for all numbers, no page refresh.
//         reset()
//     }

//     })

