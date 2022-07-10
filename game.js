colors = ["green", "red", "yellow", "blue"];
five = false;
function doo() {
  no = Math.trunc(Math.random() * 10) % 4;
  return no;
}
let tardis = new Audio("./sounds/TARDIS.mp3");
let wohoo = new Audio("./sounds/wohoo.mp3");
mobile = false;
function customTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

if ($(".tap").css("display") != "none") mobile = true;
const mar = $(".navbar-brand").css("margin-bottom");
$(".navbar-toggler").click(() => {
  $(".navbar-toggler").fadeOut({ duration: 200 });
  if ($(".navbar-toggler").hasClass("puttoend")) {
    $(".navbar-brand").animate(
      {
        "margin-bottom": mar,
      },
      {
        duration: 200,
      }
    );
    $(".navbar-toggler").removeClass("puttoend", 0);
    $(".navbar-toggler").fadeIn({ duration: 600 });
  } else {
    $(".navbar-toggler").addClass("puttoend", 0);
    $(".navbar-brand").animate(
      {
        "margin-bottom": "-2px",
      },
      {
        duration: 200,
      }
    );
  }
  $(".navbar-toggler").fadeIn({ duration: 400 });
});
arr = $(".btnn");
function flash(arr, id) {
  let e = $(arr[id]);
  e.fadeOut();
  e.fadeIn();
}

classapplied = "";
d = { 1: "one", 2: "two", 3: "three", 4: "four" };
function imgColor(id) {
  if (d[id] == classapplied) return;
  if (classapplied == "") classapplied = d[id];
  $(".img").addClass(d[id]);
  $(".img").css("opacity", "0.5");
  if (d[id] != classapplied) {
    $(".img").removeClass(classapplied);
  }
  $(".img").animate({ opacity: 1 }, 1000);
  $("h1").animate({ color: "#FFD700" }, { duration: 1000 });
  classapplied = d[id];
}
origtext = "Level 1";
async function flashNrestore(newtext) {
  async function funnyfun() {
    $("#audio").animate({ volume: 0.0 }, 1500);
    setTimeout(() => {
      document.getElementById("audio").pause();
    }, 1500);
    $(".tap").css("max-width", "275px");
    $("h1").text(origtext);
    $(".color").css("background-color", "");
    dum = $(".img").attr("class").split(/\s+/);
    $(".img").removeClass(dum[1]);
    $(".img").css("background-image", "");
  }
  let bgcolor = $("body").css("background-color");
  $(".color").addClass("transit");
  $(".color").css("background-color", "rgba(255, 0, 0, 0.5)");
  if (mobile) {
    $("h1").html(interiortext);
    $("h1 button").text(newtext);
    $(".tap").css("max-width", "1000px");
  }
  if (!mobile) {
    $("h1").text(newtext);
    $("body").keypress(() => {
      funnyfun();
      $("body").unbind("keypress");
    });
  } else {
    $("h1 button").click(() => {
      funnyfun();
      $("body").unbind("click");
    });
  }
}
let grecord = [];
lvl = 1;
function refactor() {
  c = 0;
  async function repetitive() {
    if (five) {
      await customTimeout(500);
    }
    b = doo();
    flash(arr, b);
    grecord.push(b);
  }
  interiortext = $("h1").html();
  function leveler() {
    $("h1").text("Level " + lvl);
    if (five == true) {
      $(".container").animate(
        { boxShadow: "0 0 0", backgroundColor: "rgba(0,0,0,0)" },
        400
      );
      five = false;
    }
    if (lvl % 5 == 0) {
      five = true;
      wohoo.play();
      level = $("h1").text();
      level = level.slice(6);
      $("h1").text("Level ");
      $(".level-title").append(
        `<h1 class="uniqid level-title" class="mt-4" style="color: rgb(255, 215, 0); margin:0">${lvl}</h1>`
      );
      $(".uniqid").addClass("lvl", 500);
      $(".container").animate(
        {
          boxShadow: "0px 0px 8px 20px #ff4507",
          backgroundColor: "#ffc107",
        },
        {
          duration: 400,
          queue: false,
        }
      );
    }
  }

  function run() {
    $("body").unbind("keypress");
    repetitive();
    leveler();
    function buttonPressed(e) {
      const lrand = Math.floor(Math.random() * 1000);
      const cursy = `${lrand} pressed`;
      $(e.target).append(`<div class='${cursy}' style="opacity:0"> </div>`);
      setTimeout(() => {
        $(`.${lrand}`).remove();
      }, 1200);
      $(`.${lrand}`).animate({ opacity: 1 }, 700);
      $(`.${lrand}`).animate({ opacity: 0 }, 500);
    }
    function checkClick() {
      $(".btnn").click((e) => {
        tardis.currentTime = 0;
        tardis.play();
        buttonPressed(e);
        color = e.target.id;
        num = colors.findIndex((a) => {
          return a == color;
        });
        if (num != grecord[c]) {
          tardis.pause();
          let g = document.getElementById("audio");
          g.currentTime = 0;
          g.volume = 1;
          g.play();
          if (!mobile) h1 = "Gameover! Press any key to restart.";
          else h1 = "Gameover! Tap to restart";
          (lvl = 0), (c = 0);
          grecord = [];
          flashNrestore(h1);
          $("body").keypress(() => {
            setTimeout(() => {
              repetitive();
              $("body").unbind("keypress");
            }, 800);
          });
          $(".tap").click(() => {
            setTimeout(() => {
              repetitive();
              $(".tap").unbind("click");
            });
          });
          return;
        } else {
          switch (num) {
            case 0:
              imgColor(1);
              break;
            case 1:
              imgColor(2);
              break;
            case 2:
              imgColor(3);
              break;
            case 3:
              imgColor(4);
          }
          c++;
        }
        if (c >= grecord.length) {
          lvl++;
          setTimeout(() => {
            c = 0;
            leveler();
            repetitive();
          }, 1600);
        }
      });
    }
    checkClick();
  }

  if (!mobile)
    $("body").keypress(() => {
      run();
    });
  else
    $(".tap").click(() => {
      $(".tap").unbind("click");
      run();
    });
}
refactor();
// Button stuff
$(".btnn-close").hover(
  function () {
    $(this).removeClass("bi-x-circle-fill");
    $(this).addClass("bi-x-circle");
  },
  function () {
    $(this).removeClass("bi-x-circle");
    $(this).addClass("bi-x-circle-fill");
  }
);
