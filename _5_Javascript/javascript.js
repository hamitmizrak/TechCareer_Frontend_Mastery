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
//let data;
//console.log(data);

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
// // 1-) parametresiz Returnsuz
// function parametresizReturnsuz(){
//     console.log("Parametresiz Returnsuz");
// }
// parametresizReturnsuz();

// // 2-) parametresiz Returnsuz
// function parametreliReturnsuz(adi,soyadi,memleket){
//     console.log("Parametreli Returnsuz: "+adi+" "+soyadi+" "+memleket);
// }
// parametreliReturnsuz("Hamit","Mızrak","Malatya");

// // 3-) parametresiz Returnsuz
// function parametresizReturnlu(){
//    return "Parametresiz Returnlu";
// }
// const data3=parametresizReturnlu();
// console.log(data3);

// // 4-) parametresiz Returnsuz
// function parametreliReturnlu(adi,soyadi,memleket){
//     // return "Parametresiz Returnlu: "+adi+" "+soyadi+" "+memleket;
//     return `Parametresiz Returnlu: ${adi} ${soyadi} ${memleket}`;
//  }
//  const data4=parametreliReturnlu("Hamit","Mızrak","Malatya");
//  console.log(data4);

//////////////////////////////////////
// Immedia Function
// (function (){
//     console.log("Immedia Anonymous Function");
//  })();

//  (()=>{
//     console.log("Immedia Arrow Function");
//  })();

// NORMAL
//  function normalFunction(){
//     console.log("normal Function");
//  }
//  normalFunction();

//  // Anonymous Function
//  const anonymousFunction = function (){
//     console.log("anonymous Function");
//  }
//  anonymousFunction();

//   // arrow Function
//   const arrowFunction =  ()=>{
//     console.log("arrow  Function");
//  }
//  arrowFunction()

/////////////////////////////////////
//  Conditional
let conditional1 =
  () => {
    const number = 3;
    if (
      number > 5
    ) {
      console.log(
        number +
          " sayısı 5'ten büyüktür"
      );
    } else {
      console.log(
        number +
          " sayısı  5'ten küçüktür"
      );
    }
  };
//conditional1();

let conditional2 =
  () => {
    const number = 3;

    let result =
      number > 5
        ? number +
          " sayısı 5'ten büyüktür"
        : number +
          " sayısı 5'ten küçüktür";
    console.log(
      result
    );
  };
//conditional2();

//  Conditional
let conditional3 =
  () => {
    const number = 5;
    if (
      number === 1
    ) {
      console.log(
        "sayı: 1 eşittir"
      );
    } else if (
      number === 2
    ) {
      console.log(
        "sayı: 2 eşittir"
      );
    }
    if (
      number === 3
    ) {
      console.log(
        "sayı: 3 eşittir"
      );
    }
    if (
      number === 4
    ) {
      console.log(
        "sayı: 4 eşittir"
      );
    }
    if (
      number === 5
    ) {
      console.log(
        "sayı: 5 eşittir"
      );
    } else {
      console.log(
        "Sayı 5'ten farklıdır"
      );
    }
  };
//conditional3();

//  Conditional
let conditional4 =
  () => {
    const number = 5;

    switch (
      number
    ) {
      case 2:
        console.log(
          "sayı: 2 eşittir"
        );
        break;
      case 1:
        console.log(
          "sayı: 1 eşittir"
        );
        break;
      case 3:
        console.log(
          "sayı: 3 eşittir"
        );
        break;
      case 4:
        console.log(
          "sayı: 4 eşittir"
        );
        break;
      case 5:
        console.log(
          "sayı: 5 eşittir"
        );
        break;

      default:
        console.log(
          "Sayı 5'ten farklıdır"
        );
        break;
    }
  };
//conditional4();

// For Loop
let loop1 = () => {
  for (
    let i = 0;
    i < 10;
    i++
  ) {
    console.log(i);
  }
  // for(;;){} => Sonsuz Döngü
};
//loop1 ()

// While Loop
let loop2 = () => {
  let i = 0;
  while (i < 10) {
    console.log(i);
    //i++
    //i=i+1
    i += 1;
  }
  // While(true){}
};
//loop2 ()

// While Loop
let loop3 = () => {
  let i = 0;
  do {
    console.log(i);
    //i++
    //i=i+1
    i += 1;
  } while (i < 10);
  // While(true){}
};
//loop3 ()

/////////////////////////////////////
//  Exception Handling
let exceptionHandling =
  () => {
    try {
      alerx(
        "Pop-up"
      );
    } catch (err) {
      console.error(
        err
      );
      console.error(
        err.message
      );
    } finally {
      console.log(
        "port.close"
      );
    }
    console.log(
      "son satır mutlaka görünsün"
    );
    // throw new Error("Hata44");
  };
//exceptionHandling();

//////////////////////////////////////////
//  setTimeOut Function
let setTimeOutFunction =
  () => {
    setTimeout(
      () => {
        console.log(
          "Çalışsın Set Time Out"
        );
      },
      3000
    );
  };
//setTimeOutFunction();

//  setTimeOut Function
let setIntervalFunction =
  () => {
    setInterval(
      () => {
        console.log(
          "Sürekli Çalışsın setInterval "
        );
      },
      1000
    );
  };
//setIntervalFunction();

//////////////////////////////
// Asenkron
// 1- Callback Function
const callBackFunction =
  () => {
    // 1. ALAN
    let hesapla = (
      x,
      y,
      callback
    ) => {
      let result =
        x + y;
      callback(
        result
      );
    };

    // 2.ALAN
    let goster = (
      data
    ) => {
      console.log(
        "Sonuç: " +
          data
      );
    };

    hesapla(
      5,
      3,
      goster
    );
  };
//callBackFunction();

// Asenkron
// 2- Promise Function

const promiseFunction =
  () => {
    const myPromise =
      new Promise(
        (
          resolve,
          reject
        ) => {
          let number = 5; //Math.floor(Math.random()*10);
          if (
            number %
              2 ==
            0
          ) {
            resolve(
              number
            );
            console.log(
              "Çift Sayı"
            );
          } else {
            reject(
              number
            );
            console.log(
              "Tek Sayı"
            );
          }
        }
      )
        .then(
          () => {
            console.log(
              "Then Çalıştı"
            );
          }
        )
        .catch(
          (err) => {
            console.log(
              "Catch Çalıştı"
            );
            console.error(
              err.message
            );
          }
        );
  };
//promiseFunction();

// 3. Asenkron (Asyn-Await)
const asynAwaitFunction =
  () => {
    async function myFunction() {
      try {
        let response =
          await fetch(
            ""
          );
        let result =
          response.json();
      } catch (error) {
        console.log(
          error.message
        );
      }
    }
  };
//asynAwaitFunction();
//////////////////////////////////////asynAwaitFunctionlet
let diziFunction =
  () => {
    let dizi = [
      1, 4, 3, 5, 6,
      2, 7,
    ];
    //dizi.sort()
    //dizi.sort().reverse()
    console.log(
      typeof dizi
    );
    console.log(
      dizi
    );
    console.log(
      dizi.length
    );
    console.log(
      dizi[0]
    );
    console.log(
      dizi[5]
    );
    console.log(
      dizi[
        dizi.length -
          1
      ]
    );
    console.log(
      dizi
        .toString()
        .concat(
          "merhabalar"
        )
    );
    console.log(
      dizi.join("+")
    );
    console.log(
      dizi.fill(
        "Malatya",
        0,
        2
      )
    );

    let sum = 0;
    for (
      let i = 0;
      i <
      dizi.length;
      i++
    ) {
      sum += i;
    }
    console.log(
      sum
    );

    // FOR-IN
    for (const temp in dizi) {
      console.log(
        `${temp} => ${dizi[temp]}`
      );
    }
    console.log(
      "/////////////"
    );

    // FOR-OF
    for (const temp of dizi) {
      console.log(
        `${temp}`
      );
    }

    console.log(
      "/////////////"
    );

    dizi.push(99);
    dizi.unshift(
      11
    );
    dizi.pop();
    dizi.shift();

    dizi
      .map(
        (
          value,
          index,
          array
        ) => {
          return (value =
            value *
            2);
        }
      )
      .filter(
        (
          value,
          index,
          array
        ) => {
          return (
            value >=
            10
          );
        }
      )
      .forEach(
        (
          value,
          index,
          array
        ) => {
          console.log(
            `${value}`
          );
        }
      );
    console.log(
      "////////////////////"
    );
    let dizi2 = [ 1, 2, 3, 4, 5, 6, ];
    //dizi2.splice( 0, 3 );
    //dizi2.splice( 0, 3,"Ankara" );
    //dizi2.splice( 0, 0,"Ankara" );
    dizi2.forEach( ( value, index, array ) => {
        console.log( `${value}` );
      }
    );
  };

//diziFunction();

///////////////////////////////////////////
// CLASS
const classExample=()=>{

  class Person {

    // constructor 
    constructor( name, age ) {
      this.name = name;
      this.age = age;
    }

    // Function
    greet(){
      console.log( `Merhaba ${this.name} yaşım ${this.age}` );
    }
  } //end class

  let personData1=new Person("isim-1",6);
  personData1.greet();
}

classExample()