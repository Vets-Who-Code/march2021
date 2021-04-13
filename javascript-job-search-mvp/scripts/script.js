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

//Dark Mode

const darkMode = () => {
  const body = document.body;
  body.classList.toggle("dark-background");
  document.getElementById("donate").classList.toggle('dark-theme')
  document.getElementById("send-button").classList.toggle("dark-theme");
  document.getElementById("submit-button").classList.toggle("dark-theme");
}

//Grid

let innergrid = document.getElementsByClassName('jobgrid')

let job = [{
    Title: "Application Engineer",
    Company: "Google",
    Location: "San Francisco, CA",
    JobSnippet: "Application Engineers understand internal processes and what it takes to run Google at speed with its ever growing scale. As an Application Engineer...",
    DateSincePosted: "18 Days ago"
  },
  {
    Title: "Technical Evangelist",
    Company: "Eco Focus",
    Location: "San Francisco, CA",
    JobSnippet: "Demonstrated proficiency in iSeries technical standards. Working knowledge in the appropriate technical language.",
    DateSincePosted: "> 30 Days ago"
  },
  {
    Title: "Digital Overlord",
    Company: "Innovation Arch",
    Location: "Houston, TX",
    JobSnippet: "Digital overlord If you have ever worked on a website, you know this term is fitting for the role.",
    DateSincePosted: "5 hours ago"
  },
  {
    Title: "Skynet Operator",
    Company: "Cogent Security",
    Location: "Seattle, WA",
    JobSnippet: "Good analytical skills Good communication and documentation skills Be able to work under pressure Be willing to work long hours and meet deadlines if required",
    DateSincePosted: "Just now"
  },
  {
    Title: "JavaScript Guru",
    Company: "Felar Corp",
    Location: "Austin, TX",
    JobSnippet: "Two or more years experience developing front end websites and applications.The ideal candidate is someone who’s a web guru that will be a key part of our…",
    DateSincePosted: "5 days ago"
  },
  {
    Title: "Object Oriented Sherpa",
    Company: "Sanguine Skincare",
    Location: "Denver, CO",
    JobSnippet: "Demonstrate an understanding of the basics of object oriented programming. Work both autonomously and within a team environment.",
    DateSincePosted: "5 hours ago"
  },
  {
    Title: "Scrum Advisor",
    Company: "Senzu Bean",
    Location: "Chicago, IL",
    JobSnippet: "Attend all weekly planning meetings, scrum meetings (all online), and potentially client meetings. This role is integral to our growing Web Production Team,…",
    DateSincePosted: "> 30 Days ago"
  },
  {
    Title: "Growth Hacker",
    Company: "Ultra Instinct",
    Location: "New York, NY",
    JobSnippet: "Keep one eye on surpassing growth targets and the other on effective customer acquisition spending. Possess a combination of clever thinking and technical know…",
    DateSincePosted: "> 30 Days ago"
  },
  {
    Title: "Python Prophet",
    Company: "Ranger Powers",
    Location: "Seattle, WA",
    JobSnippet: "Top-notch developers needed to help fuel our rapid expansion. We offer a 401(k) with 100% match of up to 4% of salary, with immediate…",
    DateSincePosted: "5 hours ago"
  },
  {
    Title: "Six Sigma Blackbelt Coder",
    Company: "Gold Requisitions",
    Location: "Atlanta, GA",
    JobSnippet: "Design Quality Black Belt. The Role: The Design Quality Black Belt has several roles at Hunter Douglas: The DFSS practice leader for organization teaching,…",
    DateSincePosted: "18 Days ago"
  }
]

let jobposting = ""

for (let i = 0; i < job.length; i++) {
  jobposting +=`<div class="">
      <div class="grid-container">
        <div class="grid-item grid-item-1">${job[i].Title}</div>
        <div class="grid-item grid-item-2">${job[i].Company}</div>
        <div class="grid-item grid-item-3">${job[i].Location}</div>
        <div class="grid-item grid-item-4">${job[i].JobSnippet}</div>
        <div class="grid-item grid-item-5">${job[i].DateSincePosted}</div>
      </div>`
}

innergrid[0].innerHTML = jobposting

console.log(innergrid[0].innerHTML)

// All variables for Submit Button
const jobSearch = document.getElementById("job-search");
const zipCode = document.getElementById("zipCode");
const isRemote = document.getElementById("inlineFormCheck");
const range = document.getElementById("range");

// Triggers the function when the search button is clicked
function submitButtonEvent(event) {
  event.preventDefault();
  localStorage.setItem("job", "Web Developer");
  localStorage.setItem("zipcode", event.currentTarget[0].value);
  localStorage.setItem("remote", event.currentTarget[1].value);
  localStorage.setItem("radius", event.currentTarget[2].value);
}

//this listens for the form to submit.
jobSearch.addEventListener("submit", submitButtonEvent);


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
        KR: "South Korea",
        US: "United States"
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