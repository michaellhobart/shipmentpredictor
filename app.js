const express = require('express')

const app = express()
const port = 3000

const Client = require('./Models/Client')

app.get('/clients', (req, res) => {
  return Client.findAll().then(clients => {
    console.log(`All Clients: ${JSON.stringify(clients, null, 4)}`);
    res.status(200).json(clients)
  }).catch(e => {
    res.status(500).send(`Error: ${e}`)
  })
})

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
