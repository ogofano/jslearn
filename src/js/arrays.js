"use strict";

const oldArray = [12, "Hey!", 30.04, "2023"];

// Создать копию массива
const newArray = oldArray.slice();

// Spread, оператор разворота
const video = ["youtube", "vimeo", "rutube"], blogs = ["wordpress", "livejournal", "blogger"], internet = [...video, ...blogs, "192.168.0.1"];

console.log(internet);
console.log(...video);