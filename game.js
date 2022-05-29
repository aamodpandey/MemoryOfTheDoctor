colors = ["green", "red", "yellow", "blue"];
function doo() {
  no = Math.trunc(Math.random() * 10) % 4;
  return no;
}
arr = $(".btnn");
function flash(arr, id) {
  let e = $(arr[id]);
  e.fadeOut();
  e.fadeIn();
}
function oveflowAdjust() {
  dheight = $(document).height();
  $(".color").height(dheight);
  $(".img").height(dheight);
  $(".backimg").height(dheight);
}
classapplied = "";
d = { 1: "one", 2: "two", 3: "three", 4: "four" };
function imgColor(id) {
  if (d[id] == classapplied) return;
  console.log("imgcolr called");
  if (classapplied == "") classapplied = d[id];
  $(".img").addClass(d[id]);
  $(".img").css("opacity", "0");
  if (d[id] != classapplied) {
    console.log("inside", classapplied, d[id]);
    $(".img").removeClass(classapplied);
  }
  $(".img").animate({ opacity: 1 }, 1000);
  $("h1").animate({ color: "#FFD700" }, { duration: 1000 });
  classapplied = d[id];
}
origtext = "Level 1";
function flashNrestore(newtext) {
  let bgcolor = $("body").css("background-color");
  $("body").animate(
    {
      backgroundColor: "red",
    },
    500
  );
  $("h1").text(newtext);
  oveflowAdjust();
  $("body").keypress(() => {
    $("h1").text(origtext);
    $("body").animate({ backgroundColor: bgcolor }, 500);
    $(".color").removeClass("warning");
    $("body").unbind("keypress");
  });
}
let grecord = [];
lvl = 1;
function refactor() {
  c = 0;
  function repetitive() {
    b = doo();
    flash(arr, b);
    grecord.push(b);
  }
  function leveler() {
    $("h1").text("Level " + lvl);
  }
  $("body").keypress(() => {
    $("body").unbind("keypress");
    repetitive();
    leveler();
    function buttonPressed(e) {
      $(e.target).append('<div class="pressed" style="opacity:0"> </div>');
      setTimeout(() => {
        $(".pressed").remove();
      }, 1200);
      $(".pressed").animate({ opacity: 1 }, 700);
      $(".pressed").animate({ opacity: 0 }, 500);
    }
    function checkClick() {
      $(".btnn").click((e) => {
        let audio = new Audio("./sounds/TARDIS.mp3");
        audio.play();
        buttonPressed(e);
        color = e.target.id;
        num = colors.findIndex((a) => {
          return a == color;
        });
        if (num != grecord[c]) {
          $(".color").addClass("warning");
          h1 = "Gameover! Press any key to restart.";
          (lvl = 0), (c = 0);
          grecord = [];
          oveflowAdjust();
          flashNrestore(h1);
          $("body").keypress(() => {
            setTimeout(() => {
              repetitive();
              $("body").unbind("keypress");
            }, 800);
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
            oveflowAdjust();
            repetitive();
          }, 1600);
        }
      });
    }
    checkClick();
  });
}
refactor();
