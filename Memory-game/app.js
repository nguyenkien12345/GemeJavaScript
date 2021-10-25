document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');

    // Card options
    const cardArray = [
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        }
    ]

    // Random position of card
    cardArray.sort(() => 0.5 - Math.random());

    // Create your board
    function createBorad(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    };

    var cardsChosen = []; 
    var cardsChosenID = [];
    var cardsWon = [];

    // Flip your card
    function flipCard(){
        // Get ID Card
        var cardID = this.getAttribute('data-id');
        // Add to cardsChosen
        cardsChosen.push(cardArray[cardID].name);
        // Add to cardsChosenID
        cardsChosenID.push(cardID);
        // Change property src of Image 
        this.setAttribute('src',cardArray[cardID].image);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500);
        }
    };

    // Check for matches
    function checkForMatch(){
        // Get All Card (Because img can setAttribute)
        var cards = document.querySelectorAll('img');
        // Get the position of the 1st card
        var optionOneID = cardsChosenID[0];
        // Get the position of the 2nd card
        var optionTwoID = cardsChosenID[1];
        // Compare 2 card
        if(cardsChosen[0] === cardsChosen[1]){
            cards[optionOneID].setAttribute('src','images/white.png');
            cards[optionTwoID].setAttribute('src','images/white.png');
            alert('You Found A Match');
            cardsWon.push(cardsChosen);
        }
        else{
            cards[optionOneID].setAttribute('src','images/blank.png');
            cards[optionTwoID].setAttribute('src','images/blank.png');
            alert('Sorry Try A Gain');
        }
        // Reset
        cardsChosen = [];
        cardsChosenID = [];
        // Display Result
        resultDisplay.textContent = cardsWon.length;
        // Won the game
        if(cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = 'Congratulations! You Found Them All';
        }
    };

    function start(){
        createBorad();
    };

    start();


})