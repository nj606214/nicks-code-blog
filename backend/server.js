const express = require ('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

//when a get request is sent to the /api/posts route, run the command//

app.use('/api/posts', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))

console.log('Hello World')