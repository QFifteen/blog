[toc]
# CSS 层叠样式表


## 一、选择器


#### 1.1 Class 选择器
```css
.mytitle{
	color: red;
}
类名前也可以加限制,表示只能用于这种标签
h1.mytitle2{
	background-color:green;
}

```css
例:<h1 class="mytitle mytitle2">hello</h1>
```



---

#### 1.2 id选择器
```css

ID名,自定义，以#开头(一般一个ID选择,只用于一个地方)
#mytitle{
	color:red;
}
p#mytitle2{
	
nt-size:24px;
}
```

```css
例:<h1 id="mytitle">xxx</h1>
```

---

#### 1.3 标签选择器
```css

以html标签名作为选择器名称，就是标签选择器
body{ 
				background-color: aqua;
}
h1{
				clor:red;
}
```

---

#### 1.4 后代选择器
```css

后代选择器，用空格隔开多个选择器
如:
h1 span{
				color: red;
}
table tr td p{
				font-size: 32px;
}
ul#mylist1 li{
				color: green;
}
```

```css
<ul id="mylist1">
			<li>xxxx</li>
			<li>yyyy</li>
		</ul>
```

---



#### 1.5 通配符选择器
```css
*星号作为选择器名，就是通配符选择器,代表所有元素
*{    
			
			margin: 0px;
				
	        padding: 0px;
 } 
```

---

#### 1.6 相邻兄弟选择器
```css
h1+h2{
	color:red;
}
```

---

#### 1.7 子元素选择器

子元素选择器，用>隔开选择器
例:
```css
h1>span>u{
				color: red;
	}
组选择器：把多个选择器写到一起，用逗号隔开
h1,h2,h3,h4,h5{
				color: red;
}
#id1,#id2{
				background-color: #008000;
}
```
---

#### 1.8 伪类选择器
```css

a:link{  /*未访问过的链接*/

				color: black;
				text-decoration: none; /*去除下划线*/
}

a:visited{ /*已访问过的链接*/
				color: #FF7F50;
}

a:hover{/*鼠标在链接上方*/
				color:red;
				text-decoration: underline; /*出现下划线*/
}
a:active{/*激活链接时*/
				color: green;
}
a:focus{/*匹配获得当前焦点的a元素*/ 
    
    
}
a:lang(c){/*匹配lang属性等于c的a元素*/
    
}
a:first-child{/*匹配父元素的第一个子元素*/
    
}
a:nth-child(2n+1){/*匹配倍数的元素*/
    
}

a:target{
    
}
//匹配相关URL指向的元素

//解释：URL后面跟锚点#，指向文档内某个具体的元素。
这个被链接的元素就是目标元素(target element)，:target选择器用于选取当前
活动的目标元素。


```

#### 1.9 伪元素

```css
x:first-line     //匹配x元素的第一行,向文本的首行设置特殊样式。
x:first-letter  //匹配x元素的第一个字母,文本的首字母设置特殊样式：
x:before        //在x元素之前插入生成的内容
x:after			//在x元素之后插入生成的内容
x:first-child   //匹配首个子元素

---content特殊值
	1.none:不生成任何内容
	2.attr: 插入标签属性值
	
例：
x:after{
    content:attr(href)
}
---url 插入一个图片、视频、音频等资源

例:
x:before{
    content:url(xxx);
}
---string:插入字符串
    
```

```css
 div p:nth-child(2){
      
    }
    //选择div下的第二个p标签
```
#### 1.10 优先级
- 同类型，同级别的的样式，后者高于前者
- id > 类 > 标签 > *
- 内联>ID选择器>伪类>属性选择器>类选择器>标签选择器>通配符选择器>继承样式
- 近的 > 远的 (内嵌 > 内部 > 外联)
-  important > 内嵌 > ID > 类 > 标签|伪类|属性|>伪对象...


## 二、刻度

相对长度单位包括有: em,ex ch,rem,vw,vh,vmax,vmin

绝对长度单位有: cm,mm,in,pt,q,pc,px

1in = 2.54cm = 25.4 mm = 72pt = 6pc = 96px


**em 相对于字元素的字体大小,一般是当前字体的大小,
1em = 16px**

**rem 相对于父元素的字体大小，一般是HTML的字体大小,默认是16px**




## 三、盒子模型




大多元素会在浏览器生成一个矩形的区域，包含四个组成部分，从內向外依次是：
* 外边距(margin)
* 边框(border)
* 内边距(padding)
* 内容(content)

margin  -外边距

padding  -内边距

#### 1.1 border  -边框

```css
border-style:none
	none: 默认无边框
	dotted:定义一个点线边框
	dashed:定义一个虚线边框
	solid:定义实线边框
	groove:定义3D沟槽边框
	ridge:定义3D脊边框
	inset:3D嵌入边框
	outset:3D突出边框
边框宽度:
border-width:
	可指定长度值或使用关键字":thick(粗)、medium(默认)、thin(细)

边框颜色:
border-color:
	- 'red' - RGB值 "rgb(255,0,0)"   -hex 16进制 "#000000"

边框单设置:
border-top-style:solid;
border-bottom-style:solid;

border-style:dotted solid;  //上下、左右

input点击设置无边框
outline: none; //点击input时无边框出现
.....


```



#### 1.2 margin -外边距、padding -内边距

```css
margin:10px,10px,10px,10px;
		上   右   下   左

```


#### 1.3 Position 定位

```css
1.static -即没有定位，遵循正常的文档流
	position:static;

2.fixed - 元素位置固定，窗口滚动也不会移动
是以窗口为参考,可以用来回顶部
	position:fixed;

3.relative - 相对定位(父定位)
	position:relative;

4.absolute - 绝对定位(子定位,通常会设置宽，高) 
对象脱离常规流，此时偏移属性参照的是`离自身最近的定位祖先元素`，如果没有定位，但回溯到body元素
	position:absolute;

5.sticky - 粘性定位(基于用户的滚动来定位)
	position:sticky; //当滚动出目标区域后，会固定在目标位置,如导航条;
	
6.center:与absolute一致,但偏移定位是以祖先元素的中心点参考，垂直居中
    position:center;
    
7.层重叠顺序:
	z-index:10; //在使用绝对定位(position:absolute)时，才能用重叠
	z-index:-1;	//字数越大，越在前

```

#### 1.4 Float 浮动

```css
float:left;   //向左浮动
float:right;	//向右浮动

------清除浮动
	clear:both;
	clear:left;
	clear:right;
```

#### 1.5 水平&垂直对齐，居中

```css
margin:atuo;//水平居中,如div
			//通过指定宽度，并将两边的空外边距平均分配
			//当没有设置width属性或100%时，居中对齐将不起作用

text-align:center; //文字居中对齐

padding:10px 10px; //水平且垂直对齐

line-height:100px;  //垂直居中

position:absolute;   //position 和 transform 垂直居中
transform:translate(-50%,-50%); 
	
```


```css
隐藏元素: 
	display:none;  //不占用空间
	visibility:hidden; //隐藏后仍占空间

内容溢出时处理:
	Overflow:visible;	//默认值。内容不会被修剪，会呈现在元素框之外。
	Overflow:hidden;	//会被修剪，并且其余内容不可见。
	Overflow:scroll		//内容会被修剪，但浏览器会显示滚动条查看剩余内容
	Overflow:auto;		//如果被修剪,但浏览器会显示滚动条查看剩余内容
	

```

#### 1.6 box-sizing属性(默认不用设置)、另一属性值:border-box

**padding和border不会被包含在设定的width和height内**

对象的实际宽度等于`border + padding + width`之和

是标准盒子下的盒模型


**1.6.1border-box**
```css
      box-sizing: border-box; 
      /*对象的实际宽度就等于设定的width*/
      /*即使定义了padding和margin也不会改变该对象的宽度,是怪异模式下的盒模型*/
      
```

#### 1.7 Css画图
示例:
```css
    <style>
        .box{
            width:50px;
            height:50px;
            border:100px soild blue;
            border-color:blue transparent transparent transparent;
            /*设置边线的颜色，transparent表示透明 按上右下左的顺序*/
            /*此设置将出现一个向下的三角形*/
        }
    </style>
    
    
    <body>
    <div class='box'></div>
    </body>
```
#### 1.8 边距折叠




## 四、文本

- 十六进制值 - 如: **＃FF0000**
- 一个RGB值 - 如: **RGB(255,0,0)**
- 颜色的名称 - 如: **red**

#### 1.1 字体颜色

```css
color:red; -定义文本的字体颜色
```

#### 1.2 文本对齐方式

```css
- text-align:center; //文本水平对齐
- text-align:right;	//右对齐
- text-align:justify; //每一行被展开为宽度相等，左，右外边距是对齐
```

#### 1.3 删除下划线

```css
text-decoration:none;  //删除超链接下划线

text-decoration:overline; //在文字上方添加一条横线
text-decoration:line-through; //在文字中间画一条线
text-decoration:underline; //文字下划线

```

#### 1.4 文本缩进

```css
text-indent:50px;  //首字母缩进
```

#### 1.5 字体

```css

/*用一个属性指定多个声明*/
用法:
font:"font-style font-variant font-weight
font-size/line-height font-family";

font-size和font-family的值是必需的。如果缺少了其他值，
默认值将被插入，如果有默认值的话。


 font-style:normal; //正常显示 
 font-style:italic; //斜体
 font-style:oblique; //斜体
```

#### 1.6 链接

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

#### 1.7 列表

```css
 ul:无序
 ol:有序
	
	list-style-type:none;  //清除列表项标记
	list-style-type:circle; //设置列表项标记为空心圆
	list-style-type:square; //设置为实心正方形
	list-style-type:upper-roman; //设置为罗马数字 -一般用于有序列表
	list-style-type: lower-alpha; //设置为字母
	
```

#### 1.8 表格

指定了一个表格的Th和TD元素的黑色边框：

```css
table,th,td,{
    border:1px solid blue;
}	//将具有双边框，因为表格th/td有独立的边界
		
```

折叠边框

```css
table{
    border-collapse:collapse;
} //折叠成单一的边框
```



文字对齐

```css
text-align:right;	//表格文字对齐方向

vertical-align:bottom;  //文字垂直对齐
```
#### BFC与IFC
BFC:'块级格式化上下文'
IFC:'行内格式化上下文'

当元素不重叠，阻止浮动元素覆盖时，就产生了一个BFC区域
通常可以使用`overflow:hidden`在父元素上来触发BFC清除浮动

IFC表现为可重叠覆盖:float:left;right...


## 居中办法
#### 1.margin:0 auto; (水平居中)
条件:1、有宽度 2、块标签 

#### 2.text-align (块标签内对齐)
选项:
start | end | left | right | center | justify | match-parent | justify-all

left:内容左对齐
right:内容右对齐
center:居中对齐
justify:内容两端对齐

#### 3.垂直、水平居中
设置一个定位元素，且上右下左皆为0，margin为auto时将水平，垂直都居中,且父元素自身的高度可动态变化

例：
```css
#div1{
    
    margin: 0 auto;
    position: relative;
}
#div2{
    position:absolute;
    /*居中开始*/
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
}

```

#### 4.垂直居中(line-height)

单行文本,将行高(line-height)设置与块的高度一致

```css
.back{
    width:800px;
    height:300px;
    background-color: darkgray;
    
    /*1.*/
    line-height:300px;
     /*2.*/
     font: 24px/300px "隶书";
     
    
}


<div class="back">
         这是一条内容xxxxxxxxxxxxxxxxx
    </div>
```

<body>
    <div id="div1">
        <div id="div2"></div>
    </div>
</body
```

#### 5.垂直居中
先相对定位,向左偏移50%,上50%,把自身向左移半个宽度，向上移半个高度

例:
```css
#div1{
                width: 200px;
                height: 150px;
                background: lightcoral;
                position: absolute;
                left: 50%;
                top:50%;
                margin-top: -75px;/*反方向移动,高度的一半*/
                margin-left: -100px;/*反方向移动,宽度的一半*/
}
```

文字的对齐:属性(align="absmiddle")

#### 绝对对齐
```css

     <img src="img/018080.png" align="absmiddle"/>电视机
```

#### 6.flex实现 垂直水平 居中
  display: flex; /*设置为flex布局*/

justify-content: center; /*水平居中*/

    align-items: center; /*垂直居中*/

```css

<style>
    .all{
            display: flex;
            justify-content: center;//水平居中
            align-items: center;//垂直居中
        }
</style>

    <body>
        <div clall = "all">
                <img src = "..." alt="">
        </div>
    </body>
```

## 网页布局

#### 负边距
就是margin取负值的情况

当两个div都脱离标准流时(float:left;)，如果前一个div的宽度为100%,后面的div可以通过负边距实现上移，当负边距超过自身的狂宽度将上移，

例:

```html
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        .div1{
            width: 100%;
            height: 100px;
            background-color: darkcyan;
            float: left;

        }
        .div2{
            width: 30%;
            height: 100px;
            background-color: indigo;
            float: left;
            margin-left: -30%;
        }
        .div3{
            width: 50%;
            height: 100px;
            background-color: lightslategray;
            float: left;
            margin-left: -80%;
        }
    </style>
    
    <body>
     <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>
    </body>
```

#### 双飞翼布局(圣杯布局)

经典三列布局

要求:
* 三列布局，中间宽度自适应，两边定宽
* 中间内容优先渲染显示
* 允许任意列的高度最高
* 用CSS 适应不同浏览器,HACK语句


## 图片的操作
#### 图片的摇摆定位
```css
先设背景图:background-imgage:url(...);

background-position:x,y;
<!--(0,0)在左上角,使用x,y轴来变动背景图的位置-->

background-repeat:no-repeat;
<!--使背景图片不重复-->

```

#### background-repeat:如何平铺对象的背景图
```css
    background-repeat:repeat;
    <!--默认，背景图向垂直和水平方向重复-->
    
    background-repeat:no-repeat;
    <!--背景图片不重复-->
    
    background-repeat:repeat-x;
    <!--水平方向重复图像-->
    
    background-repeat:repeat-y;
    <!--垂直方向重复图像-->
```
#### background-size:指定背景图的大小
```css
    background-size:100% 100%;
    <!--设置背景图的宽度与高度，如果只设置一个值,第二个值会设置为auto-->
    
    background-size:cover;
    <!--把背景图像扩展至足够大，以使背景图像完全覆盖背景区域-->
    
    background-size:contain;
    <!--把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域-->

```

## 变形 transform

transform有多个属性,可以是2D的，也可以是3D的效果

#### 2D

##### transform-origin() 原点

允许改变被转换元素的位置

##### translate()  移动元素
translate()方法从当前位置移动元素，根据x、y轴
```css
transform: translate(50px, 100px);
<!--向右移动50px，向下移动100px-->
```
##### rotate() 旋转元素

1. deg 度
2. grad 梯度
3. rad 弧度
4. turn 转，圈

```css
<!--顺时针旋转20度-->
 transform: rotate(20deg);
 <!--逆时针旋转20度-->
  transform: rotate(-20deg);
```
##### scale(宽，高)   增加、减少元素大小

scaleX() 只改变宽

scaleY() 只改变高


根据给定的参数可以调整元素大小
```css
    transform: scale(2, 3);
    <!--将元素增大为原生宽度的两倍和高度的3倍
    -->
    
    <!--(宽、高)-->
    transform:scale(0.5,0.5);
    将元素缩小为原生宽度，高度的一半
```

##### skew(x轴,y轴)  倾斜给定角度


```css
    transform: skew(20deg, 10deg);
    <!--如果未指定第二个参数，那么默认为零-->
    
```

##### matrix(),组合方法
matrix()可以把所有2D的变换组合成一个
```css
matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
```


#### 3D

##### 
skewX()

skewY()



## 动画

### 过渡动画
释义:元素从一种样式逐渐改变为另一种的效果
```css
//简写属性，可以设置四个过渡属性
transition

<!--规定应用过渡的CSS属性的名称-->
transition-property

<!--规定过渡效果花费的时间-->
transition-duration

<!--规定过渡效果的时间曲线。默认是 "ease"。-->
transition-timing-function

<!--规定过渡效果何时开始。默认是 0。-->
transition-delay
```

### 动画

学习动画前，我们先要了解@keyframes 规则

@keyframes 规则是创建动画。

使用方法:
```css
<!--name：自命名-->
@keyframes name{
    from{} <!--代表动画的开始，即0%-->
    10%{}
    50%{}
    ...
    to{}    <!--代表动画的结束，即100%-->
}

<!--使用命名的动画-->
div{
    animation: name 5s;
    
    animation: myfirst 5s linear 2s infinite alternate;
}
<!--animation 并不太注重语法顺序-->
```

animation是动画属性的简写

**写在元素样式里:**
```css
<!--所有动画的简写属性-->
<!--animation不太注重语法顺序-->
animation: myfirst 5s linear 2s infinite alternate;

<!--规定@keyframes动画的名称-->
animation-name:xxx;

<!--规定动画完成一个周期所花费的秒或毫秒。默认是 0。-->
animation-duration:5s;

<!--规定动画的速度曲线。默认是 "ease"。-->
<!--linear:函数线性动画-->
animation-timing-function:ease;

<!--规定当动画不播放时，要应用到元素的样式。-->
animation-fill-mode

<!--规定动画何时开始。默认是 0。-->
animation-delay:0;

<!--规定动画被播放的次数。默认是 1。-->
<!--infinite无限制执行-->
animation-iteration-count:infinite;

<!--规定动画是否在下一周期逆向地播放。默认是 "normal"。-->
animation-direction:normal;

<!--规定动画是否正在运行或暂停。默认是 "running"。-->
animation-play-state:running;

```
---







