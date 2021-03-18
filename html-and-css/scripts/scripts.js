/* Dark Mode */

// Select the button
const btn = document.querySelector(".button-toggle");

const arrow = document.querySelector(".arrow");

//loading
const loading = document.querySelector(".hide-if-loading");

//Display loader for 3 seconds
setTimeout(() => {
  loading.classList.remove("hide-if-loading");
  document.querySelector(".loading").classList.remove("loading");
}, 3000)

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

arrow.addEventListener("click",(e)=>{
  if((window.innerHeight + window.pageYOffset) < document.body.scrollHeight){
    window.scrollBy(0, window.innerHeight);
    console.log(window.innerHeight)
  }

  if((window.innerHeight + window.pageYOffset) == document.body.scrollHeight){
    console.log(document.body.scrollHeight)
    arrow.classList.toggle("arrowUp");
  }

  for(let i = 0; i < arrow.classList.length; i++ ){
      if(arrow.classList[i] == 'arrowUp'){
        window.scrollBy(0, -window.innerHeight);
        console.log('Arrow is up')
      }
  }

  if (window.pageYOffset == 0){
      arrow.classList.toggle("arrowUp");
  }

})


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


//scroll Start//

document.addEventListener('scroll',()=>{
  if (window.pageYOffset == 0){
    console.log("you're at the top of the page");
  }
  if ((window.innerHeight + window.pageYOffset) == document.body.scrollHeight) {
    arrow.classList.toggle("arrowUp");
    console.log("you're at the bottom of the page");
}
})

window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
     // alert("you're at the bottom of the page");
  }
};