/** @format */

function infoModal() {
  const modal = document.createElement("div");
}

function init() {
  const orbit = document.getElementById("orbit");
  const sunContainer = document.getElementById("sunContainer");
  const sun = document.getElementById("sun");

  for (let i = 1; i < 10; i++) {
    const orbit1 = orbit.cloneNode(true);
    orbit1.style.height = 140 + i * 50 + "px";
    orbit1.style.width = 400 + i * 300 + "px";
    orbit1.style.setProperty(
      "top",
      "calc(50% - " + parseInt(30 + i * 25) + "px"
    );
    orbit1.style.setProperty(
      "left",
      "calc(50% - " + parseInt(200 + i * 150) + "px"
    );

    sunContainer.insertBefore(orbit1, sun);
  }
}

function closeHandler() {
  const closeButton = document.querySelector(".closeButton");
  closeButton.addEventListener("click", () => {
    const infoModal = document.getElementById("infoModal");
    infoModal.style.display = "none";
  });
}

function start() {
  const starCount = document.getElementById("starCount").value;

  const star = document.getElementById("main");
  document.getElementById("container").innerHTML = "";
  document.getElementById("container").append(star);

  star.children[0].style.animation = "myAnimation 1s  ease-in-out infinite";
  star.children[1].style.animation = "myAnimation1 1s  ease-in-out infinite";
  const main = document.getElementById("main");

  for (let i = 0; i < starCount; i++) {
    const main1 = main.cloneNode(true);
    main1.style.transform = "scale(" + Math.random() + ")";
    main1.style.opacity = Math.random();
    setTimeout(() => {
      document.getElementById("container").appendChild(main1);
    }, Math.random());

    main1.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    main1.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }
  init();
  drawPlanets();
}

function drawPlanets() {
  const defaultSize = 30;

  const data = {
    mercury: {
      info: {
        desc:
          "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
        starType: "Terristrial",
        diameter: "4,800",
        lengthOfYear: "88 Earth Days",
        distanceFromSun: "51,507,334 km",
        url: "https://solarsystem.nasa.gov/planets/mercury/overview/"
      },
      originalSize: ".376",
      size: ".576",
      image: "./mercury.png",
      pos: {
        top: "450px",
        left: "342px"
      }
    },
    venus: {
      info: {
        desc:
          "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
        starType: "Terristrial",
        age: "",
        diameter: "12,100",
        lengthOfYear: "225 Earth Days",
        distanceFromSun: "108,475,614 km",
        url: "https://solarsystem.nasa.gov/planets/venus/overview/"
      },
      size: ".949",
      image: "./venus.png",
      pos: {
        top: "404px",
        left: "480px"
      }
    },
    earth: {
      originalSize: "1",
      size: "2",
      image: "./earth.png",
      pos: {
        top: "370px",
        left: "610px"
      },
      info: {
        desc:
          "Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
        starType: "Terristrial",
        age: "",
        diameter: "12,750",
        lengthOfYear: "365 Earth Days",
        distanceFromSun: "149,522,046 km",
        url: "https://solarsystem.nasa.gov/planets/earth/overview/"
      }
    },
    mars: {
      originalSize: ".533",
      size: "1",
      image: "./mars.png",
      pos: {
        top: "400px",
        left: "770px"
      },
      info: {
        desc:
          "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
        starType: "Terristrial",
        age: "",
        diameter: "6,800",
        lengthOfYear: "687 Earth Days",
        distanceFromSun: "213,095,306 km",
        url: "https://solarsystem.nasa.gov/planets/mars/overview/"
      }
    },
    jupiter: {
      originalSize: "11.2",
      size: "5.2",

      image: "./jupiter.png",
      pos: {
        top: "190px",
        left: "750px"
      },
      info: {
        desc:
          "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
        starType: "Gas Giant",
        age: "",
        diameter: "142,800",
        lengthOfYear: "4333 Earth Days",
        distanceFromSun: "744,337,117 km",
        url: "https://solarsystem.nasa.gov/planets/jupiter/overview/"
      }
    },
    saturn: {
      size: "9.46",
      image: "./saturn.png",
      pos: {
        top: "270px",
        left: "950px"
      },
      info: {
        desc:
          "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
        starType: "Gas Giant",
        age: "",
        diameter: "120,660",
        lengthOfYear: "10759 Earth Days",
        distanceFromSun: "1,481,048,762 km",
        url: "https://solarsystem.nasa.gov/planets/saturn/overview/"
      }
    },
    uranus: {
      size: "4.06",
      image: "./uranus.png",
      pos: {
        top: "200px",
        left: "1100px"
      },
      info: {
        desc:
          "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
        starType: "Ice Giant",
        age: "",
        diameter: "51,800",
        lengthOfYear: "30,689 Earth Days",
        distanceFromSun: "3,076,692,282 km",
        url: "https://solarsystem.nasa.gov/planets/saturn/overview/"
      }
    },
    neptune: {
      size: "3.88",
      image: "./neptune.png",
      pos: {
        top: "300px",
        left: "1300px"
      },
      info: {
        desc:
          "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
        starType: "Ice Giant",
        age: "",
        diameter: "49,500",
        lengthOfYear: "60,190 Earth Days",
        distanceFromSun: "4,475,733,029 km",
        url: "https://solarsystem.nasa.gov/planets/neptune/overview/"
      }
    }
  };

  const plantes = document.getElementById("planets");

  plantes.addEventListener("click", () => {
    const infoModal = document.getElementById("infoModal");
    // const modalBody = document.getElementById("modalBody");
    infoModal.style.display = "block";
    infoModal.style.top = event.target.style.top;
    infoModal.style.left = event.target.style.left;

    const selectedData = data[event.target.getAttribute("data-name")];

    const tableBody =
      "<div class='modalHeader'>" +
      "<table><tr><td>" +
      event.target.getAttribute("data-name").toUpperCase() +
      "</td>" +
      "<td style='text-align: right'><button  class='closeButton'>X</button>" +
      "</td></tr></table></div>" +
      "<div class='modalBody'>" +
      "<div class='description'>" +
      selectedData["info"]["desc"] +
      "</div>" +
      "<table id='infoTable' cellspacing='0' cellpadding='0'>" +
      "<tr><td>Star type</td><td>" +
      selectedData["info"]["starType"] +
      "</td></tr><tr><td>Diameter</td><td>" +
      selectedData["info"]["diameter"] +
      "</td></tr><tr><td>Circumference</td><td>" +
      selectedData["info"]["circumference"] +
      "</td></tr><tr><td>Dist. from the Sun</td><td>" +
      selectedData["info"]["distanceFromSun"] +
      "</td></tr></table>" +
      " <div><a target='_blank' href='" +
      selectedData["info"]["url"] +
      "'>Read More</a></div>";

    infoModal.innerHTML = tableBody;
    closeHandler();
  });

  Object.entries(data).forEach(([item, index]) => {
    const planet = document.createElement("div");
    if (data[item]["pos"]) {
      planet.setAttribute("data-name", item);
      planet.style.position = "absolute";
      planet.style.top = data[item]["pos"].top;
      planet.style.left = data[item]["pos"].left;
      planet.style.height = data[item]["size"] * defaultSize + "px";
      planet.style.width = data[item]["size"] * defaultSize + "px";
      planet.style.backgroundImage = "url(" + data[item]["image"] + ")";
      planet.style.backgroundRepeat = "no-repeat";
      (planet.style.backgroundSize = data[item]["size"] * defaultSize + "px"),
        data[item]["size"] * defaultSize + "px";

      plantes.appendChild(planet);
    }
  });
}
