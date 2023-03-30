function samplePromise(){
    return Promise.resolve("echo");
}

const name = await samplePromise();
console.info(name);

