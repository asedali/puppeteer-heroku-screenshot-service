const express = require('express')
const app = express()
const port = process.env.PORT || 3131
const screenshot = require('./screenshot')

app.get('/', (req, res) => res.status(200).json({ status: 'new comment on ' }))
app.get('/m', (req, res) {
        res.sendFile('/mi.html');
        })
app.get('/url', (req, res) => {
  const url = req.query.url
  ;(async () => {
    const buffer = await screenshot(url)
    res.setHeader('Content-Disposition', 'attachment; filename="screenshot.png"')
    res.setHeader('Content-Type', 'image/png')
    res.send(buffer)
  })()
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
