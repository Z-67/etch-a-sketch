const slider = document.getElementById("numSquares");
const sliderValueOutput = document.getElementById("sliderValue");
const container = document.getElementById("gridContainer");
const eraseButton = document.getElementById("erase");
const gridContainer = document.getElementById("gridContainer");

function createGrid() {
    container.innerHTML = ""; // Clear the existing grid

    const gridSize = parseInt(document.getElementById("numSquares").value);
    const squareSize = 960 / gridSize;

    container.style.gridTemplateColumns = `repeat(${gridSize}, ${squareSize}px)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }

    // Add event listener to update background color permanently on mouseover
    container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "#000000"; 
        }
    });

    let erasing = false;

    eraseButton.addEventListener("click", () => {
        if (erasing) {
            eraseButton.classList.remove("active");
            erasing = false;
        } else {
            eraseButton.classList.add("active");
            erasing = true;
        }
    });
    gridContainer.addEventListener("mouseleave", () => {
        eraseButton.classList.remove("active");
        erasing = false; // Deactivate erasing mode
    });

    gridContainer.addEventListener("mouseover", (event) => {
        if (erasing && event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "#ccc"; // Change to your erased color
        }
    });
};

const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createGrid);

// Call createGrid initially to create the initial grid
createGrid();

slider.addEventListener("input", () => {
    sliderValueOutput.textContent = slider.value;
});







