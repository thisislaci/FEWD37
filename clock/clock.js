

function addZero(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

  function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var clockDiv = document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;

    var t = setTimeout(displayTime, 500);

  };

    displayTime();
