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
// let escape1="1.alan '2.alan";
// console.log(escape1);

// escape1="1.alan \"2.alan";
// console.log(escape1);

// escape1='1.alan \'2.alan';
// console.log(escape1);

// escape1='1.alan \"2.alan';
// console.log(escape1);


// escape1='1.satır \n\t2.satır\u00A9';
// console.log(escape1);

// // null 
// let data3=null;
// console.log(data3);

/////////////////////////////////////////////////////////
/// SAYISAL İŞLEMLER
// let number1=55.44;
// //document.writeln(number1);
// // NaN , isNaN
// console.log(number1);
// console.log(typeof number1);

// //Cast
// console.log(Number(number1));
// console.log(parseInt(number1));
// console.log(parseFloat(number1));

// // Bilimsel Gösterim
// let normal=1300000;
// console.log(normal);

// let bilimsel=13E+5;
// console.log(bilimsel);
// bilimsel=13E-5;
// console.log(bilimsel);

// const number2=1453.1234;

// console.log(number2.toExponential(1));

// // Verilen Bir tabanda 10'luk tabana çevirmek
// let binary=0b01010101111;
// console.log(binary);

// let octal=0o76511;
// console.log(octal);

// let decimal=123456;
// console.log(decimal);

// let hexadecimal=0xfbc12;
// console.log(hexadecimal);

// // 10 tabandan istediğimiz diğer tabanlara çevirmek
// let number3=4444;
// // Binary (2)
// let binary3=number3.toString(2);
// console.log(binary3);

// // Octal (2)
// let octal3=number3.toString(8);
// console.log(octal3);

// // Decimal(10)
// let decimal3=number3.toString(10);
// console.log(decimal3);

// // Decimal(10)
// let hexadecimal3=number3.toString(16);
// console.log(hexadecimal3);


// // Fixed
// const number4=1234.56749;
// console.log(number4.toFixed(3));
// console.log(number4.toPrecision(3));




/////////////////////////////////////////////////////////
/// METİNSEL İŞLEMLER
// let vocabulary=" Html5, CSS3, javascript, jquery,Html5 ";
// vocabulary=String(vocabulary);
// //vocabulary=vocabulary.toString();
// //vocabulary=vocabulary.trim();

// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.toLocaleLowerCase());

// console.log(vocabulary.startsWith("H"));
// console.log(vocabulary.endsWith("y"));

// console.log(vocabulary.concat("-INC"));
// console.log(vocabulary.replace("jquery","React JS"));

// console.log(vocabulary.substring(4));
// console.log(vocabulary.substring(1,3)); // 1<=X<=3-1

// console.log(vocabulary.indexOf("Html5")); 
// console.log(vocabulary.lastIndexOf("Html5")); 

// console.log(vocabulary.charAt(1)); 

/////////////////////////////////////////////////////////
/// FUNCTION
