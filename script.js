const slider = document.getElementById("numSquares");
const sliderValueOutput = document.getElementById("sliderValue");
const eraseButton = document.getElementById("erase");
const gridContainer = document.getElementById("gridContainer");
const clearButton = document.getElementById("clear");
const rainbowButton = document.getElementById("rainbow");
const pencils = document.querySelectorAll(".pencil");
const pencilTips = document.querySelectorAll(".pencil-tip");

let activePencilColor = '';

function createGrid() {
    gridContainer.innerHTML = ""; // Clear the existing grid

    let isRainbowMode = false;
    rainbowButton.classList.remove("active");
    rainbowButton.style.background = "";

    eraseButton.classList.remove("active");
    let erasing = false;

    const gridSize = parseInt(document.getElementById("numSquares").value);
    const squareSize = 960 / gridSize;

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${squareSize}px)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
        }
    }

    // Add event listener to update background color permanently on mouseover
    gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "#000000"; 
        }
    });

    clearButton.addEventListener("click", () => {
        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach(gridItem => {
            gridItem.style.backgroundColor = "#ccc";
        });
    });

    erasing = false;

    eraseButton.addEventListener("click", () => {
        if (erasing) {
            eraseButton.classList.remove("active");
            erasing = false;
            deactivatePencils();
        } else {
            eraseButton.classList.add("active");
            erasing = true;
            isRainbowMode = false;
            rainbowButton.classList.remove("active");
            rainbowButton.style.background = "";
            deactivatePencils();
        }
    });

    gridContainer.addEventListener("mouseover", (event) => {
        if (erasing && event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "#ccc"; 
        }
    });

    isRainbowMode = false;

    rainbowButton.addEventListener("click", () => {
        isRainbowMode = !isRainbowMode;

        if (isRainbowMode) {
            rainbowButton.classList.add("active");
            rainbowButton.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
            isErasing = false;
            eraseButton.classList.remove("active");
            deactivatePencils();
        } else {
            rainbowButton.classList.remove("active");
            rainbowButton.style.background = "";
            deactivatePencils();
        }
    });

    function deactivatePencils() {
        pencils.forEach((pencil) => {
            pencil.classList.remove("active");
            pencilTips[pencil.dataset.index].style.marginLeft = "";
        });
        activePencilColor = "";
    }

    gridContainer.addEventListener("mouseover", (event) => {
        if (isRainbowMode && event.target.classList.contains("grid-item")) {
            const randomColor = getRandomColor();
            event.target.style.backgroundColor = randomColor;
        }
    });

    function getRandomColor() {
        const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    gridContainer.addEventListener("mouseover", (event) => {
        if (activePencilColor && event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = activePencilColor;
        }
    });
}

// Attach click event listeners to pencils
pencils.forEach((pencil, index) => {
    pencil.addEventListener("click", () => {
        const isActive = pencil.classList.toggle("active");

        isRainbowMode = false;
        rainbowButton.classList.remove("active");
        rainbowButton.style.background = "";
        erasing = false;
        eraseButton.classList.remove("active");

        // Remove "active" class from all other pencils and reset pencil tips
        pencils.forEach((p, i) => {
            if (i !== index) {
                p.classList.remove("active");
                pencilTips[i].style.marginLeft = "";
            }
        });

        // Update pencil tip's margin-left based on pencil width
        pencilTips[index].style.marginLeft = isActive ? "12vw" : "";

        // Update active pencil color
        activePencilColor = isActive ? pencil.dataset.color : "";

        // Reset active pencil color when the same pencil is clicked again
        if (!isActive) {
            activePencilColor = "";
        }

        // Reset pencil tip position when the same pencil is clicked again
        pencilTips[index].style.marginLeft = isActive ? "12vw" : "";
    });
});


const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createGrid);

// Call createGrid to create the initial grid
createGrid();

slider.addEventListener("input", () => {
    sliderValueOutput.textContent = slider.value;


});

