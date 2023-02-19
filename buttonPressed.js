export default function buttonPressed(e) {
    const lrand = Math.floor(Math.random() * 1000);
    $(e.target).append(`<div class="pressed" id='${lrand}' style="opacity:0"> </div>`);
    const lrandSelect=$(`#${lrand}`);
    setTimeout(() => {
        lrandSelect.remove();
    }, 1200);
    lrandSelect.animate({ opacity: 1 }, 700);
    lrandSelect.animate({ opacity: 0 }, 500);
}