/**
 * @jest-environment jsdom
 */

const axios = require("axios");
const $ = require("jquery");
const { dadjoke } = require("./index.js");

jest.mock("axios");

beforeEach(() => {
  document.body.innerHTML = `
    <div id="target">foo</div>
    <button>OK</button>
  `;
});

test("fetch a random dad joke", () => {
  const joke = `Did you hear about the restaurant on the moon?
    Great food, no atmosphere!`;
  axios.get.mockImplementation(() => ({
    then: (cb) => cb({ data: joke }),
  }));
  dadjoke({ trigger: "button", target: "#target" });
  $("button").trigger("click");
  expect(axios.get).toBeCalled();
  expect($("#target").html()).toBe(joke);
});
