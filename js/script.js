//back ends
var tally = [0,0]
var total = 0;
var currentPlayer = 0;
var active = true;
$(document).ready(function(){
  document.querySelector('.player1').classlist.add('active')
  var rollDice = function() {

  if (active) {
      var randomNum = Math.floor(Math.random() * 6 + 1);
      document.getElementById('rolled' + currentPlayer).innerHTML = "you rolled:" + randomNum;

      if (randomNum == 1) {
         $("#output" + currentPlayer).show();
          nextPlayer();
       }
}
