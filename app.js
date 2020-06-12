const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : true }))

const router = require('./routes')
app.use(router)

app.listen(port, (req, res) => {
    console.log('Listening app on port, ', port)
})