import React, { useState } from 'react';
import Typed from 'react-typed';
import Form from './Form/Form.js';

export default function JobApp(props) {
	const [userData, setUserData] = useState({
		zipCode: '',
		remote: false,
		distance: '',
	});

	function formData(clickEvent) {
		clickEvent.preventDefault();
		const formResponse = {
			zipCode: clickEvent.target[0].value,
			remote: clickEvent.target[1].checked,
			distance: clickEvent.target[2].value,
		};
		setUserData(formResponse);
		console.log(formResponse);
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
				{/* <!-- End Header --> */}

				{/* <!-- Search Bar --> */}
				<Form data={formData} theme={props.theme} />
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
				<div className={`jobgrid-container ${props.ternary}`}>
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
