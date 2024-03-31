document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("Solární Systém");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const sun = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 50,
      color: "#fcbf49"
    };
  
    const planets = [
      { name: "Merkur", radius: 5, distance: 60, angle: 0, speed: 0.01, color: "#b3cde0", info: "Nejblíže Slunci; nejmenší planeta; extrémně horký den a chladná noc; téměř bez atmosféry." },
      { name: "Venuše", radius: 10, distance: 90, angle: 0, speed: 0.008, color: "#ff9999", info: "Nejteplejší planeta díky silnému skleníkovému efektu; hustá oblačnost kyselého deště; podobná velikosti Zemi." },
      { name: "Země", radius: 10, distance: 130, angle: 0, speed: 0.006, color: "#7fcdbb", info: "Naše domovská planeta; jediná známá planeta s tekutou vodou a životem; unikátní modrá barva způsobená atmosférou." },
      { name: "Mars", radius: 7, distance: 170, angle: 0, speed: 0.005, color: "#ffcc99", info: "Červená planeta; má nejvyšší sopku a největší kanál v sluneční soustavě; možná přítomnost vody pod povrchem." },
      { name: "Jupiter", radius: 25, distance: 240, angle: 0, speed: 0.003, color: "#ff6666", info: "Největší planeta; má největší množství měsíců (více než 70); má silný magnetický field." },
      { name: "Saturn", radius: 20, distance: 310, angle: 0, speed: 0.002, color: "#ffd700", info: "Planeta s prstencem; méně hustý než voda; unikátní prstence tvořené ledu a horninami." },
      { name: "Uran", radius: 15, distance: 380, angle: 0, speed: 0.001, color: "#afeeee", info: "Ledový obr; má nakloněnou osu rotace; má modrou barvu kvůli methanu v atmosféře." },
      { name: "Neptun", radius: 15, distance: 450, angle: 0, speed: 0.0008, color: "#00008b", info: "Chladný plynný obr; má nejrychlejší vítr v sluneční soustavě; může mít ledový povrch." }
    ];
  
    let hoveredPlanet = null;
  
    function drawPlanet(planet) {
      ctx.beginPath();
      ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
      ctx.fillStyle = planet.color;
      ctx.fill();
      ctx.closePath();
    }
  
    function drawOrbits() {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, planet.distance, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
      });
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw sun
      drawPlanet(sun);
  
      // Draw orbits
      drawOrbits();  
      // Draw planets
      planets.forEach(planet => {
        planet.x = sun.x + planet.distance * Math.cos(planet.angle);
        planet.y = sun.y + planet.distance * Math.sin(planet.angle);
        drawPlanet(planet);
        planet.angle += planet.speed;
      });
  
      if (hoveredPlanet) {
        showInfo(hoveredPlanet);
      }
    }
  
    function animate() {
      requestAnimationFrame(animate);
      draw();
    }
  
    animate();
  
    canvas.addEventListener("mousemove", function(event) {
      const mousePos = {
        x: event.clientX - canvas.getBoundingClientRect().left,
        y: event.clientY - canvas.getBoundingClientRect().top
      };
  
      hoveredPlanet = null;
      planets.forEach(planet => {
        const dx = planet.x - mousePos.x;
        const dy = planet.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < planet.radius) {
          hoveredPlanet = planet;
        }
      });
    });
  
    function showInfo(planet) {
      const infoDiv = document.getElementById("planetInfo");
      if (!infoDiv) {
        const newInfoDiv = document.createElement("div");
        newInfoDiv.id = "planetInfo";
        newInfoDiv.style.position = "absolute";
        newInfoDiv.style.top = "10px";
        newInfoDiv.style.left = "10px";
        newInfoDiv.style.padding = "10px";
        newInfoDiv.style.background = "#fff";
        newInfoDiv.style.border = "1px solid #000";
        newInfoDiv.style.borderRadius = "5px";
        document.body.appendChild(newInfoDiv);
        newInfoDiv.innerHTML = `<strong>${planet.name}</strong>: ${planet.info}`;
      } else {
        infoDiv.innerHTML = `<strong>${planet.name}</strong>: ${planet.info}`;
      }
    }
  });
  