/**
 * The purpose of this server is to allow the front-end perform an HTTP request.
 * Ignore any implementation details of this file.
 */
const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 5000

const getRandomImage = () => fetch('https://aws.random.cat/meow').then(res => res.json())
app.get('/random-image', (req, res) => getRandomImage().then((data)=> res.json(data)))
app.use(express.static('./public'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
