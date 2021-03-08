const mongoose=require('mongoose')


const VisitorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Pdiscuss:{
        type:String,

    }
})


const Visitor=mongoose.model("Visitor",VisitorSchema)



module.exports=Visitor;