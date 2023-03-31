
import http from "http";

    console.info(request.method);
    console.info(request.url);

if(request.method === "POST"){
    request.addListener("data", (data) => {
        response.setHeader("Content-Type", "application/json");
        response.write(data);
        response.end();
    })
    
}else {
    if(request.url === "/yuli"){
        response.write("hai yuli")
    } else {
        response.write("hello HTTP server");
    }
    response.end();
}

server.listen(3000);