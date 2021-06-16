import React from 'react';

export default function Header(props) {
	function darkMode(event) {
		event.preventDefault();
		const lightMode=`${props.theme === 'dark' ? 'light': 'dark'}`
		return props.setTheme(lightMode);
		// const body = document.body;
		// body.classList.toggle("dark-background");
		// document.getElementById("donate").classList.toggle('dark-theme');
		// document.getElementById("send-button").classList.toggle("dark-theme");
		// document.getElementById("submit-button").classList.toggle("dark-theme");
		// document.getElementById("typed").classList.toggle("dark-theme");
		// document.getElementById("jobgrid").classList.toggle("dark-theme");
		// document.getElementById("main-header").classList.toggle("dark-theme");
		// document.querySelector(".lead-in").classList.toggle("dark-theme");
		// document.querySelector(".fa-moon").classList.toggle("fa-sun");
		// document.querySelector(".adzuna").classList.toggle("dark-theme");
		// document.querySelectorAll(".grid-container").forEach(e => e.classList.toggle("dark-container"));
		// document.querySelectorAll(".grid-item").forEach(e => e.classList.toggle("dark-grid"));
		// document.querySelectorAll(".apply").forEach(e => e.classList.toggle("dark-apply"));
	}
	console.log(props);

	return (
		<header>
			<nav className="navbar navbar-default vwc-nav">
				<div className="container-fluid">
					{/* <!-- Brand and toggle get grouped for better mobile display --> */}
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
							aria-expanded="false"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="https://vetswhocode.io/">
							<img
								alt="Vets Who Code Logo"
								src="images/vetswhocode.jpg"
								className="brand-img"
							/>
							<span className="vwc-header">VetsWhoCode</span>
						</a>
					</div>

					{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
					<div
						className="collapse navbar-collapse"
						id="bs-example-navbar-collapse-1"
					>
						<ul className="nav navbar-nav navbar-center nav-links">
							<li>
								<a href="https://vetswhocode.io/">
									<span className="link-name">Home</span>
								</a>
							</li>
							<li className="dropdown" tabIndex="0">
								<a
									href="https://vetswhocode.io/about"
									className="dropdown-toggle"
									data-toggle="dropdown"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<span className="link-name">About</span>
									<span className="caret"></span>
								</a>
								<ul className="dropdown-menu about-drop">
									<li className="drop">
										<a href="https://vetswhocode.io/about">
											<span className="link-name">About VWC</span>
										</a>
									</li>
									<li className="drop">
										<a href="https://vetswhocode.io/board">
											<span className="link-name">Board</span>
										</a>
									</li>
									<li className="drop">
										<a href="https://vetswhocode.io/testimonials">
											<span className="link-name">Testimonials</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://vetswhocode.io/syllabus">
									<span className="link-name">Syllabus</span>
								</a>
							</li>
							<li>
								<a href="https://vetswhocode.io/mentor">
									<span className="link-name">Mentor</span>
								</a>
							</li>
							<li>
								<a href="https://vetswhocode.io/apply">
									<span className="link-name">Apply</span>
								</a>
							</li>
							<li>
								<a href="">
									<span className="link-name">Job Search</span>
								</a>
							</li>
							<li>
								<a href="https://vetswhocode.io/contact">
									<span className="link-name">Contact</span>
								</a>
							</li>
							<li>
								<a href="https://vetswhocode.io/blog">
									<span className="link-name">Blog</span>
								</a>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li className="moon-li" tabIndex="0">
								<a href="true"
									className="moon"
									aria-label="Dark Mode Button"
									title="dark mode button"
									onClick={darkMode}
								>
									<i alt="moon icon" className="fas fa-moon fa-2x"></i>
								</a>
							</li>
							<li className={`donate ${props.theme === 'light' ? 'light-theme': 'dark-theme'}`}>
								<a href="https://vetswhocode.io/donate">
									<span className="link-name">Donate</span>
								</a>
							</li>
						</ul>
					</div>
					{/* <!-- /.navbar-collapse --> */}
				</div>
				{/* <!-- /.container-fluid --> */}
			</nav>
		</header>
	);
}
