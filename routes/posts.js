
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var config=require("../config")
var url=config.mongoURI;



module.exports = function(router) {

    router.post("/addpost", (req, res1) => {
     



        MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },function(err, db) {
          if (err) throw err;
          var dbo = db.db("helostranger");
          var myobj = {topic: req.body.topic,name: req.body.name,message: req.body.message,verify:"yes"};
          dbo.collection("Blog").insertOne(myobj, function(err, res1) {
            if (err) throw err;
            console.log("1 document inserted");
          
           
           
          }
          )})
          res1.json("submitted")
          })
        

          router.post("/readblog", (req, res) => { 



            MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              },function(err, db) {
                if (err) throw err;
                var dbo = db.db("helostranger");
          
                dbo.collection('Blog').aggregate([
                  { $match : {verify:"yes"}},   {   
                    $project:{
        
                      name: 1,
                      topic: 1,
                message: 1,
             
              
                    } 
                }
                  ]).toArray(function(err, result) {
                  if (err) throw err;
                  console.log(result);
                  
             res.json(result)
                 
                }
        
        
        
                )})






            })









            router.post("/readdetail", (req, res) => { 



                MongoClient.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  },function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("helostranger");
              
                    dbo.collection('Blog').aggregate([
                      { $match : {_id:ObjectId( req.body.id)}},   {   
                        $project:{
            
                          name: 1,
                          topic: 1,
                    message: 1,
                 
                  
                        } 
                    }
                      ]).toArray(function(err, result) {
                      if (err) throw err;
                      console.log(result);
                      
                 res.json(result)
                     
                    }
            
            
            
                    )})
    
    
    
    
    
    
                })
    






};