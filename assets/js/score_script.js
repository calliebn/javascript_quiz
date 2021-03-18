let clearBtn = document.getElementById("clear")

if (localStorage) {
    var prevScores = JSON.parse(localStorage.getItem("saveScores")) || [];
    prevScores.forEach(function (score) {
        var liEL = document.createElement("li");
        liEL.textContent = score.initials + " - " + score.score;
        // display on page
        var ulEl = document.getElementById("score-list");
        ulEl.appendChild(liEL);
    })

    // document.getElementById("initials").textContent = winner
    // document.getElementById("final-score").textContent = score

}

clearBtn.addEventListener("click", clearScores)
function clearScores() {
    localStorage.removeItem('saveScores')
    window.location.reload()
}
