let circle = document.querySelector('#circle');
let coordX = document.querySelector(`#coordX`);
let coordY = document.querySelector(`#coordY`);

let trigger = getRandomIntInclusive(0, 3);

circle.style.top = getRandomIntInclusive(0, 394) + `px`;
circle.style.left = getRandomIntInclusive(0, 594) + `px`;
setCoordInfo();

setInterval(moveCircle, 5);
setInterval(randomRoute, 2000);


function setCoordInfo () {
    coordX.textContent = `Current X: ${circle.style.left}`;
    coordY.textContent = `Current Y: ${circle.style.top}`;
}

function moveCircle () {
    let topInt = parseInt(circle.style.top);
    let leftInt = parseInt(circle.style.left);
    switch (trigger) {
        case 0:
            if (topInt == 0) {
                trigger = 1;
            } else {
                circle.style.top = topInt - 1 + 'px';
                setCoordInfo();
            }
            break;
        case 1:
            if (topInt == 394) {
                trigger = 0;
            } else {
                circle.style.top = topInt + 1 + 'px';
                setCoordInfo();
            }
            break;
        case 2:
            if (leftInt == 0) {
                trigger = 3;
            } else {
                circle.style.left = leftInt - 1 + 'px';
                setCoordInfo();
            }
            break;
        case 3:
            if (leftInt == 594) {
                trigger = 2;
            } else {
                circle.style.left = leftInt + 1 + 'px';
                setCoordInfo();
            }
            break;
    }
}

function randomRoute () {
    trigger = getRandomIntInclusive(0, 3);
}
 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }