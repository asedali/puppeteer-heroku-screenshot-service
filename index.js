  
const express = require('express')
const app = express()
var request = require('request');
const port = process.env.PORT || 3131
const screenshot = require('./screenshot')
screenshot('https://tux2nux.blogspot.com')
var minutes = 10, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 10 minutes check");
  // do your stuff here
  screenshot('https://tux2nux.blogspot.com')
}, the_interval);
app.get('/', (req, res) => res.status(200).json({ status: 'ok' }))

app.get('/screenshot', (req, res) => {
  const url = req.query.url
  ;(async () => {
    const buffer = await screenshot(url)
    res.setHeader('Content-Disposition', 'attachment; filename="screenshot.png"')
    res.setHeader('Content-Type', 'image/png')
    res.send(buffer)
  })()
})

app.listen(port, () => )
const server = app.listen(port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`app listening on port ${port}!`)
    console.log("Example app listening at http://%s:%s", host, port)
  setInterval(function() {
  console.log("I am doing my 10 minutes check");
  // do your stuff here
    request("http://%s:%s", host, port)
  screenshot('https://tux2nux.blogspot.com')
}, the_interval);
});
