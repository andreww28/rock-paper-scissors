let computer_win_count = 0;
let player_win_count = 0;
let win = false;

const container = document.querySelector(".container");

const paper = document.querySelector(".box-paper");
const rock = document.querySelector(".box-rock");
const scissor = document.querySelector(".box-scissor");

const paper_img = document.querySelector(".paper");
const rock_img = document.querySelector(".rock");
const scissor_img = document.querySelector(".scissor");

const selection_class = document.querySelector('.selection');
const player_selection = document.querySelector(".player-selection");
const computer_selection = document.querySelector(".computer-selection");

const selections = [paper,rock,scissor];

const player_name = document.querySelector(".player-name");
const player_score = document.querySelector(".your-score");
const computer_score = document.querySelector(".computer-score");

const sub_title = document.querySelector("#sub-title");
const comment_text = document.querySelector("#comment");



function selected_image_display(player, object, src){
    let currentPlayer;
    if(player === "computer"){
         currentPlayer = computer_selection;

         if(object === "weapon1" || object === "box-rock"){
            src = "img\\rock-flip.png";
         }

    }else if(player === "player"){
        currentPlayer = player_selection;

        if(object === "weapon3" || object === "box-scissor"){
            src = "img\\scissor-flip.png";
        }

    }

    if(object === "weapon1" || object === "box-rock"){
        currentPlayer.style.maxWidth = "6em";
    }else if(object === "weapon2" || object === "box-paper"){
        currentPlayer.style.maxWidth = "4em";
    }else if(object === "weapon3" || object === "box-scissor"){
        currentPlayer.style.maxWidth = "4.5em";
    }

    if(src != undefined){
        currentPlayer.src = src;
    }
}


function getUserInput(){
    selections.forEach((selection) => {
        selection.addEventListener('click', (e) => {
            selected_image_display(player = "player", object = e.target.classList[1], src = e.target.src);
            if(e.target.classList[1] != "box"){
                computerPlay();
            }
            
        });
    });

}


function getRandomNumber(array_length){
    let random_num = Math.floor(Math.random() * array_length);
    return random_num;
}



function computerPlay(){ 
    let choice_num = getRandomNumber(selections.length);
    let image_src_collection = [paper_img, rock_img, scissor_img];
    let image_class = selections[choice_num].className.split(" ");

    selected_image_display(player = "computer", object = image_class[0], src = image_src_collection[choice_num].src);
    playRound();
}


function playRound(){
    let computer_img_path = computer_selection.src.split("/");
    let computerSelection = computer_img_path[computer_img_path.length -1].split("-")[0];

    let player_img_path = player_selection.src.split("/");
    let playerSelection = player_img_path[player_img_path.length -1].split("-")[0];
    
    let comment;

    if(computerSelection === "paper" && playerSelection === "rock"){
        computer_win_count++;
        comment = "Computer Win in this round! Paper beats Rock";
    }else if (computerSelection === "rock" && playerSelection === "paper"){
        player_win_count++;
        comment = "You Win in this round! Paper beats Rock";
    }else if (computerSelection === "paper" && playerSelection === "paper"){
        comment = "Round Draw! Paper and Paper";
    }


    if(computerSelection === "scissor" && playerSelection === "paper"){
        computer_win_count++;
        comment = "Computer Win in this round! Scissor beats Paper";
    }else if(computerSelection === "paper" && playerSelection === "scissor"){
        player_win_count++;
        comment = "You Win in this round! Scissor beats Paper";
    }else if (computerSelection === "scissor" && playerSelection === "scissor"){
        comment = "Round Draw! scissor and scissor";
    }


    if(computerSelection === "rock" && playerSelection === "scissor"){
        computer_win_count++;
        comment = "Computer Win in this round! Rock beats Scissor";
    }else if (computerSelection === "scissor" && playerSelection === "rock"){
        player_win_count++;
        comment = "You Win in this round! Rock beats Scissor";
    }else if (computerSelection === "rock" && playerSelection === "rock"){
        comment = "Round Draw! Rock and Rock";
    }

    console.log(player_win_count);
    player_score.textContent = player_win_count;
    computer_score.textContent = computer_win_count;
    comment_text.textContent = comment;

    declare_winner();
}


function declare_winner(){
    if (player_win_count === 5){
        comment_text.textContent = "Congratualations! You Win!"
    }else if (computer_win_count === 5){
        comment_text.textContent = "You lose! Please Try again.";
    }

    if(player_win_count === 5 || computer_win_count === 5){
        win = true;
        player_win_count = 0;
        computer_win_count = 0;
        sub_title.textContent = "";
    }
    create_button("Play Again");

}


function manipulate_content(action, all_content="false"){
    weapon_div = document.querySelector(".weapon-div");
    versus_div = document.querySelector(".versus-div");

    if (action === "remove"){
        weapon_div.style.display = "none";

        if(!all_content){
            return;
        }
        versus_div.style.display = "none";

    }else if(action == "add"){
        weapon_div.style.display = "block";

        if(!all_content){
            return;
        }

        versus_div.setAttribute("style", `display: block;
                                          margin:1.5em auto;
                                          width:100%;
                                          max-width:30em;
                                          display:grid;
                                          grid-template-columns: 1fr 1fr 1fr;
                                          align-items:center;
                                          justify-items:center;`);

    }
}


function create_button(content){
    let btn_div = document.createElement("div");
    let button = document.createElement("button");

    btn_div.classList.add("btn-div");
    button.classList.add("btn");
    button.textContent = content;

    if(content == "Submit"){
        const input_field = document.createElement("input");
        input_field.setAttribute("type","text");
        input_field.setAttribute("value","");
        input_field.setAttribute("placeholder","Name");
        input_field.setAttribute("autocomplete","false");

        btn_div.appendChild(input_field); 
        manipulate_content("remove", all_content = true);

        input_field.setAttribute("style", "width: 100%; max-width: 10em; font-size: inherit; border:none; outline:none; background:transparent; border-bottom: 2px solid #3B4924; color:#ececec;")
        btn_div.setAttribute("style", "height: 60%; font-size: 1.5rem;");

        button.onclick = function(){
            player_name.textContent = input_field.value;
            manipulate_content("add", all_content = true);
            btn_div.remove();
        }

    }else if(content == "Play Again"){
            manipulate_content("remove", all_content = false);
            button.onclick = function(){
            manipulate_content("add", all_content = false);
            
            player_selection.src = "img\\rock-img.png";
            computer_selection.src = "img\\rock-flip.png";
            player_selection.style.maxWidth = "6em";
            computer_selection.style.maxWidth = "6em";

            comment_text.textContent = "";
            btn_div.remove();

            if(win === true){
                sub_title.textContent = "First to 5 Wins!"
                player_score.textContent = "0";
                computer_score.textContent = "0";
                win = false;
            }
        }
    }

    btn_div.appendChild(button);
    container.appendChild(btn_div);

}


function start_game(){
    create_button("Submit");
    getUserInput();
}

start_game();

    