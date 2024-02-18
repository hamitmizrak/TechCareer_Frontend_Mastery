// fs: File System
const fs = require('fs');

// Dosya uzantısını ekliyelim
const dosyaTamYolu='./denemeDosya.txt';

// Dosya Yazma (File Writer)
const dataWriter=  fs.createWriteStream(dosyaTamYolu, {encoding:'utf8'});
dataWriter.write('Yeni satır\n');
dataWriter.end();

