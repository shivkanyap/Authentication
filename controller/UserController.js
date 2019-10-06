const express= require('express')
const router=express.Router()
const { User} =require("../models/User")
// router.get()
router.post('/register',function(){
    const body=req.body
    const user=new User(body)
    user.save() //method provided by moongose it return a promise
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })

})



module.exports={
    userRouter:router
}