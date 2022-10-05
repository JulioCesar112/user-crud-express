const express = require('express')
const app = express()

const userRouter = require('./users/users.router')

app.use(express.json())

app.get('/', (req,res) => {
  console.log(req.method)
  res.status(200).json({mesage:'OK'})
})

app.use('/',userRouter)

app.listen(8000, () => {
  console.log('server started at post 8000')
})