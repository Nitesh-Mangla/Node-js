let mysql = require("mysql");
let fs = require("fs");

class MysqlConnection {

  hostName = "localhost";
  userName = "FavcyAdmin";
  password = "AdminFavcy";
  dbName = "favcy_phalcon_widget";
  mysqlInstance = null;
  logPath = "logs/mysql.log";

  constructor() {
    this.mysqlInstance = mysql.createConnection({
      host: this.hostName,
      user: this.userName,
      password: this.password,
      database : this.dbName,
      multipleStatement: true
    });
  }

  getMysqlInstance() {
    if(this.mysqlInstance == null) {
      // there is mysql instance is mull
      console.log("Connection is no established with mysql");
    } else {
      // check mysql Connection is either established or not
      this.mysqlInstance.connect( (err) => {
        // not established then write log and write given error from mysql
        if(err) {
          if(fs.existsSync(this.logPath)) {
            fs.appendFile(this.logPath, err.toString()+"\n", (appendError) => {
              if(appendError) console.log(appendError);
            })
          } else {
            fs.writeFile("logs/mysql.log", err.toString(), (error) => {
              if(error) {
                console.log(error);
              }
            })
          }
        } else {
          console.log("Mysql Connection is established successfully");
        }
      })
    }
  }

  selectQuery(columns = "*", tableName) {
     this.mysqlInstance.query("SELECT "+columns + " from "+tableName, (err, rows, fields) => {
          if(!err) console.log(rows);
          else {
            if(fs.existsSync("logs/selectQuerylog.log")) {
              fs.appendFileSync("logs/selectQuerylog.log", err.toString()+"\n", (error) => {
                if(error) console.log(error);
              })
            } else {
              fs.writeFileSync("logs/selectQuerylog.log", err.toString(), (queryerror) => {
                if(queryerror) console.log(queryerror);
              })
            }
          }
          return rows;
      });
  }

  createRows(tableName, values) {
    this.mysqlInstance.query("insert into " +tableName + "(otp_code, otp_mobile_cc, otp_mobile_num,otp_token, otp_status) VALUES( "+values+" )",
          (err, rows, fields) => {
            if(!err) console.log(rows);
            else {
              if(fs.existsSync("logs/createQueryLog.log")) {
                fs.appendFileSync("logs/createQueryLog.log", err.toString()+"\n", (CreateError) => {
                  if(CreateError) console.log(CreateError);
                })
              } else {
                fs.writeFileSync("logs/createQueryLog.log", err.toString(), (error) => {
                  if(error) console.log(error);
                })
              }
            }
      })
  }
 }
module.exports = MysqlConnection;
