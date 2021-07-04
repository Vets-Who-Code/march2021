import React from 'react';

export default function Video({ isSubmitted }) {
	return (
		<video
			className={`veteran-video ${isSubmitted ? 'hidden' : ''}`}
			src="videos/veteran-on-computer.mp4"
			autoPlay
			loop
		></video>
	);
}
