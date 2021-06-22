import React, { useState } from 'react';
import Typed from 'react-typed';
import Form from './Form/Form.js';

export default function JobApp() {
	const [userData, setUserData] = useState(null);

	function formData(clickEvent) {
		clickEvent.preventDefault();
		setUserData(clickEvent);
		console.log(userData);
	}

	return (
		<div>
			<div className="container">
				<h1 className="main-header" id="main-header">
					JOB SEARCH
				</h1>
				<div className="typed-container">
					<div id="typed-strings">
						<p className="lead-in">
							#VetsWhoCode{' '}
							<span id="typed" className="typed">
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
				{/* <!-- End Header --> */}

				{/* <!-- Search Bar --> */}
				<Form data={formData} />
				{/* <!-- Search End --> */}

				{/* <!-- Empty Grid --> */}
				<div id="middle" className="middle"></div>
				<div>
					<p id="no-results" className="text-center hidden no-results">
						Sorry there were no results. Try again.
					</p>
				</div>
				<div id="loader" className="loading hidden">
					<div className="ball first"></div>
					<div className="ball second"></div>
					<div className="ball third"></div>
				</div>
				<video
					id="veteran-video"
					className="veteran-video"
					src="videos/veteran-on-computer.mp4"
					autoPlay
					loop
				></video>
				{/* <!-- End Empty Grid --> */}

				{/* <!-- Grid --> */}
				<div className="jobgrid-container">
					<div
						className="jobgrid hidden hide-native-scrollbar"
						id="jobgrid"
						aria-label="Job Grid"
					></div>
				</div>
			</div>
			<div id="pagination" className="tui-pagination hidden"></div>
			 {/* <!-- End Grid --> */}

		</div> // render wrapper div
	);
}
