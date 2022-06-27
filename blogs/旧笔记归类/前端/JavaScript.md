
## 前言

一篇杂乱无章的旧笔记，作归类处理。

## JavaScript：动态脚本语言


javaScript是一种轻量级的脚本语言，用来编写控制其他大型应用程序（浏览器）的脚本

操控浏览器的能力、广泛使用领域

​	由三部分组成:  

- **ECMAScript(语言核心)**

- **DOM (文档对象模型)**

- **BOM (浏览器对象模型)**

- 浏览器渲染 html 是从上到下的
	- 一般来说，会将 script 放到 head 中，但是为了渲染速度，很多时候，会放到 body 的最后
	- 如果 script 标签不闭合，会导致页面渲染出问题

在JS执行中都是单线程执行，所以代码的执行可以说是自上而下，如果前一段的代码出现问题，就会导致下一段代码无法执行，对于用户而言就是卡死现象，所以在JS执行机制引出了异步执行操作。

```js
 var x = 1;  // 赋值
//在js中，number 表示一切数字，包括整数和浮点数。全都是 64 位。
//undefined表示未定义， null 表示为空
//boolean 表示布尔		只有true和false
```

### 1.1函数:就是 **执行逻辑** 的一种封装。

```js
function mysum(a,b){};    mysum(1,2); // 往里写入参数,返回1,2
var abs = function(a,b){};
```

##### 1.1.2预定义函数:

​	`parseInt()`：将字符串转换成整数，无法解析则返回NaN

​	`parseFloat()`：将字符串转换成浮点数，无法解析则返回NaN

​	`eval()`：将字符串参数作为JavaScript代码执行

​	`isNaN()`：判断指定内容是否为非数字，只有纯数字组成的返回false,否则返回true

​		例：isNaN(NaN); //true

​				isNaN(1122); /false

​	escape()函数的作用是将一些特殊字符转换成ASCII码

​	unescape()函数的作用是将ASCLL码转换成字符

##### 	1.1.3 回调函数

```js
 function mysum(a,b,f){ return f("出错了，")} //f是一个函数，用来表示出错时候的逻辑
	//实现逻辑的分离
	//一旦执行到return时，函数就执行完毕，并将结果返回。
```



##### 	1.1.4 递归函数

```js
function rec(){
    console.log("hello");
    if(Math.random() > 0.999){
        ruturn;
    }
    rec();
}
rec();	   //它是计算机进行计算更加本质的一种行为
            //它可以完全替换掉循环语句
            //烧脑，不够直观
            //烧内存，爆栈。没有递归做进一步优化，尾递归优化
            //递归必须要有边界条件 ！！！
```

##### 1.1.5 箭头函数

```js
x => x * x
//等价于
function (x) {
    return x * x;
}
 //在箭头函数下,this指向上一级的this
```

##### 1.1.6 generator (生成器) : ES6引入的新的函数类型,可返回多次

```js
 function* foo(x){
   yield x + 1;
    yield x + 2;
    return x + 3;   //generator由function*定义
     				//还可以用yield返回多次
 }
 调用generator对象的方法:
	1.不断调用generator对象的next()方法
    	var f = fib(5);
		f.next(); // {value: 0, done: false}
		f.next(); // {value: 1, done: false}
		f.next(); // {value: undefined, done: true}
//另外，generator可以把异步回调代码变成'同步'代码，要等AjAx以后才能知道

```


### 2.1 数据类型

##### 2.1.1 JS中的6种原始数据类型:

1. undefined, 未定义,尚未赋值
2. null 空
3. boolean  布尔类型
4. number  数字(浮点型，包含小数点的实数)
5. string  字符串
6. Object  对象

```js
 var a = a;
 let  a = 1; //优先使用 const，在数据需要修改的时候，使用 let，迫不得已 var
 const a;    //千万不能忘掉 var 的原理跟使用方式，因为面试需要
			//const 赋值后，将不能再赋值，否则将报错
			//将各种变量放入函数中，叫做闭包，提高安全
//当一个变量没有声明var,let,const类型时，它将会是一个全局变量，会产生调试的错误
```

##### 	2.1.2 在ES6中提出了变量定义的关键词:（let/const）

- 优先使用const,在数据需要修改的时候，使用let,迫不得已var

- 千万不能忘记var的原理跟使用方法，因为面试需要

#####  2.1.3 词法作用域

​	即静态绑定

​	好处：

- 函数定义时绑定了某个变量，后面就不会发生变化
- 便于理解，便于调试，不容易出错

##### 2.1.4 闭包

​	闭包的根源是词法作用域

​	主要目的:

- 为了保护变量，不被外部修改
- 为了使数据在内存中驻留
  - （可能引发的内存泄漏）

```js
var count = 1;  //count是暴露在外的，可能被篡改，不安全

function Counter(){
    let count = 1;
    //使用闭包，保护count的安全
    //能够确保count在函数调用之后会一直存在，不会被释放
}

```


### 2.1 DOM节点:文档对象类型

##### 节点树:
一个文档的所有节点，按照所在的层数，可以抽象为一种树状结构，这种树状结构就是DOM树.
```js
document //代表整个文档树

```
其他节点有三种层级关系
- 父节点关系(parentNode):直接的那个上级节点
- 子节点关系(childNodes):直接的下级节点
- 同级节点关系(sibling):拥有同一个父节点的节点

##### 第一种:

```js
//在操作一个DOM节点前，我们需要通过各种方式先拿到这个DOM节点。最常用的方法是:
document.getElementById('xx')   //id
document.getElementsByTagName('xx')  //元素标签 
document.getElementsByClassName('div') //CSS选择器


document.write(x.getAtteribute("属性名"))//返回目标对象指定属性的属性值
x.setAttribute("title","图书列表"); // 修改元素节点的属性值
x.removeAttribute()  //删除指定元素的属性


 //小知识:因为这些方法繁琐，不够简便灵活，所以出现了第三方的框架，如jQuery.简化了dom操作，$();
```

#####  查找节点的另一种：Element节点

```js

document.querySelector('#test-js');

//querySelector 只返回一个
//querySelectorAll 返回一个NodeList 类似Array的对象
document.querySelector("div")/(".xxx")/("#xx")
						/(div > span)/(div span)
document.querySelectorAll('img');
			
```



##### 2.1.1 定位节点

```js
m.childNodes;  // 显示所有的孩子节点
m.children;    //显示孩子节点
m.childNodes[2] //使用数组，获取第2个孩子节点
m.parentNode; //引用当前节点的父节点
m.childNodes[3].prevSibling; // 上一个兄弟节点
m.childNodes[3].nextSibling; // 上下个兄弟节点

 test.firstElementChild // 获取节点test下第一个子节点
 test.lastElementChild; //获取最后一个子节点


// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test-table').getElementsByTagName('tr');


```

##### 2.1.2 修改

在选中了某个节点后，我们可以修改:

```js
 m.firstChild.nodeValue = 'xxx';
m.childNodes[1].innerText = 'xxxxxxx';
 //关键词 : innerText ,nodeValue
innerHTMl :可以修改DOM节点的内容，还可以修改DOM节点的子树
```

##### 2.1.3 新建，附加节点

```js
//添加一个文本节点:appendChild
	var t = document.createTextNode('世界和平');
	m.appendChild(t);
//appendChild:把一个子节点添加到父节点的最后一个子节点
//insertBefore ： 子节点插入指定位置
xx.insertBefore(子节点,xx) //将子节点插入xx节点的上面
list.appendChild(js); //父节点.appendChild(子节点);

//添加一个元素节点:insertBefore
	m.insertBefore();

//添加一个注释节点:appendChild
	m.appendChild();	
//创建一个节点
var a = document.createElement('p');
a.id = 'aa'; //给节点添加id
a.innerText = 'xx';

```

##### 2.1.4 替换，删除

```js
	//必须从父节点开始替换，删除
m.replaceChild(); //替换节点
m.removeChild(); //删除节点
```

##### 2.2.1 API

```js
attributes 获取节点上的所有属性
getAttribute/setAttribute 获取/设置属性

```


### 3.1 事件
事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM支持大量的事件

##### 3.1.1 EventTarget接口(监听事件-触发)
提供三个实例方法:
- addEventListener() 绑定事件的监听函数
- removeEventListener() 移除事件的监听函数
- dispatchEvent() 触发事件

**1、addEventListener()示例**
```js
target.addEventListener(type,listener,useCapture)
接受三个参数:
- type:事件名称,如 "click"
- listener:监听函数，当事件发生，触发函数
-useCapture:布尔值，true将在捕获阶段触发，默认为false

例:
var button = document.getElementById('btn');
button.addEventListener('click',function a(){},false)
```
**2、removeEventListener()**

```js
移除addEventListener()方法添加的函数,注意，移除
的监听函数，必须是addEventListener添加的那个函数
，且在同一个元素节点上，否则无效

div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);
```
一些基本的事件:
```js
---------------鼠标事件----------------
- click:鼠标点击事件
- dblclick:同一个元素双击触发
- mousedown:按下鼠标键触发
- mouseup:释放按下鼠标触发
- mousemove:鼠标在一个节点内部移动时
- mouseenter:鼠标进入一个节点,进子节点不触发
- mouseover:鼠标进入一个节点，进子节点再次触发
- mouseout:鼠标离开节点触发，离开父节点也触发
- mouseleave:鼠标离开节点触发，离开父节点不会触发
- contextmenu:按下鼠标右键时
- wheel:滚动鼠标滚轮时触发

---------------键盘事件----------------
- keydomn:按下键盘时触发
- keypress:按下有值键触发,即Ctrl、Alt、Shift、Meta
- keyup:松开键盘时触发

---------------表单事件----------------
- input:元素的值发生变化后,连续触发
- change:元素失去焦点时
- select:在<input>,<textarea>里选中文本触发
选中的文本可以通过event.target元素的selectionDirection、selectionEnd、selectionStart和value属性拿到
- change:当<input>、<select>、<textarea>值发生变化时触发，不会连续触发
- invalid:提交表单时，不满足校验条件时触发
- reset:当表单重置时
- submit:当表单数据向服务器提交时，发生对象是 <form>

---------------拖拽事件----------------
- drag:拖拉过程中，在被拖拉的节点上持续触发
- dragstart:用户开始拖拉时，在被拖拉的节点触发
- dragend:拖拉结束时，触发
- dragenter:拖拉进入当前节点时，当前节点触发一次
- dragover:拖拉到当前节点时，当前节点持续触发
- dragleave:拖拉操作离开当前节点范围时，在当前节点上触发
- drop:被拖拉的节点或选中的文本,释放到目标节点时,在目标节点上触发

---------------常用事件----------------
- beforeunload:在窗口、文档，各种资源将要卸载前触发.如关闭页面时，触发函数


```


​	event.x，event.y，获取鼠标的位置

##### 3.2.1 浏览器事件

- window.onload   -- 浏览器载入文档事件
- window.onfocus -- 浏览器获得焦点
- window.onblur  -- 浏览器失去焦点
- window.onscroll -- 浏览器拖动滚动条
- window.onresize  --改变窗口尺寸

##### 3.3.1 HTML元素事件

用户与页面的交互发生在按钮，图片等系列HTML元素上的响应

​	例:

```js
onclick -鼠标单击
ondbclick -鼠标双击
onmmouseout - 鼠标移出链接所在的位置
onmouseover - 鼠标经过链接所在的位置
onmouseup - 鼠标在链接的位置放开
onkeydown - 键被按下
onkeyup - 键被送开
onblur - 失去焦点
onfocus - 获得焦点
onchange - 文本内容改变
onkeypress - 按下并放开该键
onchange - 当改变时

ondragstart - 开始拖拽时
ondrag - 拖拽进行中
ondragend - 拖拽结束
```


​	

​	当定义一个函数时，我们可以通过定时，来委托给浏览器调用

```js
function xxx(){
    console.log('时间延长');
}
//通过定时任务的方式，委托给浏览器调用:
setTimeout(xxx, 3000);
setInterval(xxx, 3000);
//通过事件的方式，委托给浏览器监听并触发调用:
document.querySelector('button').onclick = xxx;
```

##### 3.4.1 Location对象
Location对象用来提供URL相关信息和操作方法
通过`window.location`和`document.location`属性,拿到这个对象

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1d57147e1a345d2b5ce81ca1e6a740b~tplv-k3u1fbpfcp-zoom-1.image)

```js
// 跳转到新网址
document.location.href = 'http://www.example.com';
```
**方法**

1、Location.assign()

接受一个URL字符串作为参数，使浏览器跳转新页面
```js
document.location.assign('http://www.example.com')
```
2、Location.reload()

使浏览器重新加载当前网址，相当于浏览器刷新功能
```js
// 向服务器重新请求当前网址
window.location.reload(true);
```



### 4.1 JavaScript核心内置对象

```js
String -字符串
Math -处理数学运算
Date -提供操作日期和时间的方法
Array - 数组模型,储存数据
Function - 提供构造新函数的模板
Object - 包含js对象所共享的基本功能
RegExp - 表述了一个正则表达式对象
```



##### 4.1.1Math :主要作用在Number,	进行数学运算

 ```js
Math.randon();//求随机数
Math.pow(4,2)  //4的二次方
Math.sprt(4) //开根号2
Math.exp(2); //自然指数
Math.randon().toFixed(2);//取前两位数. 

Math.max(2,-1,5);//5，返回参数之中最最大的值,参数为空，返回Infinity
Math.min();//返回最小的值,参数为空,返回-Infinity

Math.round();//四舍五入
 ```

##### 4.2.1Date:时间

```js
let d = new Date();//当前时间
let d = new Date('2010-08-04');
let d = new Date('1995-12-17T03:24:00');
let d = new Date("October 13, 1975 11:13:00");
let d = new Date(79, 5, 24);            // 年月日
let d = new Date(79, 5, 24, 11, 33, 0); // 年月日时分秒(创建指定日期时间)
d.setFullYear(2010,0,14);    // 2010.1.14


本地时间表示
var time = new Date(2013,0,1);

time.toLocaleString();//2013年1月1日 上午 12:00:00
time.toLocaleDateString()//2013年1月1日
time.toLocaleTimeString()//上午12:00:00


```

##### 4.3.1 RegExp :正则匹配

```js
var re2 = new RegExp('ABC\\-001');

var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true

re.test()//返回一个布尔值，表示当前模式是否能匹配参数字符串
re.exec()//返回匹配结果，发现匹配，就返回一个数组，否则返回null
```

#####   4.4.1 数组的建立
```js
  
var arr = [1, 2, "hello", true]; 
arr.length      // 4  从0开始
arr.concat([33, 44]) // [1, 2, "hello", true, 33, 44]

Array.isArray(arr);//true //返回一个布尔值，表示参数是否为数组，这可以弥补typeof运算符的不足



arr.flat(); // 将其压平
arr.includes(); // 判定是否存在某个元素
arr.indexOf(1);  //判定给定元素在数组中第一次出现的位置，没有返回-1
arr.lastIndexOf(); //判定给定元素在数组中第一次出现的位置，没有返回-1


arr.slice();  // 复制
arr.splice(3); // 删除、添加，默认行为是删除从 3 到最后一位的元素，返回被删除的元素组成的数组
arr.splice(3, 1); // 删除多少个元素
arr.splice(2, 0, 11111); // 添加

arr.reverse(); // 将数组内元素反向排序，注意，它是一个破坏性的函数
arr.sort();    // 排序，破坏性的函数
arr.sort(function (a, b) { if (a > b) return -1; else return 1 });
	
```

##### 4.4.2 数组的基本语法

```js
var arr = [1, 2, "hello", true];
arr.length      // 4
arr.concat([33, 44]) // [1, 2, "hello", true, 33, 44]
arr.toString();//返回数组的字符串形式

arr.flat(); // 将其压平
arr.includes(); // 判定是否存在某个元素
arr.indexOf/lastIndexOf(1);  // 判定某个元素的序号

arr.slice();  // 复制
arr.splice(3); // 删除、添加，默认行为是删除从 3 到最后一位的元素，返回被删除的元素组成的数组
arr.splice(3, 1); // 删除多少个元素
arr.splice(2, 0, 11111); // 添加

arr.reverse(); // 将数组内元素反向排序，注意，它是一个破坏性的函数
arr.sort();    // 排序，破坏性的函数
arr.sort(function (a, b) { if (a > b) return -1; else return 1 });

var xx = [1,3,2,'hello'];
xxs.indexof(1);  //元素1的索引为2 
//indexof:搜索元素的位置

var a = [1,2,3,4,5,6,7,'ss'];
a.slice(2,4);   //从索引2开始到4之内的所有值，不包括4  为3,4
//截取Array的部分元素，然后返回一个新的Array

push()向Array的末尾添加若干元素
var arr = [1,2];
arr.push('a','c');
arr; //[1,2,'a','c']

shift()删除数组的第一位元素，并返回该元素
arr.shift();//1
unshift()向Array的第一位添加若干元素，返回数组长度
arr.unshift('x'); //  ['x',1,2]

pop()则把Array的最后一个元素删除掉，并返回该元素
arr.pop();  //将'c'删除  ,重复多次，将多次删除
shift()则把Array的第一个元素删除
arr.shift(); // 将1删除，重复多次，多次删除

sort()对Array进行排序，会直接修改当前Array的元素位置
arr.sort();

reverse()把整个Array的元素反转排序
arr.reverse();
	
splice()是修改Array的万能方法，可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
例:var arr = [1,2,'xxx'];
	arr.splice(1,2,'xxx') 从1开始往后删除两个,包括1本身开始

concat()将Array和另一个Array连接起来，返回一个新的Array
var a = [1,2,3,4];
var b = a.concat([22,22,33]); //返回[1,2,3,4,22,22,33]

join()将Array的元素连接起来，返回连接的字符串
var a = ['a','x','s'];
a.join('-'); // a-x-s  如果不是字符串，将自动转换成字符串后再连接
	
```
**Map()方法**
```js
方法将数组的成员依次传入参数函数,把每次的执行结果组成一个新数组返回。
var numbers = [1,2,3];

numbers.map(function (n){
    return n + 1;
})//[2,3,4]

map()可接受一个函数为参数，向函数的参数传三个参数：当前成员、当前位置、数组本身

[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});// [0, 2, 6]

elem为当前成员的值
index为当前成员的位置
arr为原数组（[1, 2, 3]）
```
**forEach()方法**
```js
forEach()与map()类似，forEach()方法不返回值，只用来操作数据
如果数组遍历的目的是为了得到返回值，那么使用map()方法，否则使用forEach()方法。
同样接受三个参数：当前值、当前位置、整个数组。

function log(element,index,array){
    console.log('['+index+'] = '+element);
}
[2,5,9].forEach(log);//[0] = 2、[1] = 5、[2] = 9
```
forEach()方法无法中断执行，会将所有成员遍历完

forEach()会跳过数组的空位

**filter()方法**

filter()方法用于过滤数组成员，满足条件的成员将组成一个新数组返回

filter()同样接受如上三个参数：当前成员，当前位置和整个数组。

```js
[1,2,3,4,5].filter(function (elem)){
    return (elem > 3);
}//[4, 5]

arr.filter(Boolean);//也可筛选类型
```

**some()、every()**
两个方法都返回一个布尔值,判断数组成员是否符合条件

```js
some方法是只要一个成员的返回值为true，则整个方法返回值为true，否则为false

var arr = [1,2,3,4,5]

arr.some(function (elem){
    return elem > 3;
})//true


every方法是需全部成员返回值为true，则整个方法返回值为true，否则为false

arr.every(function (elem){
    return elem >3;
})//false

对于空数组，some方法返回false，every方法返回true
```



##### 4.5.1 typeof :获取对象的类型

```js
typeof 123;//number
typeof 'str';//string
typeof null;//object
```

##### 4.6.1包装对象

```js
var n = new Number(123); //生成新的包装类型
//虽然看起来一样，但类型已经变成object，当原始和包装后的对象用=== 比较，会返回false
//所以少用包装对象
//用parseInt()或parseFloat()来转换任意类型到number;
```

##### 4.7.1 window对象:充当全局作用域，而且表示浏览器窗口

```js
	window.innerWidth //页面长度
	window.innerHeight //页面高度
```

##### 4.8.1 JSON语法

在JSON出现之前，大家一直用XML来传递数据

```js
//JSON语法是JAVAScript对象表示语法的子集
//格式为:
		JSOn名称:值   如:"key":"value"
//key[0].value 可访问 ，JSON与XML都用于接收web服务端的数据
--JSON实例:
{
    "sites": [
    { "name":"菜鸟教程" , "url":"www.runoob.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" }
    ]
}  //JSOn更简短，不需要结束标签，可以使用数组
	//XML需要XML解析器来解析，JSON直接用JavaScript函数来解析
	//通过JSON.parse(); 将JSON字符串转换成JS对象
	//JSON.stringify(); 将JS值转换为JSON字符串
--XML实例:
    <sites>
      <site>
        <name>菜鸟教程</name> <url>www.runoob.com</url>
      </site>
      <site>
        <name>google</name> <url>www.google.com</url>
      </site>
      <site>
        <name>微博</name> <url>www.weibo.com</url>
      </site>
    </sites>
```
JSON对象是JS的原生对象，用来处理JSON格式数据，有两个静态方法，JSON.stringify()和JSON.parse()
```js
JSON.stringify()
//将一个值转换为JSON字符串，此字符串符合JSON格式，且可以被还原

JSON.parse()
//将JSON字符串转换成对应的值
//如:
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]

```
##### 4.9 String对象
方法：
```js
s.charAt(1);
charAt();//返回指定位置的字符，参数是从0开始编号
的位置

s1.concat(s2);
concat方法连接两个字符串，再返回一个新的字符串
这个方法可以接收多个参数:s1.concat('a','b');

s1.slice(0,4);
slice()截取字符串并返回，第一个参数是截取的开始位置，第二个参数是结束位置(不含该位置)

s1.trim();
trim()去除字符串两端的空格，返回一个新字符串，不改变原字符串

toLowerCase()、toUpperCase()
toLowerCase方法将一个字符串全部转为小写
toUpperCase则将一个字符串全部转为大写
都返回一个新字符串

s1.match('aa');
match方法用于确定原字符串是否匹配aa,返回一个数组，如没有找到匹配，则返回null

s1.split('|');
按照规则分割字符串，以数组形式返回，还可接收第二个参数：决定返回数组的成员数
如果省略规则，则返回原字符串，以数组形式


```


##### 4.10 对象
对象本身就是数组

对象是一种无序的集合数据类型，它由若干键值对组成。

```js
    var xiaoming = {
        name:'十五',
        age:'18',
        score:null
        //键值对
        //key:value
    }
    
    xiaoming.name;//'十五'
    xiaoming.age;//18
    
    //判断一个属性是否为xiaoming自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法
    
    xiaoming.hasOwnProperty('name'); // true
    xiaoming.hasOwnProperty('toString'); // false
    
```




### 	5.1 window对象/杂项

##### 5.1.1 window:浏览器窗口对象

```js

```



##### 5.1.1 arguments:它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数

```js
 function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);  // 利用arguments 可以获得调用者传入的所有参数，即使函数不定义任何参数，还是可以拿到参数的值
 //实际上arguments最常用于判断传入参数的个数。你可能会看到这样的写法：
	function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}
```

##### 5.1.2  rest参数 (ES6新标准)

```js
	function foo(a,b,...rest){
        console.log('a='+a);
        console.log('b='+b);
        console.log(rest);
    }  
foo(1,2,3,4,5) //结果:a=1,b=2,Array[3,4,5] 
		//多余的参数将以数组形式交给变量rest,所以不再需要arguments我们就获取去了全部参数
```

##### 5.1.3 ES6中解构赋值

```js
	var [x,y,z] = ['hello','java','es6'];
	console.log('x = ' + x + ', y = ' + y + ', z = ' + z);
	//输出x = hello, y = jave, z = es6
```



### 	6.1 循环与判断
**比较运算符**

请注意 `==` 与`===`的不同

- 第一种是`==`比较(相等运算符)，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果;
- 第二种是`===`比较(严格相等运算符)，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

##### 6.1.1 for循环

```js
	var att = ['xx',11,'ss','z'];
	var i;
	for(i=0;i<att.length;i++){
        var aa = att[i];
        console.log(aa);
    }  //遍历出 xx,11,ss,z
		//breck表示退出循环
	for(;;){ // 是个死循环
        ..
    }
```

##### 	6.1.2: for..in循环可以把一个对象的所有属性依次循环出来

```js
 var o = {
     name:'xx',
     age:12,
     city:'jiangxi'
 };
var o2= [1,2,'xx'];
for(var key in o){
    console.log(0key);  // name,age,city  只是遍历属性，并不是遍历出值
    console.log(02[i])
}xxxx

 
```

##### 6.1.3 switch 

```js
	switch(age){
        case 18:console.log('xxx');
        case 22: console.log('xxxxx');
            break;
    }
```


##### 6.2.1   if判断
请注意判断时使用的等于号（=）
- 赋值表达式 (=)
- 严格相等运算符 (===)
- 相等运算符 (==)

```js
if (){  //默认使用 === 进行判断，即既判断类型，又判断值
    
    }else if(){
        //再次进行判断
     }else{
        //不满足条件时，该执行的语句
        //else会跟着最近的if语句
}
```

##### 6.3.1  Swith/Case
多个if...else连在一起使用时，可以使用更为方便的swith结构

每个case代码块内部的break语句不能少，否则会一直执行下去，而不是跳出去。
```js
switch(age) {
case 18:
    console.log("you should study")
case 22:
    console.log("you should go to work")
    break;  //使用 break 跳出分支
case 60:
    console.log("you should have a rest")
    break;
default:
    console.log("我没有什么好提醒你的")
} //使用 default 表示其他分支都不匹配的情况，可以省略
```

##### 6.4.1 while循环
while语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。


```js
while(条件){
    ...
}

```

##### 6.5.1 三目运算(三元运算符)

- 简短，快捷
- 没有return，不能写复杂句式

```js
boolend? 分支1:分支2
条件? 判断1:判断2
---------------------------
(条件) ? 表达式1 : 表达式2
如果条件为'true',则返回 表达式1 的值，否则返回 表达式2 的值.
```

##### 6.5.2 自增、自减运算符

```js
    var x = 1;
    var y = 1;
    
    x++  //1
    --y  //2
    
//放在变量之后，会先返回变量操作前的值，再进行自增/自减操作，
//放在变量之前，会先进行自增/自减操作，再返回变量操作后的值
    
```



### 7.1 基于原型链的继承: _proto_

```js
 var na = {
     play: function(){console.log('呐')}
 }
 var xiaoming = {
     name:'小明',
     age:18
 }
 xiaoming._proto_ = na;  
//将xiaoming的爸爸指定为na，那么，xiaoming将可以用na的所有属性方法
//通过 __proto__ 去寻找其父

```

编程的潮流是简便、高效率，

​	为了让事情变得简化，我们可以写入函数中，使用函数消除冗余

```js
var person = {
    ear:function() { console.log('xx')}
}
function(name,age){
    var a = {
        name:name,
        age:age
    }
}
a._proto_=person;  //指定父类为person,获取父类的属性.
return a ;

var xiaohong = createStudent('小红',18);  ...
```

再如JS提供的一种内部语法

```js
 function person(){
     this.ear = function() { console.log('xx')}
 }
function ag(name,age){
    this.name = name,
    this.age = age
}
ag.prototype = new Person();
var xiaohong = new ag('小红',18);
```

构造函数为多个实例提供属性，方便，但其缺点是构造函数的多个实例之间，其属性是封闭的，无法共享，其解决方法就是JavaScript 的原型对象（prototype）
```js
function Car(name){
    this.name = name;
}

var car1 = new Car('十五');
var car2 = new Car('十六');

car1.name  === car2.name  //false

```

##### 原型、原型链与继承
概念：所有引用类型(Object、Array、Function、Date、RegExp)都是对象。对象都有__proto__属性。



### 8.1 异步请求:AJAX

AJAX=异步JavaScript和XML

是用于创建快速动态网页的技术

##### 8.1.1 XMLHttpRequest对象

```js
XMLHttpRequest用于在后台与服务器交换数据
 //创建XMLHttpRequest对象
	var iable = new XMLHttpRequest();
	//在陈旧的IE5、IE6中,用ActiveXobject
	var iable=new ActiveXObject("Microsoft.XMLHTTP");

//使用open()、send()方法将请求发送到服务器
	open(method,url,async)
如:xmlhttp.open("GET","ajax_test.asp",true);
							//method：请求的类型；GET 或 POST
							//url：文件在服务器上的位置
							//async：true（异步）或 false（同步）

	send(string)     		//string：仅用于 POST 请求

```

### 9.1作用域及模块化

var:使用var定义的数据作用域，是函数级别的.

let/coust:块级作用域  优先使用级:const>let>var

在ES6中推出了标准的模块写法 

1. 模块文件中export
2. 在使用的地方import

```js
//模块的导出
var name = 'tom';
var hello = function(){alert('Hello,World')};
export {name,hello};
或:在声明时，一齐导出
export var aa = 'xx';
export default 'heelo world'; //默认导出，只可一个

//模块的引用
<script type="module">
	import{name,heelo} from "js的路径";
	import * as x from "路径";  //通过as 来进行赋值或者换命名
	//尽量将模块分成多个js文件，每个js文件可成一个模块;
    </script>

```
### 10.1 杂类

#### 10.1.1 严格模式(strict模式)
js并不强制使用var申明变量，这带来了严重的后果

```js
 'use strict'; //严格模式
 //变量强制要通过var申明变量，否则报错
 
```
#### 10.1.2 console对象与控制台
console.table();//转换成表格显示

例:
```js
var languages = [
  { name: "JavaScript", fileExtension: ".js" },
  { name: "TypeScript", fileExtension: ".ts" },
  { name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);
//以表格打印
```
console.count();//输出调用次数

console.dir();
//对于输出 DOM 对象非常有用，因为会显示 DOM 对象的所有属性

#### 10.1.3 定时器
setTimeout() 在特定毫秒后，触发code
```js
setTimeout函数接收两个参数

setTimeout(fun/code,time);
第一个参数是fun/code,是将要执行的函数名或代码段
第二个参数是time,是延迟执行的毫秒数
```
setInterval() 每隔一段时间执行一次，无限执行
```js
其接收函数与setTimeout一致
```
clearTimeout()、clearInterval() 取消对应定时器









