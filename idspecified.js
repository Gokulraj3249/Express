var express =require('express')
var app=express();

app.get('/',function(req,res){
    res.send("This is Get URL")
})

/*app.get('/:id',function(req,res){
    res.send("This id you specified is "+req.params.id)
});

app.get('/things/:name/:id',function(req,res){
    res.send("id: "+req.params.id+" and name: "+req.params.name)
})
*/

app.get('/things/:id([0-9]{3})',function(req,res){
    res.send('id: '+req.params.id);
})

app.get('*',function(req,res){
    res.send('Sorry, this is an invalid URL.');
})

app.listen(8000);