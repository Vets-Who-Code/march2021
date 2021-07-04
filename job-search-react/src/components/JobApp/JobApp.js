import React, { useState } from 'react';
import Typed from 'react-typed';
import Form from './Form/Form.js';
import Card from './Card/Card';
import Loader from './Loader/Loader';
import Video from './Video/Video.js';
import NoResults from './NoResults/NoResults.js';

export default function JobApp(props) {
	const [jobData, setJobData] = useState(false);

	const [formSubmitted, setFormSubmitted] = useState(false);

	function formData(clickEvent) {
		clickEvent.preventDefault();
		setFormSubmitted(true);
		document.getElementById('middle').scrollIntoView();

		const formResponse = {
			zipCode: clickEvent.target[0].value,
			remote: clickEvent.target[1].checked, //TODO!!!!
			distance: clickEvent.target[2].value,
		};

		let what = 'JavaScript ReactJS Gatsby GraphQL NodeJS node.js';
		let exclude = '0000 senior sr. Senior sr Sr. principal lead master';

		let url = `http://romine.tech/api/adzuna.php?what_or=${what}&where=${formResponse.zipCode}&distance=${formResponse.distance}&what_exclude=${exclude}&sort_by=date&max_days_old=30&page=1`;

		fetch(url)
			.then((response) => response.json())
			.then(setJobData)
			.catch(console.error);
	}

	return (
		<div>
			<div className="container">
				<h1 id="main-header" className={`main-header ${props.ternary}`}>
					JOB SEARCH
				</h1>
				<div className="typed-container">
					<div id="typed-strings">
						<p className={`lead-in ${props.ternary}`}>
							#VetsWhoCode{' '}
							<span id="typed" className={`typed ${props.ternary}`}>
								{' '}
								<Typed
									strings={[
										'provides job placement assistance.',
										'makes a difference in the lives of veterans.',
									]}
									typeSpeed={50}
									backSpeed={50}
									loop
								/>
							</span>
						</p>
					</div>
				</div>
				<p className="job-search-description">
					Vets Who Code Job Search (VWC) is a tool for connecting veterans,
					military, and military spouses with jobs. Our goal is to make every
					workplace fair and profitable by bringing together the perfect
					candidate with the ideal employer. Our site pairs technology and best
					practices in order to promote practical and gainful employment.
				</p>
				{/*  End Header  */}

				{/*  Search Bar  */}
				<Form data={formData} theme={props.theme} />
				{/*  Search End  */}

				{/*  Empty Grid  */}
				<div id="middle" className="middle"></div>
				<NoResults isSubmitted={formSubmitted} jobData={jobData} />
				<Loader isSubmitted={formSubmitted} jobData={jobData} />
				<Video isSubmitted={formSubmitted} />
				{/*  End Empty Grid  */}

				{/*  Grid  */}
				{/* we need to check that jobData.data exists before we can map the results of the fetch. https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator*/}
				{jobData.data &&
					jobData.data.results.map((job) => (
						<Card isSubmitted={formSubmitted} jobData={job} />
					))}
				<div className={`jobgrid-container ${props.ternary}`}>
					<div
						className="jobgrid hidden hide-native-scrollbar"
						id="jobgrid"
						aria-label="Job Grid"
					></div>
				</div>
			</div>
			<div id="pagination" className="tui-pagination hidden"></div>
			{/*  End Grid  */}
		</div> // <-- render wrapper div
	);
}
