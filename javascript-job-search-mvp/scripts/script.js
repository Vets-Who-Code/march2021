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
					DateSincePosted: response.results[i].birth_year,
					ApplicationSite: 'https://swapi.dev/'
				});
			}
			//Grid
		let innergrid = document.getElementsByClassName('jobgrid');

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
		jobposting += `<div class="">
        	<div class="grid-container">
          <div class="grid-item grid-item-1">Title: ${job[i].Title}</div>
          <div class="grid-item grid-item-2">Company: ${job[i].Company} - ${job[i].Location}</div>
          <div class="grid-item grid-item-3">Remote: ${job[i].Remote}</div>
          <div class="grid-item grid-item-4">Job Description: ${job[i].JobSnippet}</div>
          <div class="grid-item grid-item-5">Salary: ${job[i].Salary}</div>
          <div class="grid-item grid-item-6">Date Posted: ${job[i].DateSincePosted}</div>
		  <a class="grid-item grid-item-7" href="${job[i].ApplicationSite}" target="_blank" rel="noopener noreferrer">Apply</a>
        </div>`
	}

	innergrid[0].innerHTML = jobposting;

	if (document.body.classList.contains("dark-background")) {
		document.querySelectorAll(".grid-container").forEach(e => e.classList.add("dark-container"));
		document.querySelectorAll(".grid-item").forEach(e => e.classList.add("dark-grid"));
	} else {
		document.querySelectorAll(".grid-container").forEach(e => e.classList.remove("dark-container"));
		document.querySelectorAll(".grid-item").forEach(e => e.classList.remove("dark-grid"));
	}

		});

}

// adds grab to scroll functionality 
document.addEventListener('DOMContentLoaded', function() {
    const ele = document.getElementById('jobgrid');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function(e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function() {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});

//Dark Mode
const darkMode = () => {
	const body = document.body;
	body.classList.toggle("dark-background");
	document.getElementById("donate").classList.toggle('dark-theme');
	document.getElementById("send-button").classList.toggle("dark-theme");
	document.getElementById("submit-button").classList.toggle("dark-theme");
	document.getElementById("typed").classList.toggle("dark-theme");
	document.getElementById("jobgrid").classList.toggle("dark-theme");
	document.getElementById("main-header").classList.toggle("dark-theme");
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