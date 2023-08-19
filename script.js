const slider = document.getElementById("numSquares");
const sliderValueOutput = document.getElementById("sliderValue");
const eraseButton = document.getElementById("erase");
const gridContainer = document.getElementById("gridContainer");
const clearButton = document.getElementById("clear");
const rainbowButton = document.getElementById("rainbow");

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
        } else {
            eraseButton.classList.add("active");
            erasing = true;
            isRainbowMode = false;
            rainbowButton.classList.remove("active");
            rainbowButton.style.background = "";
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
        } else {
            rainbowButton.classList.remove("active");
            rainbowButton.style.background = "";
        }
    });

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

        };


const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createGrid);

// Call createGrid to create the initial grid
createGrid();

slider.addEventListener("input", () => {
    sliderValueOutput.textContent = slider.value;


});

