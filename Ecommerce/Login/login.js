let server = require("../Server");
let axios = require("axios");
let serverObj = new server();

let gusetToken = null;
const GUEST_TOKEN_BASE_URL = "https://staging.favcy.com//api/2.0/auth-token?parent_id=0&start_point=something";
const SEND_OTP_BASE_URL = 'https://staging.favcy.com//api/3.1/otp/send';
let http = serverObj.app;

http.get("/get-guest-token", (req, res) => {
  axios.post(GUEST_TOKEN_BASE_URL,{}, {
    headers:{
      "accept" : 'application/json',
       'app-id': 'pxqwndcnko'
    }
  })
  .then( (response) => {
    if(response.data.status == 201) {
        res.send(response.data)
        this.gusetToken = response.data.data.token;
    }
  }).catch( (error) => {
    res.send(error.data);
  })
});

http.post('/send-otp', (req, res) => {
  axios.post(SEND_OTP_BASE_URL, {
      "otp_mobile_num":"9560494963",
      "otp_mobile_cc":91
  },
  {
    headers:{
      "accept" : 'application/json',
      "auth-token":this.gusetToken
    }
  }).then( (response) => {
    console.log(response.data);
  }).catch( (error) => {
    console.log(error.response);
    res.send(error.response.data)
  })
});
