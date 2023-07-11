// library
let EventEmitter = require("events").EventEmitter;
function GetCount(maxCount) {
  let e = new EventEmitter();
  process.nextTick(() => {
    e.emit("count", 1);
  });
  return e;
}

// subscriber
let evt = GetCount(10);
evt.on("count", currCount => {
  console.log("Current count : " + currCount);
});
