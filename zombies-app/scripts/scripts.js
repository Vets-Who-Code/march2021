//advisory//
const advisory = () => {
  if (window.confirm("WARNING! CONTENT MAY UPSET SOME VIEWERS!")) {

  } else {
    window.location.replace("https://vetswhocode.io/");
  }
}

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

  document.getElementById("foot").classList.toggle('dark-theme');
  //on click swap out btn text
  btn.innerHTML = (btn.innerHTML.indexOf('Go Light') > -1) ? 'Go Dark' : 'Go Light';
  //btn.classList.toggle("dark-theme");
});

//same as above, but for hamburger menu
btn2.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  document.querySelector("footer").classList.toggle("dark-theme");
  document.getElementById("navbar").classList.toggle("dark-theme");
  document.getElementById("ham-menu").classList.toggle("dark-theme");
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
  if (arrowUpOn == true) {
    window.scrollBy(0, -window.pageYOffset);
  } else {
    window.scrollBy(0, +window.innerHeight);
  }

})

arrow.addEventListener("keydown", (e) => {
  if ((window.innerHeight + window.pageYOffset) < document.body.scrollHeight) {
    window.scrollBy(0, window.innerHeight);
  }
  var arrowUpOn = false;
  for (let i = 0; i < arrow.classList.length; i++) {
    if (arrow.classList[i] == 'arrowUp') {
      arrowUpOn = true;
    }
  }
  if (arrowUpOn == true) {
    window.scrollBy(0, -window.pageYOffset);
  } else {
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
    txt = "Please evacuate! There are " + Math.ceil(Math.random() * 100000) + " zombies in your area!";
  }
  document.getElementById("zqanswer").innerHTML = txt;
}

// Modal Start

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

function trigger() {
  modal.classList.toggle("show-modal");
}

//window.addEventListener("click", windowOnClick);

function screamSound() {
  let audio = document.getElementById("audio");
  audio.play();
}


//Air strike
function overRunMessage() {
  let status = document.getElementById("status");
  let bombSound = document.getElementById("bomb-sound");
  status.style.color = 'var(--off-white)';
  status.innerHTML = "The zombies have overrun us. Fire for effect."
  bombSound.play();
  setTimeout(function () {
    let container = document.getElementById("container");
    container.remove();
    let zombieParts = document.createElement("img");
    let bombSound = document.createElement("audio");
    let txt = document.createElement("p");
    zombieParts.src = "images/zombieParts.gif";
    zombieParts.id = "zombie-parts"
    bombSound.src = "sounds/6722__noisecollector__boom4.wav";
    bombSound.autoplay = "true";
    txt.textContent = "The zombies have been destroyed, but the page has too! Please refresh."
    txt.style.textAlign = "center";
    txt.style.marginBottom = "100px";
    zombieParts.style.width = "80%";
    zombieParts.style.height = "40%";
    zombieParts.style.margin = "auto";
    document.body.appendChild(zombieParts);
    document.body.appendChild(bombSound);
    document.body.appendChild(txt);
    setTimeout(function () {
      document.body.removeChild(zombieParts);
    }, 4000)
  }, 12000)

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
  j
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
  if (document.documentElement.scrollHeight <= window.pageYOffset + window.innerHeight + 2) {
    //   console.log(window.pageYOffset);
    arrow.classList.add("arrowUp");
  } else if (window.pageYOffset < 99) {
    arrow.classList.remove("arrowUp");
  }
});