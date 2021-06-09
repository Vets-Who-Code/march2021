import React from "react";
import Typed from 'react-typed'
import JobAppForm from "../JobApp/Form/JobAppForm"

export default function JobApp() {
    return (
        <div>
            <div class="container">
                <h1 class="main-header" id="main-header">JOB SEARCH</h1>
                <div class="typed-container">
                    <div id="typed-strings"><p class="lead-in">#VetsWhoCode <span id="typed" class="typed"> <Typed strings={['provides job placement assistance.', 'makes a difference in the lives of veterans.']} typeSpeed={50} backSpeed={50} loop /></span>
                    </p></div>
                </div>
                <p class="job-search-description">
                    Vets Who Code Job Search (VWC) is a tool for connecting veterans, military, and military spouses with jobs.
                    Our goal is to make every workplace fair and profitable by bringing together
                    the perfect candidate with the ideal employer. Our site pairs technology and best practices in order to promote
                    practical and gainful employment.
                </p>
                {/* <!-- End Header --> */}

                {/* <!-- Search Bar --> */}
                <JobAppForm />
                {/* <!-- Search End --> */}

                {/* <!-- Empty Grid --> */}
                <div id="middle" class="middle"></div>
                <div>
                    <p id="no-results" class="text-center hidden no-results">
                        Sorry there were no results. Try again.
                    </p>
                </div>
                <div id="loader" class="loading hidden">
                    <div class="ball first"></div>
                    <div class="ball second"></div>
                    <div class="ball third"></div>
                </div>
                <video id="veteran-video" class="veteran-video" src="videos/veteran-on-computer.mp4" autoplay loop muted></video>
                {/* <!-- End Empty Grid --> */}

                {/* <!-- Grid --> */}
                <div class="jobgrid-container">
                    <div class="jobgrid hidden hide-native-scrollbar" id="jobgrid" aria-label="Job Grid"></div>
                </div>
            </div>
            <div id="pagination" class="tui-pagination hidden"></div>
        </div>
    )
}