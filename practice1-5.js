"use strict";
//=================== practice 1 =======================
let total = 0;
for (let num = 1; num <= 100; num++) {
  total = total + num;
}
let total2 = 50;
for (let num = 1; num <= 100; num++) {
  total2 = total2 + num;
}
let total3 = 10;
for (let num = 1; num <= 490; num++) {
  total3 = total3 + num;
}

//=================== practice 2 =======================
for (let x = 2; x <= 9; x++) {
  for (let y = 2; y <= 9; y++) {
    console.log(x + "*" + y + "=" + x * y);
  }
}

//=================== practice 3 =======================

for (let star = 1; star <= 11; star++) {
  for (let star2 = 0; star2 < star; star2++) {
    process.stdout.write("*");
  }
  console.log("\n");
}
for (let star = 10; star > 0; star--) {
  for (let star2 = star; star2 > 0; star2--) {
    process.stdout.write("*");
  }
  console.log("\n");
}

//=================== practice 4 =======================
// 將梯形公式設計成一個函式，
// 基本功能必需支援自訂帶進去的數值並且要有直接將結果印出和將結果回傳的函式各一。
// 梯形公式為：(上底＋下底)＊高／2

function Trapezoid(up, down, height) {
  TImage = ((up + down) * height) / 2;
  console.log("Trapezoid's image is " + TImage);
}
//Trapezoid(2, 4, 5);

function Image(up, down, height, func) {
  func(up, down, height);
}
Image(2, 4, 5, Trapezoid);

//=================== practice 5 =======================

age(2, 4, 5, Trapezoid);

function step1(func) {
  setTimeout(function() {
    func();
    console.log("Step 1");
  }, 5000);
}

function step2() {
  setTimeout(function() {
    console.log("Step 2");
  }, 2000);
}

//step1();
// step2();
step1(step2);
