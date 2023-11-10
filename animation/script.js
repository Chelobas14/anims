let wUp = setInterval(() => {
  w = document.getElementById("w").value;
  h = document.getElementById("h").value;
  animCode = document.getElementById("anim").value;
}, 1);
let stop = () => {
  isPlay = !isPlay;
};
let clear = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  posx = 0;
  posy = 0;
};
let clr = document.getElementById("clr");
clr.addEventListener("click", clear);
let stopBut = document.getElementById("stop");
stopBut.addEventListener("click", stop);
let proc = setInterval(function () {
  if (isPlay) {
    let val = document.getElementById("inp").value;
    let box = document.getElementById("box").value;

    for (let j = 0; j < val; j++) {
      if (animCode == 1) {
        posy = (Math.cos(it / 1000) / 2 + 0.5) * (h - box);
        if (posx > w - box) vect1 = -1;
        if (posx < 0) {
          vect1 = 1;
        }
        posx += vect1 / 5;
      } else if (animCode == 2) {
        if (posy + 1 * box >= h) {
          vect2.y = -1;
          cols++;
        }
        if (posy <= 0) {
          vect2.y = 1;
          cols++;
        }
        if (posx + 1 * box >= w) {
          vect2.x = -1;
          cols++;
        }
        if (posx <= 0) {
          vect2.x = 1;
          cols++;
        }
        // posx += vector.x;
        // posy += vector.y;
        dx = 1;
        dy = 1;
        posx += dx * vect2.x;
        posy += dy * vect2.y;
      } else if (animCode == 3) {
        posx = (Math.cos(it / 1000) / 2 + 0.5) * (w - box);
        if (posy > h - box) vect = -1;
        if (posy < 0) {
          vect = 1;
        }
        posy += vect / 5;
      } else if (animCode == 4) {
        if (posy > h - box) {
          vect4 = 0;
        }
        if (posy <= 0) {
          vect4 = 1;
        }
        if (vect4 == 1) {
          posy += 0.0026 * Math.pow(2.718281828, 0.0026 * posx);
        }
        if (vect4 == 0) {
          posy -= 0.0026 * Math.pow(2.718281828, 0.0026 * posx);
        }
        if (posx > w - box) vect = -1;
        if (posx < 0) {
          vect = 1;
        }
        posx += vect / 5;
      } else if (animCode == 5) {
        if (posy >= h - box) {
          vect5 = -1;
        }
        if (posy < 0) {
          vect5 = 1;
        }
        if (vect5 == 1) {
          posy += (3 * (posx - 100) ** 2) / 10 ** 7;
        }
        if (vect5 == -1) {
          posy -= (3 * (posx - 100) ** 2) / 10 ** 7;
        }
        if (posx > w - box) vect = -1;
        if (posx < 0) {
          vect = 1;
        }
        posx += vect / 5;
      } else if (animCode == 6) {
        if (posy >= h - box) {
          vect5 = -1;
        }
        if (posy < 0) {
          vect5 = 1;
        }
        if (posx <= w / 2) {
          if (vect5 == 1) {
            posy += (3 * (posx - 100) ** 2) / 10 ** 7;
          }
          if (vect5 == -1) {
            posy -= (3 * (posx - 100) ** 2) / 10 ** 7;
          }
        } else {
          if (vect5 == 1) {
            posy += (3 * (w - posx - 100) ** 2) / 10 ** 7;
          }
          if (vect5 == -1) {
            posy -= (3 * (w - posx - 100) ** 2) / 10 ** 7;
          }
        }
        if (posx > w - box) vect = -1;
        if (posx < 0) {
          vect = 1;
        }
        posx += vect / 5;
      }

      let red = 255 * (Math.sin(posx / 100) / 2 + 0.5);
      let green = 255 - 255 * (Math.sin(posy / 100 + 1) / 2 + 0.5);
      let blue = 255 - red; /*
      green += (Math.random() - 0.5) * 200;
      red += (Math.random() - 0.5) * 200;
      blue += (Math.random() - 0.5) * 200;*/
      if (animCode == 2) {
        red = 255 * (Math.sin(cols / 100) / 2 + 0.5);
        green = 255 - 255 * (Math.sin(cols / 100 + 1) / 2 + 0.5);
        blue = 255 - red;
      }
      ctx.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
      ctx.fillRect(posx, posy, box, box);

      ctx.fillStyle = "black";
      ctx.fillRect(w, 0, canv.width - w, canv.height);
      ctx.fillRect(0, h, canv.width, canv.height - h);
      it++;
    }
  }
}, 0);
console.log(1);
