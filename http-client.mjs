import https from "https";
const endpoint = "https://eouvivd86dzp0t7.m.pipedream.net";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});
const body = JSON.stringify({
    name1: "echo",
    name2: "hello",
})
request.write(body);
request.end();