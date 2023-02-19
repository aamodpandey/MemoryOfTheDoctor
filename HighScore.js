export default function HighScore(score) {
    let currHigh = localStorage.getItem("high");
    if (Number(currHigh) < score) {
        localStorage.setItem("high", score);
        return true;
    }
    return false;
}
