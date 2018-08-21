$(document).ready( function(){
var $rock = $('#Rock')
var $paper = $('#Paper')
var $scissors = $('#Scissors')


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
    if (user === computerChoice)
    return $('#results').text('Tie')

    switch(user) {
        case 'Rock':
        return computerChoice === 'Paper' ? $('#results').text('Lose') : $('#results').text('Win')
        case 'Paper':
        return computerChoice === 'Scissors' ? $('#results').text('Lose') : $('#results').text('Win')
        case 'Scissors':
        return computerChoice === 'Rock' ? $('#results').text('Lose') : $('#results').text('Win')
        default:
        return
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
    if (user === computerChoice)
    return $('#results').text('Tie')

    switch(user) {
        case 'Rock':
        return computerChoice === 'Paper' ? $('#results').text('Lose') : $('#results').text('Win')
        case 'Paper':
        return computerChoice === 'Scissors' ? $('#results').text('Lose') : $('#results').text('Win')
        case 'Scissors':
        return computerChoice === 'Rock' ? $('#results').text('Lose') : $('#results').text('Win')
        default:
        return
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
    if (user === computerChoice)
    return $('#results').text('Tie')

    switch(user) {
        case 'Rock':
        return computerChoice === 'Paper' ? $('#results').text('Lose') : $('#results').text('Win')
        case 'Paper':
        return computerChoice === 'Scissors' ? $('#results').text('Lose') : $('#results').text('Win')
        case 'Scissors':
        return computerChoice === 'Rock' ? $('#results').text('Lose') : $('#results').text('Win')
        default:
        return
    }   
})

})