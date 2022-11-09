/**
 * const,let等の変数宣言
 */

// var val1 = "変数名val1";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";

//constは再宣言不可
// const　val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// val4.name = "jak";
// val4.adress = "Hiroshima";
// console.log(val4);

// // //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;

// //「私の名前はじゃけぇです。年齢は28歳です。」
// // //従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// //従来の関数2
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("func2です"));

// //アロー関数3
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です"));

// //アロー関数4
// const func4 = (str) => str;
// console.log(func4("func4です"));

// // //アロー関数5
// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(20, 20));

// //アロー関数6
// const func6 = (num1, num2) => num1 + num2;
// console.log(func6(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}さいです。`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}さいです。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const sayHello2 = (name2 = "ゲス") => console.log(`こんにちは！${name2}さん！`);
// sayHello2();

/**
 * スプレッド構文
 */
//配列の展開
// const arry1 = [1, 2];
// console.log(arry1);
// console.log(...arry1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arry1[0], arry1[1]);
// sumFunc(...arry1);

//まとめる
// const arry2 = [1,2,3,4,5];
// const [num1, num2,...arry3] = arry2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7)

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
