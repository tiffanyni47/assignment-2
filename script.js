// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

const grid = document.getElementById("grid");

// Add a row
function addR() {
    const row = grid.insertRow();
    numRows++;
    if (numCols === 0){
        numCols++;
    }
    for (let i = 0; i < numCols; i++){
        let cell = row.insertCell();
        cell.addEventListener("click", colorCell);
    }
}

// Add a column
function addC() {
    if(numRows === 0){
        return addR();
    }
    else { 
        Array.from(grid.rows).forEach(row => {
            let cell = row.insertCell();
            cell.addEventListener("click", colorCell); 
        });
        numCols++;
    }
}

// Remove a row
function removeR() {
    if (numRows > 0){
        grid.deleteRow(-1);
        numRows--;
        if (numRows === 0){  //if there's no cell exist in the grid anymore, reset the grid
            resetGrid()
        }
    }
}

// Remove a column
function removeC() {
    if (numCols > 0){
        Array.from(grid.rows).forEach(row => row.deleteCell(-1));
        numCols--;        
        if (numCols === 0){
            resetGrid();
        }
    }
}

//Reset the grid with 0 row and 0 col
function resetGrid(){
    grid.innerHTML = "";
    numRows = 0;
    numCols = 0;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
    
}

//event to color the cell
function colorCell(event) {
    event.target.style.backgroundColor = colorSelected;
}

// Fill all uncolored cells
function fillU(){
    Array.from(grid.rows).forEach(row => {
        Array.from(row.cells).forEach(cell => {
            if (!cell.style.backgroundColor || cell.style.backgroundColor === "white") {
                cell.style.backgroundColor = colorSelected;
            }
        });
    });
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}