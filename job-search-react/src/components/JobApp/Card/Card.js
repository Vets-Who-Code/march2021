import React from 'react';

export default function Card({ isSubmitted, jobData }) {
	return (
		<div class="grid-container">
			<div class="grid-item grid-item-1">{jobData.title}</div>
			<div class="grid-item grid-item-2">
				Company: {jobData.company.display_name} -{' '}
				{jobData.location.display_name}
			</div>
			<div class="grid-item grid-item-3">Remote: {}</div> {/* TODO!!! */}
			<div class="grid-item grid-item-4">
				Job Description: {/* this regex removes html tags from descriptions */}
				{jobData.description.replace(
					/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
					''
				)}
			</div>
			<div class="grid-item grid-item-6">
				Date Posted: {} {/* TODO!!! */}
				<a
					class="apply"
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
