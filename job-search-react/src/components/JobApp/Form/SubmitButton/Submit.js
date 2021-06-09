import React from "react";

export default function SubmitButton() {
    return (
        <button id="submit-button" type="submit" class="btn btn-primary mb-2 submit-button search"
        onClick="document.getElementById('middle').scrollIntoView();">
        <i class="glyphicon glyphicon-search">Search</i>
    </button>
        
    )
}