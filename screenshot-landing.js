const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`file://${__dirname}/index.html`, {
    waitUntil: 'networkidle'
  });
  await page.screenshot({ path: 'screenshots/landing-full.png', fullPage: true });
  console.log('Saved screenshots/landing-full.png');
  await browser.close();
})();
