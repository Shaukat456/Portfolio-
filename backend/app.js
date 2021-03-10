const express =require('express');
const app=express()
const port=80;
const path=require('path')
const Visitor=require('./models/Visistors')



// path.join(__dirname,'')

app.post('/visitors',async (req,res)=>{
 const visitor= new Visitor(req.body);
 const visitorSaved=await visitor.save();
 res.send('thanks mate')
})




app.listen(port,()=>{
    console.log(`listening on PORT ${port}`)
})