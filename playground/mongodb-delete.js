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
  
   /* db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
     console.log(result);
   });*/

  /*   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
     console.log(result);
   });*/

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5bb6016226e87310dc49c2b9")}).then((results) => {
     console.log(JSON.stringify(results,undefined, 2));
   });
       // client.close();
     });
