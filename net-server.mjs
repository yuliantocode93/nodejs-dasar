import net from "net";

const server = net.createServer( (client) => {
    console.info("client connected");

    client.addListener("data", (data) => {
        console.info(`receive data ${data.toString()}`);
    client.write(`hello ${data.toString()}\r\n`);
    })
});

server.listen(2000, "localhost");