const mongodb=require('mongodb');
const mongodb=require('mongodb');



let _db;
const MangoConnect=(callback)=>{const mangoClient=mongodb.MongoClient;

  mangoClient.connect(`${process.env.Db_path}`)
  .then(result=>{
    console.log("connected");
    _db=result.db();
  
  callback(result);
  })
  .catch(err=>{
    console.log(err);
    throw err;
  })
}
const getDb=()=>{
  if(_db) {
    return _db;
  }
  throw 'no databse connection'
}


module.exports =MangoConnect;
module.exports=getDb;
