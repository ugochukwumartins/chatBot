const mongoose = require("mongoose");

require("dotenv").config();
const ordermodel = require("./model/order_model");

const Connection_Url= process.env.MONGO_DB_CONNECTION_URL;

let orderData;

function connectToDb(){
    mongoose.connect(Connection_Url);
    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB Successfully");
        // ordermodel.find({}).
        // then((orders)=>{
        //     console.log(orders)
          
          
        // }).catch((e)=>{console.log(e)})
        
    });

    mongoose.connection.on("error", (err) => {
        console.log("An error occurred while connecting to MongoDB");
        console.log(err);
    });
}


module.exports = {
    connectToDb,
    orderData
};