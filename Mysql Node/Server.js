let express = require("express");
let http = require("http");

class Server {
  app;
  port = 3000;

  constructor() {
    if(this.app == null ){
      this.app = express();
      http.createServer(this.app).listen(this.port, () => {
        console.log("Connect is establish with server and port successfully"+this.port);
      });
    }
  }
}

module.exports = Server;
