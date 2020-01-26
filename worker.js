

const puppeteer = require('puppeteer');
console.log("Worker starting...");
(async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      });
  const page = await browser.newPage();
  console.log("go to tux2nux ...");
  await page.goto('https://tux2nux.blogspot.com');
  console.log("on tux2nux ...");
  const textContent = await page.evaluate(() => document.querySelector('p').textContent);
  const innerText = await page.evaluate(() => document.querySelector('p').innerText);

  console.log(textContent);
  console.log(innerText);

 await page.waitFor(10000000000);
  console.log("out of tux2nux ...");
  browser.close();
})();
