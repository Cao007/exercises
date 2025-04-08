class Stack<T> {
  private arr: T[] = [];
  push(item: T) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined
