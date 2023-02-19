const img=  $("#img");
const h1=$("h1");
const colour=$("#color");
const tap=$("#tap")
let origtext = "Level 1";

export default async function setAudioImg() {
    $("#audio").animate({ volume: 0.0 }, 1500);
    setTimeout(() => {
        document.getElementById("audio").pause();
    }, 1500);
    tap.css("max-width", "275px");
    h1.text(origtext);
    colour.css("background-color", "");
    let appliedClass = img.attr("class");
    img.removeClass(appliedClass);
    img.css("background-image", "");
}