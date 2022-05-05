const $ = require("jquery");
const axios = require("axios");

const dadjoke = ({ trigger, target }) => {
  $(trigger).on("click", (_e) => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "text/plain" },
      })
      .then((response) => {
        $(target).html(response.data);
      });
  });
};

module.exports = { dadjoke };
