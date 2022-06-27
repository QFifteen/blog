[toc]
## 一、Vue的概念
### 1.1 Vue是什么？
- 按官方的话来说，是用于构建用户界面的渐进式框架
- 自底向下逐层的设计
- 核心只关注视图层，单页面应用

**所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。**



标注：`渐进式框架`(一开始不需要完全掌握它的全部功能特性，后续可以逐步增加。这对于新手而言很友好)
具体可访问：[什么是渐进式框架](https://zhuanlan.zhihu.com/p/140378027)

Vue.js循着**MVVM**模式，如官方文档所写一样，Vue 的核心库只关注视图层。

开发架构模式并不止一种，还有如MVC、MVP等，可以在[这里](https://www.cnblogs.com/shiwu15/p/16046535.html)了解。



**MVVM:**

Model:模型，数据和业务在这里定义

View：视图，负责数据的展示

VM：负责监听Model中数据的改变并控制视图的更新，处理用户交互，这是Vue在做的事。



直观理解：

![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pianshen.com%2Fimages%2F87%2Fc54a8a65791375c301b9577bf267dabf.png&refer=http%3A%2F%2Fwww.pianshen.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656058532&t=992db062aec8f365dc1cb94bd61ed6b9)

### 1.2 Vue安装
1、在Vue的官网上直接下载Vue.min.js文件(压缩)
2、使用CDN引入Vue

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
3、使用npm安装
引用菜鸟教程的话：由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm，安装使用介绍参照：[使用淘宝 NPM 镜像](https://www.runoob.com/nodejs/nodejs-npm.html#taobaonpm)。

### 1.3 Vue的CDN写法
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
     <!--CDN方式引入Vue（需联网）-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="App">
        <p>{{name}}</p>
    </div>
</body>
<script>
let Vm = new Vue({
    el:"#App",
    data(){ //data方法，使用了ES6写法
        return{
            name:"你好"
        }
    },
    methods:{}
})
</script>
</html>
```

## 二、Vue的基础语法

这里我们会少提及`vue`提供的语法底层实现，只专注于vue的语法是什么，怎么用。

```vue
v-text = 'xx'  //文本绑定值

v-bind :title="message"//令message的值与title保持一致

v-on : click='xxx'  //事件监听

v-if = 'xx'
xx：true/false   //显示与隐藏

v-model ='xx'  //双向绑定 用于表单,input
v-html ='xx'	//用于输出html代码 xx:'<h1>xxzzz</h1>'
```

### 2.1 插值语法

关键:`{{}}`

```html
<div id='dl'>
    <p>{{message}}</p>  <!--用两个大括号圈起来，-->
</div>
```

```js
var sa = new Vue({
	 el:'dl',
	 data:{
			message:'文本内容'
		}
})
```



### 2.2 v-bind 单向绑定

单向：数据只能从data流向页面
双向：数据能从data流向页面，还可以从页面流向data

```html
<span v-bind:title="message"></span>
//title:123
//将这个元素节点的title与实例message值保持一致

<a v-bind:href="url">...</a>
//href attribute 与表达式 url 的值绑定

//缩写
<a :href="url">...</a>
<!--同样的，可以用到css上-->
<a :style="astyle" :href="alink"></a>


<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>

```

```js
new Vue({
    el:'#x',
    data:{
        message:'123',
		astyle:{color:"#000",fontSzie:"18px"},
		alink:"www.baidu.com"
    }
})
```



### 2.3 v-for循环

`v-for`指令可以绑定数组的数据来渲染一个项目

```html
<!-- i代表索引 -->
<p v-for='(s.i) in list'>{{s.id}}+{{s.name}}</p>

<!--循环对象,v-for='(值,键,索引) in user' -->
<p v-for='(val,key,i) in user'> </p>

<!--循环数字,v-for='user in 4 ' 从1开始循环 -->
<p v-for='user in 4'>{{user}} </p>
```
```js
new Vue({
	el:'xx'
data:{
		list[
		{id:1,name:'xx1'}
		{id:2,name:'xx2'}
		{id:3,name:'xx3'}
			]
		user:{
			id:1,
			name:'xxx',
			gender:'男'
		}
	}
})
```



### 2.4 v-if v-else 判断

通过`v-if`来控制切换一个元素的显示与隐藏。将数据绑定在了DOM结构上，在显示或隐藏中，vue提供了[过渡效果系统](https://cn.vuejs.org/v2/guide/transitions.html)，具体可以看到这个效果，点击左侧的侧边栏模块时，切换的过渡动画效果。

需要注意`v-if`和`v-show`的区别，因为在面试中，`v-if和v-show的区别`常常被问及。百度即可。

```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
  
  <p v-else>现在呢</p> <!--当seen不为true时，显示-->
</div>
```

```js
new Vue({
    el:'#x',
    data:{
        seen:true
    }
})
//当seen为flase时，之前显示的消息消失
```
**更复杂的判断**

v-if、v-else-if、v-else
```html
<div id="app">
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else="type === 'NO'">NO A and B</div>
</div>
<!--当type为A时，显示A-->
<!--当type为B时，显示B-->
<!--当type为NO时，显示NO A and B-->
```
```js
new Vue({
    el:'#app',
    data:{
        return:{
            type:'A',//B,NO
        }
    }
})
```
**v-show 显示隐藏是 `display:'none'`，DOM还在，有其用武之地**

**v-if 显示隐藏是 将DOM元素整个添加和删除，消耗更大，但有其用武之地;**

### 2.5 v-show 显示与隐藏

接受布尔值(`true || false`)，示例如下

```html
<div id="app">
<h1 v-show="type === 'x'">Hello!</h1>
</div>
```
```js
new Vue({
    el:'#app',
    data:{
        return{
            type:'x',//显示,不为x时隐藏
        }
    }
})
```

### 2.6 v-on 事件监听器

`v-on`事件监听器，调用在Vue实例中定义的方法：

```html
<div>
<button v-on:click="message">点击</button>
</div>

<!--缩写-->
<button @click="message">点击</button>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```
```js
new Vue({
    el:'#x',
    data:{
    },
    methods:{
        message(){
            console.log('成功点击，弹出消息');
        }
    }
})
```

### 2.7 v-model 双向绑定
一般应用在表单类元素上，如input、select等
```html
<div>    
<input id="t" v-model="text">
<p>{{text}}</p>
</div>

<!--将同步更新消息-->
```
```js
new Vue({
    el:'#1',
    data:{
        text:'',
    }
})
```



如下语法将不做介绍:

- `v-html`接受html代码



### 2.9 计算与侦听
在模板中放入太多逻辑计算会让模板过重难以维护
如:

```html
<div id="ap">
<span>{{ message.split('').reverse().join('') }}</span>
</div>
```
对于复杂逻辑，我们该使用计算属性
例:

```html
<span>{{ message}}</span>
```
**方案一：计算属性:computed**

```js
new Vue({
    el:'#ap',
    data:{
    },
    computed:{
        //计算属性
        message:function (){
        // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    }
})
```
**方案二：使用方法**

```js
new Vue({
    el:'#ap',
    data:{},
    methods:{
        message:function (){
             return this.message.split('').reverse().join('')
        }
    }
})
```

相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。而计算属性只有当message发生改变时，才会重新计算，不然只会返回之前的计算结果

**当一些数据需要跟着其他数据一起改变时，也使用计算属性版本**



## 四、Vue的组件基本写法

组件系统是Vue的一个重要概念，使用小型，可复用的组件构建大型应用，就像搭积木一样。抽象的东西，要通过大脑想象来模拟场景。比如看到一个页面，看到布局，把它想象成**搭积木**、**树干与树枝**、**烫手的砖与搭建好的砖房**



**SPA(single-page application)**

单页面应用，解释为只有一个HTML页面，通过路由实现页面内的局部切换，公共资源部分只加载一次

**好处：整体一次下载，频繁的操作，可以减少网络流量**

### 4.1 Vue的基本写法

```js
//js
<script>
  new Vue({
    el:"",//挂载
    data:{},//绑定数据
    methods:{},//绑定的方法
    mounted(){}//一般用来数据的初始化
    created(){},//生命周期
});
</script>
```

### 4.2 了解组件

这是一个组件的结构



**index.js**

```js
//name.js
	Vue.component('xxx',{  //创建自定义的组件xxx
        template:` `, //写html代码 是V：视图
        props:[],	//传输数据
        data:function(){	//定义数据,是M:存储数据
            return:{
                
            }
        },
        methods:{ //方法
            
        },
        //生命周期
        created:function(){
           
        }
    })
```



**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="JS/vue.js"></script>
    <script></script> <!--我们需要引用组件的js文件-->
</head>
<body>
	<xxx> </xxx>    <!--我们定义的组件-->
</body>
</html>
```

### 4.3 组件的基本使用

这有一个使用组件模板的例子：

**index.js**

```js
/*定义一个名为index-title的组件，使用<index-title></index-title>来使用
  可通过new Vue实例，作为自定义的元素来使用，
  它具有Vue身上的data、methods、生命周期钩子等，
  当然，作为组件，它可以无限制的复用
*/

// Vue.component：全局注册
Vue.component("index-title",{
    //传值
    props:{
        title:{
            type:String,
            default:"这是一个可复用的组件"
        }
    },
    //模板，写HTML
    template:`
        <section>
            <h1>这是一个很好的开始：{{title}}</h1>
        </section>
    `,
    //绑定的数据源
    data(){
        return{}
    },
    //绑定的方法
    methods:{
        
    }
})
```



**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../../assets/vue.js"></script>

    <script src="./index.js"></script><!--全局组件的引入-->
</head>
<body>
    <div id="app">
        <span>这是{{name}}</span>
        <index-title :title="title"></index-title>
        <index-title :title="text"></index-title>
        <index-title ></index-title><!--当不给值时，会使用定义的默认值-->
		<!--局部组件-->
        <local></local>
    </div>

    <!-- 不要忘记添加 type="module" -->
    <script type="module">
    //局部组件的引入
    import local from "./component.js";

    new Vue({
        el:"#app",
        data(){
            return{
                name:"一个实例",
                title:"希望我们能走下去",
                text:"仰望星空",
            }
        },
        // 注册
        components:{
            "local":local
        }
    })
    </script>
</body>
</html>
```

需要注意的是，上述注册了全局组件和局部组件，局部组件的示例在这里，将`component.js`写入，报错才会解决。同时要注意路径问题。



**component.js**

```js
export default{
    template:`<h1>这是个局部组件的例子啊</h1>`,
    data(){
        return{}
    }
}
```

上述所展现的**组件的基本使用**，可以在这里找到代码。



### 4.4 prop 数据传递

prop 数据单项传递，父影响子，子不影响父

所有 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 `prop` 的更新会向下流动到子组件中，但是反过来不行。这样会防止子组件意外变更父组件的状态，从而导致你的应用的数据流向难以理解。

[官方提供的例子](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)

### 4.5 组件工程化

将每个组件封装为一个后缀为.vue的文件，当需要使用时，将其import到页面上，如搭积木一样

上述所示例的代码，是组件的基本使用，Vue提供了`vue-cli`脚手架来构建项目。

在我们了解了Vue的组件后，我们需要知道一些组件的UI框架，使我们的开发更加高效简便.

如:**Element**、**Ant Design Vue**、**View Design**



## 三、vue 生命周期钩子

每个Vue实例在被创建时都要经过一系列的初始化，
在这个过程中也会运行一些叫做生命周期钩子的函数，这给了我们在不同阶段添加自己代码的机会。

 **从一个组件创建、数据初始化、挂载、更新、销毁，这就是一个组件所谓的生命周期**

 - **beforeCreate** :实例被创建,还未初始化data和methods

 - **created**: 实例已创建，可以使用数据，更改数据，在这里改函数不会触发updated函数,一般可以在这里做初始数据的获取

 - **beforeMount**:开始找实例或组件对应模板，虚拟Dom已经创建完成,马上就要渲染，也可以在这里更改数据，是渲染前最后一次更改数据的机会
 - **mounted**:渲染出真实Dom,组件已经出现在页面中，数据，真实Dom已经处理好了,可访问到Dom节点，事件也挂载好了
 - **在mounted下，会有两个生命周期钩子函数，那就是数据更新阶段的钩子函数**
- - **beforeUpdate**:页面数据更新之前，监听数据的改变，并且可以获取到最新的数据，但是不会更新页面的数据
- - **updated**:数据更新完毕，在这个钩子函数中，我们可以获取当前最新的数据，组件Dom已经完成更新，请避免在此期间更改数据，因为会导致无限循环的更新
- 销毁阶段的钩子函数
- **beforeDestroy**:销毁之前，还是可以使用HTML，在当前阶段实例完全可以被使用，我们进行收尾工作。如清除计时器，清除绑定与监听
- **destroyed**:销毁之后,组件已被拆解，数据被卸除，监听被移出，子实例也统统被销毁，剩个空壳。

实例:
```JS
<script>

el:'name',
data(){
    return{
        
    }
},
methods:{
    
},
//第一个生命周期函数
beforeCreate(){
    console.log('实例被创建')
},
created(){
    //  在 created 中，data 和 methods 都已经被初始化好了！
    // 如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
},
beforeMount(){
    //虚拟Dom已经创建完成，马上就要渲染，也可以在这更改数据
},
mounted(){
    //组件出现在页面，数据，真实Dom处理好，事件挂载好
},
beforeUpdate(){
    //不能更改数据，否陷入死循环
    //获取最新数据，但页面数据不更新
},
updated(){
    //组件Dom已经完成更新
},
beforeDestroy(){
    //销毁前，一般为善后，清除计数器，监听等
}
destroyed(){
    //销毁之后 组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。
}
</script>
```
参考文档：

[Vue的生命周期（简单的过程）](https://zhuanlan.zhihu.com/p/82912814)

[vue 生命周期 详解](https://www.cnblogs.com/happ0/p/8075562.html)





## 五、vue全家桶之router&vueX
#### 5.1 router 模式解析
路由分为两个模式(hash、history)，在脚手架配置可选择。


在main.js文件下，我们可以配置查看router

**router跳转页面:**
```js
    this.$router.push({
        path:'/',
        //传参
        query:{
            sex:'xx'
        }
    })
    
    //从跳转后的界面接收参数
    this.$route.query.sex
```
```js
//监听
  watch:{
    '$route'(){
        this.$router.go(0);
    }
  }
  
  当回到首页时，数据重新加载
  虽然底层的代码是后退，但是后退里我们添加了代码，
  需要保证数据从新加载，防止访问旧数据
```

不论两种模式，底层都是调用了**history.pushState与replaceState**底层源码，也就是说，vue将原生的回退与前进进行了封装，叫做vue-router

**嵌套路由:**
```js
//例:
import Vue from 'vue'
import VueRouter from 'vue-router'
//路由懒加载
const Home = ()=>import('../views/Home.vue');

const routes = [
  {
    //登录
    path: '/',
    name: 'Home',
    component: Home,
    //嵌套路由
    children:[
    {
        //嵌套路由的path不需带'/'
        //访问方式为:/Home/UserInformation
        
        path:'UserInformation',
        name:'Userinformation',
        component:UserInformation,
        
     }]
  }
 ]
 //在写好嵌套路由后，在需要显示的页面写上路由接口
  <router-view></router-view>

```

#### 5.2 VueX(状态管理)
VueX概念:
Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。

vuex基础配置:
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
//提供公共数据源,共享的数据都放入state
  state: {
  },
  //对于state数据中的过滤
  getters:{
      
  }
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  //mutation中写有修改数据的逻辑。另外mutation里只能执行同步操作
  mutations: {
  },
  //对于store中数据的修改操作动作在action中提交。
  actions: {
  },
  //module,模块化。
  modules: {
  }
})
```

#### 5.3 逐一解析Vuex
##### State:公共数据源
```js
export default new Vuex.Store({
  state: {
    name:'十五'
  },
```
组件中访问 state 中数据的有两种方式
```js
一、
this.$store.state.名称
如例:
this.$store.state.name  //十五

二、
//从vuex中按需导入mapState
import {mapState} from 'vuex'

//将全局数据，映射为当前组件的计算属性
computed:{
    ...mapState(['name'])
}
```
##### Mutation:变更state数据
- 只能通过 mutations变更 Store 数据，不可以直接操作 Store 中的数据。
- 可以集中监控所有数据的变化

触发Mutation两种方式:
```js
情况:
export default new Vuex.Store({
  state: {
    num:0
    },
  mutations: {
    unmAddOne(state){
      //num+1
      state.num++;
    }
  },
  
--------------------------------------------------
一、
methods:{
    addOne(){
        //commit:提交
        this.$store.commit('unmAddOne')
        //多个参数
        this.$store.commit("gaixie","十六七");
    }
}

二、
import {mapMutations} from 'vuex'

//修改
this.unmAddOne("参数");

methods:{
    ...mapMutations(['unmAddOne'])
}
```

##### Action 处理异步任务
- 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation的方式间接变更数据。

##### Getter 对Store数据加工形成新数据
- Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性 。
- Store 中数据发生变化，Getter 的数据也会跟着变化。

配置如:
```js
export default new Vuex.Store({
  state: {
    name:'十五'
  },
  getters:{
    NumText(store){
        return "当前值"+num
    }
  },
```
使用:
```js
一、
this.$store.getters.名称
如例:
this.$store.getters.NumText

二、
import {mapGetters} from 'vuex'

//指定的getters,映射为当前组件的methods函数,一个方法
computed:{
    ...mapGetters(['NumText'])
}
```
##### 一个Vuex的完整架构
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//暴露Store
export default new Vuex.Store({
     //数据源:存放数据
      state: {
          
      },
      //数据的修改，使用commit提交
      mutations:{
      //例:
      dataAdd:(state,msg)=>{
      state.tt = msg;
        }
          
      },
      //数据的加工
      getters:{
          
      },
      //异步处理任务
      actions:{
          
      },
      //数据模块化
      modules:{
          
      }
})
```




## 六、Vue CLI 工程化(脚手架)

CLI是一个全局安装的npm包，它可以将vue生态中的工具基础标准化，构建一整套基础配置

帮助程序员们快速搭建基于vue框架开发环境的工具

是一个为单页面应用快速搭建繁杂的脚手架，它可以轻松的创建新的应用程序而且可用于自动生成vue和webpack的项目模板


#### 6.1 vue-cli的基本指令
```js
- 首先，需要下载并安装 nodejs。安装完 nodejs 后，在命令行窗口就可以使用两个命令了: node, npm
npm (node package manager) 是一个项目和包管理工具

- 1.在node安装文件下创建文件夹node_global(全局)和node_cache,
- 输入指令:

//node目录下自己创建的路径
- npm config set prefix "C:\Program Files\Nodejs\node_global"
 
-npm config set cache "C:\Program Files\Nodejs\node_cache"

//设置淘宝
npm config set registry=//registry.npm.taobao.org

- 其次，使用 npm 下载并安装 vue 脚手架。安装完之后，你会得到一个 vue 命令
npm install -g @vue/cli  # 注意，不要落下 -g，这个的意思是安装为全局命令

- 然后，就可以使用 vue 命令做你想做的事情了

- 创建项目
vue create xxx

- 为项目添加外部插件
vue add axios
vue add element
vue add router
vue add vuex

- 启动开发服务器
cd xxx
npm run serve

- 将源代码打包，并准备部署
npm run build   - 生成一个dist文件

npm i -g serve(安装serve容器)

- 启动
serve dist
```

