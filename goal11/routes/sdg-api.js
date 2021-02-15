var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

const uri = 'mongodb+srv://alen_bicanic:KPgZbP7MWt061Quk@cluster1.8ojbw.mongodb.net/Cluster1?retryWrites=true&w=majority'

/* GET users listing. */
router.get('/sdg11.1/:geo', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    y = req.params.geo;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("SDG11").collection("SDG_Goals11");
                collection.find({$and:[{Target:'11.1'},{GeoAreaName:y}]}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 

router.get('/sdg11.5/:geo', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    y = req.params.geo;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("SDG11").collection("SDG_Goals11");
                collection.find({$and:[{Target:'11.5'},{GeoAreaName:y}]}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 

router.get('/sdg11.6/:geo', function (req, res, next) {
     console.log(req.params); //Leggo i parametri passati all'url
     y = req.params.geo;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("SDG11").collection("SDG_Goals11");
                collection.find({$and:[{Target:'11.6'},{GeoAreaName:y}]}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
});



router.get('/sdg11.b/:geo', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
     y = req.params.geo;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundTitle);
        
        function foundTitle(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("SDG11").collection("SDG_Goals11");
                collection.find({ 'Target': '11.b' }).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
}); 








module.exports = router;
