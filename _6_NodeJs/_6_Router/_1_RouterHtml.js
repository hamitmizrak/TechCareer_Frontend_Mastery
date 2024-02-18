// Dosya Yolu
console.log(__dirname);
console.log(__filename);

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

// Sayfalar
const index="./index.html";
const blog="./blog.html";
const register="./register.html";
const notFound="./notFound.html";


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

    if(request.method==='GET'){
        // ROOT 
        if(request.url==='/' ||request.url==='/index' ){
            fs.readFile(index,(err,data)=>{
                if(err) 
                throw err;
            response.end(data);
            })
        }else if(request.url==='/blog' ){
            fs.readFile(blog,(err,data)=>{
                if(err) 
                throw err;
            response.end(data);
            })
    }else if(request.url==='/register' ){
        fs.readFile(register,(err,data)=>{
            if(err) 
            throw err;
        response.end(data);
        })
     }else{
        fs.readFile(notFound, (err, data) => {
            if (err)
                throw err;
            response.end(data);
        })
     }
    }

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