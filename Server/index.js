const express = require("express");
let app = express();
const events = require("events");
const http = require("http");

const server = http.createServer(app);
let eventEmitter =  new events.EventEmitter();

app.get("/",function(req, res) {
  res.send("event fired");
    eventEmitter.emit("connected", "welcome to new connection");
});

eventEmitter.on("connected", function(data) {
  console.log(data);
})
server.listen("3000", function() {
  console.log("Sever Listening 3000 post");
})
