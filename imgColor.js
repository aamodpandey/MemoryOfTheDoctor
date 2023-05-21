const d= { 1: "one", 2: "two", 3: "three", 4: "four" };
let classapplied = "";
const img=  $("#img");
export default function imgColor(id) {
    if (d[id] === classapplied) return;
    if (classapplied === "") classapplied = d[id];
    img.addClass(d[id]);
    img.css("opacity", "0.2");
    if (d[id] !== classapplied) {
        img.removeClass(classapplied);
    }
    img.animate({ opacity: 1 }, { duration: 500, queue: false });
    classapplied = d[id];
}
