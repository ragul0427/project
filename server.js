//module import
var express=require('express')
var app=express()
//or
//var app=require('express')()
//use local path
var mongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017"

//inbuilt express functions
app.get("/insertfun",function(req,res)
{
    var rno1=parseInt(req.query["t1"])
    var sname1=req.query["t2"]
    var mark1=parseInt(req.query["t3"])

    res.send("<h1>"+"Record inserted succefully:"+rno1+" "+sname1+" "+mark1+"</h1>")//show data in browser

    mongoClient.connect(url,(err,db)=>{
        if(err) throw err

        var dbo=db.db("student")
        var mydetails={
            rno:rno1,
            sname:sname1,
            mark:mark1
        }
        dbo.collection("dis").insertOne(mydetails,(err,res)=>{
            if(err) throw err
                console.log("row inserted succesfully")
            db.close()
        })
    })
})


app.get('/updatefun',function(req,res){
    var mark1=parseInt(req.query['t1'])
    var mark2=parseInt(req.query['t2'])


mongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var dbo=db.db("student")
    var oldvalue={
        mark:{$eq:mark1}
    }
    var newvalue={
        $set:{mark:mark2}
    }

    dbo.collection("dis").updateMany(oldvalue,newvalue,(err,res1)=>{
        if(err) throw err
        console.log("update success")

        if(res1.modifiedCount>0)
        res.send("update successfully:"+res1.modifiedCount)
        else
        res.send("not update")
        db.close()
    })
})
})


app.get('/searchfun',function(req,res){
    var rno1=parseInt(req.query["t1"]);
    console.log("my no:",rno1)
 mongoClient.connect(url,(err,db)=>{
     if(err) throw err
     var dbo=db.db("student")
 
     dbo.collection("dis").find({rno:rno1}).sort({sname:-1}).toArray((err, res1)=>{
         if(err) throw err
        /* console.log("update success")
         console.log(res1[0].sname)
         console.log(res1[1].sname)
         console.log(res1[2].sname)
         console.log(res1[3].sname)
         console.log(res1)
         res.send(res1)*/
 
         var totalrows=res1.length;
         console.log("total",totalrows)
         if(totalrows>0)
         {
         var ans="<table border='2'><tr><th>roll no</th><th>Name</th><th>Mark</th></tr>"
         for(i=0;i<totalrows;i++)
         {
             if(res1[i]['rno']===undefined)
             ans+=`<tr><td>${res1[i]['sno']}</td><td>${res1[i]['sname']}</td><td>${res1[i]['mark']}</td></tr>`
             else
             ans+=`<tr><td>${res1[i]['rno']}</td><td>${res1[i]['sname']}</td><td>${res1[i]['mark']}</td></tr>`
         }
        ans+="</table>"
        res.send("result:"+ans)
     }
     else{
         res.send("<h1><center>register name not found....Enter volid name.....</h1>")
     }
         db.close()
     })
 })
 })


var server=app.listen(5678,function(){
    var port=server.address().port
    console.log("app listening..........",port)
    
})

