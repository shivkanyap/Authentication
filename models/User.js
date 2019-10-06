const mongoose =require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')

const userSchema=new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return "invalid email format"
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128

    }
})

const USer=moongoose.model('User',userSchema)
model.exports={
    User
}
