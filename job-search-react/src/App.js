import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JobApp from './components/JobApp/JobApp';

export default function App() {
	const [theme, setTheme] = useState('light');
	const getDarkTheme = theme === 'light' ? 'light-theme' : 'dark-theme';
	return (
		<div className={`App ${theme === 'light' ? '' : 'dark-background'}`}>
			<Header theme={theme} setTheme={setTheme} />
			<JobApp theme={theme} setTheme={setTheme} getDarkTheme={getDarkTheme} />
			<Footer theme={theme} setTheme={setTheme} />
		</div>
	);
}
