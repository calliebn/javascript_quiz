if (window.localStorage) {
    var winner = localStorage.getItem('initials');
    var score = localStorage.getItem('time');

    document.getElementById("initials").textContent = winner
    document.getElementById("final-score").textContent = score
}