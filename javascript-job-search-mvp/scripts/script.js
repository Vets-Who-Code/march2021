<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Bootstrap CSS -->
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet">
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
		crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.js">
	</script>
	<!--Typed.js-->
	<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
	<!-- Font Awesome 5 -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
	<!-- Open Sans Font -->
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet">
	<!-- Local CSS -->
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/responsive.css">
	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="images/favicon_package_v0/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon_package_v0/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon_package_v0/favicon-16x16.png">
	<link rel="manifest" href="images/favicon_package_v0/site.webmanifest">
	<link rel="mask-icon" href="images/favicon_package_v0/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<link rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
	<link rel="stylesheet"
		href="https://mojoaxel.github.io/bootstrap-select-country/dist/css/bootstrap-select-country.min.css" />
	<title>VWC Job Search</title>
</head>

<body>

	<!-- Navbar -->
	<header>
		<nav class="navbar navbar-default vwc-nav">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="https://vetswhocode.io/">
						<img alt="Vets Who Code Logo" src="images/vetswhocode.jpg" class="brand-img">
						<span class="vwc-header">VetsWhoCode</span>
					</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-center nav-links">
						<li><a href="https://vetswhocode.io/"><span class="link-name">Home</span></a></li>
						<li class="dropdown" tabindex="0">
							<a href="https://vetswhocode.io/about" class="dropdown-toggle" data-toggle="dropdown" role="button"
								aria-haspopup="true" aria-expanded="false"><span class="link-name">About</span><span
									class="caret"></span></a>
							<ul class="dropdown-menu about-drop">
								<li class="drop"><a href="https://vetswhocode.io/about"><span class="link-name">About VWC</span></a>
								</li>
								<li class="drop"><a href="https://vetswhocode.io/board"><span class="link-name">Board</span></a></li>
								<li class="drop"><a href="https://vetswhocode.io/testimonials"><span
											class="link-name">Testimonials</span></a></li>
							</ul>
						</li>
						<li><a href="https://vetswhocode.io/syllabus"><span class="link-name">Syllabus</span></a></li>
						<li><a href="https://vetswhocode.io/mentor"><span class="link-name">Mentor</span></a></li>
						<li><a href="https://vetswhocode.io/apply"><span class="link-name">Apply</span></a></li>
						<li><a href=""><span class="link-name">Job Search</span></a></li>
						<li><a href="https://vetswhocode.io/contact"><span class="link-name">Contact</span></a></li>
						<li><a href="https://vetswhocode.io/blog"><span class="link-name">Blog</span></a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li class="moon-li" tabindex="0"><a class="moon" aria-label="Dark Mode Button" title="dark mode button"
								onclick="darkMode()"><i alt="moon icon" class="fas fa-moon fa-2x"></i></a>
						</li>
						<li class="donate" id="donate"><a href="https://vetswhocode.io/donate"><span
									class="link-name">Donate</span></a></li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container-fluid -->
		</nav>
	</header>
	<!-- Nav End -->

	<main>
		<div class="container">

			<!-- Header -->
			<h1 class="main-header" id="main-header">JOB SEARCH</h1>
			<div class="typed-container">
				<p class="lead-in">#VetsWhoCode <span id="typed" class="typed"></span></p>
				<div id="typed-strings">
					<p>provides job placement assistance.</p>
					<p>makes a difference in the lives of veterans.</p>
				</div>
			</div>
			<p class="job-search-description">
				Vets Who Code Job Search (VWC) is a tool for connecting veterans, military, and military spouses with jobs.
				Our goal is to make every workplace fair and profitable by bringing together
				the perfect candidate with the ideal employer. Our site pairs technology and best practices in order to promote
				practical and gainful employment.
			</p>
			<!-- End Header -->

			<!-- Search Bar -->
			<form id="job-search" class="form-inline text-center job-grabber">
				<label class="sr-only" for="zipCode">Zip Code</label>
				<input type="string" pattern="[0-9]{5}" class="form-control input-lg zip" id="zipCode" placeholder="Zip Code"
					required>

				<input class="form-check-input" type="checkbox" id="inlineFormCheck">
				<label class="form-check-label" for="inlineFormCheck">
					Remote?
				</label>

				<div class="form-group" id="sel1">
					<label for="sel1"></label>
					<select class="form-control input-lg miles" id="sel1" name="sellist1">
						<!-- value is set in km -->
						<option value="0">Only in</option>
						<option value="8">5 mi.</option>
						<option value="16">10 mi.</option>
						<option value="24">15 mi.</option>
						<option value="40" selected>25 mi.</option>
						<option value="80">50 mi.</option>
						<option value="161">100 mi.</option>
						<option value="322">200 mi.</option>
					</select>
				</div>
				<button id="submit-button" type="submit" class="btn btn-primary mb-2 submit-button search"
					onClick="document.getElementById('middle').scrollIntoView();"><i class="glyphicon glyphicon-search">
						Search</i></button>
			</form>
			<!-- Search End -->

			<!-- Empty Grid -->
			<div id="middle" class="middle"></div>
			<div>
				<p id="no-results" class="text-center hidden no-results">Sorry there were no results. Try again.</p>
			</div>
			<video id="veteran-video" class="veteran-video" src="videos/veteran-on-computer.mp4" autoplay loop muted></video>
			<!-- End Empty Grid -->

			<!-- Grid -->
			<div class="jobgrid-container">
				<div class="job-sort hidden" id="job-sort">
					<select id="names">
						<option class="sort-options" id="sort-by" value="Sort by:" selected>Sort by:</option>
						<option class="sort-options" value="title">Title</option>
					</select>
				</div>
				<div class="jobgrid hidden hide-native-scrollbar" id="jobgrid" aria-label="Job Grid">
				</div>
			</div>
		</div>
	</main>
	<!-- End Grid -->

	<!-- Footer -->
	<footer>
		<div class="row footer1">
			<div class="container">
				<h3 class="footer1-h">KEEP IN TOUCH</h3>
				<span class="fa-stack fa-2x icons">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a class="footer-font-awesome" title="Twitter" target="_blank" rel="noopener noreferrer"
						href="https://twitter.com/vetswhocode"><i class="fab fa-twitter fa-stack-1x"></i></a>
				</span>
				<span class="fa-stack fa-2x icons">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a class="footer-font-awesome" title="Facebook" target="_blank" rel="noopener noreferrer"
						href="https://www.facebook.com/TheOfficialVetsWhoCode/"><i class="fab fa-facebook-f fa-stack-1x"></i></a>
				</span>
				<span class="fa-stack fa-2x icons">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a class="footer-font-awesome" title="Github" target="_blank" rel="noopener noreferrer"
						href="https://github.com/Vets-Who-Code"><i class="fab fa-github fa-stack-1x"></i></a>
				</span>
				<span class="fa-stack fa-2x icons">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a class="footer-font-awesome" title="Linkedin" target="_blank" rel="noopener noreferrer"
						href="https://www.linkedin.com/company/vets-who-code/"><i class="fab fa-linkedin-in fa-stack-1x"></i></a>
				</span>
				<span class="fa-stack fa-2x icons">
					<i class="fas fa-circle fa-stack-2x"></i>
					<a class="footer-font-awesome" title="Dev" target="_blank" rel="noopener noreferrer"
						href="https://dev.to/vetswhocode"><i class="fab fa-dev fa-stack-1x"></i></a>
				</span>
			</div>
		</div>
		<div class="row footer2">
			<div class="container">
				<div class="col-md-4 footer-div1">
					<h3 class="footer2-header">ABOUT #VETSWHOCODE</h3>
					<p class="footer-p">FRAGO, doing business as #VetsWhoCode, is an exempt organization as described in
						Section 501(c)(3) of the Internal Revenue Code. Our EIN is 47-3555231.</p>
				</div>
				<div class="col-md-4 footer-div3">
					<h3 class="footer2-header">SITE MAP</h3>
					<div class="row">
						<div class="col-md-6 site-map">
							<ul>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/">HOME</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/about">ABOUT</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/board">BOARD</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/syllabus">SYLLABUS</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/testimonials">TESTIMONIALS</a>
								</li>
							</ul>
						</div>
						<div class="col-md-6 site-map2">
							<ul>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/mentor">MENTOR</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/apply">APPLY</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link" href="">JOB
										SEARCH</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/contact">CONTACT US</a></li>
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link"
										href="https://vetswhocode.io/blog">BLOG</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-4 footer-div2">
					<h3 class="footer2-header">CONTACT US</h3>
					<form id="contact-form">
						<div class="form-group">
							<label class="group-email" for="exampleInputEmail1">Email</label>
							<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
						</div>
						<div class="form-group">
							<label class="group-email" for="exampleInputPassword1">Message</label>
							<textarea name="textarea" id="textarea" maxlength="300" style="width: 100%" rows="2" class="form-control"
								id="exampleInputPassword1" placeholder="Message"></textarea>
							<div id="count" class="count">
								<span id="current_count">0</span>
								<span id="maximum_count">/ 300</span>
							</div>
						</div>
						<button type="submit" class="btn btn-primary send-button" id="send-button">Send</button>
					</form>
				</div>
			</div>
		</div>
		<div class="row footer3" style="border-top: 1px solid gray;">
			<div class="container">
				<span title="Copyright" class="copyright">©2021 <a class="footer3-anchor" target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Vets-Who-Code/vets-who-code-app/blob/master/LICENSE">#VetsWhoCode</a></span>
				<span class="byVWC">Made By the 🔥<a tabindex="0" hef="https://github.com/Vets-Who-Code/march2021"
						target="_blank" rel="noopener noreferrer" class="made-by">Post-Apocalyptic Coders</a>🔥</span>
			</div>
		</div>
	</footer>
	<!-- End Footer -->

	<!-- Scripts -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
	<script src="scripts/script.js?v1"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<!-- Character count for footer form -->
	<script type="text/javascript">
		$('textarea').keyup(function () {
			var characterCount = $(this).val().length,
				current_count = $('#current_count'),
				maximum_count = $('#maximum_count'),
				count = $('#count');
			current_count.text(characterCount);
		});
	</script>
</body>

</html>