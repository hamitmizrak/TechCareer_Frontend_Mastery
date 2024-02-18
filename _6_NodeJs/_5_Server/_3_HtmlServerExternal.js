// Server Object
const serverDataObject={
    host:'localhost',
    port:1111,
    statusCode:{
        success:200,
        notFound:404,
        badRequest:400,
        unauthorized:401,
        forbidden:403,
        internalServerError:500
    }
};

// HTml Object 
const htmlDosyaYolu="./deneme.html"

// Http Modül 
const http=require('http');

// File System
const fs=require('fs');

// Server Oluşturmak 
const server=http.createServer((request,response)=>{
    console.log('Server Oluşturuldu');

    // HEADER 
    console.log("******* HEADER *******");
    // response.setHeader('Content-Type', 'application/json');
    // response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    // response.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
    // response.writeHead(200,{"Content-Type":"text/application/json; charset=utf-8"});
    // response.writeHead(serverDataObject.statusCode.success, {"Content-Type":"text/application/json; charset=utf-8"});
    // response.writeHead(serverDataObject.statusCode.success, {"Content-Type":"text/plain; charset=utf-8"});
    response.writeHead(serverDataObject.statusCode.success, {"Content-Type":"text/html; charset=utf-8"});
    //response.write("Header Alanı<br/>");

    // REQUEST
    console.log("******* REQUEST *******");
    console.log(request);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers.age);
    console.log(request.headers.host);
    //response.write("Request Alanı<br/>");


     // HTML Sayfasını okumak
     fs.readFile(htmlDosyaYolu,(err,data)=>{
        if(err){
            console.log("Html sayfası okunamadı Hata Oluştu");
            console.error(err);
            throw err;
            //return;
        }else{
            response.end(data);
        }
     }); //end readfile

     // RESPONSE
     // console.log("******* RESPONSE *******");
     // console.log(response);
     // Html Object
     // response.write(html);
     // END
     // response.end(`üğişçö Hoşgeldiniz Node JS Sunucusuna\n http://${serverDataObject.host}:${serverDataObject.port} Bu porta yayın yapılıyor<br/>`);
     
     // Eğer Html Documnet yapacaksanız böyle bırakmanız yerinde olur.
     //response.end();
}); //end Server

// Listening Port
server.listen(serverDataObject.port,()=>{
    console.log(`http://${serverDataObject.host}:${serverDataObject.port} Bu porta yayın yapılıyor`);
});