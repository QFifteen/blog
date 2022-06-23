## 一、前言

在前端方面，我们会使用些包管理器来操作项目中需要的包，一般最常见的为`npm`。

同时，由于公司的技术需要，在这里记录一下本人学习`yarn`。

## 二、认识

在CSDN看到这样几句话：[前端各种包管理工具简述](https://blog.csdn.net/Delicious_Life/article/details/104591406/)

- `npm`是名声最广的前端包管理器，为`Node.js`自带

- `cnpm`是npm的阿里版，用的是阿里的源
- `yarn`的出现是想取代`npm`包管理工具，特点是快速安全可靠
- `tyarn`是`yarn`的阿里版，用的是阿里的源



`yarn`是一个JavaScript包管理器，速度很快。

## 三、使用

### 1. 安装

**1.1 通过`npm`包管理器来安装`yarn`**

```bash
npm install yarn -g
```

或者说可以通过[官网(中文文档)](https://yarn.bootcss.com/docs/install#windows-stable)提供的备选方案，下载安装程序。

**1.2 检测是否安装成功，查看版本**

```bash
yarn --version
```

**1.3 进入指定的目录，初始化一个新项目**

```bash
yarn init
```

**1.4 添加项目需要的包**

```bash
yarn add [package]
//yarn add jquery
```

执行完命令后，在node_modules包中，就可以看到所添加的jquery，默认是最新版本。

当然，也可以一次性添加多个包，写法为`yarn add [package1] [package2]` ，如这样`yarn add jquery bootstrap`。

如需要，还可以添加指定版本的包，只需要在包后面添加`@`+版本号。如`yarn add jquery@2.1.4`

**1.5 升级依赖包**

```bash
yarn upgrade --latest [package]
yarn upgrade [package]@3.0.0  #升级到指定版本
```

**1.6 移除依赖包**

```bash
yarn remove [package]
yarn remove [package1] [package2] #删除多个项目
```

当然，也可以删除多个包，就如第二条那样。

## 四、配置

使用`yarn`设置阿里源

```bash
yarn config set registry https://registry.npm.taobao.org/
```

查看结果

```bash
yarn config get registry
```

结果显示：

```bash
https://registry.npm.taobao.org/
```

升级全局Vue CLi包

```bash
yarn global upgrade --latest @vue/cli
```



## 五、实例

在[Vue.js](https://v3.cn.vuejs.org/guide/installation.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-cli)的官方文档中，也有介绍使用`npm`，`yarn`来安装项目的步骤。Vue3：Vue CLI[参考这里](https://cli.vuejs.org/zh/guide/installation.html)

### 实例1

使用`vue-cli`构建Vue3项目

**1，安装Vue CLi，版本需要在4.5.0以上(截止目前，版本为`@vue/cli 5.0.4`)**

```bash
yarn global add @vue/cli
```

**2.如果Vue CLi的版本过低，则需要升级**

```bash
yarn global upgrade --latest @vue/cli
```

使用`vue -V`来查看Vue CLi的版本

**3.进入存放目录，创建项目**

```bash
vue create [project]
```

**4.添加依赖**

```bash
yarn add xxx
#yarn add vue-router
```

**5.进入项目，启动项目**

```bash
cd [project]
yarn serve
```



### 实例2

这是一个创建Vue3项目的实例，使用`vite`来构建项目，它很快！！

**1.Vite构建的Vue3项目**

```bash
yarn create vite <project-name> --template vue
# yarn create @vitejs/app [project]
```

**2.进入目录，并安装相关依赖**

```ba
cd vue3_demo
yarn 
```

`yarn`，安装项目的全部依赖

**3.启动项目**

```bash
yarn dev
```

使用`vite`构建的项目运行速度很快，但目前使用它的公司不多，或许它在将来会很耀眼，但目前还需要时间来沉淀。

## 六、最后

这有很好的教程:[yarn的全部使用集结教程](https://blog.csdn.net/qq_36131502/article/details/114369945?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&utm_relevant_index=1)，以及[官方](https://classic.yarnpkg.com/en/docs/usage)所提供的常用命令。

