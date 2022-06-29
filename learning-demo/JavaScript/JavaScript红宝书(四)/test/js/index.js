


for(var i = 0; i<5; i++) {
    setTimeout(() => console.log(i), 0); //这是宏任务，会最后运行
}
//导致退出循环的是 i = 5;
//当循环体退出时，这时i的值是5，var的变量提升会让i一直等于5。
//i = 5 不满足继续运行的条件，就会执行逻辑
//所以在执行到setTimeout时，会一直输出5
console.log(i);

for(let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
//而使用let，引擎每次都会重新给i声明一个新的变量，执行setTimeout都是不同的变量实例
