class GridSystem {
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.#getContext(0, 0, "#000");
        this.outlineContext = this.#getContext(0, 0, "rgb(255,255,255)");
        this.topContext = this.#getContext(0, 0, "#000000", true);
        this.cellSize = window.innerWidth / 50;   //10
        this.padding = 0;     //3
        this.imgGrass = null;
        this.imgRailVertical = null;
        this.imgRailHorizontal = null;
        this.imgRailTR = null
        this.imgRailDR = null
        this.imgRailLD = null
        this.imgRailUL = null
        this.imgRailRU = null
        this.imgRailX = null
        this.imgRailTD = null
        this.imgRailTU = null
        this.imgRailTL = null
        this.imgTree = null
        this.imgTrainStation = null
        this.mousehover = false

        this.imgGrass = new Image();
        this.imgGrass.src = "grass.png";

        this.imgRailVertical = new Image();
        this.imgRailVertical.src = "railVertical.png";

        this.imgRailTR = new Image();
        this.imgRailTR.src = "railTR.png";

        this.imgRailUL = new Image();
        this.imgRailUL.src = "railUL.png";

        this.imgRailRU = new Image();
        this.imgRailRU.src = "railRU.png";

        this.imgTrainStation = new Image();
        this.imgTrainStation.src = "trainStation.png";

        this.imgRailX = new Image();
        this.imgRailX.src = "railX.png";

        this.imgRailTL = new Image();
        this.imgRailTL.src = "railTL.png";

        this.imgRailTU = new Image();
        this.imgRailTU.src = "railTU.png";

        this.imgRailTD = new Image();
        this.imgRailTD.src = "railTD.png";

        this.imgRailLD = new Image();
        this.imgRailLD.src = "railLD.png";

        this.imgRailDR = new Image();
        this.imgRailDR.src = "railDR.png";

        this.imgTree = new Image();
        this.imgTree.src = "tree(placeholder).png";

        this.imgRailHorizontal = new Image();
        this.imgRailHorizontal.src = "railHorizontal.png";

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
            railHorizontal: this.imgRailHorizontal
        };
    }

        #getCenter(w, h)
        {
            return {
                x: window.innerWidth / 2 - w / 2 + "px",
                y: window.innerHeight / 2 - h / 2 + "px"
            };
        }

        #getContext(w, h, color = "#000000", isTransparent = false){
            this.canvas = document.getElementById("canvas");
            this.context = this.canvas.getContext("2d");
            //this.width = this.canvas.width = 0;
            //this.height = this.canvas.height = 0;
            //this.canvas.style.position = "absolute";
            this.canvas.style.background = color;
            if (isTransparent) {
                this.canvas.style.backgroundColor = "transparent";
            }
            //const center = this.#getCenter(w, h);
            //this.canvas.style.marginLeft = center.x
            //this.canvas.style.marginTop = center.y;
            //document.body.appendChild(this.canvas);

            return this.context;
        }


        render()
        {

            const w = (this.cellSize + this.padding) * this.matrix[0].length - this.padding;
            const h = (this.cellSize + this.padding) * this.matrix.length - this.padding;

            this.outlineContext.canvas.width = w;
            this.outlineContext.canvas.height = h;

            const center = this.#getCenter(w, h);
            // this.outlineContext.canvas.style.marginLeft = center.x
            // this.outlineContext.canvas.style.marginTop = center.y;
            // this.topContext.canvas.style.marginLeft = center.x
            // this.topContext.canvas.style.marginTop = center.y;

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
                    passengerCount.innerText = passenger;
                }
            }
        }
}

const coinCountElement = document.getElementById('coin-count');
const passengerCount = document.getElementById('passenger-count');
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



//enum BoardType {
//RH="",

//}


function create2DList(rows, cols) {

    // create an array of allowed positions for 3's
    const allowedPositions = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            allowedPositions.push([i, j]);
        }
    }

    // place 3's at random positions while maintaining distance constraint
    let numThrees = 0;
    while (numThrees < Math.floor(rows * cols / 5)) { // set 3's to be around 20% of total cells
        const index = Math.floor(Math.random() * allowedPositions.length);
        const [i, j] = allowedPositions[index];
        gameBoard[i] = gameBoard[i] || [];
        gameBoard[i][j] = "tree";
        numThrees++;

        // remove positions that have already been used
        allowedPositions.splice(index, 1);
    }

    let numTwos = 0;
    while (numTwos < Math.floor(rows * cols / 50)) { // set 3's to be around 20% of total cells
        const index = Math.floor(Math.random() * allowedPositions.length);
        const [i, j] = allowedPositions[index];
        gameBoard[i] = gameBoard[i] || [];
        gameBoard[i][j] = "trainStation";
        numTwos++;

        // remove positions that have already been used
        allowedPositions.splice(index, 1);
    }


    // fill remaining cells with 1's
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


var gameBoardJSON = localStorage.getItem("gameboard");
if (gameBoardJSON) {
    gameBoard = JSON.parse(gameBoardJSON);
} else {
    create2DList(window.innerWidth / 50, window.innerHeight / 15)

}


let trainRow = JSON.parse(localStorage.getItem("trainRow")) ?? 5;
let trainCol = JSON.parse(localStorage.getItem("trainCol")) ?? 5;
let coins = JSON.parse(localStorage.getItem("coins")) ?? 100;
let passenger = JSON.parse(localStorage.getItem("passenger")) ?? 0;


let rails = ["railVertical", "railHorizontal", "railDR", "railTR", "railLD", "railUL", "railRU", "railX", "railTL", "railTU", "railTD"]

let trainStation = ["redTrainStation","blueTrainStation","yellowTrainStation"]

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

function fps() {
    gridSystem.render();
    setTimeout(fps, 30);      //60fps ca 16
}


function train() {
    const firstObj = wayToGo[0];
    if (firstObj == undefined) {
        trainState = "hold"
        return
    }
    const a = firstObj.row; // 1
    const b = firstObj.col; // 2
    trainCol = b;
    trainRow = a;
    wayToGo.shift();
    if (wayToGo.length > 0) {
        setTimeout(train, 55)
    } else {
        trainState = "hold"
        stationCheck()
    }

}

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
        //trainCol = way[0]
        //trainRow = way[1]

    }
    if (gamestate === "build") {
        if (buildmode === "delete" && rails.includes(gridSystem.matrix[row][col])) {
            gridSystem.matrix[row][col] = 1
            railRotation(row, col)

        } else {
            if (coins >= 10 && gridSystem.matrix[row][col] === 1) {
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


function checkRails(row, col) {
    const left = col > 0 && gridSystem.matrix[row][col - 1] && rails.includes(gridSystem.matrix[row][col - 1]);
    const right = col < gridSystem.matrix[row].length - 1 && gridSystem.matrix[row][col + 1] && rails.includes(gridSystem.matrix[row][col + 1]);
    const top = row > 0 && gridSystem.matrix[row - 1][col] && rails.includes(gridSystem.matrix[row - 1][col]);
    const down = row < gridSystem.matrix.length - 1 && gridSystem.matrix[row + 1][col] && rails.includes(gridSystem.matrix[row + 1][col]);

    return {left, right, top, down};
}

function checkStations(row, col) {
    const left = col > 0 && gridSystem.matrix[row][col - 1] && trainStation.includes(gridSystem.matrix[row][col - 1])
    const right = col < gridSystem.matrix[row].length - 1 && gridSystem.matrix[row][col + 1] && gridSystem.matrix[row][col + 1] === "trainStation"
    const top = row > 0 && gridSystem.matrix[row - 1][col] && gridSystem.matrix[row - 1][col] === "trainStation"
    const down = row < gridSystem.matrix.length - 1 && gridSystem.matrix[row + 1][col] && gridSystem.matrix[row + 1][col] === "trainStation"
    if (left || right || top || down) {
        return true
    } else {
        return false
    }
}


function changeRail(row, col) {
    let {left, right, top, down} = checkRails(row, col);

    railsInfo.forEach((rail) => {
        if (top === rail.top && down === rail.down && left === rail.left && right === rail.right) {
            gridSystem.matrix[row][col] = rail.name
        }
    });
}

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


function stationCheck() {
    if(checkStations(trainRow, trainCol)){
        console.log(true)
    }

}

//trainRow links nach rechts
function handleKeyPress(event) {
    switch (event.keyCode) {
        case 37: // links
        function links() {
            if (rails.includes(gridSystem.matrix[trainRow][trainCol - 1])) {
                setTimeout(links, 50);      //60fps ca 16
                gridSystem.matrix[trainRow][trainCol] = "railVertical"
                trainCol--;
                gridSystem.matrix[trainRow][trainCol] = 3;
            }
        }

            links()
            break;
        case 38: // oben
        function oben() {
            if (rails.includes(gridSystem.matrix[trainRow - 1][trainCol])) {
                setTimeout(oben, 50);      //60fps ca 16
                gridSystem.matrix[trainRow][trainCol] = "railVertical"
                trainRow--;
                gridSystem.matrix[trainRow][trainCol] = 3;
            }
        }

            oben()
            break;
        case 39: // rechts
        function right() {
            if (rails.includes(gridSystem.matrix[trainRow][trainCol + 1])) {
                setTimeout(right, 50);      //60fps ca 16
                gridSystem.matrix[trainRow][trainCol] = "railVertical"
                trainCol++;
                gridSystem.matrix[trainRow][trainCol] = 3;
            }
        }

            right()
            break;
        case 40: // unten
        function down() {
            if (rails.includes(gridSystem.matrix[trainRow + 1][trainCol])) {
                setTimeout(down, 50);      //60fps ca 16
                gridSystem.matrix[trainRow][trainCol] = "railVertical"
                trainRow++;
                gridSystem.matrix[trainRow][trainCol] = 3;
            }
        }

            down()
            break;
    }
    //updatePosition()
}


document.addEventListener("keydown", function (event) {
    if (gamestate === "normal") {
        //handleKeyPress(event)
    }
});
//error
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

window.addEventListener("contextmenu", e => e.preventDefault());

function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
        scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

    return {
        x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
        y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
}

gridSystem.outlineContext.canvas.addEventListener("mousemove", (event) => {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    //const x = event.clientX - rect.left;
    //const y = event.clientY - rect.top;
    //console.log(x,y);

    let mousePos = getMousePos(gridSystem.outlineContext.canvas, event);


    const rowHeight = gridSystem.padding + gridSystem.cellSize;
    const colWidth = gridSystem.padding + gridSystem.cellSize;
    //console.log(mousePos);
    const row = Math.floor(mousePos.y / rowHeight);
    const col = Math.floor(mousePos.x / colWidth);

    const rowFraction = (mousePos.y - row * rowHeight) / gridSystem.cellSize;
    const colFraction = (mousePos.x - col * colWidth) / gridSystem.cellSize;

    if (rowFraction < 1 && colFraction < 1) {
        rownow = row;
        colnow = col;
        //console.log(`Kästchen bei [${rownow},${colnow}] geklickt.`);
    }
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
        const curr = queue.shift(); // Dequeue the first cell in the queue
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


function animator(startPosX, startPosY, facing) {

}

function buttonClick() {
    if (gamestate === "build") {
        //gridSystem.cellSize = 20
        //gridSystem.padding = 0
        gamestate = "normal"
    } else {
        //gridSystem.cellSize = 17
        //gridSystem.padding = 3
        gamestate = "build"
    }


}


function save() {
    var gameBoardJSON = JSON.stringify(gameBoard);
    localStorage.setItem("gameboard", gameBoardJSON);
    localStorage.setItem("trainCol", trainCol);
    localStorage.setItem("trainRow", trainRow);
    localStorage.setItem("coins", coins);
    localStorage.setItem("passenger", passenger);
    setTimeout(save, 60000)
    console.log(new Date(), "Game saved")
}

save()

function coin() {
    coins += 1000
    passenger += 1
}









