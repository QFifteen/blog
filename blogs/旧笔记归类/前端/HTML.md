[toc]

## 一、HTML5
### html5 八个特性
- 语义特性
- 本地存储特性
- 设备访问特性
- 连接特性
- 网页多媒体特性
- 三维，图形及特效特性
- 性能与集成特性
- 呈现

### 优点与缺点
优:1.多设备，跨平台 2.提高可用性和友好性 3.标准统一 4.带来更多 多媒体元素

缺:1.安全问题 2.完善性 3.性能 4.浏览器兼容性

## 一、HTML5 新增结构标签

#### section元素
表示页面中的一个内容区块，比如中间某一块内容。

#### article元素
表示页面中一块与上下文不相关的独立内容
#### aside元素
表示article元素内容之外，与article元素内容相关的辅助信息

#### header元素
表示页面中一个内容区块的标题

#### footer元素
表示一个页面内容的脚注
#### nav元素
表示页面导航部分

例：
```html
    <header>
        <nav></nav><!--导航-->
        <section><!--一块内容-->
        
        <article></article><!--中间内容-->
        
        </section>
    
    <footer></footer><!--结尾部分-->
    
    </header>
```

如图所示：

![](https://gitee.com/fifteen2020/img-list/raw/master/img/20211210094654.png)

### 新增其他元素
#### meter 进度条
```html
<meter max="100" min="0" value="60" style="width: 300px;"></meter>

表示特定范围内的数值，可用于工资、数量、百分比等
max表示最大值，min表示最小值，value代表当前值。
```

#### time 时间
```html
<time datetime="2017-02-14">8:30</time>
属性datetime强调时间

语义标签，在页面上基本无效果
```

#### progress 进度条
```html
<progress value="75" max="100"></progress>

```

#### datalist 列表
```html
<input type="text" list="countries" />
        <datalist id="countries">
            <option value="中国"></option>
            <option value="美国"></option>
            <option value="日本"></option>
        </datalist>
        输入值的下拉列表
```

#### canvas 画布

#### video 视频标签
```html
<video width="800" height="600" controls="controls" poster="content/1.jpg">
            <source src="content/iceage4.mp4" type="video/mp4"></source>
            <source src="content/iceage4.webm" type="video/webm"></source>
            <object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
                <param name="movie" value="myvideo.swf" />
                <param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
            </object>
            当前浏览器不支持 video直接播放，点击这里下载视频： <a href="content/iceage4.webm">下载视频</a>
        </video>
```

## 一、表单
HTML5新增了许多控件，简便了我们的操作
#### 1.1 邮箱
```html
    格式:<input type="email">
```
#### 1.2 URL地址
```html
    格式:<input type = "url">
```
#### 1.3 日期时间
```html
    格式:<input type = "date">
    //可选:time、month、month、week、datetime、datetime-local
```
#### 1.4 数字输入
```html
    格式:<input type = "number" max=100 min=0 value = 10 step=1>
        //max:规定允许的最大值
        //min:规定允许的最小值
        //step:规定合法的数字间隔
        //value:默认值
```
#### 1.5 滑动
```html
    格式:<input type = "range" max=100 min=0 step=2 value=5>
```
#### 1.6搜索输入
```html
    格式:<input type = "search">
```
#### 1.7 电话输入
```html
    格式:<input type = "tel">
```
#### 1.8 颜色选取
```html
    格式:<input type = "color">
    //让用户通过颜色选择器选择一个颜色，反馈到该控件的value值中
```

## 二、属性
#### HTML5新增属性
#### 1.1 contextmenu:右键菜单
例：
```html
    <div id="div1" style="height:900px; background: lightgreen;" contextmenu="menuShare">
    //指定menu的id
        </div>
        <menu id="menuShare" type="context">
            <menuitem label="分享到QQ空间" onclick="alert('QQ');"></menuitem>
            //右键可看到的文本
            <menuitem label="分享到朋友圈" onclick="alert('朋友圈');"></menuitem>
            <menuitem label="分享到微博" onclick="alert('微博');"></menuitem>
        </menu>
```
type中可定义的菜单类型有三种:
1. context:上下文
2. toolbar:工具栏
3. list:列表

在<menu></menu>中可以嵌入一个菜单项<menuitem></menuitem>
属性有:
1. label:菜单项显示的名称
2. icon:菜单项左侧显示的图标
3. onclick:点击菜单触发的事件

#### 1.2 contentEditable:规定可编辑元素的内容

属性值为:true、false、inherit
当为true时，该元素可编辑。如相反，不可编辑.

#### 1.3 hidden:隐藏元素

属性值:

true规定元素可见

false规定元素不可见
    
#### 1.4 draggable:规定元素是否可拖拽

属性值:

true规定元素可拖动

false规定元素不可拖动

auto 使用浏览器的默认特性

#### 1.5 data-*

使用data-*能人用户自定义属性的方式来存储数据
<span data-text = 'xxx'></span>
取值方法:

原生JS：
```js
//赋值
    var div1=document.getElementById("div1");
    div1.setAttribute("data-student-name","Rose");
//取值
    div1.getAttribute("data-student-name")
```
JQ
```js
//赋值
    $("#div1").data("data-student-name","Rose");
//取值
    $("#div1").data("student-name")
    
```
#### 1.6 placeholder:占位
```html
    <input type="text" placeholder="请输入用户名">
```
#### 1.7 required:必填属性
```html
    <input type="text" required="required">
    //在提交钱必须输入值
```
#### 1.8 pattern 正则属性
```html
    <input type="text"  pattern="^[0-9a-zA-Z]{6,16}$">
```
#### 1.9 autofocus:自动聚焦
```html
    <input type="text" autofocus="autofocus">
```
#### 1.10 autocomplete:自动补全
```html
    <input type="text" autocomplete="on/off" />
```
#### 1.11 novalidate:不验证属性
```html
    <form action="demo_form.asp" method="get" novalidate="true">
```
#### 1.12 multiple:多选属性
```html
    <input type="file" multiple="multiple">
    //规定可选择多个内容,如邮箱和文件
```

## 三、本地存储
- LocaL Storage:即使浏览器被关闭，数据依然存在，下次访问可使用
- Session Storage:浏览器窗口不关闭即会存在，当窗口关闭时，数据也会消失
- Indexed DataBase:存储大量数据，提供查找接口，还能建立索引，更接近NoSQL数据库
- 
#### 1.1 localStorage: 本地存储
将数据保存在客户端本地的硬件设备，即使浏览器被关闭，该数据仍然存在，下次打开浏览器时仍然可以使用。可以跨页面，不能跨域。

```js
    //向本地存储中添加一个名为name,值为"手机"的key-value对象
    localStorage.setItem("name","手机");
    //办法2
    localStorage["price"]=999.5;
    //办法3
    localStorage.amount=1788;
    
    //取值
    localStorage.getItem("name")
    //取值2
    localStorage["name"]
    
    //修改
    localStorage["name"] = "x";
    //根据键删除
    localStorage.removeItem("price");
    //删除所有
    localStorage.clear();
```

#### 1.2 sessionStorage 临时存储
将数据临时保存在客户端sessionStorage中，当浏览器关闭时，数据将消失，sessionStorage操作与localStorage基本一致，localStorage永久保存，sessionStorage临时暂存





