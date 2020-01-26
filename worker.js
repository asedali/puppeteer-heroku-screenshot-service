const puppeteer = require('puppeteer');
console.log("Worker starting...");
var url='https://tux2nux.blogspot.com';
;(async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      });

      const page = await browser.newPage();
  console.log("go to tux2nux ...");
      await page.goto(url, {
        waitUntil: ['load', 'networkidle0', 'domcontentloaded']
      });
  console.log("on tux2nux ...");
     await page.waitFor(1000000000);
  console.log("out of tux2nux ...");

     // await browser.close();

    })();
