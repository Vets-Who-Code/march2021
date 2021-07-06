import React from 'react';

export default function Card({ isSubmitted, jobData }) {
	let date = '';
	try {
		date = new Date(jobData.created).toLocaleDateString();
	} 
	catch(err) {
		console.error('Invalid date.', jobData.created);
	}
	
	function removeHTML(text) {
		// this regex removes html tags
		return text.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '');
	}

	return (
		<div className="grid-container">
			<div className="grid-item grid-item-1">{removeHTML(jobData.title)}</div>
			<div className="grid-item grid-item-2">
				Company: {removeHTML(jobData.company.display_name)} -{' '}
				{removeHTML(jobData.location.display_name)}
			</div>
			<div className="grid-item grid-item-3">
				Remote:
				{jobData.description.toLowerCase().indexOf('remote') > -1 ||
				jobData.title.toLowerCase().indexOf('remote') > -1 ||
				jobData.title.toLowerCase().indexOf('work from home') > -1 ||
				jobData.description.toLowerCase().indexOf('work from home') > -1
					? ' Yes'
					: ' No'}
			</div>
			<div className="grid-item grid-item-4">
				Job Description:
				{removeHTML(jobData.description)}
			</div>
			<div className="grid-item grid-item-6">
				Date Posted: {date} 
				<a
					className="apply"
					href={`${jobData.redirect_url}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					Apply
				</a>
			</div>
		</div>
	);
}
