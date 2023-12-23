const getDb = require('../util/database').getDb;
const mongo=require('mongodb')

class User{
   constructor( id,email,password ,admin){
    this._id=id,
    this.email=email,
    this.password=password
    this.admin=admin
   }
   save(){
     const db=getDb();
     db.collection('Users').insertOne(this);
   }
   static findById(uId){
   const  db= getDb();

   db.collection('Users').findOne({_id:new mongo.ObjectId(uId)});
   }
}

module.exports = User;
