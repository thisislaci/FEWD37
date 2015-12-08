
// $(document).ready( function() {

  function displayTime() {

    var currentTime = new Date();

    var hours = currentTime.getHours();
    addZero(hours);
    var minutes = currentTime.getMinutes();
    addZero(minutes);
    var seconds = currentTime.getSeconds();
    addZero(seconds);

    var clockDiv = document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;

    var t = setTimeout(displayTime, 500);

  };

    displayTime();

function addZero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
