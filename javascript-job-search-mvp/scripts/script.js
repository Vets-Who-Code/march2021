//easter egg
console.log('Hello, Vets Who Code!');

//Typed.js
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 50,
  typeSpeed: 50,
  loop: true,
  startDelay: 1000,
  backDelay: 3000
});

// Variables for Search Button
const jobSearch = document.getElementById("job-search");
//this listens for the form to submit.
jobSearch.addEventListener("submit", submitButtonEvent);
//variable for veteran video
const veteranVideo = document.getElementById("veteran-video");
//receives objects from the API (array of objects)
let job = [];

// Triggers the function when the search button is clicked
function submitButtonEvent(event) {
  event.preventDefault();

  //for the future language dropdown functionality
  localStorage.setItem("job", "Web Developer");
  localStorage.setItem("zipcode", event.currentTarget[0].value);
  localStorage.setItem("remote", event.currentTarget[1].value);
  localStorage.setItem("radius", event.currentTarget[2].value);

  //API data gets pushed into this as a string
  let jobposting = "";

  // API GET Request
  fetch('https://swapi.dev/api/people/?').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response error.');
    })
    .then(response => {
      if (job.length > 0) {
        job = [];
        jobposting = "";
      }
      for (let i = 0; i < response.results.length; i++) {
        job.push({
          Title: response.results[i].name,
          Company: response.results[i].height,
          Location: response.results[i].mass,
          Remote: response.results[i].hair_color,
          JobSnippet: response.results[i].skin_color,
          Salary: response.results[i].eye_color,
          DateSincePosted: response.results[i].birth_year
        });
      }
    });

  //Grid
  let innergrid = document.getElementsByClassName('jobgrid');

  //test case for 11111 zip code to demonstrate the no search results screen. To be removed.
  if (event.currentTarget[0].value[0] == 1) {
    job = [];
  }

  //sort the job array
  job.sort(function (a, b) {
    return a.sortOrder - b.sortOrder
  });

  //if the job variable is an empty array, the hidden class is added to the video and removed from the jobgrid div
  if (job.length > 0) {
    veteranVideo.classList.add('hidden');
    document.getElementById("no-results").classList.add('hidden');
    document.getElementById('jobgrid').classList.remove('hidden');
  } else {
    document.getElementById("no-results").classList.remove('hidden');
    veteranVideo.classList.remove('hidden');
  }

  //adds a container and items to the jobposting string for each object in the job array
  for (let i = 0; i < job.length; i++) {
    jobposting += `<a href="${job[i].ApplicationSite}" target="_blank" rel="noopener noreferrer"><div class="">
        <div class="grid-container">
          <div class="grid-item grid-item-1">Title: ${job[i].Title}</div>
          <div class="grid-item grid-item-2">Company: ${job[i].Company} - ${job[i].Location}</div>
          <div class="grid-item grid-item-3">Remote: ${job[i].Remote}</div>
          <div class="grid-item grid-item-4">Job Description: ${job[i].JobSnippet}</div>
          <div class="grid-item grid-item-5">Salary: ${job[i].Salary}</div>
          <div class="grid-item grid-item-6">Date Posted: ${job[i].DateSincePosted}</div>
        </div></a>`
  }

  innergrid[0].innerHTML = jobposting;

  if (document.body.classList.contains("dark-background")) {
    document.querySelectorAll(".grid-container").forEach(e => e.classList.add("dark-container"));
    document.querySelectorAll(".grid-item").forEach(e => e.classList.add("dark-grid"));
  } else {
    document.querySelectorAll(".grid-container").forEach(e => e.classList.remove("dark-container"));
    document.querySelectorAll(".grid-item").forEach(e => e.classList.remove("dark-grid"));
  }
}

//Dark Mode
const darkMode = () => {
  const body = document.body;
  body.classList.toggle("dark-background");
  document.getElementById("donate").classList.toggle('dark-theme');
  document.getElementById("send-button").classList.toggle("dark-theme");
  document.getElementById("submit-button").classList.toggle("dark-theme");
  document.getElementById("typed").classList.toggle("dark-theme");
  document.getElementById("jobgrid").classList.toggle("dark-theme");
  document.querySelector(".lead-in").classList.toggle("dark-theme");
  document.querySelector(".fa-moon").classList.toggle("fa-sun");
  document.querySelectorAll(".grid-container").forEach(e => e.classList.toggle("dark-container"));
  document.querySelectorAll(".grid-item").forEach(e => e.classList.toggle("dark-grid"));
}

//Contact Form
function contactFormSubmit(event) {
  event.preventDefault();
}

//this listens for the contact form to submit.
const contactButton = document.getElementById("contact-form");
contactButton.addEventListener("submit", contactFormSubmit);