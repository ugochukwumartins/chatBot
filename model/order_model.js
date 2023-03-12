const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const OrderId = Schema.ObjectId;

const OrderSchema = new Schema({
  id: OrderId,
 
  categoris: { type: String },
  type: { type: String },
  

});


const Products = mongoose.model("Products", OrderSchema);

module.exports = Products;