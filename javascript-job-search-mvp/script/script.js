console.log('Hello, Vets Who Code!');

//Typed.js

var typed = new Typed('#typed',{
                    stringsElement: '#typed-strings',
                    backSpeed: 50,
                    typeSpeed: 50,
                    loop: true,
                  });

//Dark Mode
const darkMode = () => {
  const body = document.body;
  const button = document.getElementsByClassName('btn-primary');
  body.classList.toggle("dark-background");
  button.classList.toggle("dark-buttons");
}

//Grid
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

var countrypicker=function(a){"use strict";a=a&&a.hasOwnProperty("default")?a.default:a;var S=[["KR","KOR","410","ISO 3166-2:KR"],["US","USA","840","ISO 3166-2:US"]],I=Object.freeze({default:S}),n={},e={},O={},t={},i={};function r(a){return String("000"+(a||"")).slice(-3)}function o(a){return O[a]}function M(a){return e[a]}function u(a){var S=r(a);return M(t[S])}function A(a){var S=r(a);return t[S]}function l(a){if("string"==typeof a){if(/^[0-9]*$/.test(a))return A(a);if(2===a.length)return a.toUpperCase();if(3===a.length)return o(a.toUpperCase())}if("number"==typeof a)return A(a)}(I&&S||I).forEach(function(a){var S=a;e[S[0]]=S[1],O[S[1]]=S[0],t[S[2]]=S[0],i[S[0]]=S[2]});var s={registerLocale:function(a){if(!a.locale)throw new TypeError("Missing localeData.locale");if(!a.countries)throw new TypeError("Missing localeData.countries");n[a.locale]=a.countries},alpha3ToAlpha2:o,alpha2ToAlpha3:M,alpha3ToNumeric:function(a){return i[o(a)]},alpha2ToNumeric:function(a){return i[a]},numericToAlpha3:u,numericToAlpha2:A,toAlpha3:function(a){if("string"==typeof a){if(/^[0-9]*$/.test(a))return u(a);if(2===a.length)return M(a.toUpperCase());if(3===a.length)return a.toUpperCase()}if("number"==typeof a)return u(a)},toAlpha2:l,getName:function(a,S){try{return n[S.toLowerCase()][l(a)]}catch(a){return}},getNames:function(a){var S=n[a.toLowerCase()];return void 0===S?{}:S},getAlpha2Code:function(a,S){try{var I,e=n[S.toLowerCase()];for(I in e)if(e.hasOwnProperty(I)&&e[I].toLowerCase()===a.toLowerCase())return I;return}catch(a){return}},getAlpha2Codes:function(){return e},getAlpha3Code:function(a,S){var I=this.getAlpha2Code(a,S);return I?this.toAlpha3(I):void 0},getAlpha3Codes:function(){return O},getNumericCodes:function(){return t},langs:function(){return Object.keys(n)},isValid:function(a){return O.hasOwnProperty(a)||e.hasOwnProperty(a)||t.hasOwnProperty(a)}},C={locale:"en",countries:{KR:"South Korea",US:"United States"}};s.registerLocale(C);var G=s.getNames("en"),T=Object.keys(G).map(function(a){return{name:G[a],code:a}}),N=function(S){a(this).each(function(S,I){var n=a(I),e=n.data("flag"),O=T,t=n.data("countries");t&&t.length&&(t=t.toUpperCase().split(","),O=O.filter(function(a){return t.includes(a.code)}));var i=[];e?a.each(O,function(a,S){i.push('<option\n\t\t\t\t\t\tdata-tokens="'+S.code+" "+S.name+'"\n\t\t\t\t\t\tdata-icon="inline-flag flag '+S.code.toLowerCase()+'"\n\t\t\t\t\t\tclass="option-with-flag"\n\t\t\t\t\t\tvalue="'+S.code+'">'+S.name+"</option>")}):a.each(O,function(a,S){i.push('<option\n\t\t\t\t\tdata-countrycode="'+S.code+'\n\t\t\t\t\tdata-tokens="'+S.code+" "+S.name+'"\n\t\t\t\t\tvalue="'+S.code+'">'+S.name+"</option>")}),n.addClass("f16").html(i.join("\n"));var r=n.data("default");r&&n.val(r.split(",").map(function(a){return a.trim()}))})};return a.fn.countrypicker=N,a(".countrypicker").countrypicker(),N}($);
//# sourceMappingURL=bootstrap-select-country.min.js.map
