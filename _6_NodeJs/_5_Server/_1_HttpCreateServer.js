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

// Http Modül 
const http=require('http');

// Server Oluşturmak 
const server=http.createServer(function(request,response){
    console.log('Server Oluşturuldu');

    // HEADER 
    console.log("******* HEADER *******");
    // response.setHeader('Content-Type', 'application/json');
    // response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    // response.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
    // response.writeHead(200,{"Content-Type":"text/application/json; charset=utf-8"});
    response.writeHead(serverDataObject.statusCode.success, {"Content-Type":"text/html; charset=utf-8"});
    response.write("Header Alanı<br/>");

    // REQUEST
    console.log("******* REQUEST *******");
    console.log(request);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers.age);
    console.log(request.headers.host);
    response.write("Request Alanı<br/>");

     // RESPONSE
     console.log("******* RESPONSE *******");
     console.log(response);
     response.write("Response Alanı<br/>");


     // END
     response.end(`üğişçö Hoşgeldiniz Node JS Sunucusuna\n http://${serverDataObject.host}:${serverDataObject.port} Bu porta yayın yapılıyor<br/>`);
}); //end Server

// Listening Port
server.listen(serverDataObject.port,()=>{
    console.log(`http://${serverDataObject.host}:${serverDataObject.port} Bu porta yayın yapılıyor`);
});