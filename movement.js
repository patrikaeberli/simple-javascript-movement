var xPos = 0;
var yPos = 0;

document.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
            case 37: // Arrow left
                moveLeft();
                break;
            case 38: // Arrow up
                moveUp();
                break;
            case 39: // Arrow right
                moveRight();
                break;
            case 40: // Arrow down
                moveDown();
                break;
        }
});

function moveLeft() {
    if (xPos > 0) {
        xPos -= 10;
        document.getElementById("sprite").style.left = xPos + 'px';
        update();
    }
}

function moveUp() {
    if (yPos > 0) {
        yPos -= 10;
        document.getElementById("sprite").style.top = yPos + 'px';
        update();
    }
}

function moveRight() {
    if (xPos < 980) {
        xPos += 10;
        document.getElementById("sprite").style.left = xPos + 'px';
        update();
    }
}

function moveDown() {
    if (yPos < 780) {
        yPos += 10;
        document.getElementById("sprite").style.top = yPos + 'px';
        update();
    }
}
