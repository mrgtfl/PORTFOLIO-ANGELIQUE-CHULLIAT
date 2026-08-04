const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
let dashOffset = 3000;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function curve(startX, startY, cp1X, cp1Y, cp2X, cp2Y, endX, endY) {

    ctx.beginPath();

    ctx.moveTo(startX, startY);

    ctx.bezierCurveTo(
        cp1X,
        cp1Y,
        cp2X,
        cp2Y,
        endX,
        endY
    );

    ctx.stroke();

}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#1f1f1f";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.setLineDash([3000]);
    ctx.lineDashOffset = dashOffset;

    /* ==========================
            FIL GAUCHE
    ========================== */

    curve(
        -120, -20,
        40, 20,
        80, 140,
        180, 190
    );

    curve(
        180,190,
        290,250,
        330,110,
        220,80
    );

    curve(
        220,80,
        160,90,
        170,260,
        250,330
    );

    curve(
        250,330,
        330,420,
        80,520,
        90,700
    );

    curve(
        90,700,
        100,930,
        -360,940,
        430,930
    );




    /* ==========================
            FIL DROIT
    ========================== */

    curve(
        canvas.width + 120,
        -30,

        canvas.width - 50,
        30,

        canvas.width - 120,
        180,

        canvas.width - 260,
        240
    );

    curve(
        canvas.width - 260,
        240,

        canvas.width - 420,
        300,

        canvas.width - 360,
        480,

        canvas.width - 220,
        520
    );

    curve(
        canvas.width - 220,
        520,

        canvas.width - 100,
        560,

        canvas.width - 120,
        760,

        canvas.width - 240,
        1090
    );

}

function animate() {

    if (dashOffset > 0) {
        dashOffset -= 8;
    }

    draw();

    requestAnimationFrame(animate);

}

animate();