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
       else if (randomNum !== 1) {
         $("#output" + currentPlayer).hide();
         total+=randomNum;
         document.getElementById('total' + currentPlayer).innerHTML = total;
       } else {
          nextPlayer();
            }
        }
}
var holdDice = function()  {
 if (active) {

     Tally[currentPlayer] += total;

     document.getElementById('result' + currentPlayer).innerHTML = Tally[currentPlayer];

     if (Tally[currentPlayer] >= 100) {
         document.getElementById("winner"+ currentPlayer).innerHTML = "You Won!!!!!";

         active = false;
