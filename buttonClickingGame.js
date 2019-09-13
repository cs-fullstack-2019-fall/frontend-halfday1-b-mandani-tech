//Game plan

// get references to the elements
let score_counter1 = 0;
let score_counter2 = 0;
let player1_Name = prompt("Enter your Name Player1");
let player2_Name = prompt("Enter your Name Player2");

let elementButton1 = document.querySelector('#button_p1');
console.log(elementButton1);//test1
let elementButton2 = document.querySelector('#button_p2');
let elementScore1 = document.querySelector('#player_one_score');
let elementScore2 = document.querySelector('#player_two_score');
let elementWinnerLabel = document.querySelector('#winnerLabel');

console.log(elementWinnerLabel.innerText);

// declareWinner();


elementButton1.addEventListener('click', scoreUpPlayer1);

function scoreUpPlayer1()
{

    score_counter1 = score_counter1 + 1;
    elementScore1.innerText = score_counter1;
    console.log(elementScore1.innerText);
    console.log(score_counter1);
    if(score_counter1 ===15)
    {
        alert(`you player1 you made a 15`);
        console.log("player1 winner");
        let score_counter1 = 0;
        let score_counter2 = 0;
        elementScore1.innerText = score_counter1;
        elementScore2.innerText = score_counter2;
    }
    declareWinner();
}


elementButton2.addEventListener('click', scoreUpPlayer2);

function scoreUpPlayer2()
{
    score_counter2 = score_counter2 + 1;
    elementScore2.innerText = score_counter2;
    console.log(elementScore2.innerText);
    console.log(score_counter2);
    if(score_counter2 ===15)
    {
        alert(`you player 2 you made a 15`);
        console.log("player 2 winner");
        let score_counter1 = 0;
        let score_counter2 = 0;
        elementScore1.innerText = score_counter1;
        elementScore2.innerText = score_counter2;
    }
    declareWinner();

}


function declareWinner()
    {


        if (score_counter1 > score_counter2)
        {
            elementWinnerLabel.innerText = `Player 1 : ${player1_Name} is the winner`;

        } else if (score_counter2 > score_counter1)
        {
            elementWinnerLabel.innerText = `Player 2 : ${player2_Name} is the winner`;
        } else
        {
            elementWinnerLabel.innerText = 'Tied';
        }
    }



