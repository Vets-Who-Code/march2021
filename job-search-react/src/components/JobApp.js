import React from "react";

export default function JobApp() {
  return (
<div>
    <div class="container">

    {/* <!-- Header --> */}
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
        {/* <!-- End Header --> */}

        {/* <!-- Search Bar --> */}
        <form id="job-search" class="form-inline text-center job-grabber">
            <label class="sr-only" for="zipCode">Zip Code</label>
            <input type="string" pattern="[0-9]{5}" class="form-control input-lg zip" id="zipCode" placeholder="Zip Code" required />
            <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
            <label class="form-check-label" for="inlineFormCheck">
                Remote?
            </label>

            <div class="form-group" id="sel1">
                <label for="sel1"></label>
                <select class="form-control input-lg miles" id="sel1" name="sellist1">
                    {/* <!-- value is set in km --> */}
                    <option value="0">Only in</option>
                    <option value="8">5 mi.</option>
                    <option value="16">10 mi.</option>
                    <option value="24">15 mi.</option>
                    <option value="40" selected>25 mi.</option>
                    <option value="80">50 mi.</option>
                    <option value="161">100 mi.</option>
                    <option value="322">200 mi.</option>
                    <option value="5000">CONUS</option>
                </select>
            </div>
            <button id="submit-button" type="submit" class="btn btn-primary mb-2 submit-button search"
                onClick="document.getElementById('middle').scrollIntoView();">
                    <i class="glyphicon glyphicon-search">Search</i>
            </button>
        </form>
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
  )}