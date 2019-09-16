### GRADED 24.5/24 : See comments below and ask for clarification as needed.
Excellent work! Nice touch to get player names.!

* Implemented colors, but there was no option to 'toggle' colors (active/deactivate colors using button or similar)
* Your label updates depending on who is in the lead, however it always says whatever playername 'is the winner' even while game still going.
* Update end game winner message to display winning player's name not number.

# frontend-halfDay1_b

### Button Clicking Game

Create a two player game similar to the image attached. When one player takes the lead, show that in the middle area.

<strong>Notes:</strong>
* PUT COMMENTS IN YOUR JAVASCRIPT
* The bottom portion of the attached image is the bonus.
* The general sizes of each button is below
* * Player Score font size is 200px
* * Button font size is 48px
* * Winner area font size is 24px
* * Footer font size is 24px

#### Step 1: (1 point)
Create an HTML and use CSS Grid to create a page similar to step1.png. If you are still working on this step after 1:45p ask for help!!!

#### Step 2: (1 point)
Create an HTML and use CSS Grid to create a page similar to step2.png.

#### Step 3: (2 points)
Create an HTML and use CSS Grid to create a page similar to step3.png.

#### Step 4: (2 points)
In a JavaScript file, once the P1 button is pressed increase the text above it by 1. Do the same for P2.

#### Step 5: (3 points)
Create a function that will print update the winner label if one player has a higher score than the other. If the have the same score, make the label say "Tied".

#### Step 6: (1 point)
Figure out where to put the function.

<hr>

## CHALLENGES

### Challenge1
Once a player reaches 15, alert the winner then restart the game.

### Challenge2
Toggle background colors on and off.

### Challenge3
Make keyboard and mouse options. Disable and stop events from counting the points when the option is not chosen. 



//Game plan

// get references to the elements
let score_counter1=0;
let score_counter2=0;
let elementButton1=document.querySelector('#button_p1');
console.log(elementButton1);//test1
let elementButton2=document.querySelector('#button_p2');
console.log(elementButton2);//test1
let elementScore1=document.querySelector('#player_one_score');
console.log(elementScore1);
let elementScore2=document.querySelector('#player_two_score');
console.log(elementScore2);

let elementWinnerLabel=document.querySelector('#winnerLabel');
console.log(elementWinnerLabel.innerText);

declareWinner();


elementButton1.addEventListener('click',scoreUpPlayer1);

function scoreUpPlayer1()
{
    score_counter1=score_counter1+1;
   elementScore1.innerText=score_counter1;
   console.log(elementScore1.innerText);
   console.log(score_counter1);
    declareWinner();
}

elementButton2.addEventListener('click',scoreUpPlayer2);

function scoreUpPlayer2()
{
    score_counter2=score_counter2+1;
    elementScore2.innerText=score_counter2;
    console.log(elementScore2.innerText);
    console.log(score_counter2);
    declareWinner();
}


function declareWinner()
{
    if (score_counter1>score_counter2)
    {
        elementWinnerLabel.innerText='Player 1 is the winner';
    }
    else if (score_counter2>score_counter1){
        elementWinnerLabel.innerText='Player 2 is the winner';
    }
    else {
        elementWinnerLabel.innerText='Tied';
    }
}
