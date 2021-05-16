const EXPRESS = require("express");
const HTTP = require("http");

class Server {
  app = null;
  port = 80;

  constructor() {
    if(Server.getInstance() == null) {
        this.app = EXPRESS();
        HTTP.createServer(this.app).listen(this.port, () => {
            console.log("New connection is established with port no "+this.port);
        });
    }
  }

  static getInstance() {
    return this.app;
  }
}

module.exports = Server;
