document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("gridContainer");
    const gridSize = 16;

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
});

  