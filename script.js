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
        this.mousehover = false
    }

    #getCenter(w, h) {
        return {
            x: window.innerWidth / 2 - w / 2 + "px",
            y: window.innerHeight / 2 - h / 2 + "px"
        };
    }

    #getContext(w, h, color = "#000000", isTransparent = false) {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        //this.width = this.canvas.width = 0;
        //this.height = this.canvas.height = 0;
        //this.canvas.style.position = "absolute";
        this.canvas.style.background = color;
        if (isTransparent) {
            this.canvas.style.backgroundColor = "transparent";
        }
        const center = this.#getCenter(w, h);
        //this.canvas.style.marginLeft = center.x
        //this.canvas.style.marginTop = center.y;
        //document.body.appendChild(this.canvas);

        return this.context;
    }

    render() {
        const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
        const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

        this.outlineContext.canvas.width = w;
        this.outlineContext.canvas.height = h;

        const center = this.#getCenter(w, h);
        //this.outlineContext.canvas.style.marginLeft = center.x
        //this.outlineContext.canvas.style.marginTop = center.y;

        //this.topContext.canvas.style.marginLeft = center.x
        //this.topContext.canvas.style.marginTop = center.y;

        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[row].length; col++) {
                this.mousehover = rownow === row && colnow === col;

                if (this.matrix[row][col] === 0) {
                    this.outlineContext.fillStyle = "transparent"
                    this.outlineContext.fillRect(col * (this.cellSize + this.padding),
                        row * (this.cellSize + this.padding),
                        this.cellSize, this.cellSize);
                }
                if (this.matrix[row][col] === 3) {
                    this.outlineContext.fillStyle = "#000000"
                    this.outlineContext.fillRect(col * (this.cellSize + this.padding),
                        row * (this.cellSize + this.padding),
                        this.cellSize, this.cellSize);
                }
                if (this.matrix[row][col] === "railVertical" && this.imgRailVertical != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailVertical, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailVertical, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railTR" && this.imgRailTR != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailTR, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailTR, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railUL" && this.imgRailUL != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailUL, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailUL, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railRU" && this.imgRailRU != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailRU, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailRU, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railX" && this.imgRailX != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailX, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailX, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railTL" && this.imgRailTL != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailTL, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailTL, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railTU" && this.imgRailTU != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailTU, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailTU, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railTD" && this.imgRailTD != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailTD, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailTD, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railLD" && this.imgRailLD != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailLD, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailLD, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railDR" && this.imgRailDR != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailDR, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailDR, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === "railHorizontal" && this.imgRailHorizontal != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgRailHorizontal, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgRailHorizontal, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                if (this.matrix[row][col] === 1 && this.imgGrass != null) {
                    if (this.mousehover) {
                        this.outlineContext.drawImage(this.imgGrass, (2 + (col * (this.cellSize + this.padding))),
                            (2 + (row * (this.cellSize + this.padding))),
                            this.cellSize - 4, this.cellSize - 4);
                    } else {
                        this.outlineContext.drawImage(this.imgGrass, (col * (this.cellSize + this.padding)),
                            (row * (this.cellSize + this.padding)),
                            this.cellSize, this.cellSize);
                    }
                }
                this.outlineContext.fillStyle = "#000000"
                this.outlineContext.fillRect(trainCol * (this.cellSize + this.padding),
                    trainRow * (this.cellSize + this.padding),
                    this.cellSize, this.cellSize);

                coinCountElement.innerText = coins;


            }
        }
    }
}

const coinCountElement = document.getElementById('coin-count');
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


window.onload = function () {
    gridSystem.imgGrass = document.getElementById("background");
    gridSystem.imgRailVertical = document.getElementById("railVertical");
    gridSystem.imgRailHorizontal = document.getElementById("railHorizontal");
    gridSystem.imgRailTR = document.getElementById("railTR");
    gridSystem.imgRailDR = document.getElementById("railDR");
    gridSystem.imgRailLD = document.getElementById("railLD");
    gridSystem.imgRailUL = document.getElementById("railUL");
    gridSystem.imgRailRU = document.getElementById("railRU");
    gridSystem.imgRailX = document.getElementById("railX");
    gridSystem.imgRailTL = document.getElementById("railTL");
    gridSystem.imgRailTU = document.getElementById("railTU");
    gridSystem.imgRailTD = document.getElementById("railTD");
};

//enum BoardType {
//RH="",

//}

var gameBoardJSON = localStorage.getItem("gameboard");
if (gameBoardJSON) {
    gameBoard = JSON.parse(gameBoardJSON);
} else {
    create2DList(window.innerWidth/50, window.innerHeight / 15)

}

let trainRow = JSON.parse(localStorage.getItem("trainRow")) ?? 5;
let trainCol = JSON.parse(localStorage.getItem("trainCol")) ?? 5;
let coins = JSON.parse(localStorage.getItem("coins")) ?? 100;

function create2DList(rows, cols) {
    for (let i = 0; i < rows; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < cols; j++) {
            gameBoard[i].push(1);
        }
    }
}


let rails = ["railVertical", "railHorizontal", "railDR", "railTR", "railLD", "railUL", "railRU", "railX", "railTL", "railTU", "railTD"]

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
    setTimeout(fps, 16);      //60fps ca 16
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
    }

}

function switchSquare(event) {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const row = Math.floor(y / (gridSystem.cellSize + gridSystem.padding));
    const col = Math.floor(x / (gridSystem.cellSize + gridSystem.padding));

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
        if (buildmode === "delete") {
            gridSystem.matrix[row][col] = 1

        } else {
            if (coins >= 10) {
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

gridSystem.outlineContext.canvas.addEventListener("mousemove", (event) => {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //console.log(x,y)

    const row = Math.floor(y / (gridSystem.cellSize + gridSystem.padding));
    const col = Math.floor(x / (gridSystem.cellSize + gridSystem.padding));
    rownow = row
    colnow = col
    //console.log(`Kästchen bei [${rownow},${colnow}] geklickt.`);

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
    setTimeout(save,60000)
    console.log(new Date(),"Game saved")
}

save()

function coin() {
    coins += 1000
}









