//back end
class Player {
    constructor(score, total) {
        this.score = score;
        this.total = total;
    }
}
var player1 = new Player(0, 0);
var player2 = new Player(0, 0);
$(document).ready(function() {
    $("#rollp1").click(function() {
        $(".round2").hide()
        player1.score = Math.floor((Math.random() * 6) + 1);
        $("#result1").text(player1.score);
        player1.total += player1.score;
        $("#total1").text(player1.total);
        if (player1.score === 1) {
            alert("SORRY....NEXT PLAYER")
            $(".round2").show()
        }
    })
    $("#rollp2").click(function() {
            $(".round1").hide()
            player2.score = Math.floor((Math.random() * 6) + 1);
            $("#result2").text(player2.score);
            player2.total += player2.score;
            $("#total2").text(player2.total);
            if (player1.score === 1) {
                alert("SORRY....NEXT PLAYER")
                $(".round1").show()
            }
        })
        //front end
    $("#holdp1").click(function() {
        $(".round2").hide()
    })
    $("#holdp2").click(function() {
        $(".round1").hide()
    })
})