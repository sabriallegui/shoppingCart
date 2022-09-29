// plus button
var plusOne = document.getElementsByClassName("plus-btn")

console.log('plus-btn', plusOne);

for (let plus of plusOne) {
    plus.addEventListener('click', () => {
        plus.nextElementSibling.innerText++;
    })

}
//minus button

var minusOne = document.getElementsByClassName('minus-btn')

console.log('minus-btn', minusOne);

for (let minus of minusOne) {
    minus.addEventListener('click', () => {
        if (minus.previousElementSibling.innerText > 0)
            minus.previousElementSibling.innerText--
    })

}

//delete button

var deletebtn = document.querySelectorAll(".delete-btn");

console.log('delete-btn', deletebtn);

for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener('click', () => {
        deletebtn[i].parentElement.parentElement.parentElement.remove()

    })
}

// Like Button

var images = document.querySelector('#imgClickAndChange1');

images.onclick = function () {
    images.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/2258px-Love_Heart_SVG.svg.png';
};
var imagess = document.querySelector('#imgClickAndChange2');

imagess.onclick = function () {
    imagess.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/2258px-Love_Heart_SVG.svg.png';
};
var imagesss = document.querySelector('#imgClickAndChange3');

imagesss.onclick = function () {
    imagesss.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/2258px-Love_Heart_SVG.svg.png';
};