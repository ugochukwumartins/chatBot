const ordermodel = require("../model/order_model");

exports.order = async (req, res) => {
    try {
     
      const bodyData = req.body;
  console.log("this is", bodyData)
      const order = await ordermodel.create({
        categoris: bodyData.Categoris,
        type: bodyData.type,
      });
  
      return res.json({ status: true, message: "order created", order });
    } catch (e) {
      console.log(e);
    }
  };

  exports.getOrder = async (req, res) => {
    try {
     
      ordermodel.find({}).
  then((orders)=>{
    return res.json({ status: true, message: "order created", orders });
    
  }).catch((e)=>{console.log(e)})

    } catch (e) {
      console.log(e);
    }
  };