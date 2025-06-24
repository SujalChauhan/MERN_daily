let jsobj={
    name: "John",
};

let jsonString=JSON.stringify(jsobj);//while sending data to server
console.log(jsonString);

let jsObject=JSON.parse(jsonString);//while receiving data from server
console.log(jsObject);