// Stream: Büyük verileri parça parça işlemek için kullanılır.

// File 
const fs = require('fs');

// Dosya Yolu
const dosyaTamYolu='./istockphoto.mp4';

// Read
const readStreamData=fs.createReadStream(dosyaTamYolu);

// Write
const writeStreamData=fs.createWriteStream('degisti.mp4');

// DataMount
let dataMount=0;

// Veri 
readStreamData.on('data', function(chunk){
    //console.log("Veri Okundu: "+chunk);
    console.log(`Veri Büyüklüğü: ${chunk.length}`);
    dataMount+=chunk.length;
    console.log(`Veri Okundu: ${chunk}`);
    console.log(chunk);
}); //end readStreamData

// Pipe: Transfer işlemi
readStreamData.pipe(writeStreamData);

// End
readStreamData.on('end', ()=>{
    //console.log("Veri Okundu: "+chunk);
    console.log(`Veri Okunması tamamdır `);
    console.log(`Veri Toplam Byte Büyüklüğü: ${dataMount}`);
}); //end readStreamData

// Close
readStreamData.on('close', ()=>{
    console.log(`Veri Kapatıldı `);
}); //end readStreamData


// End
readStreamData.on('error', (err)=>{
    console.error(`Hata meydana geldi: ${err}`);
}); //end readStreamData

// https://www.istockphoto.com/tr/video/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper-gm1421465990-467087403