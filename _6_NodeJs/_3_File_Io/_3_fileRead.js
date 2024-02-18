// fs: File System
const fs = require('fs');

// Dosya uzantısını ekliyelim
const dosyaTamYolu='./denemeDosya.txt';

// Dosya Oku (File Read)
fs.readFile(dosyaTamYolu, 'utf8', (hata,data)=>{
    if(hata){
        console.log("Dosya Okunamadı: ", hata);
        throw hata;
        //return;
    }else{
        console.log("Dosya başarılı Okundu "+ __filename+"\n");
        console.log(data);
        console.log(data.toUpperCase());
    }
});
