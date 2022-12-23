const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('wichtel-post.html', { root: path.join(__dirname, '/public') });
})

app.listen(port, () => {
  console.log(`Wichtelpost is showing on port ${port}`)
})