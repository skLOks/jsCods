let timer = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let count = 0;
let helth = 5,
  player = document.querySelector('.player');
let countV = 0;

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function kartres(num) {

  if (num == 1) {
    document.querySelector('body').style.backgroundImage = "url('kart1.jpg')";
  } else if (num == 2) {
    document.querySelector('body').style.backgroundImage = "url('kart2.jpg')";
  } else if (num == 3) {
    document.querySelector('body').style.backgroundImage = "url('kart3.png')";
  }
  
}

function kartpage() {
  document.querySelector('body').style.backgroundImage = "url('kart1.jpg')";
  document.querySelector('.mainpage').style.display = 'none';
  document.querySelector('.kart').style.display = 'block';
  let fonImg = document.querySelector('body');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function stolkSt(element1, element2) {
    let rect1 = element1.getBoundingClientRect();
    let rect2 = element2.getBoundingClientRect();

    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function containsClass(matchClassName) {
    let matches = new Array();
    let elems = document.getElementsByTagName('div'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClassName + ' ') > -1) {
           matches.push(elems[i]);
        }
    }
    return matches;
}

function stop() {
  clearInterval(interval);
  let elVrag = document.querySelectorAll('.vrag');
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "Escape") {
      elVrag.forEach((el) => {
        el.style.animationPlayState = 'running'
      });
      interval = setInterval(updateTime, 1000);
      mainprocc();
    }
  });
}

function gameover() {
  clearInterval(interval);
  document.querySelector('.gameover').style.display = 'block';
  document.querySelector('.menusost').style.display = 'none';
  document.querySelector('.gamepage').style.display = 'none';
  document.querySelector('.player').style.display = 'none';
  document.querySelector('.hel').innerHTML = `Осталось: ${helth} жизней`;
  document.querySelector('.time').innerHTML = `Прошёл за ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.querySelector('.countV').innerHTML = `Задел врага ${countV} раз`;
}

function mainprocc() {
  let monsters = containsClass('vrag');
  document.addEventListener("keydown", mainevent = (event) => {
    const keyName = event.key;
    var rect = player.getBoundingClientRect();
    if (keyName === "ArrowUp" || keyName === "w") {
      res = rect.top - 8;
      player.style.top = res + 'px';

    }
    if (keyName === "ArrowRight" || keyName === "d") {
      res = rect.left + 8;
      player.style.left = res + 'px';
    }
    if (keyName === "ArrowLeft" || keyName === "a") {
      res = rect.left - 8;
      player.style.left = res + 'px';
    }
    if (keyName === "ArrowDown" || keyName === "s") {
      res = rect.top + 8;
      player.style.top = res + 'px';
    }
    if (keyName === "Escape") {

      clearInterval(interval);
      monsters.forEach((el) => {
        el.style.animationPlayState = 'paused';
      });
      clearTimeout(timeout);
      document.addEventListener("keydown", mainevent);
      stop();

    }
    let finish = containsClass('finish');
    let finishst = finish.find((fin) => stolkSt(player, fin));
    let conkrtm = monsters.find((monster) => stolkSt(player, monster));
    if (conkrtm) {
      conkrtm.remove();
      helth--;
      countV++;
      document.querySelector('.helth').innerHTML = helth;
      if (helth == 0) {
        gameover();
      }
    }
    if (finishst) {
      gameover();
    }
  },);
  function infprocc() {
    for (let i = 0; i < 10; i++) {
      let x = getRandomInt(90);
      let y = getRandomInt(90);
      let r = getRandomInt(4) + 1;
      document.querySelector('.gamepage').innerHTML += `<div class="vrag" style="left: ${x}%; top: ${y}%; animation-name: rotation${r}"> <img src="riba.png"> </div>`;
    }
    for (let i = 0; i < 2; i++) {
      let x = getRandomInt(90);
      let y = getRandomInt(90);
      let r = getRandomInt(4) + 1;
      document.querySelector('.gamepage').innerHTML += `<div class="vrag lovushka" style="left: ${x}%; top: ${y}%;"> <img src="konevskiy.jpg"> </div>`;
    }
    
    mainprocc();
  }
  let timeout = setTimeout(infprocc, 3000);
}


function gamepage() {
  document.querySelector('.kart').style.display = 'none';
  document.querySelector('.menusost').style.display = 'block';
  document.querySelector('.finish').style.display = 'block';
  document.querySelector('.gamepage').style.display = 'block';
  document.querySelector('.player').style.display = 'block';
  let timer = document.getElementById('timer'),
  proccess = true,
  pos;
  let name = document.querySelector("#name").value;
  document.querySelector('.namepl').innerHTML = name;
  document.querySelector('.helth').innerHTML = helth;
  mainprocc();
  interval = setInterval(updateTime, 1000);
}

function mainpage() {
  document.querySelector('.ekrzag').style.display = 'none';
  document.querySelector('.mainpage').style.display = 'block';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function zgr() {
  let c = 0;
  while (c <= 100) {
    let prog = document.querySelector('#prog');
    prog.value+=2;
    c+=2;
    await sleep(30);
  }
  mainpage();
}
zgr();