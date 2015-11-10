export function secondsToMMSS(seconds) {
  var fullSeconds = Math.floor(seconds);
  var minutes = Math.floor(seconds/60);
  var mm = minutes < 10 ? "0"+minutes : minutes;
  var ss = fullSeconds < 10 ? "0"+fullSeconds : seconds;
  return mm + ":" + ss;
}
