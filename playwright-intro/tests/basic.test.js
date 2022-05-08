const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("https://example.com/");
  await expect(page).toHaveTitle("Example Domain");
  const header = page.locator("h1");
  await expect(header).toHaveText("Example Domain");
});
