//Refresh screen to start again once refresh button is clicked
$('.refresh').on('click', function() {
    window.location.href = window.location.href;
});

//Ask for player name input once name button is clicked, keep with cookies
var cookieVal = Cookies.get('USER_NAME');
if (cookieVal) {
    $('.your-name').text(cookieVal);
} else {
    $('.name').on('click', function() {
        var theName = prompt('Welcome to WAR! Please enter your name.');
        $('.your-name').text(theName);
        Cookies.set('USER_NAME', theName);
    });
}

//Hide the war cards for now
$('.warCards1').hide();
$('.warCards2').hide();
$('.warCards3').hide();
$('.warCards4').hide();
$('.finalWarCards').hide();
$('.warCardsTwo1').hide();
$('.warCardsTwo2').hide();
$('.warCardsTwo3').hide();
$('.warCardsTwo4').hide();
$('.finalWarCardsTwo').hide();
$('.warCardsThree1').hide();
$('.warCardsThree2').hide();
$('.warCardsThree3').hide();
$('.warCardsThree4').hide();
$('.finalWarCardsThree').hide();

//Know cards and 4 suits, need combinations of each suit with each value

//List the ranks and suits in arrays, and deck array to combine them into
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ["s", "h", "d", "c"];
var deck = []

// For loop in a for loop - for each suit, each of the ranks with that suit, push to the deck array
for (j = 0; j < suits.length; j++) {
    for (i = 0; i < ranks.length; i++) {
        var cards = (ranks[i] + suits[j]);
        deck.push(cards)
    };
};

//Test with console.log
console.log(deck);

//Randomize - shuffle deck
//Used well-known and trusted Fisher-Yates to randomize
//Math.floor returns the largest integer less than or equal to a given number
//Math.random returns a random number
//So Math.floor((Math.random() * 10) + 1); returns a random number between 1 and 10
function shuffle(deck) {
    var m = deck.length,
        t,
        n;
    //While there are elements to shuffle (haven't gone over deck/length)
    while (m) {
        // We pick a remaining element randomly
        n = Math.floor(Math.random() * m--);
        //And swap it with the current element - in a loop
        t = deck[m];
        deck[m] = deck[n];
        deck[n] = t;
    }

    //And finally return the shuffled deck
    return deck;
};

//Test with console.log calling the shuffle function of the deck
console.log(shuffle(deck));

//Test that the deck is shuffled
console.log(deck);

//Two equal stacks, random order, split the shuffled array into two new arrays - player and computer cards
//Two new arrays
var playerDeck = [];
var computerDeck = [];

//Split the shuffled cards into the two new arrays
for (y = 0; y < (deck.length / 2); y++) {
    playerDeck.push(deck[y]);
};

for (z = (deck.length / 2); z < deck.length; z++) {
    computerDeck.push(deck[z]);
};

//Test that the shuffled cards were split properly
console.log(playerDeck);
console.log(computerDeck);
//With the original deck still intact, not that it matters
console.log(deck);

//Tell how many cards each has, if 52 - end loop, winner
console.log(playerDeck.length);
console.log(computerDeck.length);

//Loop of the game itself
//Click to turn cards
$('.deal').on('click', function() {

    //The loser fades back in
    $('#warrior-text').animate({
        opacity: 1,
    });

    $('#computer-text').animate({
        opacity: 1,
    });

    //Hide the war cards for now
    $('.warCards1').hide();
    $('.warCards2').hide();
    $('.warCards3').hide();
    $('.warCards4').hide();
    $('.finalWarCards').hide();
    $('.warCardsTwo1').hide();
    $('.warCardsTwo2').hide();
    $('.warCardsTwo3').hide();
    $('.warCardsTwo4').hide();
    $('.finalWarCardsTwo').hide();
    $('.warCardsThree1').hide();
    $('.warCardsThree2').hide();
    $('.warCardsThree3').hide();
    $('.warCardsThree4').hide();
    $('.finalWarCardsThree').hide();

    //Update DOM elements - number of cards in stack, current card
    $('.playerAmount').text(playerDeck.length);
    $('.computerAmount').text(computerDeck.length);

    //Variables needed to compare and show correct war cards
    var p = 0;
    var r = 0;
    var w = 0;

    var b = 1;
    var c = 2;
    var d = 3;
    var e = 4;
    var f = 5;
    var g = 6;
    var h = 7;
    var l = 8;
    var m = 9;
    var n = 10;
    var o = 11;
    var s = 12;
    var t = 13;
    var u = 14;
    var v = 15;

    //Values of J, Q, K, A and number values
    var cardVals = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };

    //Assign the cards for comparison
    var playerCard = playerDeck[p];
    var computerCard = computerDeck[r];

    //Test above
    console.log(playerCard);
    console.log(computerCard);

    //Assign war cards
    var playerCardWar1 = playerDeck[b];
    var playerCardWar2 = playerDeck[c];
    var playerCardWar3 = playerDeck[d];
    var playerCardWar4 = playerDeck[e];
    var playerCardWar5 = playerDeck[f];
    var computerCardWar1 = computerDeck[b];
    var computerCardWar2 = computerDeck[c];
    var computerCardWar3 = computerDeck[d];
    var computerCardWar4 = computerDeck[e];
    var computerCardWar5 = computerDeck[f];

    //Assign war two cards
    var playerCardWarTwo1 = playerDeck[g];
    var playerCardWarTwo2 = playerDeck[h];
    var playerCardWarTwo3 = playerDeck[l];
    var playerCardWarTwo4 = playerDeck[m];
    var playerCardWarTwo5 = playerDeck[n];
    var computerCardWarTwo1 = computerDeck[g];
    var computerCardWarTwo2 = computerDeck[h];
    var computerCardWarTwo3 = computerDeck[l];
    var computerCardWarTwo4 = computerDeck[m];
    var computerCardWarTwo5 = computerDeck[n];

    //Assign war three cards
    var playerCardWarThree1 = playerDeck[o];
    var playerCardWarThree2 = playerDeck[s];
    var playerCardWarThree3 = playerDeck[t];
    var playerCardWarThree4 = playerDeck[u];
    var playerCardWarThree5 = playerDeck[v];
    var computerCardWarThree1 = computerDeck[o];
    var computerCardWarThree2 = computerDeck[s];
    var computerCardWarThree3 = computerDeck[t];
    var computerCardWarThree4 = computerDeck[u];
    var computerCardWarThree5 = computerDeck[v];

    //Drop the suit at the end for comparison if the game is not over (more than zero cards)
    if (playerDeck.length > 0) {
        var rankPlayerCard = playerCard.substring(0, playerCard.length - 1);
    } else {
        alert('You lose! Click "refresh" to play again.');
        return false;
    };

    if (computerDeck.length > 0) {
        var rankComputerCard = computerCard.substring(0, computerCard.length - 1);
    } else {
        alert('You win! Click "refresh" to play again.');
        return false;
    };

    //Show the cards
    $('.playerCard').text(playerDeck[p]);
    $('.computerCard').text(computerDeck[r]);
    $('.playerCardWar1').text(playerDeck[b]);
    $('.playerCardWar2').text(playerDeck[c]);
    $('.playerCardWar3').text(playerDeck[d]);
    $('.playerCardWar4').text(playerDeck[e]);
    $('.playerCardWar5').text(playerDeck[f]);
    $('.computerCardWar1').text(computerDeck[b]);
    $('.computerCardWar2').text(computerDeck[c]);
    $('.computerCardWar3').text(computerDeck[d]);
    $('.computerCardWar4').text(computerDeck[e]);
    $('.computerCardWar5').text(computerDeck[f]);
    $('.playerCardWarTwo1').text(playerDeck[g]);
    $('.playerCardWarTwo2').text(playerDeck[h]);
    $('.playerCardWarTwo3').text(playerDeck[l]);
    $('.playerCardWarTwo4').text(playerDeck[m]);
    $('.playerCardWarTwo5').text(playerDeck[n]);
    $('.computerCardWarTwo1').text(computerDeck[g]);
    $('.computerCardWarTwo2').text(computerDeck[h]);
    $('.computerCardWarTwo3').text(computerDeck[l]);
    $('.computerCardWarTwo4').text(computerDeck[m]);
    $('.computerCardWarTwo5').text(computerDeck[n]);
    $('.playerCardWarThree1').text(playerDeck[o]);
    $('.playerCardWarThree2').text(playerDeck[s]);
    $('.playerCardWarThree3').text(playerDeck[t]);
    $('.playerCardWarThree4').text(playerDeck[u]);
    $('.playerCardWarThree5').text(playerDeck[v]);
    $('.computerCardWarThree1').text(computerDeck[o]);
    $('.computerCardWarThree2').text(computerDeck[s]);
    $('.computerCardWarThree3').text(computerDeck[t]);
    $('.computerCardWarThree4').text(computerDeck[u]);
    $('.computerCardWarThree5').text(computerDeck[v]);

    //Test above
    console.log(rankPlayerCard);
    console.log(rankComputerCard);

    //Use the values above for comparison
    var valPlayerCard = cardVals[rankPlayerCard];
    var valComputerCard = cardVals[rankComputerCard];

    //Test above
    console.log(valPlayerCard);
    console.log(valComputerCard);

    //Comparison for winner of hand without suit, push cards to winner's array back, delete if remains
    if ((valPlayerCard) > (valComputerCard)) {
        //If player wins push cards back onto player deck
        playerDeck.push(playerDeck.shift());
        playerDeck.push(computerDeck.shift());

        //Check that the cards are correctly going to the bottom of the winner's stack
        console.log(playerDeck);
        console.log(computerDeck);

        //Show winner, fade loser
        $('#computer-text').animate({
            opacity: 0.25,
        });

    } else if ((valComputerCard) > (valPlayerCard)) {
        //If computer wins push cards back onto computer deck
        computerDeck.push(computerDeck.shift());
        computerDeck.push(playerDeck.shift());

        //Check that the cards are correctly going to the bottom of the winner's stack
        console.log(playerDeck);
        console.log(computerDeck);

        //Show winner, fade loser
        $('#warrior-text').animate({
            opacity: 0.25,
        });

    } else {

        //For tie, the 5th card after those determines who gets all 12 cards, unless there's less
        //w adjusts for less cards in each deck for the war

        //If it ends in a tie
        if (((valComputerCard) == (valPlayerCard)) && (playerDeck.length == 1)) {
            alert('It\'s a draw! Click "refresh" to play again.');
            return false;
        };

        //If it ends in a tie
        if (((valComputerCard) == (valPlayerCard)) && (computerDeck.length == 1)) {
            alert('It\'s a draw! Click "refresh" to play again.');
            return false;
        };

        //Showing war cards, but there might be less than 5 cards left
        if ((playerDeck.length > 5) && (computerDeck.length > 5)) {
            $('.warCards1').show();
            $('.warCards2').show();
            $('.warCards3').show();
            $('.warCards4').show();
            $('.finalWarCards').show();
        } else if ((playerDeck.length == 5) || (computerDeck.length == 5)) {
            $('.warCards1').show();
            $('.warCards2').show();
            $('.warCards3').show();
            $('.warCards4').show();
        } else if ((playerDeck.length == 4) || (computerDeck.length == 4)) {
            $('.warCards1').show();
            $('.warCards2').show();
            $('.warCards3').show();
        } else if ((playerDeck.length == 3) || (computerDeck.length == 3)) {
            $('.warCards1').show();
            $('.warCards2').show();
        } else if ((playerDeck.length == 2) || (computerDeck.length == 2)) {
            $('.warCards1').show();
        } else {
            alert('It\'s a draw! Click "refresh" to play again.');
            return false;
        };

        //Variables depending on deck.length to be able to compare and push
        if (playerDeck.length - p < 6) {
            p = p + (playerDeck.length - p - 1);
            r = r + (playerDeck.length - p - 1);
            w = w + (playerDeck.length - p);
        } else if (computerDeck.length - r < 6) {
            p = p + (computerDeck.length - r - 1);
            r = r + (computerDeck.length - r - 1);
            w = w + (computerDeck.length - r);
        } else {
            var p = p + 5;
            var r = r + 5;
            var w = w + 5;
        };

        //Assign the cards for comparison
        var playerCard = playerDeck[p];
        var computerCard = computerDeck[r];

        //Drop the suit at the end for comparison
        var rankPlayerCard = playerCard.substring(0, playerCard.length - 1);
        var rankComputerCard = computerCard.substring(0, computerCard.length - 1);

        //Use the values above for comparison
        var valPlayerCard = cardVals[rankPlayerCard];
        var valComputerCard = cardVals[rankComputerCard];

        //Comparison for winner of hand without suit, push cards to winner's array back, delete if remains
        if ((valPlayerCard) > (valComputerCard)) {
            //If player wins push cards back onto player deck in loop
            for (var x = 0; x < w; x++) {

                playerDeck.push(playerDeck.shift());
                playerDeck.push(computerDeck.shift());
            };

            //Check that the cards are correctly going to the bottom of the winner's stack
            console.log(playerDeck);
            console.log(computerDeck);

            //Show winner, fade loser
            $('#computer-text').animate({
                opacity: 0.25,
            });

        } else if ((valComputerCard) > (valPlayerCard)) {
            //If computer wins push cards back onto computer deck in loop
            for (var x = 0; x < w; x++) {
                computerDeck.push(computerDeck.shift());
                computerDeck.push(playerDeck.shift());
            };

            //Check that the cards are correctly going to the bottom of the winner's stack
            console.log(playerDeck);
            console.log(computerDeck);

            //Show winner, fade loser
            $('#warrior-text').animate({
                opacity: 0.25,
            });

        } else {

            //For a second tie, the 5th card after those determines who gets all 12 cards, unless there's less
            //w adjusts for less cards in each deck for the war

            //If it ends in a tie
            if (((valComputerCard) == (valPlayerCard)) && (playerDeck.length == 1)) {
                alert('It\'s a draw! Click "refresh" to play again.');
                return false;
            };

            //If it ends in a tie
            if (((valComputerCard) == (valPlayerCard)) && (computerDeck.length == 1)) {
                alert('It\'s a draw! Click "refresh" to play again.');
                return false;
            };

            //Showing war and war two cards, but there might be less than 5 cards left for war two
            if ((playerDeck.length > 10) && (computerDeck.length > 10)) {
                $('.warCards1').show();
                $('.warCards2').show();
                $('.warCards3').show();
                $('.warCards4').show();
                $('.finalWarCards').show();
                $('.warCardsTwo1').show();
                $('.warCardsTwo2').show();
                $('.warCardsTwo3').show();
                $('.warCardsTwo4').show();
                $('.finalWarCardsTwo').show();
            } else if ((playerDeck.length == 10) || (computerDeck.length == 10)) {
                $('.warCards1').show();
                $('.warCards2').show();
                $('.warCards3').show();
                $('.warCards4').show();
                $('.finalWarCards').show();
                $('.warCardsTwo1').show();
                $('.warCardsTwo2').show();
                $('.warCardsTwo3').show();
                $('.warCardsTwo4').show();
            } else if ((playerDeck.length == 9) || (computerDeck.length == 9)) {
                $('.warCards1').show();
                $('.warCards2').show();
                $('.warCards3').show();
                $('.warCards4').show();
                $('.finalWarCards').show();
                $('.warCardsTwo1').show();
                $('.warCardsTwo2').show();
                $('.warCardsTwo3').show();
            } else if ((playerDeck.length == 8) || (computerDeck.length == 8)) {
                $('.warCards1').show();
                $('.warCards2').show();
                $('.warCards3').show();
                $('.warCards4').show();
                $('.finalWarCards').show();
                $('.warCardsTwo1').show();
                $('.warCardsTwo2').show();
            } else if ((playerDeck.length == 7) || (computerDeck.length == 7)) {
                $('.warCards1').show();
                $('.warCards2').show();
                $('.warCards3').show();
                $('.warCards4').show();
                $('.finalWarCards').show();
                $('.warCardsTwo1').show();
            } else {
                $('.warCards1').show();
                $('.warCards2').show();
                $('.warCards3').show();
                $('.warCards4').show();
                $('.finalWarCards').show();
                alert('It\'s a draw! Click "refresh" to play again.');
                return false;
            };

            //Variables depending on deck.length to be able to compare and push
            if (playerDeck.length - p < 6) {
                p = p + (playerDeck.length - p - 1);
                r = r + (playerDeck.length - p - 1);
                w = w + (playerDeck.length - p);
            } else if (computerDeck.length - r < 6) {
                p = p + (computerDeck.length - r - 1);
                r = r + (computerDeck.length - r - 1);
                w = w + (computerDeck.length - r);
            } else {
                var p = p + 5;
                var r = r + 5;
                var w = w + 5;
            };

            //Assign the cards for comparison
            var playerCard = playerDeck[p];
            var computerCard = computerDeck[r];

            //Drop the suit at the end for comparison
            var rankPlayerCard = playerCard.substring(0, playerCard.length - 1);
            var rankComputerCard = computerCard.substring(0, computerCard.length - 1);

            //Use the values above for comparison
            var valPlayerCard = cardVals[rankPlayerCard];
            var valComputerCard = cardVals[rankComputerCard];

            //Comparison for winner of hand without suit, push cards to winner's array back, delete if remains
            if ((valPlayerCard) > (valComputerCard)) {
                //If player wins push cards back onto player deck in loop
                for (var x = 0; x < w; x++) {

                    playerDeck.push(playerDeck.shift());
                    playerDeck.push(computerDeck.shift());
                };

                //Check that the cards are correctly going to the bottom of the winner's stack
                console.log(playerDeck);
                console.log(computerDeck);

                //Show winner, fade loser
                $('#computer-text').animate({
                    opacity: 0.25,
                });

            } else if ((valComputerCard) > (valPlayerCard)) {
                //If computer wins push cards back onto computer deck in loop
                for (var x = 0; x < w; x++) {
                    computerDeck.push(computerDeck.shift());
                    computerDeck.push(playerDeck.shift());
                };

                //Check that the cards are correctly going to the bottom of the winner's stack
                console.log(playerDeck);
                console.log(computerDeck);

                //Show winner, fade loser
                $('#warrior-text').animate({
                    opacity: 0.25,
                });

            } else {

                //For a third tie, the 5th card after those determines who gets all 12 cards, unless there's less
                //w adjusts for less cards in each deck for the war

                //If it ends in a tie
                if (((valComputerCard) == (valPlayerCard)) && (playerDeck.length == 1)) {
                    alert('It\'s a draw! Click "refresh" to play again.');
                    return false;
                };

                //If it ends in a tie
                if (((valComputerCard) == (valPlayerCard)) && (computerDeck.length == 1)) {
                    alert('It\'s a draw! Click "refresh" to play again.');
                    return false;
                };

                //Showing war and war two cards, but there might be less than 5 cards left for war two
                if ((playerDeck.length > 15) && (computerDeck.length > 15)) {
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    $('.warCardsThree1').show();
                    $('.warCardsThree2').show();
                    $('.warCardsThree3').show();
                    $('.warCardsThree4').show();
                    $('.finalWarCardsThree').show();
                } else if ((playerDeck.length == 15) || (computerDeck.length == 15)) {
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    $('.warCardsThree1').show();
                    $('.warCardsThree2').show();
                    $('.warCardsThree3').show();
                    $('.warCardsThree4').show();
                } else if ((playerDeck.length == 14) || (computerDeck.length == 14)) {
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    $('.warCardsThree1').show();
                    $('.warCardsThree2').show();
                    $('.warCardsThree3').show();
                } else if ((playerDeck.length == 13) || (computerDeck.length == 13)) {
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    $('.warCardsThree1').show();
                    $('.warCardsThree2').show();
                } else if ((playerDeck.length == 12) || (computerDeck.length == 12)) {
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    $('.warCardsThree1').show();
                } else {
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    alert('It\'s a draw! Click "refresh" to play again.');
                    return false;
                };

                //Variables depending on deck.length to be able to compare and push
                if (playerDeck.length - p < 6) {
                    p = p + (playerDeck.length - p - 1);
                    r = r + (playerDeck.length - p - 1);
                    w = w + (playerDeck.length - p);
                } else if (computerDeck.length - r < 6) {
                    p = p + (computerDeck.length - r - 1);
                    r = r + (computerDeck.length - r - 1);
                    w = w + (computerDeck.length - r);
                } else {
                    var p = p + 5;
                    var r = r + 5;
                    var w = w + 5;
                };

                //Assign the cards for comparison
                var playerCard = playerDeck[p];
                var computerCard = computerDeck[r];

                //Drop the suit at the end for comparison
                var rankPlayerCard = playerCard.substring(0, playerCard.length - 1);
                var rankComputerCard = computerCard.substring(0, computerCard.length - 1);

                //Use the values above for comparison
                var valPlayerCard = cardVals[rankPlayerCard];
                var valComputerCard = cardVals[rankComputerCard];

                //Comparison for winner of hand without suit, push cards to winner's array back, delete if remains
                if ((valPlayerCard) > (valComputerCard)) {
                    //If player wins push cards back onto player deck in loop
                    for (var x = 0; x < w; x++) {

                        playerDeck.push(playerDeck.shift());
                        playerDeck.push(computerDeck.shift());
                    };

                    //Check that the cards are correctly going to the bottom of the winner's stack
                    console.log(playerDeck);
                    console.log(computerDeck);

                    //Show winner, fade loser
                    $('#computer-text').animate({
                        opacity: 0.25,
                    });

                } else if ((valComputerCard) > (valPlayerCard)) {
                    //If computer wins push cards back onto computer deck in loop
                    for (var x = 0; x < w; x++) {
                        computerDeck.push(computerDeck.shift());
                        computerDeck.push(playerDeck.shift());
                    };

                    //Check that the cards are correctly going to the bottom of the winner's stack
                    console.log(playerDeck);
                    console.log(computerDeck);

                    //Show winner, fade loser
                    $('#warrior-text').animate({
                        opacity: 0.25,
                    });

                } else {
                    //Show war cards
                    $('.warCards1').show();
                    $('.warCards2').show();
                    $('.warCards3').show();
                    $('.warCards4').show();
                    $('.finalWarCards').show();
                    $('.warCardsTwo1').show();
                    $('.warCardsTwo2').show();
                    $('.warCardsTwo3').show();
                    $('.warCardsTwo4').show();
                    $('.finalWarCardsTwo').show();
                    $('.warCardsThree1').show();
                    $('.warCardsThree2').show();
                    $('.warCardsThree3').show();
                    $('.warCardsThree4').show();
                    $('.finalWarCardsThree').show();
                    alert('Four wars in a row?! It\'s a draw! Click "refresh" to play again.');
                    return false;

                };

            };

        };
    };


});
