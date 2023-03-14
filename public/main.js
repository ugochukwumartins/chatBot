
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
for (var i = 0; i < STAPLEFOOD.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ STAPLEFOOD[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
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
for (var i = 0; i < SOUPS.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ SOUPS[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
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
for (var i = 0; i < SIDEDISHES.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ SIDEDISHES[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
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
for (var i = 0; i < MEAT.length; i++) {
  // Create DOM element
 var li = document.createElement("li");
      
  // Set text of element
  li.textContent = i+1 +"  "+ MEAT[i];

  // Append this element to its parent
  message.appendChild(li);
  
}
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

