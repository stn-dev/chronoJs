const hours = document.querySelector(".hour");
const body = document.querySelector("body")
const mins = document.querySelector(".min");
const secs = document.querySelector(".sec");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".stop");
const boule = document.querySelector(".boule")

let hour = 0
let min = 0
let sec = 0
let interval;

function timer() {

  clearInterval(interval)

  interval = setInterval(function () {
    sec++
    secs.textContent = "0" + sec;
    secs.style.color = "blue";
    if (sec > 9) {
      secs.textContent = sec;
    }
    if (sec > 59) {
      min++;
      mins.style.color = "aquamarine";
      mins.textContent = "0" + min;
      sec = 0;
      secs.textContent = "0" + sec;
    }
    if (min > 9) {
      mins.textContent = min
    }
    if (mins.textContent > 59) {
      hour++
      hours.style.color = "aqua";
      hours.textContent = "0" + hour;
      min = 0;
      mins.textContent = "0" + min;
      sec = 0;
      secs.textContent = "0" + sec;
    }
    if (hour > 9) {
      hours.textContent = hour
    }
  }, 1000)
}




start.addEventListener("click", timer)
pause.addEventListener("click", function () {
  clearInterval(interval);
})
reset.addEventListener("click", function () {
  clearInterval(interval);
  hour = 0;
  hours.textContent = "0" + hour;
  hours.style.color = "white"
  min = 0;
  mins.textContent = "0" + min;
  mins.style.color = "white"

  sec = 0;
  secs.textContent = "0" + sec;
  secs.style.color = "white"

});



boule.style.top = "";
boule.style.left = "";

window.addEventListener("mousemove", (event) => {
  boule.style.top = event.clientY + "px";
  boule.style.left = event.clientX + "px";
});







