function createGrid() {
    const container = document.getElementById("gridContainer");
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
            event.target.style.backgroundColor = "#f00"; // Change to red (#f00)
        }
    });
}

const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createGrid);

// Call createGrid initially to create the initial grid
createGrid();
