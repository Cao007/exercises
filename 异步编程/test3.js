// 使用a,b（异步执行），最后c计算a,b的返回值

function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
}

function c(val) {
  return new Promise((resolve, reject) => {
    resolve(val[0] + val[1]);
  });
}
3;
async function test() {
  let a_b_res = await Promise.all([a(), b()]);
  let c_res = await c(a_b_res);
  console.log("c_res:", c_res);
}

test();
