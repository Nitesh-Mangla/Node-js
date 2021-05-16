let server = require("./Server");
let mysqlConnection = require("./Mysql");

let http = new server();
let mysqlConnectionObj = new mysqlConnection();
let mysqlInstance = mysqlConnectionObj.getMysqlInstance();

http.app.get("/user-info", (req, res) => {
  let rows = mysqlConnectionObj.selectQuery("*", "user_info")

  if(rows == null){
    console.log(null);
  } else {
    res.send(rows);
  }
});
