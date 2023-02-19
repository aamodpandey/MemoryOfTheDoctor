export default function flash(arr, id) {
    let e = $(arr[id]);
    e.fadeOut();
    e.fadeIn();
}