const obj = require('./obj')

console.log('index.js userInfo.age is ', obj.age) // 输出1

obj.changeAge()
console.log('index.js userInfo.age is ', obj.age) // 依旧是输出1
