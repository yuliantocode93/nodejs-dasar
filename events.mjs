import {EventEmitter} from "events";

const emiter = new EventEmitter();


emiter.addListener("hello", (name) => {
    console.log(`hello ${name}`);
})

emiter.emit("hello", "echo");
