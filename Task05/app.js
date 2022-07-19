let mainList = document.querySelector(`#main`);
let hideElem = document.querySelectorAll('.hide');


for (let el of hideElem) {
    el.addEventListener('click', hide);
}


function hide (e) {
    if (e.target == e.currentTarget) {
        let elem = e.target.childNodes;
        e.target.classList.toggle('bold')
        for (let item of elem) {
            if (item.nodeName == 'UL') {
                item.classList.toggle('none');
                item.classList.toggle('normal');
            }
        }

    }
}