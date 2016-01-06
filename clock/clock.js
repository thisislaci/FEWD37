

function addZero(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

  function displayTime() {

    var currentTime = new Date();
    var hours = addZero(currentTime.getHours());
    var minutes = addZero(currentTime.getMinutes());
    var seconds = addZero(currentTime.getSeconds());

    $("#clock").html(hours + ":" + minutes + ":" + seconds);


    var t = setTimeout(displayTime, 500);

  };

    displayTime();
