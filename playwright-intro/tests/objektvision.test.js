const { test, expect } = require("@playwright/test");

// test.use({ launchOptions: { slowMo: 50 } });

test.describe("Search", () => {
  test("Search without input", async ({ page }) => {
    await page.goto("https://objektvision.se/");
    await page
      .locator("#search-buttoncontainer__top .btn-estate-search")
      .click();
    await expect(page).toHaveURL(/lediga_lokaler/);
  });

  test("Search for 'Bromma'", async ({ page }) => {
    await page.goto("https://objektvision.se/");
    await page.locator("#search__geo-input").type("Bromma");
    await page.locator("li[data-areatype]").first().click();
    await page
      .locator("#search-buttoncontainer__top .btn-estate-search")
      .click();
    await expect(page).toHaveURL(/lediga_lokaler\/stockholm\/bromma/);
  });
});
