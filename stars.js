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
      originalSize: ".376",
      size: ".576",
      image: "./mercury.png",
      pos: {
        top: "400px",
        left: "328px"
      }
    },
    venus: {
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
      }
    },
    mars: {
      originalSize: ".533",
      size: "1",
      image: "./mars.png",
      pos: {
        top: "450px",
        left: "672px"
      }
    },
    jupiter: {
      originalSize: "11.2",
      size: "5.2",

      image: "./jupiter.png",
      pos: {
        top: "190px",
        left: "750px"
      }
    },
    saturn: {
      size: "9.46",
      image: "./saturn.png",
      pos: {
        top: "340px",
        left: "870px"
      }
    },
    uranus: {
      size: "4.06",
      image: "./uranus.png",
      pos: {
        top: "158px",
        left: "1050px"
      }
    },
    neptune: {
      size: "3.88",
      image: "./neptune.png",
      pos: {
        top: "300px",
        left: "1270px"
      },
      info: {
        title: "neptune",
        desc:
          "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus",
        starType: "",
        age: " ",
        diameter: " ",
        circumference: " ",
        distanceFromSun: "4.495 billion km"
      }
    },
    sun: {
      info: {
        title: "Sun",
        desc:
          "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit.",
        starType: "Yellow Dwarf",
        age: "~4.5 billion years",
        diameter: "864,938 miles",
        circumference: "2,715,396",
        distanceFromSun: "149.3 million km"
      }
    }
  };

  const plantes = document.getElementById("planets");

  plantes.addEventListener("click", loadData());

  
  Object.entries(data).forEach(([item, index]) => {
    const planet = document.createElement("div");
    if (data[item]["pos"]) {
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

function loadData(event) {
  console.log(event);
}
