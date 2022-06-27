![img](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.lzbsem.com%2Fwp-content%2Fuploads%2F2020%2F05%2FCSS3_Flexbox_20200528_00.jpg&refer=http%3A%2F%2Fwww.lzbsem.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655798300&t=18c3427ac2a3bcdbb428ce22d3176ff2)

[toc]

## 前言

本篇文章是[响应式布局之flex布局详细了解](https://juejin.cn/post/7096408975633023013)的兄弟篇，此文涵盖了之前的大部分，可以直接阅读本文。

写下此篇文章，为一个初入的前端所应有的学习与巩固。

## 一、flex布局是什么

flex 是 **Flexible Box** 的缩写，意思为弹性盒子。采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。为盒状模型提供最大灵活性，也是弹性布局

**原理：通过flex属性，使其变为flex弹性盒子，然后操作父项目与子项目的位置、排序**



**如何使用？**

```css
div{
    display:flex;
    
    /*行内标签设置flex*/
    /*display:inline-flex;*/
}
```

注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

## 二、传统布局与flex布局

页面布局的方式有**负边距与浮动布局**、**圣杯布局**，**多栏布局**、**瀑布流布局**、**弹性布局**等

### 传统布局

- 浏览器兼容性好(对兼容IE比较友好)
- 效率不够高、具有限制性
- 布局琐碎，繁杂
- 对特殊需求布局不方便

### flex布局

- 具有弹性，较灵活多变
- 布局高效方便，操作快捷简单
- 对IE低版本不友好

## 三、注意点

任何一个容器都可以指定为Flex布局，如果值为flex则容器为块标签。

这张图可以更好的理解flex布局

![image](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)



容器默认存在两根轴，

水平主轴是main axis,结束位置叫做main end;

垂直主轴是cross axis,结束位置是cross end;



**主轴与侧轴、行与列、x与y**

在这里，我把水平主轴叫做X轴，垂直主轴叫做y轴，下文同。

X：主轴

Y：侧轴

## 四、flex布局属性

父盒子设为flex布局之后，子元素的float、clear和vertical-align属性会失效

### 1、flex布局之父项属性陈列(6项)

- flex-direction：设置主轴的方向
- justify-content：设置主轴上的子元素排序方式
- flex-wrap：设置子元素是否换行
- align-content：设置侧轴上的子元素排序方式（多行）
- align-items：设置侧轴上的子元素排序方式（单行）
- flex-flow：复合属性，是flex-direction和flex-wrap的集合



#### 1.1、flex-direction属性

设置主轴方向

```css
 flex-direction: row | row-reverse | column | column-reverse;
```

属性值：

|     属性值     |                意义                |
| :------------: | :--------------------------------: |
|      row       | 水平方向，设置从左到右，起点在左端 |
|  row-reverse   | 水平方向，设置从右到左，起点在右端 |
|     column     |        垂直方向，起点在左端        |
| column-reverse |        垂直方向，起点在右端        |



#### 1.2、flex-wrap属性

如何换行，默认下，所有都排在一条轴线上，flex-wrap定义当一条轴线排不下时，如何换行

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```



|     属性     |        意义        |
| :----------: | :----------------: |
|    nowrap    |       不换行       |
|     wrap     | 换行，第一行在上方 |
| wrap-reverse | 换行，第一行在下方 |

#### 1.3、flex-flow属性

简写形式，`flex-flow`是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`

```css
flex-flow: <flex-direction> <flex-wrap>;

flex-flow:row nowrap;  /*水平方向，不换行*/
flex-flow:cloumn wrap; /*垂直方向，换行*/
```

这里不再列出属性值了，具体可参照`flex-direction`和`flex-wrap`的值



#### 1.4、justify-content属性

主轴对齐方式，定义了项目在主轴上的对齐方式

确定好主轴是水平的，还是垂直的。

```css
justify-content: flex-start | flex-end | felx-center | space-between | space-around;
```



|     属性      |            意义            |
| :-----------: | :------------------------: |
|  flex-start   |           左对齐           |
|   flex-end    |           右对齐           |
|    center     |          居中对齐          |
| space-between | 两端对齐，项目之间间隔相等 |
| space-around  |      项目两侧间隔相等      |



#### 1.5、align-items属性

垂直对齐方式(单行)，定义子项目在y轴上如何对齐。适用于单行

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```



|    属性    |                           意义                           |
| :--------: | :------------------------------------------------------: |
| flex-start |                与y轴的起点对齐，从上到下                 |
|  flex-end  |                    终点对齐，从下到上                    |
|   center   |                         居中对齐                         |
|  baseline  |                  与第一行文字的基线对齐                  |
|  stretch   | 拉伸，占满整个容器（不要给子容器设置高度，可设置为auto） |

在面试中，**很多时候会问到如何实现水平垂直居中**？flex布局可以高效、简单的实现这个需求！

重点在于使用`justify-content`和`align-items`分别实现水平和垂直的居中



效果图：

![image-20220522150717985](C:\Users\Administrator\Desktop\新建文件夹\新建文件夹\我的坚果云\笔记\img\image-20220522150717985.png)



##### 具体实现：

HTML部分

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <!-- <h1 class="box_title">justify-content:定义了项目在主轴上的对齐方式</h1> -->
    <h1 class="box_title">justify-content、align-items实现水平垂直居中</h1>
    <div class="div_box">
        <div class="item-box">1</div>
        <div class="item-box">2</div>
        <div class="item-box">3</div>
    </div>
</body>
</html>
```

CSS部分

```css
.box_title{
    text-align: center;
}
.div_box{
    width: 100%;
    height: 500px;
    display: flex;
    background-color: aqua;
    /* 默认为水平主轴 */
    flex-direction:row;
    /* 在使用前，先确定好主轴为水平还是垂直，默认为水平 */
    /* justify-content: flex-start;左对齐 */
    /* justify-content: flex-end;右对齐 */
    /* justify-content: center;居中对齐 */
    /* justify-content:space-around;项目两侧间距相等 */
    /* justify-content: space-between;两端对齐，项目之间间隔相等 */

    /* 水平垂直居中 */
    justify-content: center;
    align-items: center;
    
    margin-top: 20px;
    text-align: center;
    font-size: 1.5em;
    line-height: 90px;
}

.item-box{
    width: 100px;
    height: 100px;
    background-color: slateblue;
    margin: 10px;
}
```





#### 1.6、align-content属性

垂直对齐方式(多行)，定义y轴上子项目如何排序。适用于多行。

适用于出现换行的情况下，单行无效果

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```



|      属性       |                             意义                             |
| :-------------: | :----------------------------------------------------------: |
|   flex-start    |                       与y轴的起点对齐                        |
|    flex-end     |                       与y轴的终点对齐                        |
|     center      |                       与y轴的中点对齐                        |
|  space-between  |            与y轴两端对齐，轴线之间的间隔平均分布             |
|  space-around   | 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。 |
| stretch(默认值) |                      轴线占满整个交叉轴                      |



#### align-content和align-items区别：

- `align-items`适用单行情况下，`align-content`适用多行情况下
- `align-content:center`对单行是没有效果的,而`align-items:center`不管是对单行还是多行都有效果,而在我们日常开发中用的比较多的就是`align-items`。



### flex布局之子项属性陈列(6项)

- order：定义项目的排列顺序，数值越小，排序越靠前，默认为0
- flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
- flex-shrink：定义项目的缩小比例，默认为1，空间不足，该项目将缩小
- flex-basis：定义在分配多余空间之前，项目占据的主轴空间。
- flex：flex属性是`flex-grow`和`flex-shrink`和`flex-basis`的简写，默认为0 1 auto。后两个属性为可选值



#### 1.1、order属性

根据数值定义项目的排序

```css
order:x;
order:-1;
/*数值越小，排列越前*/
```





这里给出一个例子，如图所示：

![image-20220522145503724](C:\Users\Administrator\Desktop\新建文件夹\新建文件夹\我的坚果云\笔记\img\image-20220522145503724.png)

##### 具体实现：

HTML部分

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1 class="box_title">子项目属性：order（排序）</h1>

    <div class="div_box1">
        <div class="item-box">1</div>
        <div class="item-box">2</div>
        <div class="item-box">3</div>
        <div class="item-box">4</div>
        <div class="item-box">5</div>
        <div class="item-box">6</div>
    </div>  
</body>
</html>
```

CSS部分

```css
.box_title{
    text-align: center;
}

.div_box1{
    width: 100%;
    /*设置为flex布局*/
    display: flex;
    background-color: aqua;
    margin-top: 20px;
    text-align: center;
    font-size: 1.5em;
    line-height: 90px;
}
.item-box{
    width: 100px;
    height: 100px;
    background-color: slateblue;
    margin: 10px;
}

/* 第二个div */
.item-box:nth-child(2){
    /* order: -1; 默认是0，所以-1 < 0.数值越小，排越前 */
    order: -1;
}
.item-box:nth-child(4){
    /* 数字4最小，所以排最前 */
    order: -2;
}
```



#### 1.2、flex-grow属性

定义项目的占比例，默认为0



![image-20220522151300245](C:\Users\Administrator\Desktop\新建文件夹\新建文件夹\我的坚果云\笔记\img\image-20220522151300245.png)

```html
    <div class="div_box1">
        <div class="item-box">1</div>
        <div class="item-box">2</div>
        <div class="item-box">3</div>
        <div class="item-box">4</div>
        <div class="item-box">5</div>
        <div class="item-box">6</div>
    </div>  
```

```css
.item-box:nth-child(2){
    /*2号占据比例最大*/
    flex-grow:2;
}
```



#### 1.3、flex-shrink属性

项目的缩小比例，默认为1。负值无效。这里不再多做重复介绍。



#### 1.4、flex-basis属性

在分配多余空间前，项目占据的主轴空间。

```css
flex-basis：<length> | auto;
```



#### 1.5、flex属性

简写形式,属性是`flex-grow`和`flex-shrink`和`flex-basis`的简写，默认为0 1 auto，后两属性为可选

```css
flex:none;| <flex-grow> <flex-shrink>
```



#### 1.6、align-self属性

单项目不一样的对齐，允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```



对于`align-self`可能不太理解，这里有一个例子：

![image-20220522153138538](C:\Users\Administrator\Desktop\新建文件夹\新建文件夹\我的坚果云\笔记\img\image-20220522153138538.png)

##### 具体实现(只给出关键结构的代码)：

HTML部分

```html

    <div class="div_box1">
        <div class="item-box">1</div>
        <div class="item-box">2</div>
        <div class="item-box">3</div>
        <div class="item-box">4</div>
        <div class="item-box">5</div>
        <div class="item-box">6</div>
    </div>
```

CSS部分

```css
/*4号div与起点对齐*/
.item-box:nth-child(4){
    align-self: flex-start;
}
/*5号div，居中对齐*/
.item-box:nth-child(5){
    align-self: center;
}
/*6号div，终点对齐*/
.item-box:nth-child(6){
   align-self: flex-end;
}
```



在**Element**、**iview**等UI框架的栅格布局中，也可以看到flex的身影

或者可以去了解**grid布局**，这里不做介绍。百度即可

## 四、最后的最后

本文只展示了部分flex布局的效果，如想具体知道flex属性的效果，详细案例与代码实现，点击[这里](https://github.com/QFifteen/Learning_JS/tree/master/flexBox)即可看到(子属性在chlid文件夹中)。

一样的，在这里推荐一个生动、有趣的学习flex布局的[小游戏](http://flexboxfroggy.com/)，搭配本文食用更佳！



这里是**十五**。您的**点赞**是我努力写**高质量**、**简单生动**文章的动力！





