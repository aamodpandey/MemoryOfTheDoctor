import customTimeout from "./customTimeout.js";
import HighScore from "./HighScore.js";
import flash from "./flash.js";
import imgColor from "./imgColor.js";
import navbarToggler from "./navbarToggler.js";
import flashNrestore from "./flashNrestore.js";
import buttonPressed from "./buttonPressed.js";
const colors = ["green", "red", "yellow", "blue"];
let five = false;
let gameover = false;
let c = 0;
const body = $(document.body);
const tap = $("#tap");
const navbarToggle = $(".navbar-toggler");
const h1 = $("h1");
let buttonArr = $(".button");
const highScore = $("#high-score");
const levelTitle = $(".level-title");
const container = $("#container");
let g = document.getElementById("audio");

const rand = () => Math.trunc(Math.random() * 10) % 4;
let tardis = new Audio("./sounds/TARDIS.mp3");
let wohoo = new Audio("./sounds/wohoo.mp3");
let mobile = false;

if (tap.css("display") !== "none") mobile = true;
// Navbar Styling
navbarToggle.click(navbarToggler);
let grecord = [];
let lvl = 1;
async function flashRand() {
  if (buttonArr.css("pointer-events") === "none")
    buttonArr.css("pointer-events", "auto");
  if (five) await customTimeout(500);
  let b = rand();
  flash(buttonArr, b);
  grecord.push(b);
}

function unsetFive() {
  if (five === true) {
    container.animate(
      { boxShadow: "0 0 0", backgroundColor: "rgba(0,0,0,0)" },
      400
    );
    five = false;
  }
}
function reset() {
  c = 0;
  lvl = 1;
  grecord = [];
  unsetFive();
  gameover = false;
}
function leveler() {
  if (HighScore(lvl)) {
    highScore.text(`HIGH SCORE! ${lvl}`);
    highScore.css({ opacity: 0 });
    highScore.animate({ opacity: 1 });
  }
  h1.text("Level " + lvl);
  unsetFive();
  if (lvl % 5 === 0) {
    five = true;
    wohoo.play();
    h1.text("Level ");
    levelTitle.append(
      `<h1 class="level-title uniqid" class="mt-4" style="color:#3536e6 ; margin:0">${lvl}</h1>`
    );
    $("#uniqid").addClass("lvl", 500);
    container.animate(
      {
        boxShadow: "0px 0px 8px 20px #3536e6",
        backgroundColor: "#775b59",
      },
      {
        duration: 400,
        queue: false,
      }
    );
  }
}
// Main function
function run() {
  body.unbind("keypress");
  leveler();
  flashRand();
  function buttonClick() {
    buttonArr.click((e) => {
      tardis.currentTime = 0;
      tardis.play();
      buttonPressed(e);
      let color = e.target.id;
      let num = colors.findIndex((a) => a === color);
      if (num !== grecord[c]) {
        gameover = true;
        tardis.pause();
        g.currentTime = 0;
        g.volume = 1;
        g.play();
        let text;
        console.log("gameover!");
        if (!mobile) text = "Gameover! Press any key to restart.";
        else text = "Gameover! Tap to restart";
        flashNrestore(body, text, mobile);
        buttonArr.css("pointer-events", "none");
        body.keypress(() => {
          setTimeout(() => {
            reset();
            flashRand();
            body.unbind("keypress");
          }, 800);
        });
        $("#tap").click(() => {
          setTimeout(() => {
            reset();
            flashRand();
            tap.unbind("click");
          });
        });
        return;
      } else {
        if (!num) imgColor(1);
        else if (num === 1) imgColor(2);
        else if (num === 2) imgColor(3);
        else imgColor(4);
        c++;
      }
      if (c >= grecord.length) {
        lvl++;
        setTimeout(() => {
          c = 0;
          if (!gameover) {
            leveler();
            flashRand();
          } else {
            reset();
          }
        }, 1600);
      }
    });
  }
  buttonClick();
}

if (!mobile)
  body.keypress(() => {
    run();
  });
else
  tap.click(() => {
    tap.unbind("click");
    run();
  });

// Button stuff
$("#button-close").hover(
  function () {
    $(this).removeClass("bi-x-circle-fill");
    $(this).addClass("bi-x-circle");
  },
  function () {
    $(this).removeClass("bi-x-circle");
    $(this).addClass("bi-x-circle-fill");
  }
);
// High Scores
HighScore();
