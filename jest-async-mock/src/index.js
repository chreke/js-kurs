import $ from "jquery";

export const dadjoke = ({ trigger, target }) => {
  $(trigger).on("click", (_e) => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { "User-Agent": "Fetch", Accept: "text/plain" },
    })
      .then((response) => response.text())
      .then((body) => {
        $(target).html(body);
      });
  });
};
