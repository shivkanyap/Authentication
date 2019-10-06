const express=require('express')
const {mongoose}=require('./config/database')
const {userRouter}=require('./app/controllers/UserControllers')

const app=express()
const port=3000

app.use(express.json()) //this should be the fast line of code
app.use('/users',userRouter)
// app.use(express.json())

app.listen(port,function(){
    console.log('listening on port',port)
})

