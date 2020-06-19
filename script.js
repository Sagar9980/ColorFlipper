
let colors = ["red", "blue", "orange", "yellow", "green", "pink", "purple"]
const button = document.querySelector('.btn');
const color = document.querySelector('.colors');
const set = document.getElementById('container');


button.addEventListener('click', function () {
    var num = selectRandom();

    color.textContent = colors[num];
    color.style.color = colors[num];
    set.style.backgroundColor = colors[num];
})

function selectRandom() {
    return Math.floor(Math.random() * 7);
}
