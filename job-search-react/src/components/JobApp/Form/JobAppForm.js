import React from "react";

export default function JobAppForm() {
    return(
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

    )}