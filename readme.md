commonjs 在导出一个普通值的时候 即便修改了 我们也无法获取最新的值

> example : commonjs/index.js

## 原因：

在我看来 commonjs 导出的值如果是一个引用类型 这样修改了值 是能获取到最新的值 我认为这里导出的时候做了一层浅拷贝
而导出的是一个普通类型的值的时候 修改了值
