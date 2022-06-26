

/*
    语言基础(第三章)
        语法：
            - 区分大小写
*/
//var 变量提升
function foo() {
    console.log(age);
    var age = 18;
}
//由于var存在变量提升，于是，这段代码不会报错，因为他被编译成下面这样
//把所有变量声明都拉到函数作用域的顶部
function foo() {
    var age;
    console.log(age);
    age = 18;
}

var name = "matt";
console.log(window.name);

//使用let在全局作用域中不会成为window对象的属性
let age = 18;
console.log(window.age);


//在let之前，for循环定义的迭代变量会参透到循环体外部，导致污染
for (var i = 0; i < 5; ++i) {
    // setTimeout(() => console.log(i),0);//5,5,5,5,5
    //在退出循环时，迭代变量保存的是导致循环退出的值，5.
    // 在之后的每次执行，i都是5
    //所以每次输出都是通一个最终值
    //换成let，则是0,1,2,3,4
}

//修改这个对象的内部属性并不违反const的限制
const obj = {
    name: "十五",
    age: 20
}
obj.name = "十六";

/*
    总结：
        - 不使用var
        - const优先，let次之
 */

/*
    数据类型：
        ES6有六种原始类型：undefined、null、Boolean、Number、String、Symbol
        复杂数据类型：object
        (所有值都可以使用上述7种数据类型之一来表示)
*/

/*
undefined：
使用var或let声明了变量却没有初始化时，就相当于给变量赋予了undefined值
永远不比显式的将变量值设为undefined
*/
let message;

//let age
console.log(typeof message);//undefined
console.log(typeof age2);//undefined
//???


/*
null：
null值表示一个空对象指针，所以typeof null 会返回一个object
保存对象值的变量时，使用null来初始化

undefined值是由null值派生而来，所有两者表面上相等
*/
console.log(null == undefined);//true



/*
Boolean：
true和false
其他所有类型的值都有相应布尔值的等价形式，将其他类型转换成布尔值，可以使用Boolean()函数转型
 */
let bool_message = "hello";
let boolean_as = Boolean(bool_message);
console.log(boolean_as);//true


//不同类型与布尔值之间的转换规则
/*
| 数据类型  | 转换成true的值 | 转换成false的值 |
| :-------: | :------------: | :-------------: |
|  Boolean  |      true      |      false      |
|  String   |   非空字符串   |  ""(空字符串)   |
|  Number   |    非零数值    |     0、NaN      |
|  Object   |    任意对象    |      null       |
| Undefined |  N/A(不存在)   |    undefined    |
 */

/*
Number：
最基本的数值字面量格式是十进制整数 
*/

let intNum = 15;//整数
//也可以使用八进制或十六进制表示

//浮点值
let floatNum = 1.1;

/*浮点数的精准度最高可达17位小数。在算术中步入整数精确。
0.1加0.2得到的不是0.3，而是0.300 000 000 000 000 04.
原因是使用了IEEE754数值，这种错误并非JS独有*/

//JS无法表示的正数以Infinity(正无穷大)，无法表示的负数以-infinity(负无穷大)

/*NaN，意思是"不是数值"(Not a Number)
isNaN函数，该函数接收一个参数，可以是任意数据类型，判断该参数是否"不是数值"
值传给isNaN()后，会尝试转成数值。不能转换为数值的值会返回true*/
console.log(isNaN(NaN));//true
console.log(isNaN(10));//false
console.log(isNaN("15"));//false
console.log(isNaN("blue"));//true

/*
有3个函数可以将非数组转换为数值：Number()、parseInt()和parseFloat()。
    Number()可用于任何数据类型
    parseInt()和parseFloat()用于将字符串转换为数值
*/

/*Number()函数的转换规则：
 - 布尔值，true转换为1，false转换为0。Number(true)...
 - 数值，直接返回
 - null，返回0
 - undefined，返回NaN
 - 字符串
    - 字符串中包含数值字符，将直接转换为一个十进制数值
    - 包含浮点值，如1.5等，转换成对应的1.5
    - 包含十六进制格式，如0xf，会由十六进制转换为十进制,如15
    - 如是空字符串，则返回0
    - 如是除上述的其他情况，则返回NaN
 - 对象，调用valueOf()方法，并按照上述规则返回转换的值。如果转换结果是NaN，则调用
    toString()方法，再按照转换字符串的规则转换
*/
Number(true);//1
Number("hello");//NaN
Number(000111);//111

/*parseInt()函数更专注于字符串是否包含数值模式。空格会被忽略
 - 如果第一个字符不是数值字符或加号、减号，那么parseInt会立即返回NaN。空字符串也会返回NaN
 - 如果第一个字符是数值字符或加号、减号，那么会继续依次检测每个字符，直到末尾。
 - 若非数值字符，如"123blue"，会转换为123，同样,15.5会转换为15，因为这不是一个有效的整数字符
 - 能够识别八进制、十进制、十六进制，parseInt()接收第二个参数，16代表十六进制，如parseInt("0xAF",16); //175
 */

/*String类型
 - 字符字面量
    - \n 换号
    - \t 制表
    - \b 退格
    - \r 回车
    - \f 换页
    - \\ 反斜杠(\)
    - \' 单引号(')
*/
 

//把值转换成字符串，调用toString()方法(null和undefined没有toString方法)
//可接收一个参数，代表进制
let ageS = 15;
console.log(ageS.toString()); // '15'

console.log(ages.toString(16)); //十六进制

/*String()函数遵循规则
 - 如果值有toString()方法，则调用该方法，返回结果
 - 值是null，返回'null'
 - 值是undefined，返回'undefined'
 - 值是true，返回'true'
*/
// 当值没有toString方法时，返回值的字面量文本


/*
    模板字符串与插值
*/
let name = "十五";
console.log(`你好啊,我是${name}`);//注意，这里要使用反引号

//在插值表达式中也可以调用方法与函数
console.log(`这是,${name.toString()}`)



/*Symbol类型：
是ES6新增的数据类型。是唯一的，不可变的。作用是确保对象属性使用唯一标识符，不会发生属性冲突的危险


*/
//Symbol()不能new，是为了避免创建符号包装对象
let sym = Symbol();

//全局符号注册表。当需要共享和重用符号实例
let foo = Symbol.for('foo');
let foo2 = Symbol.for('foo');
console.log(foo === foo2);//true

//使用Symbol.keyFor(foo)来查询注册表。keFor()接收符号，返回对应的字符串键
//注意，必须是全局符号。即for()
Symbol.keyFor(foo);//foo



