const express =require('express')
const app=express();

// const middlewareFunction =function(req,res,next){
//     const random =(min,max)=> Math.floor(Math.random() * (max -min))+min ;
//     const isAuthenticated =random(0,2);
//     if(isAuthenticated)
//          next();
//     else 
//         res.send('User is not authorized')
// };

const middlewareFunction =async function(req,res,next){
    const random =(min,max)=> Math.floor(Math.random() * (max -min))+min ;
    let isAuthenticated;
    await setTimeout(()=>{
        isAuthenticated = random(0,2);
        if(isAuthenticated)
        next();
    else 
        res.send('User is not authorized')
    },3000);
};



app.get('/',middlewareFunction,(req,res)=>{
    console.log('Inside the /route');
    res.send("Route hit");
});

app.get('/no-middeleware',(req,res)=>{
    console.log('inside the /no-middleware route');
    res.send('Route hit')
});

app.listen(3000,()=>{
    console.log('Server started');
});