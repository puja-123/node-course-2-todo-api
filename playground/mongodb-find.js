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
   
db.collection('Users').find({name: 'puja'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined , 2));
   } , (err) => {
     console.log('unable to fetch todos',err);
   });

   // const db = client.db('TodoApp')
   
/*db.collection('Todos').find().count().then((count) => {
      console.log(`Todos count: ${count}`);
   } , (err) => {
     console.log('unable to fetch todos',err);
   });
*/

});
              
