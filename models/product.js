const mangoconnect= require('../util/database').getDb;
class Product{

  constructor(title,price,description,imageURl){

    this.title=title;
    this.price=price;
    this.description=description;
    this.imageURl=imageURl

  }
  save(){
    const db=getDb();
    return db.collection('products').insertOne(this).then((result)=>{
console.log(result);
    })
    .catch((err)=>{

    });
  }
}

module.exports = Product;
