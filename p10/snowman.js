"use strict"

function drawSnowman(bottomBallCenterX, bottomBallCenterY, bottomBallRadius, scaleFactor, ) {
    ctx.beginPath()
    ctx.arc(bottomBallCenterX, bottomBallCenterY, bottomBallRadius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();


    const r2 = bottomBallRadius * scaleFactor, x2 = bottomBallCenterX,
        y2 = bottomBallCenterY - bottomBallRadius - r2;
    ctx.beginPath()
    ctx.arc(x2, y2, r2, 0, Math.PI * 2);
    // fillstyle stays the same
    ctx.fill();

    const r3 = r2 * scaleFactor, x3 = x2, y3 = y2 - r2 - r3;
    ctx.beginPath()
    ctx.arc(x3, y3, r3, 0, Math.PI * 2);
    // fillstyle stays the same
    ctx.fill();

    drawHat(x3, y3, r3, scaleFactor);
    drawEyes(minX, rangeX, p)
}


function drawHat(x3, y3, r3, scaleFactor) {
    ctx.beginPath()
    const w4 = r3 * 2, h4 = r3 / 2, x4 = x3 - w4 / 2, y4 = y3 - r3;
    ctx.rect(x4, y4, w4, h4)
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();

    const w5 = w4 * scaleFactor, h5 = h4 * 2, x5 = x3 - w5 / 2, y5 = y4 - h5;
    ctx.beginPath()
    ctx.rect(x5, y5, w5, h5)
    ctx.stroke();
    ctx.fill();
}

function drawEyes(minX, rangeX, p) {
    const x = minX+rangeX*p;
    ctx.beginPath();
    ctx.arc(x - 25, 170, 15, 0, Math.PI * 2)
    ctx.arc(x + 25, 170, 15, 0, Math.PI * 2)
    ctx.fill();
}