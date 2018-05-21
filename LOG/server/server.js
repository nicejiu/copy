var http = require("http");
var request=require("request");
http.createServer(function (request, response) {
    response.writeHeader("200", {"Content-Type": "text/plain"});
    if (request.url === "/") {
        response.end("hello");
    }else if(request.url==="/aa/news"){
        response.end("news");
    }
}).listen(8080);