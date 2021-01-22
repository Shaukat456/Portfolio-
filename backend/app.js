const express =require('express');
const app=express()
const port=80;
const path=require('path')

// path.join(__dirname,'')

app.post('/',async (req,res)=>{
    // const visitor=await 
})




app.listen(port,()=>{
    console.log(`listening on PORT ${port}`)
})