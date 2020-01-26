const puppeteer = require('puppeteer');
console.log("Worker starting...");
;(async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      })

      const page = await browser.newPage()

      await page.goto('https://tux2nux.blogspot.com', {
        waitUntil: ['load', 'networkidle0', 'domcontentloaded']
      })
  console.log("on tux2nux ...");
     await page.waitFor(1000000000)
  console.log("out of tux2nux ...");

     // await browser.close()

    })()
