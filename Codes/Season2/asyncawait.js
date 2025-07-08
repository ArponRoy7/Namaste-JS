const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("in the promise");
        resolve();
    }, 5000);
});

async function f1(params) {
    try {
        const p1 = await p;
        console.log("hi");
    } catch (error) {
        console.error(error);
    }
}

f1();
