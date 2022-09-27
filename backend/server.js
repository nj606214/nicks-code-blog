const express = require ('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

//when a get request is sent to the /api/posts route, run the command//

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/posts', require('./routes/postRoutes'))
  
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

console.log('Hello World') 