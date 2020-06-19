const hexItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector('.btn');
const color = document.querySelector('.colors');
const set = document.getElementById('container');

button.addEventListener('click', function () {
    let col = "#";
    for (let i = 0; i < 6; i++) {
        var num = hexItems[selectRandom()];
        col += num;
    }
    color.textContent = col;
    color.style.color = col;
    set.style.backgroundColor = col;
})
function selectRandom() {
    return Math.floor(Math.random() * 15);
}
