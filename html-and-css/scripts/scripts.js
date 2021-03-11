/* Dark Mode */

// Select the button
const btn = document.querySelector(".button-toggle");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");

  //on click swap out btn text
  btn.innerHTML = (btn.innerHTML.indexOf('Go Light') > -1) ? 'Go Dark' : 'Go Light';
  btn.classList.toggle("dark-theme");
});

//on click take button away and append zombie gif"//
function zombieBite() {
  var y = document.getElementById("jump-scare");
  var x = document.getElementById("whats-that-button");
  x.parentNode.removeChild(x);
  var img = document.createElement('img');
  img.src = "/images/zombie.gif";
  y.appendChild(img);
}
