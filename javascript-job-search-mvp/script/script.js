console.log('Hello, Vets Who Code!');

const darkMode = () => {
  const body = document.body;
  const button = document.getElementsByClassName('btn-primary');
  body.classList.toggle("dark-background");
  button.classList.toggle("dark-buttons");
}

let innergrid = document.getElementsByClassName('jobgrid')

let job=[{Title:"Application Engineer", Company:"Google", Location:"San Francisco", ApplicationSite: "https://google.com/careers", DateSincePosted: "18 Days ago", FullOrPartTime: "Full Time"},
          {Title:"Application Engineer", Company:"Google", Location:"San Francisco", ApplicationSite: "https://google.com/careers", DateSincePosted: "18 Days ago", FullOrPartTime: "Full Time"},
          {Title:"Application Engineer", Company:"Google", Location:"San Francisco", ApplicationSite: "https://google.com/careers", DateSincePosted: "18 Days ago", FullOrPartTime: "Full Time"},
          {Title:"Application Engineer", Company:"Google", Location:"San Francisco", ApplicationSite: "https://google.com/careers", DateSincePosted: "18 Days ago", FullOrPartTime: "Full Time"}]

let jobposting=""

for(let i=0; i<job.length; i++){
  jobposting +=`<div class="row">
  <div class="col-sm-12">

    <!-- First column with Company Icon -->
    <div class="col-sm-2 grid-icon-column"></div>

    <!-- Middle Content Column of Grid -->
    <div class="col-sm-8 grid-content-column">
      <div class="row"></div>${job[i].Title}
      <div class="row"></div>${job[i].Company}
      <div class="row"></div>${job[i].Location} 
      <div class="row"></div>${job[i].ApplicationSite}
      <div class="row">
        <div class="col-12">
          <div class="col-md-6"></div>${job[i].DateSincePosted} 
          <div class="col-md-6"></div>${job[i].FullOrPartTime} 
        </div>
      </div>
    </div>

    <!-- Last Column, should be small for bookmark -->
    <div class="col-sm-2 grid-bookmark-column">
      <div class="col-md-1"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></div>
      <!-- Bookmark Icon -->

    </div>
  </div>
</div>`
}


innergrid[0].innerHTML=jobposting

console.log(innergrid[0].innerHTML)
