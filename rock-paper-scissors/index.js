function rpsGame(yourChoice) {
    console.log(yourChoice.src);
    var humanChoice, compChoice;
    humanChoice = yourChoice.id;
    compChoice = numberToChoice(randToRpsInt());
    // console.log(compChoice);
    console.log('computer choice', compChoice);
    results = decideWinner(humanChoice, compChoice); // [0, 1] human Win and comp lost
    console.log(results);
  
    message = finalMessage(results); //{'message' :'You won', 'color': 'green}
    console.log(message);
    rpsFrontEnd(yourChoice.id, compChoice, message); 
  }
  
  function randToRpsInt() {
    return Math.floor(Math.random() * 3);
  }
  
  function numberToChoice(number) {
    return ['rock','paper', 'scissors'][number];
  }
  
  function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
      'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
      'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
      'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    } 
  
    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]
  
    return [yourScore, computerScore]
  }
  
  function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
      return {'message': 'You lost', 'color': 'red'};
    } else if(yourScore === 0.5){
      return {'message': 'Tied', 'color': 'yellow'};
    } else {
      return {'message': 'You won', 'color': 'green'};
    }
  }
  
  function rpsFrontEnd(humanImageChoice, compImageChoice, finalMessage) {
    var imageDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
  
    var humanDiv = document.createElement('div');
    var compDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
  
    humanDiv.innerHTML = "<img src='" +  imageDatabase[humanImageChoice] + "' height=160 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style = 'color; " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" +  finalMessage['message'] +"</h1>"
    compDiv.innerHTML = "<img src='" +  imageDatabase[compImageChoice] + "' height=160 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
  
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(compDiv);
  }