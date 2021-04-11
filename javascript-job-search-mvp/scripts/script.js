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
}

//Grid

let innergrid = document.getElementsByClassName('jobgrid')

let job = [{
    Title: "Application Engineer",
    Company: "Google",
    Location: "San Francisco",
    ApplicationSite: "https://google.com/careers",
    DateSincePosted: "18 Days ago",
    FullOrPartTime: "Full Time"
  },
  {
    Title: "Technical Evangelist",
    Company: "Eco Focus",
    Location: "San Francisco",
    ApplicationSite: "https://ecofocus.com/jobs",
    DateSincePosted: "> 30 Days ago",
    FullOrPartTime: "Full Time"
  },
  {
    Title: "Digital Overlord",
    Company: "Innovation Arch",
    Location: "Houston",
    ApplicationSite: "https://innoarch.com/positions",
    DateSincePosted: "5 hours ago",
    FullOrPartTime: "Part Time"
  },
  {
    Title: "Skynet Operator",
    Company: "Cogent Security",
    Location: "Seattle",
    ApplicationSite: "https://skynet.com/life",
    DateSincePosted: "Just now",
    FullOrPartTime: "Full Time"
  },
  {
    Title: "JavaScript Guru",
    Company: "Felar Corp",
    Location: "Austin",
    ApplicationSite: "https://felarcorp.com/careers",
    DateSincePosted: "5 days ago",
    FullOrPartTime: "Part Time"
  },
  {
    Title: "Object Oriented Sherpa",
    Company: "Sanguine Skincare",
    Location: "Denver",
    ApplicationSite: "https://s2skin.com/careers",
    DateSincePosted: "5 hours ago",
    FullOrPartTime: "Part Time"
  },
  {
    Title: "Scrum Advisor",
    Company: "Senzu Bean",
    Location: "Chicago",
    ApplicationSite: "https://beans.com/team",
    DateSincePosted: "> 30 Days ago",
    FullOrPartTime: "Full Time"
  },
  {
    Title: "Growth Hacker",
    Company: "Ultra Instinct",
    Location: "New York",
    ApplicationSite: "https://UI.com/apply",
    DateSincePosted: "> 30 Days ago",
    FullOrPartTime: "N/A"
  },
  {
    Title: "Python Prophet",
    Company: "Ranger Powers",
    Location: "Seattle",
    ApplicationSite: "https://RangerPowers.com/careers",
    DateSincePosted: "5 hours ago",
    FullOrPartTime: "Full Time"
  },
  {
    Title: "Six Sigma Blackbelt Coder",
    Company: "Gold Requisitions",
    Location: "Atlanta",
    ApplicationSite: "https://goldreqs.com/apply",
    DateSincePosted: "18 Days ago",
    FullOrPartTime: "Full Time"
  }
]

let jobposting = ""

for (let i = 0; i < job.length; i++) {
  jobposting += `<div class="row gridborder">
  <div class="col-sm-12">

    <!-- Middle Content Column of Grid -->
    <div class="col-sm-8 grid-content-column">
      <div class="row">${job[i].Title}</div>
      <div class="row">${job[i].Company}</div>
      <div class="row">${job[i].Location} </div>
      <div class="row">${job[i].ApplicationSite}</div>
      <div class="row">
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