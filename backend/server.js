const express = require ('express')
const dotenv = require('dotenv').config()
const port = 8000 //process.env.PORT//
const connectDB = require('./config/db')
const cors = require("cors")
const {errorHandler} = require('./middleware/errorMiddleware')


//connect the database to the server//
connectDB()


//initialize the app as express object
const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))


//tell the app to accept incoming and outgoing req, res as json
app.use(express.json())
app.use(express.urlencoded({extended: false})) //?//

//not sure what this does, i think its telling the route it should look for//
app.use('/', require('./routes/postRoutes'))

//make sure the app utulizes the error handler functions//
app.use(errorHandler)

//tell the app what port to listen on
app.listen(port, () => console.log(`Server started on port ${port}`))

console.log('Hello World') 