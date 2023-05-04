class GridSystem {
    constructor(matrix) {
        this.matrix = matrix;
        this.uiContext = this.#getContext(0, 0, "#000");
        this.outlineContext = this.#getContext(0, 0, "rgb(255,255,255)");
        this.topContext = this.#getContext(0, 0, "#000000", true);
        this.cellSize = window.innerHeight / 32;   //10
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

        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[row].length; col++) {
                if (rownow == row && colnow == col) {
                    this.mousehover = true
                } else {
                    this.mousehover = false
                }
                if (this.matrix[row][col] == 0) {
                    this.outlineContext.fillStyle = "transparent"
                    this.outlineContext.fillRect(col * (this.cellSize + this.padding),
                        row * (this.cellSize + this.padding),
                        this.cellSize, this.cellSize);
                }
                if (this.matrix[row][col] == 3) {
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
                if (this.matrix[row][col] == 1 && this.imgGrass != null) {
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


            }
        }
        this.uiContext.font = "20px Courier";
        this.uiContext.fillStyle = "red";
        this.uiContext.fillText("TrainGame", 200, 30);
    }
}

let boardX = window.innerWidth * 0.5
let boardY = window.innerHeight * 0.5
let rownow = 0
let colnow = 0
let row = 0;
let col = 0;
let gamestate = "build"
let buildmode = "create"
let coins = 100
let way = []

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
let gameBoard = [
    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]


];

let rails = ["railVertical", "railHorizontal", "railDR", "railTR","railLD","railUL","railRU","railX","railTL","railTU","railTD"]

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
    //console.log(gamestate)
    setTimeout(fps, 16);      //60fps ca 16
}

function switchSquare(event) {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const row = Math.floor(y / (gridSystem.cellSize + gridSystem.padding));
    const col = Math.floor(x / (gridSystem.cellSize + gridSystem.padding));

    console.log(`Kästchen bei [${row},${col}] geklickt.`);
    if(gamestate == "normal") {
        way = bfs(gameBoard,
            0,
            0,
            row,
            col
        )
        console.log(way)
    }
    if (gamestate == "build") {
        if (buildmode === "delete") {
            gridSystem.matrix[row][col] = 1
        } else {
            gridSystem.matrix[row][col] = "railVertical"
        }
        trainRotation(row, col)
    }
}


function checkRails(row, col) {
    const left = col > 0 && gridSystem.matrix[row][col - 1] && rails.includes(gridSystem.matrix[row][col - 1]);
    const right = col < gridSystem.matrix[row].length - 1 && gridSystem.matrix[row][col + 1] && rails.includes(gridSystem.matrix[row][col + 1]);
    const top = row > 0 && gridSystem.matrix[row - 1][col] && rails.includes(gridSystem.matrix[row - 1][col]);
    const down = row < gridSystem.matrix.length - 1 && gridSystem.matrix[row + 1][col] && rails.includes(gridSystem.matrix[row + 1][col]);

    return { left, right, top, down };
}


function changeRail(row,col) {
    let { left, right, top, down } = checkRails(row, col);

    railsInfo.forEach((rail) => {
        if (top === rail.top && down === rail.down && left === rail.left && right === rail.right) {
            gridSystem.matrix[row][col] = rail.name
        }
    });
}

function trainRotation(row, col) {
    let { left, right, top, down } = checkRails(row, col);


    changeRail(row, col)
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
        function links() {
            if (rails.includes(gridSystem.matrix[row][col - 1])) {
                setTimeout(links, 50);      //60fps ca 16
                gridSystem.matrix[row][col] = "railVertical"
                col--;
                gridSystem.matrix[row][col] = 3;
            }
        }

            links()
            break;
        case 38: // oben
        function oben() {
            if (rails.includes(gridSystem.matrix[row - 1][col])) {
                setTimeout(oben, 50);      //60fps ca 16
                gridSystem.matrix[row][col] = "railVertical"
                row--;
                gridSystem.matrix[row][col] = 3;
            }
        }

            oben()
            break;
        case 39: // rechts
        function right() {
            if (rails.includes(gridSystem.matrix[row][col + 1])) {
                setTimeout(right, 50);      //60fps ca 16
                gridSystem.matrix[row][col] = "railVertical"
                col++;
                gridSystem.matrix[row][col] = 3;
            }
        }

            right()
            break;
        case 40: // unten
        function down() {
            if (rails.includes(gridSystem.matrix[row + 1][col])) {
                setTimeout(down, 50);      //60fps ca 16
                gridSystem.matrix[row][col] = "railVertical"
                row++;
                gridSystem.matrix[row][col] = 3;
            }
        }

            down()
            break;
    }
    //updatePosition()
}


document.addEventListener("keydown", function (event) {
    if (gamestate === "normal") {
        handleKeyPress(event)
    }
});
//error
gridSystem.outlineContext.canvas.addEventListener('mousedown', function (event) {
    switchSquare(event)
});

gridSystem.outlineContext.canvas.addEventListener('mousemove', function (event) {
    if (event.buttons == 1) {
        event.preventDefault();
        switchSquare(event)
    }
});

window.addEventListener("contextmenu", e => e.preventDefault());

gridSystem.outlineContext.canvas.addEventListener("mousemove", (event) => {
    const rect = gridSystem.outlineContext.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const row = Math.floor(y / (gridSystem.cellSize + gridSystem.padding));
    const col = Math.floor(x / (gridSystem.cellSize + gridSystem.padding));
    rownow = row
    colnow = col
    //console.log(`Kästchen bei [${row},${col}] geklickt.`);

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
            return dist, way; // Return the distance to the target cell
        }
        visited.add(`${row},${col}`); // Add the current cell to the visited set
        for (const [moveRow, moveCol] of moves) { // Check all possible moves
            const newRow = row + moveRow;
            const newCol = col + moveCol;
            if (
                newRow >= 0 && newRow < numRows &&
                newCol >= 0 && newCol < numCols &&
                rails.includes(grid[newRow][newCol])  &&
                !visited.has(`${newRow},${newCol}`)
            ) {
                way.push(row, col)
                queue.push([newRow, newCol, dist + 1]); // Add the new cell to the queue with distance incremented by 1
            }
        }
    }
    return null; // Return null if the target cell is not reachable
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











