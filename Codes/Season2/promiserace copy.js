const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 sucess"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 1000);
});

Promise.race([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
