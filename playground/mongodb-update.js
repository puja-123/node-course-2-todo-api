//const MongoClient = require('mongodb').MongoClient;

//console.log(obj);
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)   =>{ 
    if(err)
    {
     return console.log('Unable to connect to mongoDB server');
     }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp')
  
 /* db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5bb5ebfff2ea910d59c86ce7')},
  { 
    $set: {  
        completed: true
       }
   }, {
        returnOriginal: false
   }).then((result) => {
     console.log(result);
   });*/


 db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bb5ee88dc47b10dae3ce8cc')},
  { 
    $set: {  
        name: 'andrew'
   },
    $inc: {
       age: 1
     }
   }, {
        returnOriginal: false
   }).then((result) => {
     console.log(result);
   });
       // client.close();
     });
