import React from 'react';

export default function Card({ isSubmitted, jobData }) {
	return (
		<pre
			className="grid-container"
			style={{ display: isSubmitted ? 'block' : 'none' }}
		>
			{JSON.stringify(jobData, null, 4)}
		</pre>
	);
}
