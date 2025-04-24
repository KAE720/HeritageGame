let walkingman = document.getElementById("walkingman");
let x = 0,
  y = 487,
  moveAmount = 25;
let currentScene = 0,
  musicStart = false;

// SDG icons & summaries
let goal6 = document.querySelector(".goal6"),
  goal6sum = document.querySelector(".goal6summary"),
  goal11 = document.querySelector(".goal11"),
  goal11sum = document.querySelector(".goal11summary"),
  goal15 = document.querySelector(".goal15"),
  goal15sum = document.querySelector(".goal15summary"),
  goal17 = document.querySelector(".goal17"),
  goal17sum = document.querySelector(".goal17summary"),
  goal7 = document.querySelector(".goal7"),
  goal7sum = document.querySelector(".goal7summary"),
  goal9 = document.querySelector(".goal9"),
  goal9sum = document.querySelector(".goal9summary"),
  goal11col = document.querySelector(".goal11col"),
  goal11colsum = document.querySelector(".goal11colsummary"),
  goal12col = document.querySelector(".goal12col"),
  goal12colsum = document.querySelector(".goal12colsummary"),
  goal12eiff = document.querySelector(".goal12eiff"),
  goal12eiffsum = document.querySelector(".goal12eiffsummary"),
  goal7eiff = document.querySelector(".goal7eiff"),
  goal7eiffsum = document.querySelector(".goal7eiffsummary"),
  goal13 = document.querySelector(".goal13"),
  goal13sum = document.querySelector(".goal13summary"),
  goal6eiff = document.querySelector(".goal6eiff"),
  goal6eiffsum = document.querySelector(".goal6eiffsummary");

// containers
let bg = document.querySelector(".background1"),
  ground = document.querySelector(".ground1"),
  building = document.querySelector(".building1");

window.onload = () => updateScene(currentScene);

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (!musicStart) {
    document.getElementById("music").play();
    musicStart = true;
  }
  if (e.key === "ArrowRight") {
    x += moveAmount;
    walkingman.style.left = x + "px";
    if (x > window.innerWidth) {
      x = 0;
      updateScene(++currentScene);
    }
  }
  if (e.key === "ArrowLeft") {
    x -= moveAmount;
    walkingman.style.left = x + "px";
    if (x < 0 && currentScene > 0) {
      currentScene--;
      x = window.innerWidth - 100;
      updateScene(currentScene);
    }
  }
  if (e.key === "ArrowUp") {
    y -= moveAmount;
    walkingman.style.top = y + "px";
    setTimeout(() => {
      y += moveAmount;
      walkingman.style.top = y + "px";
    }, 600);
  }
});

function updateScene(scene) {
  // hide **all** icons & summaries
  [
    goal6,
    goal6sum,
    goal11,
    goal11sum,
    goal15,
    goal15sum,
    goal17,
    goal17sum,
    goal7,
    goal7sum,
    goal9,
    goal9sum,
    goal11col,
    goal11colsum,
    goal12col,
    goal12colsum,
    goal12eiff,
    goal12eiffsum,
    goal7eiff,
    goal7eiffsum,
    goal13,
    goal13sum,
    goal6eiff,
    goal6eiffsum,
  ].forEach((el) => (el.style.display = "none"));

  // Scene 0: start screen
  if (scene === 0) {
    bg.style.backgroundImage = "url('background1.jpg')";
    building.style.backgroundImage = "url('keepgoing.jpg')";
    building.style.top = "460px";
    building.style.left = "1500px";
    building.style.width = "200px";
    building.style.height = "200px";
    building.style.backgroundSize = "contain";
    ground.style.backgroundImage = "url('dirt.png')";
    ground.style.backgroundSize = "contain";
    return;
  }

  // Scene 1: Taj Mahal
  if (scene === 1) {
    bg.style.backgroundImage = "url('scene2background.gif')";
    ground.style.backgroundImage = "url('scene2ground.jpg')";
    ground.style.height = "300px";
    ground.style.backgroundSize = "contain";

    building.style.backgroundImage = "url('tajmahal.png')";
    building.style.top = "200px";
    building.style.left = "515px";
    building.style.width = "900px";
    building.style.height = "900px";
    building.style.backgroundSize = "cover";

    // goal6
    goal6.style.display = "block";
    goal6.onclick = () => {
      goal6.style.display = "none";
      goal6sum.innerText =
        "The Taj Mahal uses a riverside wetland filtration system to help clean and replenish the Yamuna’s water.";
      goal6sum.style.display = "block";
      goal6sum.onclick = () => {
        goal6sum.style.display = "none";
        goal6.style.display = "block";
      };
    };

    // goal11
    goal11.style.display = "block";
    goal11.onclick = () => {
      goal11.style.display = "none";
      goal11sum.innerText =
        "Agra’s city authorities run electric shuttles around the monument to cut traffic pollution.";
      goal11sum.style.display = "block";
      goal11sum.onclick = () => {
        goal11sum.style.display = "none";
        goal11.style.display = "block";
      };
    };

    // goal15
    goal15.style.display = "block";
    goal15.onclick = () => {
      goal15.style.display = "none";
      goal15sum.innerText =
        "A tree‑planting belt around the Taj Mahal grounds provides a habitat for native bird species.";
      goal15sum.style.display = "block";
      goal15sum.onclick = () => {
        goal15sum.style.display = "none";
        goal15.style.display = "block";
      };
    };

    // goal17
    goal17.style.display = "block";
    goal17.onclick = () => {
      goal17.style.display = "none";
      goal17sum.innerText =
        "Under India’s “Adopt a Heritage” scheme, corporations fund the upkeep, visitor infrastructure, and conservation of the Taj Mahal.";
      goal17sum.style.display = "block";
      goal17sum.onclick = () => {
        goal17sum.style.display = "none";
        goal17.style.display = "block";
      };
    };

    return;
  }

  // Scene 2: Colosseum
  if (scene === 2) {
    bg.style.backgroundImage = "url('europe.gif')";
    ground.style.backgroundImage = "url('ground3.jpg')";
    ground.style.backgroundSize = "contain";

    building.style.backgroundImage = "url('colosseum.png')";
    building.style.top = "80px";
    building.style.left = "450px";
    building.style.width = "1100px";
    building.style.height = "600px";
    building.style.backgroundSize = "cover";

    // goal7
    goal7.style.display = "block";
    goal7.onclick = () => {
      goal7.style.display = "none";
      goal7sum.innerText =
        "Solar panels on nearby buildings supply lighting for the Colosseum’s night‑time preservation work.";
      goal7sum.style.display = "block";
      goal7sum.onclick = () => {
        goal7sum.style.display = "none";
        goal7.style.display = "block";
      };
    };

    // goal9
    goal9.style.display = "block";
    goal9.onclick = () => {
      goal9.style.display = "none";
      goal9sum.innerText =
        "High‑precision 3D scanning and sensors detect early cracks, minimising restoration waste.";
      goal9sum.style.display = "block";
      goal9sum.onclick = () => {
        goal9sum.style.display = "none";
        goal9.style.display = "block";
      };
    };

    // goal11col
    goal11col.style.display = "block";
    goal11col.onclick = () => {
      goal11col.style.display = "none";
      goal11colsum.innerText =
        "Electric tour vehicles guide visitors in eco‑friendly routes around the arena.";
      goal11colsum.style.display = "block";
      goal11colsum.onclick = () => {
        goal11colsum.style.display = "none";
        goal11col.style.display = "block";
      };
    };

    // goal12col
    goal12col.style.display = "block";
    goal12col.onclick = () => {
      goal12col.style.display = "none";
      goal12colsum.innerText =
        "The Colosseum’s movable floor uses wood—harvested and treated with a low‑impact process—to avoid endangering valuable species.";
      goal12colsum.style.display = "block";
      goal12colsum.onclick = () => {
        goal12colsum.style.display = "none";
        goal12col.style.display = "block";
      };
    };

    return;
  }

  // Scene 3: Eiffel Tower
    if (scene === 3) {
      
    bg.style.backgroundImage = "url('back3.gif')";
    ground.style.backgroundImage = "url('street.jpg')";
    ground.style.backgroundSize = "contain";

    building.style.backgroundImage = "url('eiffel.png')";
    building.style.top = "0px";
    building.style.left = "510px";
    building.style.width = "700px";
    building.style.height = "650px";
    building.style.backgroundSize = "cover";

    // goal12eiff
    goal12eiff.style.display = "block";
    goal12eiff.onclick = () => {
      goal12eiff.style.display = "none";
      goal12eiffsum.innerText =
        "The Eiffel Tower’s center uses 100% recycled paper and compostable cups in its cafés.";
      goal12eiffsum.style.display = "block";
      goal12eiffsum.onclick = () => {
        goal12eiffsum.style.display = "none";
        goal12eiff.style.display = "block";
      };
    };

    // goal7eiff
    goal7eiff.style.display = "block";
    goal7eiff.onclick = () => {
      goal7eiff.style.display = "none";
      goal7eiffsum.innerText =
        "Wind turbines on the terraces generate 20% of the tower’s daytime electricity.";
      goal7eiffsum.style.display = "block";
      goal7eiffsum.onclick = () => {
        goal7eiffsum.style.display = "none";
        goal7eiff.style.display = "block";
      };
    };

    // goal13
    goal13.style.display = "block";
    goal13.onclick = () => {
      goal13.style.display = "none";
      goal13sum.innerText =
        "The Eiffel tower has a cooling system inside to reduce GHG emissions.";
      goal13sum.style.display = "block";
      goal13sum.onclick = () => {
        goal13sum.style.display = "none";
        goal13.style.display = "block";
      };
    };

    // goal6eiff
    goal6eiff.style.display = "block";
    goal6eiff.onclick = () => {
      goal6eiff.style.display = "none";
      goal6eiffsum.innerText =
        "A rooftop rainwater‑harvesting system collects runoff water to flush the Tower’s toilets, cutting its water demand by 50%.";
      goal6eiffsum.style.display = "block";
      goal6eiffsum.onclick = () => {
        goal6eiffsum.style.display = "none";
        goal6eiff.style.display = "block";
      };
    };

    return;
  }
}
