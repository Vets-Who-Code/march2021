//loading
const loading = document.querySelector(".hide-if-loading");

//Display loader for 3 seconds
setTimeout(() => {
  loading.classList.remove("hide-if-loading");
  document.querySelector(".loading").classList.remove("loading");
}, 3000)


/* Dark Mode */

// Select the button
const btn = document.querySelector(".button-toggle");
const btn2 = document.querySelector(".button-toggle-mobile");
const arrow = document.querySelector(".arrow");

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  document.getElementById("foot").classList.toggle("dark-theme");
  //on click swap out btn text
  btn.innerHTML = (btn.innerHTML.indexOf('Go Light') > -1) ? 'Go Dark' : 'Go Light';
  btn.classList.toggle("dark-theme");
});

//same as above, but for hamburger menu
btn2.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  document.getElementById("foot").classList.toggle("dark-theme");
  document.getElementById("navbar").classList.toggle("dark-theme");
  //on click swap out btn text
  btn2.innerHTML = (btn2.innerHTML.indexOf('Go Light') > -1) ? 'Go Dark' : 'Go Light';
  btn2.classList.toggle("dark-theme");
});


// Arrow

arrow.addEventListener("click", (e) => {
  if ((window.innerHeight + window.pageYOffset) < document.body.scrollHeight) {
    window.scrollBy(0, window.innerHeight);
  }
  var arrowUpOn = false;
  for (let i = 0; i < arrow.classList.length; i++) {
    if (arrow.classList[i] == 'arrowUp') {
      arrowUpOn = true;
    }
  }
  if (arrowUpOn == true){
    window.scrollBy(0, -window.innerHeight);
  }
  else{
    window.scrollBy(0, +window.innerHeight);
  }

})

// Zombie Radar

function zombieprompt() {
  let txt;
  let location = prompt("Please enter where you are living:", "Zip Code");
  if (location == null || location == "") {
    txt = "We tried to warn you...";
  } else {
    txt = "Please evacuate immediately, there are " + Math.ceil(Math.random() * 100000) + " zombies in your area!";
  }
  document.getElementById("zqanswer").innerHTML = txt;
}

// Modal Start

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => modal.classList.remove("show_modal"));

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function screamSound() {
  let audio = document.getElementById("audio");
  audio.play();
}

// Scroll Start

// document.addEventListener('scroll', () => {
//   if (window.pageYOffset == 0) {
//     arrow.classList.remove("arrowUp");
//   } else if ((window.innerHeight + window.pageYOffset) == document.body.scrollHeight) {
//     arrow.classList.toggle("arrowUp");
//   }
// })

// Hamburger Menu

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbar.classList.toggle("showNav");
  menu.classList.toggle("showClose");
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu);
  }
);

document.addEventListener('scroll', function () {
  var fam = document.getElementById("foot").getBoundingClientRect();
  //alert(fam.y);
  if(fam.y < 600){
    arrow.classList.add("arrowUp");
  }
  else if (window.pageYOffset < 99) {
         arrow.classList.remove("arrowUp");
  } 
});
