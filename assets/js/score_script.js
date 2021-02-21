if (window.localStorage) {
    var winner = localStorage.getItem('initials', initials.value);
    var score = localStorage.getItem('time', time.value);

    document.getElementById(winner)
    document.getElementById(score)
}