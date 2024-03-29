class GridSystem {
    // The constructor initializes several image objects, which are used to display different elements of the game board.
    // These images are loaded from files. Finally, the constructor sets the size and padding of the game board, and initializes a mousehover property to false.
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.#getContext(0, 0, "#000");
        this.outlineContext = this.#getContext(0, 0, "rgb(255,255,255)");
        this.topContext = this.#getContext(0, 0, "#000000", true);
        this.cellSize = window.innerWidth / 50;
        this.padding = 0;
        this.imgGrass = new Image();
        this.imgRailVertical = new Image();
        this.imgRailHorizontal = new Image();
        this.imgRailTR = new Image();
        this.imgRailDR = new Image();
        this.imgRailLD = new Image();
        this.imgRailUL = new Image();
        this.imgRailRU = new Image();
        this.imgRailX = new Image();
        this.imgRailTD = new Image();
        this.imgRailTU = new Image();
        this.imgRailTL = new Image();
        this.imgTree = new Image();
        this.imgRedTrainStation = new Image();
        this.imgBlueTrainStation = new Image();
        this.imgYellowTrainStation = new Image();
        this.imgTrainStation = new Image();
        this.mousehover = false;

        this.imgGrass.src = "Images/grass.png";
        this.imgRailVertical.src = "Images/railVertical.png";
        this.imgRailHorizontal.src = "Images/railHorizontal.png";
        this.imgRailTR.src = "Images/railTR.png";
        this.imgRailDR.src = "Images/railDR.png";
        this.imgRailLD.src = "Images/railLD.png";
        this.imgRailUL.src = "Images/railUL.png";
        this.imgRailRU.src = "Images/railRU.png";
        this.imgRailX.src = "Images/railX.png";
        this.imgRailTD.src = "Images/railTD.png";
        this.imgRailTU.src = "Images/railTU.png";
        this.imgRailTL.src = "Images/railTL.png";
        this.imgTree.src = "Images/tree(placeholder).png";
        this.imgRedTrainStation.src = "Images/redTrainStation.png"
        this.imgBlueTrainStation.src = "Images/blueTrainStation.png"
        this.imgYellowTrainStation.src = "Images/yellowTrainStation.png";
        this.imgTrainStation.src = "Images/trainStation.png";

        this.imgMap = {
            0: null, // Transparent
            1: this.imgGrass, // Grass
            3: null, // Black
            railVertical: this.imgRailVertical,
            railTR: this.imgRailTR,
            railUL: this.imgRailUL,
            railRU: this.imgRailRU,
            trainStation: this.imgTrainStation,
            railX: this.imgRailX,
            railTL: this.imgRailTL,
            railTU: this.imgRailTU,
            railTD: this.imgRailTD,
            railLD: this.imgRailLD,
            railDR: this.imgRailDR,
            tree: this.imgTree,
            railHorizontal: this.imgRailHorizontal,
            redTrainStation: this.imgRedTrainStation,
            blueTrainStation: this.imgBlueTrainStation,
            yellowTrainStation: this.imgYellowTrainStation
        };
    }

    // This function returns the center of the screen, which is used to position the game board.
    #getCenter(w, h) {
        return {
            x: window.innerWidth / 2 - w / 2 + "px",
            y: window.innerHeight / 2 - h / 2 + "px"
        };
    }

    // This function creates a canvas element and returns its context.
    #getContext(w, h, color = "#000000", isTransparent = false) {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.style.background = color;
        if (isTransparent) {
            this.canvas.style.backgroundColor = "transparent";
        }

        return this.context;
    }

    // This function draws the game board. It loops through the matrix and draws the appropriate image for each cell.
    // This function is called every time the game board is updated. Approximately 30 times per second.
    render() {
        const w = (this.cellSize + this.padding) * this.matrix[0].length - this.padding;
        const h = (this.cellSize + this.padding) * this.matrix.length - this.padding;

        this.outlineContext.canvas.width = w;
        this.outlineContext.canvas.height = h;

        const center = this.#getCenter(w, h);

        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[row].length; col++) {
                this.mousehover = rownow === row && colnow === col;

                const cellType = this.matrix[row][col];

                if (cellType === 0) {
                    this.outlineContext.fillStyle = "transparent";
                } else if (cellType === 3) {
                    this.outlineContext.fillStyle = "#000000";
                } else if (this.imgMap[cellType] != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(
                            this.imgMap[cellType],
                            2 + col * (this.cellSize + this.padding),
                            2 + row * (this.cellSize + this.padding),
                            this.cellSize - 4,
                            this.cellSize - 4
                        );
                    } else {
                        this.outlineContext.drawImage(
                            this.imgMap[cellType],
                            col * (this.cellSize + this.padding),
                            row * (this.cellSize + this.padding),
                            this.cellSize,
                            this.cellSize
                        );
                    }
                }

                if (cellType !== 1) {
                    this.outlineContext.fillRect(
                        trainCol * (this.cellSize + this.padding),
                        trainRow * (this.cellSize + this.padding),
                        this.cellSize,
                        this.cellSize
                    );
                }

                coinCountElement.innerText = coins;
                passengerCountBlue.innerText = bluePassenger;
                passengerCountRed.innerText = redPassenger;
                passengerCountYellow.innerText = yellowPassenger;
            }
        }
    }
}

// Initialize variables and constants
const coinCountElement = document.getElementById('coin-count');
const passengerCountBlue = document.getElementById('blue-passenger-count');
const passengerCountRed = document.getElementById('red-passenger-count');
const passengerCountYellow = document.getElementById('yellow-passenger-count');
let boardX = window.innerWidth * 0.5
let boardY = window.innerHeight * 0.5
let rownow = 0
let colnow = 0
let gamestate = "build"
let buildmode = "create"
let wayToGo = []
let trainState = "hold"
let lastClickRow = 0
let lastClickCol = 0
let gameBoard = []
let audio = new Audio();
audio.src = "Sound/track.mp3";

// Generates random game board with trees and stations
function create2DList(rows, cols) {

    // Create an array of allowed positions for 3's
    const allowedPositions = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            allowedPositions.push([i, j]);
        }
    }

    // Place trees at random positions while maintaining distance constraint
    let numThrees = 0;
    while (numThrees < Math.floor(rows * cols / 5)) { // Set trees to be around 20% of total cells
        const index = Math.floor(Math.random() * allowedPositions.length);
        const [i, j] = allowedPositions[index];
        gameBoard[i] = gameBoard[i] || [];
        gameBoard[i][j] = "tree";
        numThrees++;

        // Remove positions that have already been used
        allowedPositions.splice(index, 1);
    }

    let numTwos = 0;
    while (numTwos < Math.floor(rows * cols / 50)) { // Set stations to be around 20% of total cells
        const index = Math.floor(Math.random() * allowedPositions.length);
        const [i, j] = allowedPositions[index];
        gameBoard[i] = gameBoard[i] || [];
        let randomStation = Math.floor(Math.random() * 3);
        if (randomStation == 0) {
            gameBoard[i][j] = "redTrainStation";
        }
        if (randomStation == 1) {
            gameBoard[i][j] = "blueTrainStation";
        }
        if (randomStation == 2) {
            gameBoard[i][j] = "yellowTrainStation";
        }

        numTwos++;

        // Remove positions that have already been used
        allowedPositions.splice(index, 1);
    }

    // Fill remaining cells with grass
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!gameBoard[i] || !gameBoard[i][j]) {
                gameBoard[i] = gameBoard[i] || [];
                gameBoard[i][j] = 1;
            }
        }
    }
    return gameBoard;
}

// Load gameboard from local storage
var gameBoardJSON = localStorage.getItem("gameboard");

if (gameBoardJSON) {
    gameBoard = JSON.parse(gameBoardJSON);
} else {
    // If no gameboard is found, create a new one
    create2DList(window.innerWidth / 50,
        window.innerHeight / 15
    )

}

// Load other data from local storage or set to default
let trainRow = JSON.parse(localStorage.getItem("trainRow")) ?? 5;
let trainCol = JSON.parse(localStorage.getItem("trainCol")) ?? 5;
let coins = JSON.parse(localStorage.getItem("coins")) ?? 500;
let upgradePrice = JSON.parse(localStorage.getItem("upgradePrice")) ?? 5;
let maxPassenger = JSON.parse(localStorage.getItem("maxPassenger")) ?? 1;
let redPassenger = JSON.parse(localStorage.getItem("redPassenger")) ?? 0;
let bluePassenger = JSON.parse(localStorage.getItem("bluePassenger")) ?? 0;
let yellowPassenger = JSON.parse(localStorage.getItem("yellowPassenger")) ?? 0;
document.getElementById("upgrade").innerText = "Upgrade Passenger + 1(" + upgradePrice + ")";

// Initalize track and train objects

let rails = ["railVertical", "railHorizontal", "railDR", "railTR", "railLD", "railUL", "railRU", "railX", "railTL", "railTU", "railTD"]

let trainStation = ["redTrainStation", "blueTrainStation", "yellowTrainStation", "trainStation"]

let railsInfo = [{
    left: false,
    right: false,
    top: true,
    down: true,
    name: "railVertical"
},
    {
        left: true,
        right: true,
        top: false,
        down: false,
        name: "railHorizontal"
    },
    {
        left: true,
        right: false,
        top: false,
        down: false,
        name: "railHorizontal"
    },
    {
        left: false,
        right: true,
        top: false,
        down: false,
        name: "railHorizontal"
    },
    {
        left: false,
        right: true,
        top: false,
        down: true,
        name: "railDR"
    },
    {
        left: true,
        right: false,
        top: false,
        down: true,
        name: "railLD"
    },
    {
        left: false,
        right: true,
        top: true,
        down: true,
        name: "railTR"
    },
    {
        left: true,
        right: false,
        top: true,
        down: false,
        name: "railUL"
    },
    {
        left: false,
        right: true,
        top: true,
        down: false,
        name: "railRU"
    },
    {
        left: true,
        right: true,
        top: true,
        down: true,
        name: "railX"
    },
    {
        left: true,
        right: false,
        top: true,
        down: true,
        name: "railTL"
    },
    {
        left: true,
        right: true,
        top: false,
        down: true,
        name: "railTD"
    },
    {
        left: true,
        right: true,
        top: true,
        down: false,
        name: "railTU"
    },

]

const gridSystem = new GridSystem(gameBoard);

// Main game loop
function fps() {
    gridSystem.render()
    setTimeout(fps, 60)
}

// Updates the location of the train
function train() {
    const firstObj = wayToGo[0];
    if (firstObj == undefined) {
        trainState = "hold"
        return
    }
    const a = firstObj.row;
    const b = firstObj.col;
    trainCol = b;
    trainRow = a;
    wayToGo.shift();
    if (wayToGo.length > 0) {
        setTimeout(train, 40)
    } else {
        trainState = "hold"
        stationCheck()
    }

}


// Main event listener for mouse clicks, handles building, deleting tracks and train movement
function switchSquare(event) {
    let mousePos = getMousePos(gridSystem.outlineContext.canvas, event);
    const rowHeight = gridSystem.padding + gridSystem.cellSize;
    const colWidth = gridSystem.padding + gridSystem.cellSize;
    const row = Math.floor(mousePos.y / rowHeight);
    const col = Math.floor(mousePos.x / colWidth);

    if (gamestate === "normal" && trainState === "hold") {
        trainState = "drive"
        bfs(gameBoard,
            trainRow,
            trainCol,
            row,
            col
        )
        train()
    }
    if (gamestate === "build") {
        if (buildmode === "delete" && rails.includes(gridSystem.matrix[row][col])) {
            gridSystem.matrix[row][col] = 1
            railRotation(row, col)

        } else {
            if (coins >= 10 && gridSystem.matrix[row][col] === 1 && buildmode != "delete") {
                gridSystem.matrix[row][col] = "railVertical"
                railRotation(row, col)
                if (lastClickCol !== col || lastClickRow !== row) {
                    coins -= 10
                    railRotation(row, col)
                }
            }
        }
        lastClickRow = row
        lastClickCol = col

    }
}


// Checks if a rail is near the specified square and in the rails array
function checkRails(row, col) {
    const left = col > 0 && gridSystem.matrix[row][col - 1] && rails.includes(gridSystem.matrix[row][col - 1]);
    const right = col < gridSystem.matrix[row].length - 1 && gridSystem.matrix[row][col + 1] && rails.includes(gridSystem.matrix[row][col + 1]);
    const top = row > 0 && gridSystem.matrix[row - 1][col] && rails.includes(gridSystem.matrix[row - 1][col]);
    const down = row < gridSystem.matrix.length - 1 && gridSystem.matrix[row + 1][col] && rails.includes(gridSystem.matrix[row + 1][col]);

    return {left, right, top, down};
}

// Check if the train is near a station and if so, what station
function checkStations(grid, row, col) {
    const directions = [
        [0, 1],   // Right
        [0, -1],  // Left
        [1, 0],   // Bottom
        [-1, 0]   // Top
    ];

    const stations = ['redTrainStation', 'blueTrainStation', 'yellowTrainStation'];

    for (let i = 0; i < directions.length; i++) {
        const [dx, dy] = directions[i];
        const newRow = row + dx;
        const newCol = col + dy;

        if (
            newRow < 0 || newRow >= grid.length ||
            newCol < 0 || newCol >= grid[0].length
        ) {
            continue;  // Ignore if out of bounds
        }

        const station = grid[newRow][newCol];
        if (stations.includes(station)) {
            return [true, station];
        }
    }

    return [false, null];
}


// Put the right rail on the right square
function changeRail(row, col) {
    let {left, right, top, down} = checkRails(row, col);

    railsInfo.forEach((rail) => {
        if (top === rail.top && down === rail.down && left === rail.left && right === rail.right) {
            gridSystem.matrix[row][col] = rail.name
        }
    });
}

// Checks the rails around the clicked rail
function railRotation(row, col) {
    let {left, right, top, down} = checkRails(row, col);

    if (buildmode === "build") {
        changeRail(row, col)
    }
    if (left) {
        changeRail(row, col - 1)
    }
    if (right) {
        changeRail(row, col + 1)
    }
    if (top) {
        changeRail(row - 1, col)
    }
    if (down) {
        changeRail(row + 1, col)
    }
}


// If the train is on a station, passengers are loaded and unloaded
function stationCheck() {
    let station = checkStations(gridSystem.matrix, trainRow, trainCol)

    if (station[1] === "redTrainStation") {
        if (redPassenger <= maxPassenger - 1) {
            redPassenger = maxPassenger
        }
        coins = coins + bluePassenger + yellowPassenger
        bluePassenger = 0
        yellowPassenger = 0
    }
    if (station[1] === "blueTrainStation") {
        if (bluePassenger <= maxPassenger - 1) {
            bluePassenger = maxPassenger
        }
        coins = coins + redPassenger + yellowPassenger
        redPassenger = 0
        yellowPassenger = 0
    }
    if (station[1] === "yellowTrainStation") {
        if (yellowPassenger <= maxPassenger - 1) {
            yellowPassenger = maxPassenger
        }
        coins = coins + bluePassenger + redPassenger
        bluePassenger = 0
        redPassenger = 0
    }
}


// This function is used to get the mouse position on the canvas
function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
    }
}


// Handle mouse clicks, destinquishing between left and right click
gridSystem.outlineContext.canvas.addEventListener('mousedown', function (event) {
    if (event.buttons == 1) {
        event.preventDefault();
        buildmode = "build"
        switchSquare(event)
    }
    if (event.buttons == 2) {
        buildmode = "delete"
        event.preventDefault();
        switchSquare(event)
    }
});

// Handle mouse movement while the mouse is clicked, destinquishing between left and right click
gridSystem.outlineContext.canvas.addEventListener('mousemove', function (event) {
    if (event.buttons == 1) {
        event.preventDefault();
        buildmode = "build"
        switchSquare(event)
    }
    if (event.buttons == 2) {
        buildmode = "delete"
        event.preventDefault();
        switchSquare(event)
    }

});

// Browser security prevents audio from playing without user interaction
// This event listener plays the audio when the user clicks anywhere on the page
window.addEventListener("click", () => {
    if (audio.paused) {
        audio.play()
    }
});

// Prevents the context menu from appearing when right clicking
window.addEventListener("contextmenu", e => e.preventDefault());

// Highlights the square the mouse is currently hovering over
gridSystem.outlineContext.canvas.addEventListener("mousemove", (event) => {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    let mousePos = getMousePos(gridSystem.outlineContext.canvas, event);


    const rowHeight = gridSystem.padding + gridSystem.cellSize;
    const colWidth = gridSystem.padding + gridSystem.cellSize;

    const row = Math.floor(mousePos.y / rowHeight);
    const col = Math.floor(mousePos.x / colWidth);

    const rowFraction = (mousePos.y - row * rowHeight) / gridSystem.cellSize;
    const colFraction = (mousePos.x - col * colWidth) / gridSystem.cellSize;

    if (rowFraction < 1 && colFraction < 1) {
        rownow = row;
        colnow = col;
    }
});

// If the audio is finished, play it again (endless loop)
audio.addEventListener('ended', function () {
    audio.play()

});

// This function searches for the shortest path between two cells in a grid using Breadth First Search (BFS)
function bfs(grid, startRow, startCol, targetRow, targetCol) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check if the start and target cells are valid
    if (
        startRow < 0 || startRow >= numRows ||
        startCol < 0 || startCol >= numCols ||
        targetRow < 0 || targetRow >= numRows ||
        targetCol < 0 || targetCol >= numCols ||
        rails.includes([startRow][startCol]) || rails.includes([targetRow][targetCol])
    ) {
        return;
    }

    // Define a queue for BFS and a visited set to keep track of visited cells
    const queue = [];
    const visited = new Set();

    // Initialize way as an empty array
    const way = [];

    queue.push([{row: startRow, col: startCol, way}]); // Add the starting cell to the queue with an empty path

    // Define the possible moves (up, down, left, right)
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Perform BFS
    while (queue.length > 0) {
        const curr = queue.shift(); // Remove the first cell in the queue
        const {row, col, way} = curr[curr.length - 1]; // Get the current cell and its path
        if (row === targetRow && col === targetCol) { // Check if the target cell is reached
            wayToGo = way
            return; // Return the fastest path to the target cell
        }
        visited.add(`${row},${col}`); // Add the current cell to the visited set
        for (const [moveRow, moveCol] of moves) { // Check all possible moves
            const newRow = row + moveRow;
            const newCol = col + moveCol;
            if (
                newRow >= 0 && newRow < numRows &&
                newCol >= 0 && newCol < numCols &&
                rails.includes(grid[newRow][newCol]) &&
                !visited.has(`${newRow},${newCol}`)
            ) {
                const newWay = way.concat([{row: newRow, col: newCol}]); // Add the new cell to the path
                queue.push([...curr, {row: newRow, col: newCol, way: newWay}]); // Add the new path to the queue
            }
        }
    }
    return; // Return null if the target cell is not reachable
}

// Switches the build/normale mode
function buttonClick() {
    if (gamestate === "build") {
        gamestate = "normal"
        document.getElementById("mode").innerText = "Switch Mode(" + gamestate + ")";
    } else {
        gamestate = "build"
        document.getElementById("mode").innerText = "Switch Mode(" + gamestate + ")";
    }


}

// Save game to local storage including gameboard and all relevant variables every minute
function save() {
    var gameBoardJSON = JSON.stringify(gameBoard);
    localStorage.setItem("gameboard", gameBoardJSON);
    localStorage.setItem("trainCol", trainCol);
    localStorage.setItem("trainRow", trainRow);
    localStorage.setItem("coins", coins);
    localStorage.setItem("bluePassenger", bluePassenger);
    localStorage.setItem("redPassenger", redPassenger);
    localStorage.setItem("yellowPassenger", yellowPassenger);
    localStorage.setItem("upgradePrice", upgradePrice);
    localStorage.setItem("maxPassenger", maxPassenger);
    setTimeout(save, 60000)
    console.log(new Date(), "Game saved")
}

// Increase maximum number of passengers when upgrade button is clicked
function upgrade() {
    if (coins >= upgradePrice) {
        coins -= upgradePrice
        maxPassenger += 1
        upgradePrice *= 2
        document.getElementById("upgrade").innerText = "Upgrade Passenger + 1(" + upgradePrice + ")";
    }
}


// Start the game loop
fps()
// Start the save loop and save the game the first time
save()