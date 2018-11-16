const axios = require("axios");

const shanghai = async () => {
  try {
    return await axios.get(
      "http://api.waqi.info/feed/shanghai/?token=540357807852875cbb3599b69413b6996cbb1fd8"
    );
  } catch (error) {
    console.error(error);
  }
};

const getPm = async () => {
  const pm = await shanghai();

  if (pm.data.data.iaqi.pm25) {
    console.log(
      `Fine particulate matter (pm 2.5) of Shanghai is ${
        pm.data.data.iaqi.pm25.v
      } micrograms`
    );
  }
};
getPm();
