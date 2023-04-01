
// import http from "http";

//     console.info(request.method);
//     console.info(request.url);

// if(request.method === "POST"){
//     request.addListener("data", (data) => {
//         response.setHeader("Content-Type", "application/json");
//         response.write(data);
//         response.end();
//     })
    
// }else {
//     if(request.url === "/yuli"){
//         response.write("hai yuli")
//     } else {
//         response.write("hello HTTP server");
//     }
//     response.end();
// }

// server.listen(3000);


import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.info(request.url);

  if (request.method === "POST") {
    let body = "";
    request.addListener("data", (data) => {
      body += data;
    });

    request.addListener("end", () => {
      response.setHeader("Content-Type", "application/json");
      response.write(body);
      response.end();
    });
  } else {
    if (request.url === "/yuli") {
      response.write("hai yuli");
    } else {
      response.write("hello HTTP server");
    }
    response.end();
  }
});

server.listen(3000);
