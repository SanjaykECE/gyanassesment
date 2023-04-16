const select = location.href.split('?');
const img = select[1];

const image = document.getElementById('img');
image.setAttribute('src', `./${img}.png`)

