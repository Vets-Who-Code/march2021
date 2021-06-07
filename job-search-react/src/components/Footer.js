import React from "react";

export default function Footer() {
    return(
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
								<li class="footer-li"><i class="far fa-circle fa-xs footer-icon"></i><a class="site-link" href="#">JOB
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
							<label class="group-email">Email</label>
							<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
						</div>
						<div class="form-group">
							<label class="group-email">Message</label>
							<textarea name="textarea" 
                                      id="textarea" 
                                      maxlength="300" 
                                      rows="2" 
                                      class="form-control" 
                                      id="exampleInputPassword1" 
                                      placeholder="Message"></textarea>
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
		<div class="row footer3" style={{'border-top': '1px solid gray'}}>
			<div class="container">
				<span title="Copyright" class="copyright">©2021 
                <a href="https://github.com/Vets-Who-Code/vets-who-code-app/blob/master/LICENSE"
                target="_blank"
                class="footer3-anchor"
				rel="noopener noreferrer">
                    #VetsWhoCode</a>
                </span>
				<span class="byVWC">Made By the 🔥<a tabindex="0" hef="https://github.com/Vets-Who-Code/march2021"
						target="_blank" rel="noopener noreferrer" class="made-by">Post-Apocalyptic Coders</a>🔥</span>
			</div>
		</div>
	</footer>
    );
}