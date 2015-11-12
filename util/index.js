export function secondsToMMSS(seconds) {
  var fullSeconds = Math.floor(seconds);
  var minutes = Math.floor(seconds/60);
  var cappedSeconds = fullSeconds - minutes * 60;
  var mm = minutes < 10 ? "0"+minutes : minutes;
  var ss = cappedSeconds < 10 ? "0"+cappedSeconds : cappedSeconds;
  return mm + ":" + ss;
}
