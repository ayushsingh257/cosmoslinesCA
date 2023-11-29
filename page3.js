let backoffbutton = document.getElementById("backbutton");

backoffbutton.onclick = () => {
    location.href = "/index.html"
};

let keyboardarrowright = document.getElementById("keyboardarrowright");
keyboardarrowright.onclick = () => {
    location.href = "/page4.html"
};

document.addEventListener("DOMContentLoaded", function() {
    const planets = document.querySelectorAll(".planet");
    let currentPlanetIndex = 0;

    planets.forEach((planet, index) => {
        planet.addEventListener("click", function() {
            if (index === currentPlanetIndex) {
                planet.classList.add("correct");
                currentPlanetIndex++;

            
                if (currentPlanetIndex === planets.length) {
                    alert("Congratulations! You clicked all planets in the correct order.");
                    resetGame();
                }
            } else {
                
                planet.classList.add("wrong");
                setTimeout(() => {
                    planet.classList.remove("wrong");
                }, 500); 
                resetGame();
            }
        });
    });

    function resetGame() {
        planets.forEach(planet => {
            planet.classList.remove("correct", "wrong");
        });

        currentPlanetIndex = 0;
    }
});
