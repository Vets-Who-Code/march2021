import React from 'react';

export default function NoResults({ isSubmitted, jobData }) {
	return (
		<div>
			<p
				className={`text-center no-results ${
					isSubmitted && jobData.data && jobData.data.results.length === 0
						? ''
						: 'hidden'
				}`}
			>
				Sorry there were no results. Try again.
			</p>
		</div>
	);
}
