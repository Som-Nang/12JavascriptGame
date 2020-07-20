// Challenge 1 Your Age
function ageInDays(){
    var birthYear = prompt('What year were you born...Good friend?');
    var ageInDayss = ( 2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' day');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset(){
    document.getElementById('ageInDays').remove();
}
// Challenge 1 Your Age

// Challenge Cat 2: Generator
function generateCat(){
    var img = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    img.src = "http://thecatapi.com/api/images/get?format=src&type=gif'&size=small";
    div.appendChild(img);
}
// Challenge Cat 2: Generator


// Challenge 3: rook paper sciscor

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);  // [0,1] human lost bot won
    console.log(results);

    message = finalMessage(results);
    console.log(message); // {'message': 'you won', 'color: 'green'}
    
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
    
}
function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5){
        return {'message': 'You tried!', 'color': 'yellow'};
    }
    else {
        return{ 'message': 'You won!', 'color': 'green'};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // let's remove all image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src ='" + imageDatabase[humanImageChoice] 
    + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"

    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] 
    + "; front-size: 60px; padding: 30px; '>" + finalMessage ['message'] + "</h1>"

    botDiv.innerHTML = "<img src ='" + imageDatabase[botImageChoice] 
    + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(233, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}
// Challenge 3: rook paper sciscor

// Challenge 4: Change color Of all button
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red') {
    buttonsRed();
    } else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }else if(buttonThingy.value == 'reset'){
        buttonsColorReset();
    }else if(buttonThingy.value == 'random'){
        randomColor();
    }
}
function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset(){
    for ( let i = 0 ; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor(){
   let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for( let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
// Challenge 4: Change color Of all button

// Challenge 5
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardMap': {'2':2, '3':3, '4':4, '5':5, "6":6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
    'win': 0,
    'losses':0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('blackjack_assets/sounds/swish.m4a');
const winSound = new Audio('blackjack_assets/sounds/cash.mp3');
const lossSound = new Audio('blackjack_assets/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if(blackjackGame['isStand'] === false){
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    }
}
function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `blackjack_assets/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){
    //showResult(computeWinner());
 if(blackjackGame['turnsOver'] === true){

    blackjackGame['isStand'] = false;
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(i=0; i < yourImages.length; i++){
        yourImages[i].remove();
    }
    for(i=0; i < dealerImages.length; i++){
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack').style.color = 'black';
    
    blackjackGame['turnOver'] = true;
    }
}
function updateScore(card, activePlayer){
    if (card === 'A'){
    //if adding 11 keep me below at 21, add 11. Otherwise add 1
        if(activePlayer['score'] + blackjackGame['cardMap'][card][1]<=21){
            activePlayer['score'] += blackjackGame['cardMap'][card][1];
        } else{
            activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    }else{
        activePlayer['score'] += blackjackGame ['cardMap'][card];
    }
}

function showScore(activePlayer){
    if (activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner(); 
    showResult(winner);
}

// compute winner and return who just won game
// update the win , draw and losses
function computeWinner(){
    let winner;

    if(YOU['score'] <= 21){
        //condition : hight score than dealer or when dealer bust but  you're 
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['win']++;
            winner = YOU;
        }else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner = DEALER;
        }else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }

        //condition:When user bursts but dealer dosen't
    }else if (YOU['score'] > 21 && DEALER['score'] <= 21 ){
        blackjackGame['losses']++;
        winner = DEALER

        // condition : Dealer  and you Busts
    }else if(YOU['score'] > 21 && DEALER['score'] > 21 ){
        blackjackGame['draws']++;
    }

    console.log(blackjackGame);
    return winner;

}

function showResult(winner) {
    let message, messageColor;
    if(blackjackGame['turnsOver'] === true){

        if (winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['win'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses']
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }else{
            document.querySelector('#draws').textContent = blackjackGame['draws']
            message = 'You drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

// Challenge 5


