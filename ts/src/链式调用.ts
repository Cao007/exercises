class cook {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  cookDish(dish: string) {
    console.log(`${this.name}正在烹饪${dish}`);
    return this;
  }
  eatDish(dish: string) {
    console.log(`${this.name}正在享用${dish}`);
    return this;
  }
}

const zhangsan = new cook("张三");
zhangsan.cookDish("红烧肉").eatDish("红烧肉");

export {};
