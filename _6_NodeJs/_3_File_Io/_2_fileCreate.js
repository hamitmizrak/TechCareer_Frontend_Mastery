// fs: File System
const fs = require('fs');

// Dosya uzantısını ekliyelim
const dosyaTamYolu='denemeDosya.txt';

// Dosya Içeriği
const dosyaIcerigi='Merhaba Node.js Database';

// Dosya Oluştur (File Create)
fs.writeFile(dosyaTamYolu, dosyaIcerigi, 'utf8', (hata)=>{
    if(hata){
        console.log("Dosya Oluşturulamadı: ", hata);
        throw hata;
         //return;
    }else{
        console.log("Dosya başarılı Oluşturuldu "+ __filename);
    }
});
