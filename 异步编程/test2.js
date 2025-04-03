console.log(1);
let a = 2;

setTimeout(() => {
  console.log("setTimeout1");
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    console.log("then2");
  });
});

console.log(a);

new Promise((resolve) => {
  console.log("promise1");
  setTimeout(() => {
    console.log("setTimeout2");
  });
  resolve();
}).then(() => {
  console.log("then1");
});

console.log(3);
