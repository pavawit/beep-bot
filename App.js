const express = require('express')
const middleware = require('@line/bot-sdk').middleware

const app = express()

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
}

app.post('/webhook', middleware(config), (req, res) => {
  req.body.events // webhook event objects
  req.body.destination // user ID of the bot (optional)
  // TODO
})

app.listen(8080);
