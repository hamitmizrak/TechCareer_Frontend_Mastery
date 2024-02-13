// alert("External JS")
// window.alert("External JS")
/* 
multiple Comment1
multiple Comment2
multiple Comment3
*/

// LOG
// console.log("Loglama");

// // WARNING
// console.warn("Warning");

// // INFO
// console.info("Info");

// // ERROR
// console.error("Error");

////////////////////////////////////////////////////////
// VAR (Global)
// var kelime="Js Öğreniyorum JS";
// console.log(kelime);
// //alert(kelime)

// // hoisting
// kelime44="Kelimeler";
// var kelime44;

// var sayi=44;
// console.log(sayi);

// var sayi=44.23;
// console.log(sayi);

// var karar=true;
// console.log(karar);

// // LET
// let kelime2="Math2"
// console.log(kelime2);

// let kelime3="Math3"
// console.log(kelime3);
// kelime3="Math33333"
// console.log(kelime3);

// // CONST
// const kelime4="Math4"
// console.log(kelime4);

// const kelime5="Math5"
// console.log(kelime5);

// yazamazsınız.
// kelime5="Math5"
// console.log(kelime5);
/////////////////////////////////////////////////////////////
// OPERATORS

// let number1=11;
// let number2=2;

// // let number3=11,number4=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);
// console.log(number1**number2);

// && VE ||VEYA  ! DEĞİL > >= < <=  
// = Atama
// == Eşittir (Türüne bakmaksızın)
// === Eşittir (Türüne bakarak)

///////////////////////////////////////////////////////////////
// // Kullanıcıdan veri almak
// let user1=Number(prompt("Lütfen 1.sayıyı giriniz")) ;
// let user2=parseInt(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(user1+user2);
// console.log(user1-user2);
// console.log(user1*user2);
// console.log(user1/user2);
// console.log(user1%user2);
// console.log(user1**user2);

/////////////////////////////////////////////////////////
/// MATH
// let user=Number(prompt("Lütfen 1.sayıyı giriniz"));

// console.log("PI: "+Math.PI);
// console.log("E: "+Math.E);
// console.log("Mutlak: "+Math.abs(user));
// console.log("Karekök: "+Math.sqrt(user));

// console.log("Üslü: "+Math.pow(user,2));
// console.log("Üslü: "+(user**2));

// console.log("Yuvarla: "+Math.round(7.3));
// console.log("Yuvarla: "+Math.round(7.5));

// console.log("Aşağı Yuvarla: "+Math.floor(8.9));
// console.log("Yukarı Yuvarla: "+Math.ceil(8.1));

// console.log("Sin: "+Math.sin(45));

// console.log("Rastgele: "+Math.random());
// console.log("Rastgele: "+Math.random()*4+1);
// console.log("Rastgele: "+Math.floor(Math.random()*4+1));

/////////////////////////////////////////////////////////
/// TYPEOF
// let variable1=44
// console.log(typeof variable1);

// //variable1="44";
// variable1=String(44);
// console.log(typeof variable1);

// variable1=true;
// console.log(typeof variable1);

// variable1=()=>{};
// console.log(typeof variable1);

/////////////////////////////////////////////////////////
/// UNDEFINED 
let data;
console.log(data);


/////////////////////////////////////////////////////////
/// NaN 
// let data1=44/22;
// console.log(data1);


// data1=44/"22";
// console.log(data1);

// data1=44/Number("22");
// console.log(data1);


// data1=44/"abs";
// console.log(data1);

// if(isNaN(data1)){
//     console.log("Lütfen sayı giriniz");
// }


/////////////////////////////////////////////////////////
/// INFINITY
// console.log(0/44); 
// console.log(44/0); 

/////////////////////////////////////////////////////////
/// ESCAPE CHARACTER 
let escape1="1.alan '2.alan";
console.log(escape1);

escape1="1.alan \"2.alan";
console.log(escape1);

escape1='1.alan \'2.alan';
console.log(escape1);

escape1='1.alan \"2.alan';
console.log(escape1);


escape1='1.satır \n\t2.satır\u00A9';
console.log(escape1);

// null 
let data3=null;
console.log(data3);