
var stopLight = document.querySelector(".stop-light")

var stopControl = document.querySelector(".control-stop");
var slowControl = document.querySelector(".control-slow");
var goControl = document.querySelector(".control-go");
var cautionControl = document.querySelector(".control-caution");

stopControl.addEventListener("click", stop);
slowControl.addEventListener("click", slow);
goControl.addEventListener("click", go);
cautionControl.addEventListener("click", caution);

function stop(event) {
  event.preventDefault();
  stopLight.classList.add("stop-light-stop");
  stopLight.classList.remove("stop-light-slow");
  stopLight.classList.remove("stop-light-go");
}

function slow(event) {
  event.preventDefault();
  stopLight.classList.remove("stop-light-stop");
  stopLight.classList.add("stop-light-slow");
  stopLight.classList.remove("stop-light-go");
}

function go(event) {
  event.preventDefault();
  stopLight.classList.remove("stop-light-stop");
  stopLight.classList.remove("stop-light-slow");
  stopLight.classList.add("stop-light-go");
}
