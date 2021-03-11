/* Dark Mode */

// Select the button
const btn = document.querySelector(".button-toggle");
const loading = document.querySelector(".hide-if-loading");

setTimeout(() => {
  loading.classList.remove("hide-if-loading");
  document.querySelector(".loading").classList.remove("loading");
},3000)


// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  document.getElementById("foot").classList.toggle("dark-theme");

  //on click swap out btn text
  btn.innerHTML = (btn.innerHTML.indexOf('Go Light') > -1) ? 'Go Dark' : 'Go Light';
  btn.classList.toggle("dark-theme");
});

//on click take button away and append zombie gif"//
function zombieBite() {
    let jumpScare = document.getElementById("jump-scare");
    let whatsThatbutton = document.getElementById("whats-that-button");
    whatsThatbutton.parentNode.removeChild(whatsThatbutton);
    let img = document.createElement('img');
    img.src = "images/zombie.gif";
    jumpScare.appendChild(img);
}

function zombieprompt() {
  var txt;
  var location = prompt("Please enter where you are living:", "Zip Code");
  if (location == null || location == "") {
    txt = "We tried to warn you...";
  } else {
    txt = "Please evacuate immediately, there are " + Math.ceil(Math.random()*100000) + " zombies in your area!";
  }
  document.getElementById("zqanswer").innerHTML = txt;
}
