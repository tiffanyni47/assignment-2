// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

const grid = document.getElementById("grid");

// Add a row
function addR() {
    const row = grid.insertRow();
    numRows++;
    if (numCols === 0){   // if it's the first row with the first cell , then it also meant that first col is created
        numCols++;
    }
    //when a new row is created, each row should have numbers of cell equal to current num of cols
    for (let i = 0; i < numCols; i++){
        let cell = row.insertCell();
        cell.addEventListener("click", colorCell);
    }
}

// Add a column
function addC() {
    if(numRows === 0){  // If there are no rows in the grid, then it is the first cell, return to addR() to add a new row (which also adds a column)
        return addR();
    }
    else {   // else, add a cell to each existing row
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
        grid.deleteRow(-1); // remove the last row
        numRows--;
        if (numRows === 0){  //if there's no cell exist in the grid anymore, reset the grid
            resetGrid()
        }
    }
}

// Remove a column
function removeC() {
    if (numCols > 0){
        Array.from(grid.rows).forEach(row => row.deleteCell(-1)); // remove the last column from each row
        numCols--;        
        if (numCols === 0){  //if there's no cell exist in the grid anymore, reset the grid
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
            if (!cell.style.backgroundColor || cell.style.backgroundColor === "white") {  //if the background color of the cell is current "" or white, color it with the color selected
                cell.style.backgroundColor = colorSelected;
            }
        });
    });
}

// Fill all cells
function fillAll(){
    Array.from(grid.rows).forEach(row => {
        Array.from(row.cells).forEach(cell => {   // color the background color of each cell to color selected
            cell.style.backgroundColor = colorSelected;
        });
    });
}

// Clear all cells
function clearAll(){
    Array.from(grid.rows).forEach(row => {
        Array.from(row.cells).forEach(cell => {  // color the background color of each cell to the initial color ( which is white)
            cell.style.backgroundColor = "white";
        });
    });}