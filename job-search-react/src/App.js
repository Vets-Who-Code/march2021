import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JobApp from './components/JobApp/JobApp';

function App() {
	const [theme, setTheme] = React.useState('light');
  const getDarkTheme = theme === 'light' ? 'light-theme' : 'dark-theme';
	return (
		<div className={`App ${
      theme === 'light' ? '' : 'dark-background'
    }`}>
      	{/* body.classList.toggle('dark-background'); */}

			<Header theme={theme} setTheme={setTheme} />
			<JobApp theme={theme} setTheme={setTheme} ternary={getDarkTheme} />
			<Footer theme={theme} setTheme={setTheme} />
		</div>
	);
}

export default App;
