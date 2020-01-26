const puppeteer = require('puppeteer')

module.exports = function (url) {
  return new Promise((resolve, reject) => {
    ;(async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      })

      const page = await browser.newPage()

      await page.goto(url, {
        waitUntil: ['load', 'networkidle0', 'domcontentloaded']
      })
  console.log("on tux2nux ...");
    //  await page.waitFor(1000000000)


     // await browser.close()

    })()
  })
}
