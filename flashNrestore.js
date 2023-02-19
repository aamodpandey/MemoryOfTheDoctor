import setAudioImg from "./setAudioImg.js";
const colour=$("#color");
const highScore=$("#high-score");
const h1=$("h1");
let interiortext = h1.html();
export default async function flashNrestore(body, newtext, mobile) {
    highScore.fadeOut();
    colour.addClass("transit");
    colour.css("background-color", "rgba(255, 0, 0, 0.5)");
    if (mobile) {
        console.log(interiortext)
        h1.html(interiortext);
        $('#tap').text(newtext);
        $("#tap").css("max-width", "1000px");
    }
    if (!mobile) {
        h1.text(newtext);
        body.keypress(() => {
            setAudioImg();
            body.unbind("keypress");
        });
    } else {
        $("#tap").click(() => {
            setAudioImg();
            body.unbind("click");
        });
    }
}