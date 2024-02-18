// fs: File System
const fs = require('fs');

// Dosya uzantısını ekliyelim
const dosyaTamYolu='./denemeDosya.txt';

// Dosya Oku (File Read)
fs.unlink(dosyaTamYolu,  (hata)=>{
    if(hata){
        console.log("Dosya Silinemedi: ", hata);
        throw hata;
        //return;
    }else{
        console.log("Dosya Silindi "+ __filename+"\n");
       
    }
});
