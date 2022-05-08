const { test, expect } = require("@playwright/test");


const BASE_URL = "https://objektvision.se";

test.describe("Search", () => {
  test("Search without input", async ({ page }) => {
    await page.goto(BASE_URL);
    await page
      .locator("#search-buttoncontainer__top .btn-estate-search")
      .click();
    await expect(page).toHaveURL(/lediga_lokaler/);
  });

  test("Search for 'Bromma'", async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator("#search__geo-input").type("Bromma");
    await page.locator("li[data-areatype]").first().click();
    await page
      .locator("#search-buttoncontainer__top .btn-estate-search")
      .click();
    await expect(page).toHaveURL(/lediga_lokaler\/stockholm\/bromma/);
  });
});

test.describe("Logged in", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator(".login-link.nav-link").first().click();
    await page.locator("#Username").fill("ekeroth.christoffer@gmail.com");
    await page.locator("#Password").fill("supersecret123");
    await page.locator('#login-form-holder button[type="submit"]').click();
  });

  test("Watch for search results", async ({ page }) => {
    await page.goto(`${BASE_URL}/lediga_lokaler/stockholm/bromma`);
    await page.locator("text=Bevaka sökning").click();
    await page.locator("text=Spara sökning").click();
    await expect(page.locator("text=Bevakad sökning")).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/bevakningar`);
    let watchCount = (await page.$$(".icon-trash")).length;
    while (watchCount) {
      await page.locator(".icon-trash").click();
      watchCount--;
    }
  });
});
