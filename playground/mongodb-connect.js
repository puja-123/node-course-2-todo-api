//const MongoClient = require('mongodb').MongoClient;

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)   =>{ 
    if(err)
    {
     return console.log('Unable to connect to mongoDB server');
     }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp')
   /* db.collection('Todos').insertOne({
              text: 'Something to do',
              completed : 'false'
   },(err,result) => {
         if(err)
        {
          return console.log('unable to insert todo',err);
      }
     console.log(JSON.stringify(result.ops ,undefined, 2));
   });*/

    /*  db.collection('Users').insertOne({
             
               name: 'puja',
               age:21,
          location: 'Burdwan'
         },(err,result) => {
            if(err)
             {
                 return console.log('unable to insert user',err);
          }
            console.log(result.ops[0]._id.getTimestamp());
      });*/  
        client.close();
     });
