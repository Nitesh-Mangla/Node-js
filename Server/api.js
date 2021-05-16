const axios = require("axios");
const BASE_URL = "https://api.binance.com/api/v1/ticker/24hr";
module.exports = {
  response :() => axios({
    method:"GET",
    url: BASE_URL,
  });
  console.log(response);
};
