import React from 'react';

export default function Card({ isSubmitted, jobData }) {
	return (
		<div className="grid-container">
			<div className="grid-item grid-item-1">{jobData.title}</div>
			<div className="grid-item grid-item-2">
				Company: {jobData.company.display_name} -{' '}
				{jobData.location.display_name}
			</div>
			<div className="grid-item grid-item-3">Remote: {}</div> {/* TODO!!! */}
			<div className="grid-item grid-item-4">
				Job Description: {/* this regex removes html tags from descriptions */}
				{jobData.description.replace(
					/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
					''
				)}
			</div>
			<div className="grid-item grid-item-6">
				Date Posted: {jobData.created} {/* FORMAT DATE */}
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
