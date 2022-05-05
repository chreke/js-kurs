import $ from "jquery";
import axios from "axios";

export const dadjoke = ({ trigger, target }) => {
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
