let server = require("./Server");
let mysqlConnection = require("./Mysql");

let http = new server();
let mysqlConnectionObj = new mysqlConnection();
let mysqlInstance = mysqlConnectionObj.getMysqlInstance();

http.app.get("/favcy-otp", (req, res) => {
  let rows = mysqlConnectionObj.selectQuery("*", "favcy_otp")

  if(rows == null){
    console.log(null);
  } else {
    res.send(rows);
  }
});

http.app.post("/create", (req, res) => {

  let rows = mysqlConnectionObj.createRows("favcy_otp", "620222, 91, 8826444299 ,'dfeawcmhjyqrwtozisttbsjmodvvulkx','INACTIVE'");

    if(!rows) {
      console.log(rows);
    }
})
