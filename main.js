$(document).ready( function(){
var $rock = $('#Rock')
var $paper = $('#Paper')
var $scissors = $('#Scissors')
var $drawLbl = $('#drawLabel')
var $winLbl = $('#winLabel')
var $loseLbl = $('#loseLabel')
var wins = 0
var lose = 0
var draw = 0



$rock.on('click', function(e) {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'Rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
    $('#userChoice').text('You chose: Rock')
    $('#compChoice').text('Computer chose:' + computerChoice)
    
    user = e.target.id

    if (user === computerChoice) {
        $('#results').text('Tie')
        draw += 1
        $drawLbl.text('Draws:' + draw)
    } else if (computerChoice === 'Paper') {
        $('#results').text('Lose')
        lose += 1
        $loseLbl.text('Losses:' + lose)
    } else {
        $('#results').text('Win')
        wins += 1
        $winLbl.text('Wins:' + wins)
    }
        
})

$paper.on('click', function(e) {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'Rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
    $('#userChoice').text('You chose: Paper')
    $('#compChoice').text('Computer chose:' + computerChoice)

    user = e.target.id

    if (user === computerChoice) {
        $('#results').text('Tie')
        draw += 1
        $drawLbl.text('Draws:' + draw)
    } else if (computerChoice === 'Scissors') {
        $('#results').text('Lose')
        lose += 1
        $loseLbl.text('Losses:' + lose)
    } else {
        $('#results').text('Win')
        wins += 1
        $winLbl.text('Wins:' + wins)
    }
})
$scissors.on('click', function(e) {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'Rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
    $('#userChoice').text('You chose: Scissors')
    $('#compChoice').text('Computer chose:' + computerChoice)

    user = e.target.id

    if (user === computerChoice) {
        $('#results').text('Tie')
        draw += 1
        $drawLbl.text('Draws:' + draw)
    } else if (computerChoice === 'Rock') {
        $('#results').text('Lose')
        lose += 1
        $loseLbl.text('Losses:' + lose)
    } else {
        $('#results').text('Win')
        wins += 1
        $winLbl.text('Wins:' + wins)
    } 
})

})