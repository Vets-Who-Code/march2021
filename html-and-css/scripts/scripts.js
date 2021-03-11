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
  let jumpScare = document.getElementById("jump-scare");
  let whatsThatbutton = document.getElementById("whats-that-button");
  whatsThatbutton.parentNode.removeChild(whatsThatbutton);
  let img = document.createElement('img');
  img.src = "../images/zombie.gif";
  jumpScare.appendChild(img);
}
