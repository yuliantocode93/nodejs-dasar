import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("aplication.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("hello world");
log.error("hello world");

const person = {
    name: "aha",
    name1: "ihi",
}

log.table(person);