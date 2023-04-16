const select = location.href.split('?');
const img = select[1];

const image = document.getElementById('img');
image.setAttribute('src', `./${img}.png`)

const a = location.href.split("?")[1]
const img = document.getElementById("img")
img.setAttribute("src",`../img/${a}.png`)

