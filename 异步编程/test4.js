console.log(1);

setTimeout(() => {
  console.log(2);
  const p = new Promise((resolve, reject) => {
    resolve(3);
  });
  p.then((res) => {
    console.log(res);
  });
}, 0);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(4);
  }, 0);
  resolve(5);
});
p.then((res) => {
  console.log(res);
});

const p2 = new Promise((resolve, reject) => {
  resolve(6);
});
p2.then((res) => {
  console.log(res);
});

console.log(7);
