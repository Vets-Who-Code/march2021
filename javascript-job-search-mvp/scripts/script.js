//Typed.js
let typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	backSpeed: 50,
	typeSpeed: 50,
	loop: true,
	startDelay: 1000,
	backDelay: 3000,
});

// Variables for Search Button
const jobSearch = document.getElementById('job-search');
//this listens for the form to submit.
jobSearch.addEventListener('submit', submitButtonEvent);
//variable for veteran video
const veteranVideo = document.getElementById('veteran-video');
let innergrid = document.getElementsByClassName('jobgrid');
//receives objects from the API (array of objects)
let job = [];
const getGrid = document.getElementById('jobgrid');

// Triggers the function when the search button is clicked
function submitButtonEvent(event) {
	getGrid.scrollTop -= 10000;
	let page = 1;
	if (typeof event === 'object') {
		// is the event from the search click or from the sort change?
		localStorage.setItem('event', event);
		event.preventDefault();
		localStorage.setItem('zipcode', event.currentTarget[0].value);
		localStorage.setItem('remote', event.currentTarget[1].checked);
		localStorage.setItem('radius', event.currentTarget[2].value);
	} else {
		page = event;
	}

	let loader = document.getElementById('loader');
	veteranVideo.classList.add('hidden');
	loader.classList.remove('hidden');
	document.getElementById('no-results').classList.add('hidden');

	//API data gets pushed into this as a string
	let jobposting = '';
	let what = 'JavaScript ReactJS Gatsby GraphQL NodeJS node.js';
	let where = localStorage.getItem('zipcode');
	let remotePosition = localStorage.getItem('remote');
	let distance = localStorage.getItem('radius');
	let exclude = '0000 senior sr. Senior sr Sr. principal lead master';
	if (localStorage.getItem('remote') === 'false') exclude += ' remote';
	let url = `http://romine.tech/api/adzuna.php?what_or=${what}&where=${where}&max_days_old=30&distance=${distance}&what_exclude=${exclude}&sort_by=date`;
	url +=
		localStorage.getItem('remote') === 'true'
			? `&what_and=remote&page=${page}`
			: `&page=${page}`;
	console.log(url);
	fetch(url)
		.then(
			(response) => response.json(),
			(error) => console.log(error)
		)
		.then((response) => {
			if (job.length > 0) job = [];
			//use pagination class method setTotalItems to set items to the total from the API call
			if (page == 1 && response.data) {
				pagination.reset(response.data.count);
				document.getElementById('pagination').classList.remove('hidden');
				document.querySelector('.adzuna').classList.remove('hidden');
			}

			if (response.data && response.data.results.length > 0) {
				for (let i = 0; i < response.data.results.length; i++) {
					let date = new Date(response.data.results[i].created);

					job.push({
						Title: response.data.results[i].title,
						Company: response.data.results[i].company.display_name,
						Location: response.data.results[i].location.display_name,
						Remote:
							response.data.results[i].description
								.toLowerCase()
								.indexOf('remote') > -1 ||
							response.data.results[i].title.toLowerCase().indexOf('remote') >
								-1
								? 'Yes'
								: 'No',
						JobSnippet: response.data.results[i].description.replace(
							/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
							''
						),
						//Salary: response.data.results[i].salary_is_predicted,
						DateSincePosted: date.toLocaleDateString(),
						Date: date,
						ApplicationSite: response.data.results[i].redirect_url,
					});
				}
			}

			loader.classList.add('hidden');
			//if the job variable is an empty array, the hidden class is added to the video and removed from the jobgrid div
			if (job.length > 0) {
				veteranVideo.classList.add('hidden');
				document.getElementById('no-results').classList.add('hidden');
				document.getElementById('jobgrid').classList.remove('hidden');
			} else {
				document.getElementById('no-results').classList.remove('hidden');
				veteranVideo.classList.remove('hidden');
			}
			//adds a container and items to the jobposting string for each object in the job array
			for (let i = 0; i < job.length; i++) {
				jobposting += `<div class="grid-container">
				<div class="grid-item grid-item-1">${job[i].Title}</div>
				<div class="grid-item grid-item-2">Company: ${job[i].Company} - ${job[i].Location}</div>
				<div class="grid-item grid-item-3">Remote: ${job[i].Remote}</div>
				<div class="grid-item grid-item-4">Job Description: ${job[i].JobSnippet}</div>
				<div class="grid-item grid-item-6">Date Posted: ${job[i].DateSincePosted}<a class="apply" href="${job[i].ApplicationSite}" target="_blank" rel="noopener noreferrer">Apply</a></div>
				</div>`;
			}

			innergrid[0].innerHTML = jobposting;
			localStorage.setItem('jobposting', innergrid[0].innerHTML);

			if (document.body.classList.contains('dark-background')) {
				document
					.querySelectorAll('.grid-container')
					.forEach((e) => e.classList.add('dark-container'));
				document
					.querySelectorAll('.grid-item')
					.forEach((e) => e.classList.add('dark-grid'));
				document
					.querySelectorAll('.apply')
					.forEach((e) => e.classList.add('dark-apply'));
			} else {
				document
					.querySelectorAll('.grid-container')
					.forEach((e) => e.classList.remove('dark-container'));
				document
					.querySelectorAll('.grid-item')
					.forEach((e) => e.classList.remove('dark-grid'));
				document
					.querySelectorAll('.apply')
					.forEach((e) => e.classList.remove('dark-apply'));
			}
		});
} //submit button event

// adds grab to scroll functionality
document.addEventListener('DOMContentLoaded', function () {
	const ele = document.getElementById('jobgrid');
	ele.style.cursor = 'grab';

	let pos = {
		top: 0,
		left: 0,
		x: 0,
		y: 0,
	};

	const mouseDownHandler = function (e) {
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

	const mouseMoveHandler = function (e) {
		// How far the mouse has been moved
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		// Scroll the element
		ele.scrollTop = pos.top - dy;
		ele.scrollLeft = pos.left - dx;
	};

	const mouseUpHandler = function () {
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
	body.classList.toggle('dark-background');
	document.getElementById('donate').classList.toggle('dark-theme');
	document.getElementById('send-button').classList.toggle('dark-theme');
	document.getElementById('submit-button').classList.toggle('dark-theme');
	document.getElementById('typed').classList.toggle('dark-theme');
	document.getElementById('jobgrid').classList.toggle('dark-theme');
	document.getElementById('main-header').classList.toggle('dark-theme');
	document.querySelector('.lead-in').classList.toggle('dark-theme');
	document.querySelector('.fa-moon').classList.toggle('fa-sun');
	document.querySelector('.adzuna').classList.toggle('dark-theme');
	document
		.querySelectorAll('.grid-container')
		.forEach((e) => e.classList.toggle('dark-container'));
	document
		.querySelectorAll('.grid-item')
		.forEach((e) => e.classList.toggle('dark-grid'));
	document
		.querySelectorAll('.apply')
		.forEach((e) => e.classList.toggle('dark-apply'));
};

//Contact Form
function contactFormSubmit(event) {
	event.preventDefault();
}

//this listens for the contact form to submit.
const contactButton = document.getElementById('contact-form');
contactButton.addEventListener('submit', contactFormSubmit);

// Pagination
const pagination = new tui.Pagination(document.getElementById('pagination'), {
	itemsPerPage: 15,
});

pagination.on('beforeMove', (event) => {
	submitButtonEvent(event.page);
	window.scroll(0, 450);
	getGrid.scrollTop -= 10000;
});
