// library
let EventEmitter = require("events").EventEmitter;
function GetCount(maxCount) {
  let e = new EventEmitter();
  let count = 0;
  process.nextTick(() => {
    e.emit("start");
    let t = setInterval(() => {
      if (count < maxCount) {
        if (count == 8) {
          e.emit("error", count);
          clearInterval(t);
        } else {
          e.emit("count", ++count);
        }
      } else if (count == maxCount) {
        e.emit("end", count);
        clearInterval(t);
      }
    }, 500);
  });
  return e;
}

// subscriber
let evt = GetCount(10);
evt.on("start", () => {
  console.log("Counting started..");
});
evt.on("count", currCount => {
  console.log("Current count : " + currCount);
});
evt.on("error", currCount => {
  console.log("Ended with err : " + currCount);
});
evt.on("end", currCount => {
  console.log("Ended with Current count : " + currCount);
});
console.log("Program Ended !");
