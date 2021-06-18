import React from 'react';

export default function Footer() {
	return (
		<footer>
			<div className="row footer1">
				<div className="container">
					<h3 className="footer1-h">KEEP IN TOUCH</h3>
					<span className="fa-stack fa-2x icons">
						<i className="fas fa-circle fa-stack-2x"></i>
						<a
							className="footer-font-awesome"
							title="Twitter"
							target="_blank"
							rel="noopener noreferrer"
							href="https://twitter.com/vetswhocode"
						>
							<i className="fab fa-twitter fa-stack-1x"></i>
						</a>
					</span>
					<span className="fa-stack fa-2x icons">
						<i className="fas fa-circle fa-stack-2x"></i>
						<a
							className="footer-font-awesome"
							title="Facebook"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/TheOfficialVetsWhoCode/"
						>
							<i className="fab fa-facebook-f fa-stack-1x"></i>
						</a>
					</span>
					<span className="fa-stack fa-2x icons">
						<i className="fas fa-circle fa-stack-2x"></i>
						<a
							className="footer-font-awesome"
							title="Github"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/Vets-Who-Code"
						>
							<i className="fab fa-github fa-stack-1x"></i>
						</a>
					</span>
					<span className="fa-stack fa-2x icons">
						<i className="fas fa-circle fa-stack-2x"></i>
						<a
							className="footer-font-awesome"
							title="Linkedin"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/company/vets-who-code/"
						>
							<i className="fab fa-linkedin-in fa-stack-1x"></i>
						</a>
					</span>
					<span className="fa-stack fa-2x icons">
						<i className="fas fa-circle fa-stack-2x"></i>
						<a
							className="footer-font-awesome"
							title="Dev"
							target="_blank"
							rel="noopener noreferrer"
							href="https://dev.to/vetswhocode"
						>
							<i className="fab fa-dev fa-stack-1x"></i>
						</a>
					</span>
				</div>
			</div>
			<div className="row footer2">
				<div className="container">
					<div className="col-md-4 footer-div1">
						<h3 className="footer2-header">ABOUT #VETSWHOCODE</h3>
						<p className="footer-p">
							FRAGO, doing business as #VetsWhoCode, is an exempt organization
							as described in Section 501(c)(3) of the Internal Revenue Code.
							Our EIN is 47-3555231.
						</p>
					</div>
					<div className="col-md-4 footer-div3">
						<h3 className="footer2-header">SITE MAP</h3>
						<div className="row">
							<div className="col-md-6 site-map">
								<ul>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a className="site-link" href="https://vetswhocode.io/">
											HOME
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/about"
										>
											ABOUT
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/board"
										>
											BOARD
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/syllabus"
										>
											SYLLABUS
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/testimonials"
										>
											TESTIMONIALS
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-6 site-map2">
								<ul>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/mentor"
										>
											MENTOR
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/apply"
										>
											APPLY
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a className="site-link" href="">
											JOB SEARCH
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a
											className="site-link"
											href="https://vetswhocode.io/contact"
										>
											CONTACT US
										</a>
									</li>
									<li className="footer-li">
										<i className="far fa-circle fa-xs footer-icon"></i>
										<a className="site-link" href="https://vetswhocode.io/blog">
											BLOG
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4 footer-div2">
						<h3 className="footer2-header">CONTACT US</h3>
						<form id="contact-form">
							<div className="form-group">
								<label className="group-email" htmlFor="exampleInputEmail1">Email</label>
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
							</div>
							<div className="form-group">
								<label className="group-email" htmlFor="exampleInputPassword1">Message</label>
								<textarea name="textarea" id="textarea" maxLength="300" rows="2" className="form-control"
									id="exampleInputPassword1" placeholder="Message"></textarea>

								<div id="count" className="count">
									<span id="current_count">0</span>
									<span id="maximum_count">/ 300</span>
								</div>
							</div>
							<button
								type="submit"
								className="btn btn-primary send-button"
								id="send-button"
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="row footer3">
				<div className="container">
					<span title="Copyright" className="copyright">
						©2021{' '}
						<a
							className="footer3-anchor"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/Vets-Who-Code/vets-who-code-app/blob/master/LICENSE"
						>
							#VetsWhoCode
						</a>
					</span>
					<span className="byVWC">
						Made By the 🔥
						<a
							tabIndex="0"
							hef="https://github.com/Vets-Who-Code/march2021"
							target="_blank"
							rel="noopener noreferrer"
							className="made-by"
						>
							Post-Apocalyptic Coders
						</a>
						🔥
					</span>
				</div>
			</div>
		</footer>
	);
}
