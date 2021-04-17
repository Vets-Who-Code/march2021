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

// Triggers the function when the search button is clicked
function submitButtonEvent(event) {

  event.preventDefault();
  localStorage.setItem("job", "Web Developer");
  localStorage.setItem("zipcode", event.currentTarget[0].value);
  localStorage.setItem("remote", event.currentTarget[1].value);
  localStorage.setItem("radius", event.currentTarget[2].value);

  //Grid
  let innergrid = document.getElementsByClassName('jobgrid');
  //sort this
  let job = [{
      Title: "Application Engineer",
      Company: "Google",
      Location: "San Francisco, CA",
      JobSnippet: "Application Engineers understand internal processes and what it takes to run Google at speed with its ever growing scale. As an Application Engineer...",
      DateSincePosted: "18 Days ago",
      Location: "San Francisco",
      Remote: "Yes",
      Salary: "$115,000",
      ApplicationSite: "https://google.com/careers",
      DateSincePosted: "18 Days ago",
      FullOrPartTime: "Full Time",
      sortOrder: 18
    },
    {
      Title: "Technical Evangelist",
      Company: "Eco Focus",
      Location: "San Francisco, CA",
      JobSnippet: "Demonstrated proficiency in iSeries technical standards. Working knowledge in the appropriate technical language.",
      DateSincePosted: "> 30 Days ago",
      Location: "San Francisco",
      Remote: "Yes",
      Salary: "$105,000",
      ApplicationSite: "https://www.ecofocusworldwide.com/",
      DateSincePosted: "> 30 Days ago",
      FullOrPartTime: "Full Time",
      sortOrder: 31
    },
    {
      Title: "Digital Overlord",
      Company: "Innovation Arch",
      Location: "Houston, TX",
      JobSnippet: "Digital overlord - If you have ever worked on a website, you know this term is fitting for the role.",
      DateSincePosted: "5 hours ago",
      Location: "Houston",
      Remote: "No",
      Salary: "$55,000",
      ApplicationSite: "https://www.accenture.com/us-en/about/innovation-architecture-index",
      DateSincePosted: "Today",
      FullOrPartTime: "Part Time",
      sortOrder: 1
    },
    {
      Title: "Skynet Operator",
      Company: "Cogent Security",
      Location: "Seattle, WA",
      JobSnippet: "Good analytical skills Good communication and documentation skills Be able to work under pressure Be willing to work long hours and meet...",
      DateSincePosted: "Just now",
      Location: "Seattle",
      Remote: "Yes",
      Salary: "$145,000",
      ApplicationSite: "https://skynet.com/life",
      DateSincePosted: "Today",
      FullOrPartTime: "Full Time",
      sortOrder: 1
    },
    {
      Title: "JavaScript Guru",
      Company: "Felar Corp",
      Location: "Austin, TX",
      JobSnippet: "Two or more years experience developing front end websites and applications.The ideal candidate is someone who’s a web guru that will…",
      DateSincePosted: "5 days ago",
      Location: "Austin",
      Remote: "Yes",
      Salary: "$85,000",
      ApplicationSite: "https://felarcorp.com/careers",
      DateSincePosted: "5 days ago",
      FullOrPartTime: "Part Time",
      sortOrder: 5
    },
    {
      Title: "Object Oriented Sherpa",
      Company: "Sanguine Skincare",
      Location: "Denver, CO",
      JobSnippet: "Demonstrate an understanding of the basics of object oriented programming. Work both autonomously and within a team environment.",
      DateSincePosted: "5 hours ago",
      Location: "Denver",
      Remote: "Yes",
      Salary: "$65,000",
      ApplicationSite: "https://s2skin.com/careers",
      DateSincePosted: "Today",
      FullOrPartTime: "Part Time",
      sortOrder: 1
    },
    {
      Title: "Scrum Advisor",
      Company: "Senzu Bean",
      Location: "Chicago, IL",
      JobSnippet: "Attend all weekly planning meetings, scrum meetings (all online), and potentially client meetings. This role is integral to our growing Web Production…",
      DateSincePosted: "> 30 Days ago",
      Location: "Chicago",
      Remote: "No",
      Salary: "$105,000",
      ApplicationSite: "https://beans.com/team",
      DateSincePosted: "> 30 Days ago",
      FullOrPartTime: "Full Time",
      sortOrder: 31
    },
    {
      Title: "Growth Hacker",
      Company: "Ultra Instinct",
      Location: "New York, NY",
      JobSnippet: "Keep one eye on surpassing growth targets and the other on effective customer acquisition spending. Possess a combination of clever thinking and…",
      DateSincePosted: "> 30 Days ago",
      Location: "New York",
      Remote: "Yes",
      Salary: "$95,000",
      ApplicationSite: "https://UI.com/apply",
      DateSincePosted: "> 30 Days ago",
      FullOrPartTime: "N/A",
      sortOrder: 31
    },
    {
      Title: "Python Prophet",
      Company: "Ranger Powers",
      Location: "Seattle, WA",
      JobSnippet: "Top-notch developers needed to help fuel our rapid expansion. We offer a 401(k) with 100% match of up to 4% of…",
      DateSincePosted: "5 hours ago",
      Location: "Seattle",
      Remote: "No",
      Salary: "$75,000",
      ApplicationSite: "https://RangerPowers.com/careers",
      DateSincePosted: "Today",
      FullOrPartTime: "Full Time",
      sortOrder: 1
    },
    {
      Title: "Six Sigma Blackbelt Coder",
      Company: "Gold Requisitions",
      Location: "Atlanta, GA",
      JobSnippet: "Design Quality Black Belt. The Role: The Design Quality Black Belt has several roles at Hunter Douglas: The DFSS practice leader for…",
      DateSincePosted: "18 Days ago",
      Location: "Atlanta",
      Remote: "No",
      Salary: "$95,000",
      ApplicationSite: "https://goldreqs.com/apply",
      DateSincePosted: "18 Days ago",
      FullOrPartTime: "Full Time",
      sortOrder: 18
    }
  ]

  if (event.currentTarget[0].value[0] == 1) {
    job = [];
  }

  job.sort(function (a, b) {
    return a.sortOrder - b.sortOrder
  });

  let jobposting = ""

  if (job.length > 0) {
    veteranVideo.classList.add('hidden');
    document.getElementById("no-results").classList.add('hidden');
  } else {
    document.getElementById("no-results").classList.remove('hidden');
    veteranVideo.classList.remove('hidden');
  }

  for (let i = 0; i < job.length; i++) {
    jobposting += `<a href="${job[i].ApplicationSite}" target="_blank" rel="noopener noreferrer"><div class="">
        <div class="grid-container">
          <div class="grid-item grid-item-1">${job[i].Title}</div>
          <div class="grid-item grid-item-2">${job[i].Company} - ${job[i].Location}</div>
          <div class="grid-item grid-item-3">Remote: ${job[i].Remote}</div>
          <div class="grid-item grid-item-4">${job[i].JobSnippet}</div>
          <div class="grid-item grid-item-5">${job[i].Salary}</div>
          <div class="grid-item grid-item-6">${job[i].DateSincePosted}</div>
        </div></a>`
  }

  const noResults = "The search returned no jobs";
  if (job.length === 0) {
    josposting += noResults;
  }

  innergrid[0].innerHTML = jobposting

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
  document.querySelector(".lead-in").classList.toggle("dark-theme");
  document.querySelector(".fa-moon").classList.toggle("fa-sun");
  document.querySelectorAll(".grid-container").forEach(e => e.classList.toggle("dark-container"));
  document.querySelectorAll(".grid-item").forEach(e => e.classList.toggle("dark-grid"));
}

//Contact Form Submit

function contactFormSubmit(event) {
  event.preventDefault();
}

//this listens for the contact form to submit.
const contactButton = document.getElementById("contact-form");
contactButton.addEventListener("submit", contactFormSubmit);