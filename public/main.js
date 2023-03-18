
const btn=document.getElementById("btn");
const message=document.getElementById("messages");
let generalOrder =[];
let ordrList= [];

let STAPLEFOOD= [];
let SOUPS= [];
let SIDEDISHES= [];
let MEAT= [];

var addditionalInput;
let data;

const socket = io();
 

socket.on("connect", ()=>{
  

  fetch('https://ugocahatboat.onrender.com/getOrder', {
    headers: {
       'Accept': 'application/json'
    }
 })
    .then(response => response.json())
    .then(text =>{

data= text.orders
     // console.log( 'helo :', data)
    })


  var text =["Select 1 to Place an order", "Select 99 to checkout order" ,"Select 98 to see order history"," Select 97 to see current order", "Select 0 to cancel order "];
  
    for (var i = 0; i < text.length; i++) {
      // Create DOM element
     var li = document.createElement("li");
          
      // Set text of element
      li.textContent = text[i];
  
      // Append this element to its parent
      message.appendChild(li);
    }
  
    
  

  
})


//
function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}



//

function PlaceOrder(){
  
  addditionalInput =  window.prompt("select your order")
  var intval= parseInt(addditionalInput)
if(intval == 1){

  var lo = document.createElement("li");
  lo.appendChild(document.createTextNode(intval));
  message.appendChild(li);
  if (intval) {
    
    socket.emit('new message', intval);
  }


  var li = document.createElement("li");
  li.textContent = 1 +"  "+ MEAT[0];
  message.appendChild(li);

  var l2 = document.createElement("li");
  l2.textContent = 2 +"  "+  "Place Order ";
 message.appendChild(l2);

  var l3 = document.createElement("li");
  l3.textContent = 0 +"  "+  "Go to main Menue";
  message.appendChild(l3);
}



}




//
function addtion(){
  addditionalInput =  window.prompt("select your order")
var intval= parseInt(addditionalInput)
if(intval == 1){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(intval));
  message.appendChild(li);
  if (intval) {
    
    socket.emit('new message', intval);
  }
  for (var i = 0; i < data.length; i++) {
    // Create DOM element
   if(data[i]["categoris"] == "STAPLEFOOD" ){
    STAPLEFOOD.push(data[i]["type"])
   }
  //  var li = document.createElement("li");
     

}
var note3 = document.createElement("li");
note3.textContent = "select the order number ";
 message.appendChild(note3);
for (var i = 0; i < STAPLEFOOD.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ STAPLEFOOD[i];

  // Append this element to its parent
  message.appendChild(li);
  
}

var cancel3 = document.createElement("li");
cancel3.textContent = 4+ "  " +"back to home page ";

message.appendChild(cancel3);

setTimeout(function (){
  addditionalInput =  window.prompt("select your order")
  var selection= parseInt(addditionalInput)
  //console.log(intval);
  if(selection == 1){
generalOrder.push(STAPLEFOOD[0])
  }
  if(selection == 2){
    generalOrder.push(STAPLEFOOD[1])
      }
      if(selection == 3){
        generalOrder.push(STAPLEFOOD[2])
          }
          if(selection == 4){
            socket.on("connect")
              }
console.log(generalOrder)
},2000)

console.log(STAPLEFOOD);
}
//
if(intval == 2){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(intval));
  message.appendChild(li);
  if (intval) {
    
    socket.emit('new message', intval);
  }
  for (var i = 0; i < data.length; i++) {
    // Create DOM element
   if(data[i]["categoris"] == "SOUPS" ){
    SOUPS.push(data[i]["type"])
   }
  //  var li = document.createElement("li");
     

}
var note2 = document.createElement("li");
note2.textContent = "select the order number ";
 message.appendChild(note2);

for (var i = 0; i < SOUPS.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ SOUPS[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
var cancel2 = document.createElement("li");
cancel2.textContent = 0+ "  " +"back to home page ";

message.appendChild(cancel2);

setTimeout(function (){
  addditionalInput =  window.prompt("select your order")
  var selection2 = parseInt(addditionalInput);
  if(selection2 == 1){
    generalOrder.push(SOUPS[0])
      }
      if(selection2 == 2){
        generalOrder.push(SOUPS[1])
          }
          if(selection2 == 3){
            generalOrder.push(SOUPS[2])
              }
              if(selection2 == 4){
                socket.on("connect")
                  }
    console.log(generalOrder)
  console.log(intval);
},2000)
}
//
if(intval == 3){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(intval));
  message.appendChild(li);
  if (intval) {
    
    socket.emit('new message', intval);
  }
  for (var i = 0; i < data.length; i++) {
    // Create DOM element
   if(data[i]["categoris"] == "SIDEDISHES" ){
    SIDEDISHES.push(data[i]["type"])
   }
  //  var li = document.createElement("li");
     

}
var note1 = document.createElement("li");
note1.textContent = "select the order number ";
 message.appendChild(note1);

for (var i = 0; i < SIDEDISHES.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ SIDEDISHES[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
var cancel1 = document.createElement("li");
cancel1.textContent = 0+ "  " +"back to home page ";

message.appendChild(cancel1);

setTimeout(function (){
  addditionalInput =  window.prompt("select your order")
 var selection3 = parseInt(addditionalInput)
  if(selection3 == 1){
    generalOrder.push(SIDEDISHES[0])
      }
      if(selection3 == 2){
        generalOrder.push(SIDEDISHES[1])
          }
          if(selection3 == 3){
            generalOrder.push(SIDEDISHES[2])
              }
              if(selection3 == 4){
                socket.on("connect")
                  }
    console.log(generalOrder)
  
},2000)

}
//
if(intval == 4){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(intval));
  message.appendChild(li);
  if (intval) {
    
    socket.emit('new message', intval);
  }
  for (var i = 0; i < data.length; i++) {
    // Create DOM element
   if(data[i]["categoris"] == "MEAT" ){
    MEAT.push(data[i]["type"])
   }
  //  var li = document.createElement("li");
     

}
var note = document.createElement("li");
note.textContent = "select the order number ";
 message.appendChild(note);
for (var i = 0; i < MEAT.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ MEAT[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
var cancel = document.createElement("li");
cancel.textContent = 0+ "  " +"back to home page ";

message.appendChild(cancel);

setTimeout(function (){
  addditionalInput =  window.prompt("select your order")


  var selection4 = parseInt(addditionalInput)
  if(selection4 == 1){
    generalOrder.push(MEAT[0])
      }
      if(selection4 == 2){
        generalOrder.push(MEAT[1])
          }
          if(selection4 == 3){
            generalOrder.push(MEAT[2])
              }
              if(selection4 == 4){
                socket.on("connect")
                  }
    console.log(generalOrder)


},2000)


}
}






btn.addEventListener("click", function(){

  var inputMessage = document.getElementById("msg").value;

  if(inputMessage == 1){

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputMessage));
  message.appendChild(li);
  if (inputMessage) {
    
    socket.emit('new message', inputMessage);
  }

  for (var i = 0; i < data.length; i++) {
    // Create DOM element
   console.log(data[i]["categoris"])
  //  var li = document.createElement("li");
      
ordrList.push(data[i]["categoris"])
}

console.log(ordrList);
var filterData = removeDuplicates(ordrList)

for (var i = 0; i < filterData.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ filterData[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
setTimeout(addtion, 2000);
  clearTimeout(addtion)

console.log(filterData)
  }
   
  // let message = inputMessage.value;
  if(inputMessage == 99){
  if(generalOrder.length > 0){
    let id = Math.floor((Math.random() * 10000) + 1);
    localStorage.setItem(id, JSON.stringify(generalOrder))
   var objArray= localStorage.getItem(id);
  let NewobjArray= JSON.parse(objArray);
  //
  var orderVal = document.createElement("li");
  orderVal.textContent = " order placed ";
   message.appendChild(orderVal);
  

  //
  }
else{
  var li = document.createElement("li");
  li.textContent = 'No order to place' + "1 click One to Place Order"
  message.appendChild(li);
}
   


    }

    if(inputMessage == 98){

      for (var i = 0; i < generalOrder.length; i++) {
        // Create DOM element
       var li = document.createElement("li");
            
        // Set text of element
        li.textContent = generalOrder[i];
      
        // Append this element to its parent
        message.appendChild(li);
        
      }
      }
      if(inputMessage == 97){

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputMessage));
        message.appendChild(li);
        if (inputMessage) {
          
          socket.emit('new message', inputMessage);
        }
      
        for (var i = 0; i < data.length; i++) {
          // Create DOM element
         console.log(data[i]["categoris"])
        //  var li = document.createElement("li");
            
      ordrList.push(data[i]["categoris"])
      }
      
      console.log(ordrList);
      var filterData = removeDuplicates(ordrList)
      
      for (var i = 0; i < filterData.length; i++) {
        // Create DOM element
       var li = document.createElement("li");
            
        // Set text of element
        li.textContent = i +"  "+ filterData[i];
      
        // Append this element to its parent
        message.appendChild(li);
      }
      console.log(filterData)
        }
        if(inputMessage == 0){
          localStorage.clear();
          generalOrder=[];
          }

});

