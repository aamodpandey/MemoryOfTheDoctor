export default function flash(arr, id) {
  let e = $(arr[id]);
  let originalColor = e.css("background-color");
  e.animate({ backgroundColor: "#ffffff" }, 400, function () {
    e.animate({ backgroundColor: originalColor }, 400);
  });
}
