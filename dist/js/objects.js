"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red"
  },
  makeTest: _ => console.log("Test method")
};

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let value in options[key]) {
//       console.log(`${options[key][value]}`);
//     }
//     continue;
//   }
//   console.log(`${options[key]}`);
// };

console.log(Object.keys(options).length);

// Деструктуризация объекта по переменным:
const {border, background} = options.colors;
console.log(border);

const addObject = {
  font: "Courier New",
  fontWeight: 16
};

// Объединение объектов
console.log(Object.assign(options, addObject));

// Скопировать объект
const newObj = Object.assign({}, addObject);
console.log(newObj);