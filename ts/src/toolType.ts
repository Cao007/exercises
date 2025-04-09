// 映射类型
interface A {
  name: string;
  age: number;
}

// type A_Readonly = {
//   readonly name: string;
//   readonly age: number;
// }
type A_Readonly = Readonly<A>;

// type A_Partial = {
//   name?: string;
//   age?: number;
// }
type A_Partial = Partial<A>;

// type A_Record = {
//   name: string;
//   age: number;
// }
type A_Record = Record<"name" | "age", string | number>;

// type A_Pick = {
//   name: string;
// }
type A_Pick = Pick<A, "name">;

// type A_Omit = {
//   age: number;
// }
type A_Omit = Omit<A, "name">;
