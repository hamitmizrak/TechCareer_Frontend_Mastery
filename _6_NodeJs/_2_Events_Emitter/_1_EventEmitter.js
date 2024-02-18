// Node js: Event-Driver
// Olay (Event) 
// Dinleyici (Listen)

// Event Module Create Data
const dataEvent= require('events');

// Event Emitter Create Data
const dataEmitter=new dataEvent.EventEmitter();

// Event Name
const eventName="Data Send";

// on: Çok kere
// dataEmitter.on(eventName, ()=>{
//     console.log("Data Send Event: ");
// });

// once: 1 kere
dataEmitter.once(eventName, ()=>{
    console.log("Data Send Event: ");
});

// Event Trigger
dataEmitter.emit(eventName);
dataEmitter.emit(eventName);
dataEmitter.emit(eventName);

setInterval(()=>{  
    dataEmitter.emit(eventName);
 }, 2000); // 2 sn