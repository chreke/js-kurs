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

test("fetch a random dad joke", async () => {
  const joke = `Did you hear about the restaurant on the moon?
    Great food, no atmosphere!`;
  const getMock = axios.get.mockResolvedValue({ data: joke });
  dadjoke({ trigger: "button", target: "#target" });
  $("button").trigger("click");
  expect(axios.get).toBeCalled();
  // NB: The mocked call is still async, so we have to await the promise here
  // to give the success callback time to run
  await getMock();
  expect($("#target").html()).toBe(joke);
});
