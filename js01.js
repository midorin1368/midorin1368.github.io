const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
let stat = false;

function func1() {
    if(stat) {
    image1.classList.add('off');
    image1.classList.remove('on');
    } else {
    image1.classList.add('on');
    image1.classList.remove('off');
    }
    stat = !stat;
}

function func2() {
    if(stat) {
    image2.classList.add('off');
    image2.classList.remove('on');
    } else {
    image2.classList.add('on');
    image2.classList.remove('off');
    }
    stat = !stat;
}

function func3() {
    if(stat) {
    image3.classList.add('off');
    image3.classList.remove('on');
    } else {
    image3.classList.add('on');
    image3.classList.remove('off');
    }
    stat = !stat;
}