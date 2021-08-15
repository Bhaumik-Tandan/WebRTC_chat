var c = require('mongodb').MongoClient;
    var url = "mongodb+srv://Arishti:18BIT0223@cluster0.bip95.mongodb.net/proj?retryWrites=true&w=majority";
c.connect(url, function(err, db) {
 if (err) throw err;
 var s = db.db("coldb");
 s.collection("col").find().limit(4).toArray(function(err,result) {
 if (err) throw err;
 console.log(result);
 });
});