let nowZoom = 100;

function zoomQHD() {
  nowZoom = 100;
  zooms();
}

function zoomFHD() {
  nowZoom = 65;
  zooms();
}

function zoommobile() {
  nowZoom = 10;
  zooms();
}

function zooms() {
  document.body.style.zoom = nowZoom + '%';
}

function showhtml_img() {
  document.getElementById('element_img').src = 'img/HTML5.webp';
}

function showcss_img() {
  document.getElementById('element_img').src = 'img/CSS3.png';
}

function showjs_img() {
  document.getElementById('element_img').src = 'img/JS.jpeg';
}

const clock = document.getElementById('time');

function getClock() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0');
  clock.innerText = `${h}:${m}:${s}`;
}

function bg1_active() {
  document.body.style.backgroundImage = 'url(../img/BG_1.avif)';
  document.body.style.transition = '1s';
}
function bg2_active() {
  document.body.style.backgroundImage = 'url(../img/BG_2.avif)';
  document.body.style.transition = '1s';
}
function bg3_active() {
  document.body.style.backgroundImage = 'url(../img/BG_3.avif)';
  document.body.style.transition = '1s';
}

getClock();
setInterval(getClock, 1000);
