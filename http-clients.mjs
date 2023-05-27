import { response } from "express";
import https from "https";

const endpoints = "https://eouvivd86dzp0t7.m.pipedream.net";
const request = https.request(endpoints, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }, 
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    name1: "echo",
    name2: "echa",
})

request.write(body);
request.end();