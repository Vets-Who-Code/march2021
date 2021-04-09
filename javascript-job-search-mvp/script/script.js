console.log('Hello, Vets Who Code!');

const darkMode = () => {
  const body = document.body;
  const button = document.getElementsByClassName('btn-primary');
  body.classList.toggle("dark-background");
  button.classList.toggle("dark-buttons");
}

let innergrid = document.getElementsByClassName('jobgrid')

let job=[{Icon:"", Title:"Application Engineer", Company:"Google", Location:"San Francisco", ApplicationSite: "https://google.com/careers", DateSincePosted: "18 Days ago", FullOrPartTime: "Full Time"},
          {Icon:"", Title:"Technical Evangelist", Company:"Eco Focus", Location:"San Francisco", ApplicationSite: "https://ecofocus.com/jobs", DateSincePosted: "> 30 Days ago", FullOrPartTime: "Full Time"},
          {Icon:"", Title:"Digital Overlord", Company:"Innovation Arch", Location:"Houston", ApplicationSite: "https://innoarch.com/positions", DateSincePosted: "5 hours ago", FullOrPartTime: "Part Time"},
          {Icon:"", Title:"Skynet Operator", Company:"Cogent Security", Location:"Seattle", ApplicationSite: "https://skynet.com/life", DateSincePosted: "Just now", FullOrPartTime: "Full Time"},
          {Icon:"", Title:"JavaScript Guru", Company:"Felar Corp", Location:"Austin", ApplicationSite: "https://felarcorp.com/careers", DateSincePosted: "5 days ago", FullOrPartTime: "Part Time"},
          {Icon:"", Title:"Object Oriented Sherpa", Company:"Sanguine Skincare", Location:"Denver", ApplicationSite: "https://s2skin.com/careers", DateSincePosted: "5 hours ago", FullOrPartTime: "Part Time"},
          {Icon:"", Title:"Scrum Advisor", Company:"Senzu Bean", Location:"Chicago", ApplicationSite: "https://beans.com/team", DateSincePosted: "> 30 Days ago", FullOrPartTime: "Full Time"},
          {Icon:"", Title:"Growth Hacker", Company:"Ultra Instinct", Location:"New York", ApplicationSite: "https://UI.com/apply", DateSincePosted: "> 30 Days ago", FullOrPartTime: "N/A"},
          {Icon:"", Title:"Python Prophet", Company:"Ranger Powers", Location:"Seattle", ApplicationSite: "https://RangerPowers.com/careers", DateSincePosted: "5 hours ago", FullOrPartTime: "Full Time"},
          {Icon:"", Title:"Six Sigma Blackbelt Coder", Company:"Gold Requisitions", Location:"Atlanta", ApplicationSite: "https://goldreqs.com/apply", DateSincePosted: "18 Days ago", FullOrPartTime: "Full Time"}]

let jobposting=""

for(let i=0; i<job.length; i++){
  jobposting +=`<div class="row gridborder">
  <div class="col-sm-12">

    <!-- First column with Company Icon -->
    <div class="col-sm-2 grid-icon-column">${job[i].Icon}</div>

    <!-- Middle Content Column of Grid -->
    <div class="col-sm-8 grid-content-column">
      <div class="row gridborder">${job[i].Title}</div>
      <div class="row gridborder">${job[i].Company}</div>
      <div class="row gridborder">${job[i].Location} </div>
      <div class="row gridborder">${job[i].ApplicationSite}</div>
      <div class="row gridborder">
        <div class="col-md-12">
          <div class="col-md-6">${job[i].DateSincePosted}</div> 
          <div class="col-md-6">${job[i].FullOrPartTime}</div> 
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