$(document).ready( function(){
var $rock = $('#rock')
var $paper = $('#paper')
var $scissors = $('#scissors')


$rock.on('click', function(e) {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    $('#userChoice').text('You chose: rock')
    $('#compChoice').text('Computer chose:' + computerChoice)
    
    user = e.target.id
    if (user === computerChoice)
    return $('#results').text('tie')

    switch(user) {
        case 'rock':
        return computerChoice === 'paper' ? $('#results').text('lose') : $('#results').text('win')
        case 'paper':
        return computerChoice === 'scissors' ? $('#results').text('lose') : $('#results').text('win')
        case 'scissors':
        return computerChoice === 'rock' ? $('#results').text('lose') : $('#results').text('win')
        default:
        return
    }   
})
$paper.on('click', function(e) {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    $('#userChoice').text('You chose: paper')
    $('#compChoice').text('computer chose:' + computerChoice)
    user = e.target.id
    if (user === computerChoice)
    return $('#results').text('tie')

    switch(user) {
        case 'rock':
        return computerChoice === 'paper' ? $('#results').text('lose') : $('#results').text('win')
        case 'paper':
        return computerChoice === 'scissors' ? $('#results').text('lose') : $('#results').text('win')
        case 'scissors':
        return computerChoice === 'rock' ? $('#results').text('lose') : $('#results').text('win')
        default:
        return
    }   
})
$scissors.on('click', function(e) {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    $('#userChoice').text('You chose: scissors')
    $('#compChoice').text('Computer chose:' + computerChoice)
    user = e.target.id
    if (user === computerChoice)
    return $('#results').text('tie')

    switch(user) {
        case 'rock':
        return computerChoice === 'paper' ? $('#results').text('lose') : $('#results').text('win')
        case 'paper':
        return computerChoice === 'scissors' ? $('#results').text('lose') : $('#results').text('win')
        case 'scissors':
        return computerChoice === 'rock' ? $('#results').text('lose') : $('#results').text('win')
        default:
        return
    }   
})

})