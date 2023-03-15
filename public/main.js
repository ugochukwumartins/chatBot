
const btn=document.getElementById("btn");
const message=document.getElementById("messages");


let data;

const socket = io();
 

socket.on("connect", ()=>{

  fetch('http://localhost:3000/getOrder', {
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
let ordrList= [];

let STAPLEFOOD= [];
let SOUPS= [];
let SIDEDISHES= [];
let MEAT= [];

var addditionalInput;
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


// if(intval == 2){

//   var lo = document.createElement("li");
//   lo.appendChild(document.createTextNode(intval));
//   message.appendChild(li);
//   if (intval) {
    
//     socket.emit('new message', intval);
//   }


//   var li = document.createElement("li");
//   li.textContent = 1 +"  "+ MEAT[1];
//   message.appendChild(li);

//   var l2 = document.createElement("li");
//   l2.textContent = 2 +"  "+  "Place Order ";
//  message.appendChild(l2);

//   var l3 = document.createElement("li");
//   l3.textContent = 0 +"  "+  "Go to main Menue";
//   message.appendChild(l3);
// }

// if(intval == 3){

//   var lo = document.createElement("li");
//   lo.appendChild(document.createTextNode(intval));
//   message.appendChild(li);
//   if (intval) {
    
//     socket.emit('new message', intval);
//   }


//   var li = document.createElement("li");
//   li.textContent = 1 +"  "+ MEAT[2];
//   message.appendChild(li);

//   var l2 = document.createElement("li");
//   l2.textContent = 2 +"  "+  "Place Order ";
//  message.appendChild(l2);

//   var l3 = document.createElement("li");
//   l3.textContent = 0 +"  "+  "Go to main Menue";
//   message.appendChild(l3);
// }

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
cancel3.textContent = 0+ "  " +"back to home page ";

message.appendChild(cancel3);

setTimeout(function (){
  addditionalInput =  window.prompt("select your order")
  var intval= parseInt(addditionalInput)
  console.log(intval);
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
  var intval= parseInt(addditionalInput)
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
  var intval= parseInt(addditionalInput)
  console.log(intval);
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
  var intval= parseInt(addditionalInput)
  console.log(intval);
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

  //   var li = document.createElement("li");
  //   li.appendChild(document.createTextNode(inputMessage));
  //   message.appendChild(li);
  //   if (inputMessage) {
      
  //     socket.emit('new message', inputMessage);
  //   }
  
  //   for (var i = 0; i < data.length; i++) {
  //     // Create DOM element
  //    console.log(data[i]["categoris"])
  //   //  var li = document.createElement("li");
        
  // ordrList.push(data[i]["categoris"])
  // }
  
  // console.log(ordrList);
  // var filterData = removeDuplicates(ordrList)
  
  // for (var i = 0; i < filterData.length; i++) {
  //   // Create DOM element
  //  var li = document.createElement("li");
        
  //   // Set text of element
  //   li.textContent = i +"  "+ filterData[i];
  
  //   // Append this element to its parent
  //   message.appendChild(li);
  // }
  // console.log(filterData)
  var li = document.createElement("li");
  li.textContent = 'No order to place'
  message.appendChild(li);
    }

    if(inputMessage == 98){

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

});

