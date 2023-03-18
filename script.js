class GridSystem {
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.#getContext(0, 0, "#000");
        this.outlineContext = this.#getContext(0, 0, "#444");
        this.topContext = this.#getContext(0, 0, "#000000", true);
        this.cellSize = 10;
        this.padding = 3;
    }

    #getCenter(w, h) {
        return {
            x: window.innerWidth / 2 - w / 2 + "px",
            y: window.innerHeight / 2 - h / 2 + "px"
        };
    }

    #getContext(w, h, color = "#000000", isTransparent = false) {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.width = this.canvas.width = w;
        this.height = this.canvas.height = h;
        this.canvas.style.position = "absolute";
        this.canvas.style.background = color;
        if (isTransparent) {
            this.canvas.style.backgroundColor = "transparent";
        }
        const center = this.#getCenter(w, h);
        this.canvas.style.marginLeft = center.x
        this.canvas.style.marginTop = center.y;
        document.body.appendChild(this.canvas);

        return this.context;
    }

    render() {
        const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
        const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

        this.outlineContext.canvas.width = w;
        this.outlineContext.canvas.height = h;

        const center = this.#getCenter(w, h);
        this.outlineContext.canvas.style.marginLeft = center.x
        this.outlineContext.canvas.style.marginTop = center.y;

        this.topContext.canvas.style.marginLeft = center.x
        this.topContext.canvas.style.marginTop = center.y;

        for (let row = 0; row < this.matrix.length; row ++) {
            for (let col = 0; col < this.matrix[row].length; col ++) {
                if (this.matrix[row][col] == 0){
                    this.outlineContext.fillStyle = "transparent"
                }
                if (this.matrix[row][col] == 1){
                    this.outlineContext.fillStyle = "#000000"
                }
                if (this.matrix[row][col] == 2){
                    this.outlineContext.fillStyle = "#ff0000"
                }
                if (this.matrix[row][col] == 3){
                    this.outlineContext.fillStyle = "#fffc00"
                }
                this.outlineContext.fillRect(col * (this.cellSize + this.padding),
                    row * (this.cellSize + this.padding),
                    this.cellSize, this.cellSize);
            }
        }

        //this.uiContext.font = "20px Courier";
        //this.uiContext.fillStyle = "white";
        //this.uiContext.fillText("TrainGame", 20, 30);
    }
}

let boardX = window.innerWidth *0.5
let boardY = window.innerHeight*0.5

let gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]


];

const gridSystem = new GridSystem(gameBoard);

function fps(){
    gridSystem.render();
    setTimeout(fps, 16);      //60fps ca 16
}

let row = 0;
let col = 0;


function updatePosition() {
    let table = document.getElementById("table");
    table.innerHTML = "";
    for (let i = 0; i < gridSystem.matrix.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < gridSystem.matrix[i].length; j++) {
            let cell = document.createElement("td");
            cell.innerHTML = gridSystem.matrix[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}


//row links nach rechts
function handleKeyPress(event) {
    switch (event.keyCode) {
        case 37: // links
            function links(){
                if (gridSystem.matrix[row][col-1]== 0) {
                    setTimeout(links, 50);      //60fps ca 16
                    gridSystem.matrix[row][col] = 0
                    col--;
                    gridSystem.matrix[row][col] = 3;
                }
            }
            links()
            break;
        case 38: // oben
            function oben(){
                if (gridSystem.matrix[row-1][col]== 0) {
                    setTimeout(oben, 50);      //60fps ca 16
                    gridSystem.matrix[row][col] = 0
                    row--;
                    gridSystem.matrix[row][col] = 3;
                }
            }
                oben()
                break;
        case 39: // rechts
            function right(){
                if (gridSystem.matrix[row][col+1]== 0) {
                    setTimeout(right, 50);      //60fps ca 16
                    gridSystem.matrix[row][col] = 0
                    col++;
                    gridSystem.matrix[row][col] = 3;
                }
            }
                right()
                break;
        case 40: // unten
            function down(){
                if (gridSystem.matrix[row+1][col]== 0) {
                    setTimeout(down, 50);      //60fps ca 16
                    gridSystem.matrix[row][col] = 0
                    row++;
                    gridSystem.matrix[row][col] = 3;
                }
            }
                down()
                break;
    }
    updatePosition()
}


document.addEventListener("keydown", handleKeyPress);
//error
gridSystem.outlineContext.canvas.addEventListener("click", function(event) {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const row = Math.floor(y / (gridSystem.cellSize + gridSystem.padding));
    const col = Math.floor(x / (gridSystem.cellSize + gridSystem.padding));

    console.log(`Kästchen bei [${row},${col}] geklickt.`);
    console.log(bfs(gameBoard,
        0,
        0,
        row,
        col
    ))
});

fps()

function bfs(grid, startRow, startCol, targetRow, targetCol) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check if the start and target cells are valid
    if (
        startRow < 0 || startRow >= numRows ||
        startCol < 0 || startCol >= numCols ||
        targetRow < 0 || targetRow >= numRows ||
        targetCol < 0 || targetCol >= numCols ||
        grid[startRow][startCol] === 1 || grid[targetRow][targetCol] === 1
    ) {
        return null;
    }

    // Define a queue for BFS and a visited set to keep track of visited cells
    const queue = [];
    const way = [];
    const visited = new Set();
    queue.push([startRow, startCol, 0]); // Add the starting cell to the queue with distance 0

    // Define the possible moves (up, down, left, right)
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Perform BFS
    while (queue.length > 0) {
        const [row, col, dist] = queue.shift(); // Dequeue the first cell in the queue
        if (row === targetRow && col === targetCol) { // Check if the target cell is reached
            return dist,way; // Return the distance to the target cell
        }
        visited.add(`${row},${col}`); // Add the current cell to the visited set
        for (const [moveRow, moveCol] of moves) { // Check all possible moves
            const newRow = row + moveRow;
            const newCol = col + moveCol;
            if (
                newRow >= 0 && newRow < numRows &&
                newCol >= 0 && newCol < numCols &&
                grid[newRow][newCol] === 0 &&
                !visited.has(`${newRow},${newCol}`)
            ) {
                way.push([row,col])
                queue.push([newRow, newCol, dist + 1]); // Add the new cell to the queue with distance incremented by 1
            }
        }
    }

    return null; // Return null if the target cell is not reachable
}




function animator(startPosX,startPosY,facing){

}











