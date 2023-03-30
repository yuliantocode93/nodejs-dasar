import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`nodeJS exit with code ${exitCode}`);

});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.info("hello");