[toc]
## 一、Spring Boot简介
Spring Boot是一个简化Spring开发的框架，用来监护spring应用开发。去繁就简。

spring boot整合了许多优秀的框架，不用手动写一堆配置,xml

## 二、写法

**@Controller :处理http请求,告诉spring这是一个控制器**

当我们需要返回字符串格式或说json格式，就需要在函数前面加上@ResponseBoy，

**如果需要整个类都返回字符串，就可以在类前面加上@ResponseBody，或者将@Cotroller注解换成@RestController。**
    
**@RequestMapping(url)**:这个函数需要的url，通常有get、post、put等
所以我们有一种更简便的方法指定这个URL的访问方式:**@GetMapping("/gettext")**

允许任何访问(跨域):**@CrossOrigin**


### 写法
```java
    @Controller //告诉spring这是一个控制器，所以当内置服务器开启后，可以扫描到这个类
    //如果换成 @RestController,表示将整个类都返回字符串数据
    public class index{
        @RequestMapping(value = "/id")//我们可以指定这个路径，参数，方法，头信息
        //告诉spring，下面这个函数是用来映射到那个url的，但没有指定访问方法
        public String index(Model model) {
            return 'x';
        }
    }
```

### 一种最简便快捷的写法
```java
package org.example.dao;

import org.springframework.web.bind.annotation.*;
import org.example.bean.test2;
import org.example.bean.message;

@RestController //控制器,并且表示将整个类都返回字符串数据
public class operation2 {
    @CrossOrigin  //允许跨域访问
    @PostMapping("/gettext") //设置访问方式与URL地址
    public message k2(@RequestBody test2 text) { //返回json格式数据
    //如果我们想返回纯字符串而不是渲染后的模板
    //那我们可以在需要返回字符串的函数前面加上@ResponseBody
           return "你好";
    }

    @CrossOrigin
    @GetMapping("/Fifteen")
    public String Fift(){
        return "1";
    }

}

```
    

## 三、JDBC,Spring Boot连接Mysql
JDBC英文名为：Java Data Base Connectivity(Java数据库连接)，JDBC是一种规范，提供的接口可以访问底层数据库，

简述：
1. Class(系统，用于加载驱动)
2. DriverManager(驱动管理器用于获取连接)
3. Connection(连接对象，意味着获取了数据库的权限，可以为所欲为了)
4. PreparedStatement(执行SQL的对象，需要程序员提供SQL，以及参数值)
5. ResultSet(PreparedStatement执行后，将会获得来自服务器的结果集)
6. 将结果集遍历，再显示在页面
7. 前端接收

## 四、Spring boot: IOC&AOP思想


面向过程编程-->面向对象编程(OOP)-->面向切面编程(AOP)&面向接口编程

IOC:控制反转

AOP:面向切面编程




- action 控制器，用来接收客户端请求

- service 业务逻辑代码

- dao 数据库访问

**过程:**

1. 创建项目
2. 添加依赖，以及启动容器
3. 创建action控制器,接收请求
4. 编写业务逻辑的接口
5. 编写业务逻辑的实现类
6. 编写数据库的接口
7. 编写数据库实现类(不用写)

---


创建接收类-->创建接口-->创建业务实现类


## 五、Spring boot 整合 myBatis

ssm：spring+spring MVC+MyBatis


整体思路：**页面发送请求给控制器，控制器调用业务层处理逻辑，逻辑层向持久层发送请求，持久层与数据库交互，后将结果返回给业务层，业务层将处理逻辑发送给控制器，控制器再调用视图展现数据。**

**1、在mav导入jar包**
```java
//web
spring-boot-starter-web

//mybatis
mybatis-spring-boot-starter

//mysql
mysql-connector-java

org.mybatis.spring.boot

org.mybatis
```

2、创建项目目录架构

action 控制层 -类

service 业务层:业务逻辑代码 -接口+类

entity  实体类 

mapper  持久层  -接口

resources 文件夹:

创建数据源文件:application.yml











