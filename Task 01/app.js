setInterval(createTenHeader, 2000);

function createTenHeader() {
    for (let i = 0; i < 10; i++) {
        let random = getRandomIntInclusive(1, 6);
        let element = document.createElement(`h${random}`);
        element.textContent = `Я заголовок h${random}`;
        insertElement(element, random);        
    }
}

function insertElement (element, numberHeader) {
    for (let i = numberHeader; i < 7; i++) {
        let elementInBody = document.querySelector(`h${i}`);

        if (elementInBody != null) {
            elementInBody.before(element);
            break;
        }

        if (elementInBody == null && i == 6) {
            let body = document.querySelector('body');
            body.append(element);
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}