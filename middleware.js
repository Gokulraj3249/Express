const express=require("express");
const app =express()

const middlewarefunction=function(req,res,next){
    console.log('We are using middleware')
    next();
}

// app.use(middlewarefunction)

app.get('/',middlewarefunction,(req,res)=>{
    res.send('Inside the / route')
})

app.get('/no-middleware',(req,res)=>{
    res.send('Inside the /no middleware route')
})

app.listen(3000,()=>{
    console.log('Server started')
})