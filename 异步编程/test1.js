setTimeout(() => {
  console.log("set1");
});

new Promise((resolve) => {
  console.log("pro1");
  resolve();
}).then(() => {
  console.log("then1");
});

console.log(1);
