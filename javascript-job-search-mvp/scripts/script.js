//easter egg
console.log('Hello, Vets Who Code!');

//Typed.js
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 50,
  typeSpeed: 50,
  loop: true,
  startDelay: 1000,
  backDelay: 3000
});

// Variables for Search Button
const jobSearch = document.getElementById("job-search");
//this listens for the form to submit.
jobSearch.addEventListener("submit", submitButtonEvent);
//variable for veteran video
const veteranVideo = document.getElementById("veteran-video");
//receives objects from the API (array of objects)
let job = [];

// Triggers the function when the search button is clicked
function submitButtonEvent(event) {
  event.preventDefault();

  //for the future language dropdown functionality
  localStorage.setItem("job", "Web Developer");
  localStorage.setItem("zipcode", event.currentTarget[0].value);
  localStorage.setItem("remote", event.currentTarget[1].value);
  localStorage.setItem("radius", event.currentTarget[2].value);

  //API data gets pushed into this as a string 
  let jobposting = "";
 
  // API GET Request
  fetch('https://swapi.dev/api/people/?').then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Network response error.');
      })
      .then(response => {
        if(job.length > 0) {
          job = [];
          jobposting = "";
        }
      for(let i = 0; i < response.results.length; i++) {
      job.push({Title: response.results[i].name, Company: response.results[i].height, Location: response.results[i].mass, Remote: response.results[i].hair_color, JobSnippet: response.results[i].skin_color, Salary: response.results[i].eye_color, DateSincePosted: response.results[i].birth_year});
    }
  });
 
  //Grid    
  let innergrid = document.getElementsByClassName('jobgrid');

  //test case for 11111 zip code to demonstrate the no search results screen. To be removed. 
  if (event.currentTarget[0].value[0] == 1) {
    job = [];
  }

  //sort the job array
  job.sort(function (a, b) {
    return a.sortOrder - b.sortOrder
  });

  //if the job variable is an empty array, the hidden class is added to the video and removed from the jobgrid div
  if (job.length > 0) {
    veteranVideo.classList.add('hidden');
    document.getElementById("no-results").classList.add('hidden');
    document.getElementById('jobgrid').classList.remove('hidden');
  } else {
    document.getElementById("no-results").classList.remove('hidden');
    veteranVideo.classList.remove('hidden');
  }

  //adds a container and items to the jobposting string for each object in the job array
  for (let i = 0; i < job.length; i++) {
    jobposting += `<a href="${job[i].ApplicationSite}" target="_blank" rel="noopener noreferrer"><div class="">
        <div class="grid-container">
          <div class="grid-item grid-item-1">Title: ${job[i].Title}</div>
          <div class="grid-item grid-item-2">Company: ${job[i].Company} - ${job[i].Location}</div>
          <div class="grid-item grid-item-3">Remote: ${job[i].Remote}</div>
          <div class="grid-item grid-item-4">Job Description: ${job[i].JobSnippet}</div>
          <div class="grid-item grid-item-5">Salary: ${job[i].Salary}</div>
          <div class="grid-item grid-item-6">Date Posted: ${job[i].DateSincePosted}</div>
        </div></a>`
  }

  //if the job array contains no data from the API, the jobposting string will show no results
  const noResults = "The search returned no jobs";
  if (job.length === 0) {
    jobposting += noResults;
  }

  innergrid[0].innerHTML = jobposting;

  if (document.body.classList.contains("dark-background")) {
    document.querySelectorAll(".grid-container").forEach(e => e.classList.add("dark-container"));
    document.querySelectorAll(".grid-item").forEach(e => e.classList.add("dark-grid"));
  } else {
    document.querySelectorAll(".grid-container").forEach(e => e.classList.remove("dark-container"));
    document.querySelectorAll(".grid-item").forEach(e => e.classList.remove("dark-grid"));
  }
}

//# sourceMappingURL=bootstrap-select-country.min.js.map
var countrypicker = function (a) {
  "use strict";
  a = a && a.hasOwnProperty("default") ? a.default : a;
  var S = [
      ["KR", "KOR", "410", "ISO 3166-2:KR"],
      ["US", "USA", "840", "ISO 3166-2:US"]
    ],
    I = Object.freeze({
      default: S
    }),
    n = {},
    e = {},
    O = {},
    t = {},
    i = {};

  function r(a) {
    return String("000" + (a || "")).slice(-3)
  }

  function o(a) {
    return O[a]
  }

  function M(a) {
    return e[a]
  }

  function u(a) {
    var S = r(a);
    return M(t[S])
  }

  function A(a) {
    var S = r(a);
    return t[S]
  }

  function l(a) {
    if ("string" == typeof a) {
      if (/^[0-9]*$/.test(a)) return A(a);
      if (2 === a.length) return a.toUpperCase();
      if (3 === a.length) return o(a.toUpperCase())
    }
    if ("number" == typeof a) return A(a)
  }(I && S || I).forEach(function (a) {
    var S = a;
    e[S[0]] = S[1], O[S[1]] = S[0], t[S[2]] = S[0], i[S[0]] = S[2]
  });
  var s = {
      registerLocale: function (a) {
        if (!a.locale) throw new TypeError("Missing localeData.locale");
        if (!a.countries) throw new TypeError("Missing localeData.countries");
        n[a.locale] = a.countries
      },
      alpha3ToAlpha2: o,
      alpha2ToAlpha3: M,
      alpha3ToNumeric: function (a) {
        return i[o(a)]
      },
      alpha2ToNumeric: function (a) {
        return i[a]
      },
      numericToAlpha3: u,
      numericToAlpha2: A,
      toAlpha3: function (a) {
        if ("string" == typeof a) {
          if (/^[0-9]*$/.test(a)) return u(a);
          if (2 === a.length) return M(a.toUpperCase());
          if (3 === a.length) return a.toUpperCase()
        }
        if ("number" == typeof a) return u(a)
      },
      toAlpha2: l,
      getName: function (a, S) {
        try {
          return n[S.toLowerCase()][l(a)]
        } catch (a) {
          return
        }
      },
      getNames: function (a) {
        var S = n[a.toLowerCase()];
        return void 0 === S ? {} : S
      },
      getAlpha2Code: function (a, S) {
        try {
          var I, e = n[S.toLowerCase()];
          for (I in e)
            if (e.hasOwnProperty(I) && e[I].toLowerCase() === a.toLowerCase()) return I;
          return
        } catch (a) {
          return
        }
      },
      getAlpha2Codes: function () {
        return e
      },
      getAlpha3Code: function (a, S) {
        var I = this.getAlpha2Code(a, S);
        return I ? this.toAlpha3(I) : void 0
      },
      getAlpha3Codes: function () {
        return O
      },
      getNumericCodes: function () {
        return t
      },
      langs: function () {
        return Object.keys(n)
      },
      isValid: function (a) {
        return O.hasOwnProperty(a) || e.hasOwnProperty(a) || t.hasOwnProperty(a)
      }
    },
    C = {
      locale: "en",
      countries: {
        US: "United States",
        KR: "South Korea",
      }
    };
  s.registerLocale(C);
  var G = s.getNames("en"),
    T = Object.keys(G).map(function (a) {
      return {
        name: G[a],
        code: a
      }
    }),
    N = function (S) {
      a(this).each(function (S, I) {
        var n = a(I),
          e = n.data("flag"),
          O = T,
          t = n.data("countries");
        t && t.length && (t = t.toUpperCase().split(","), O = O.filter(function (a) {
          return t.includes(a.code)
        }));
        var i = [];
        e ? a.each(O, function (a, S) {
          i.push('<option\n\t\t\t\t\t\tdata-tokens="' + S.code + " " + S.name + '"\n\t\t\t\t\t\tdata-icon="inline-flag flag ' + S.code.toLowerCase() + '"\n\t\t\t\t\t\tclass="option-with-flag"\n\t\t\t\t\t\tvalue="' + S.code + '">' + S.name + "</option>")
        }) : a.each(O, function (a, S) {
          i.push('<option\n\t\t\t\t\tdata-countrycode="' + S.code + '\n\t\t\t\t\tdata-tokens="' + S.code + " " + S.name + '"\n\t\t\t\t\tvalue="' + S.code + '">' + S.name + "</option>")
        }), n.addClass("f16").html(i.join("\n"));
        var r = n.data("default");
        r && n.val(r.split(",").map(function (a) {
          return a.trim()
        }))
      })
    };
  return a.fn.countrypicker = N, a(".countrypicker").countrypicker(), N
}($);

//Dark Mode
const darkMode = () => {
  const body = document.body;
  body.classList.toggle("dark-background");
  document.getElementById("donate").classList.toggle('dark-theme');
  document.getElementById("send-button").classList.toggle("dark-theme");
  document.getElementById("submit-button").classList.toggle("dark-theme");
  document.getElementById("typed").classList.toggle("dark-theme");
  document.getElementById("jobgrid").classList.toggle("dark-theme");
  document.querySelector(".lead-in").classList.toggle("dark-theme");
  document.querySelector(".fa-moon").classList.toggle("fa-sun");
  document.querySelectorAll(".grid-container").forEach(e => e.classList.toggle("dark-container"));
  document.querySelectorAll(".grid-item").forEach(e => e.classList.toggle("dark-grid"));
}

//Contact Form
function contactFormSubmit(event) {
  event.preventDefault();
}

//this listens for the contact form to submit.
const contactButton = document.getElementById("contact-form");
contactButton.addEventListener("submit", contactFormSubmit);