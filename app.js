//declare a global variable called computer_win_count and player_win_count and set both value to 0

let computer_win_count = 0;
let player_win_count = 0;
let draw_count = 0;

// Create a function called getUserInput
// Inside getUserInput:
//     -get user input by using prompt and assign it to a variable named user_input
//     -then return the user_input in a lowercase form

function getUserInput(){
    let user_input = prompt("Choose: (rock,paper,scissor)");
    return user_input.toLowerCase();

}


// Create a function called getRandomNumber with parameter named array_length
// Inside getRandomNumber:
//     -assign a random number to variable called random_num
//     -return the random_num


function getRandomNumber(array_length){
    let random_num = Math.floor(Math.random() * array_length);
    return random_num;
}


// Create a function called computerPlay
// Inside this function:
//     -create an array called computer_choices, containing three elements such as rock, paper and scissor.
//     -assign a function called getRandomNumber to a variable called computer_choice with the length of the computer_choices as an argument of the function.
//     -return the computer_choice


function computerPlay(){
    const computer_choices = ['rock','paper','scissor'];
    let choice_num = getRandomNumber(computer_choices.length);
    return computer_choices[choice_num];
}


// Create a function called playRound with two parameter called playerSelection and computerSelection
// Inside this function:
//     - Compare the user input to computer_choice
//         -if computerSelection is paper and the playerSelection is rock then increment the computer_win_count and return "Computer Win in this round! Paper beats Rock"
//         -else increment the player_win_count and return "You Win in this round! Paper beats Rock"

//         -if computerSelection is scissor and the playerSelection is paper then increment the computer_win_count and return "Computer Win in this round! Scissor beats paper"
//         -else increment the player_win_count and return "You Win in this round! Scissor beats paper"

//         -if computerSelection is rock and the playerSelection is scissor then increment the computer_win_count and return "Computer Win in this round! rock beats scissor"
//         -else increment the player_win_count and return "You Win in this round! Scissor beats paper"



function playRound(playerSelection, computerSelection){
    console.log(`Player Selection: ${playerSelection}
Computer Selection: ${computerSelection}`);

    if(computerSelection === "paper" && playerSelection === "rock"){
        computer_win_count++;
        return "Computer Win in this round! Paper beats Rock";
    }else if (computerSelection === "rock" && playerSelection === "paper"){
        player_win_count++;
        return "You Win in this round! Paper beats Rock";
    }else if (computerSelection === "paper" && playerSelection === "paper"){
        draw_count++;
        return "Round Draw! Paper and Paper";
    }


    if(computerSelection === "scissor" && playerSelection === "paper"){
        computer_win_count++;
        return "Computer Win in this round! Scissor beats Paper";
    }else if(computerSelection === "paper" && playerSelection === "scissor"){
        player_win_count++;
        return "You Win in this round! Scissor beats Paper";
    }else if (computerSelection === "scissor" && playerSelection === "scissor"){
        draw_count++;
        return "Round Draw! scissor and scissor";
    }


    if(computerSelection === "rock" && playerSelection === "scissor"){
        computer_win_count++;
        return "Computer Win in this round! Rock beats Scissor";
    }else if (computerSelection === "scissor" && playerSelection === "rock"){
        player_win_count++;
        return "You Win in this round! Rock beats Scissor";
    }else if (computerSelection === "rock" && playerSelection === "rock"){
        draw_count++;
        return "Round Draw! Rock and Rock";
    }
}


// Create a function called game
// Inside this function:
//     -create a variable called round and set the value to 1
//     -create a variable called keepPlaying with the value of  true
//     -create a while loop then pass in the keepPlaying variable
//     Inside the loop:
//         -display the winner by calling the function playRound and passing the function getUserInput and computerplay as argument
//         -create and if statement that check if the round is already 5:
//             -if round is already 5 then set the value of keepPlaying to false then display the overall winner by using another if statement
//                 -if player_win_count > computer_win_count then display "Congratualations! You are the winner of the game"
//                 -if player_win_count < computer_win_count then display "Better luck next time! Refresh the page to play again."
//                 -else if player_win_count === computer_win_count then display "It's a draw"
//                 -display the player_win_count and computer_win_count
//                 -reset player_win_count and computer_win_count by assigning 0



function game(){
    let round = 1;
    let keepPlaying = true;

    while(keepPlaying){
        console.log(playRound(getUserInput(),computerPlay()));
        if(round === 5){
            if(player_win_count > computer_win_count){
                console.log("Congratualations! You are the winner of the game");

            }else if(player_win_count < computer_win_count){
                console.log("Better luck next time! Refresh the page to play again.");
            }else{
                console.log("It's a draw!");
            }
            console.log(`Overall Score:
                You: ${player_win_count}
                Computer: ${computer_win_count}
                Draw: ${draw_count}`);
            player_win_count = 0 ;
            computer_win_count = 0;
            keepPlaying = false;
        }
        round++;
    }
}

game();




    