const puppeteer = require('puppeteer');
console.log("Worker starting...");
setInterval(function() {
      console.log("I am UP...");
},10000);
(async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      });
      
  const page = await browser.newPage();
  console.log("go to tux2nux ...");
      
      
      page.setDefaultNavigationTimeout(0);
      page.setDefaultTimeout(0);
      
      
  await page.goto('https://tux2nux.blogspot.com');
  console.log("on tux2nux ...");
      for (;;) {
  const innerText = await page.evaluate(() => document.querySelector('p').innerText);
  console.log(innerText);
            await page.waitFor(10000);
            }
 // await page.waitFor(1000000000);
  console.log("out of tux2nux ...");
 // browser.close();
})();
