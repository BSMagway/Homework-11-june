let addButton = document.querySelector(`.btn-success`);
let orderList = document.querySelector(`#oList`);
let inputArea = document.querySelector(`.form-control`);

addButton.addEventListener('click', addInList);


function addInList() {
    let ilElem = document.createElement('li');
    ilElem.textContent = inputArea.value;
    inputArea.value = '';
    orderList.append(ilElem);
}