/* Dark Mode */

// Select the button
const btn = document.querySelector(".button-toggle");

//loading 
const loading = document.querySelector(".hide-if-loading");

//Display loader for 3 seconds
setTimeout(() => {
  loading.classList.remove("hide-if-loading");
  document.querySelector(".loading").classList.remove("loading");
},3000)

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  document.getElementById("foot").classList.toggle("dark-theme");
  document.getElementById("zombie-button").classList.toggle("dark-theme");
  //on click swap out btn text
  btn.innerHTML = (btn.innerHTML.indexOf('Go Light') > -1) ? 'Go Dark' : 'Go Light';
  btn.classList.toggle("dark-theme");
});


function zombieprompt() {
  let txt;
  let location = prompt("Please enter where you are living:", "Zip Code");
  if (location == null || location == "") {
    txt = "We tried to warn you...";
  } else {
    txt = "Please evacuate immediately, there are " + Math.ceil(Math.random()*100000) + " zombies in your area!";
  }
  document.getElementById("zqanswer").innerHTML = txt;
}

//Modal Start//

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

function screamSound() {
  let audio = document.getElementById("audio");
  audio.play();
}

//Modal End//
