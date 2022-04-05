let events = require("events");
let eventEmmiter = new events();

eventEmmiter.on("hello", (name) => {
  console.log("i hear the event " + name);
});
setTimeout(() => {
    eventEmmiter.emit("hello", 'jack'); //canbe pass an object as a parameter replacint jack
}, 2000);

//i skipped extended events.. should learn in the nxt.