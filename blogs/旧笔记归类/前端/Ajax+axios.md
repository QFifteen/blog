[toc]
## axios
#### 1.状态码

- 200: 请求成功，正常返回。

- 404: 服务器没有找到你请求的页面。

- 405: 页面是存在，但是请求的方法不对 (get/post)

- 500: 服务器找到了页面，但是在处理的时候，它出异常了！

#### axios请求五种方式
- get请求(获取数据)
- 
- post请求(添加数据)
- put(修改数据)
- patch(对修改后数据更新)
- delete(删除数据)

#### 2.axios请求的各类写法
[axios官方文档](http://www.axios-js.com/zh-cn/docs/)
- axios本身是基于Promise的HTTP库，可以用在浏览器和node.js中
- 所以axios支持Promise API,拥有Promise的所有属性

一、get请求
```js
    axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
//带参数
 axios
      .get("http://localhost:8082/allListid", {
        params: {
          cinemaid: this.$route.query.cinemaid + "",
        },
      })
      .then((response) => {
          
      }
    
    axios('url') //默认是get请求
```
二、post请求:用于提交数据（新建）、包括表单提交及文件上传。


```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


//使用formData
var formData = new FormData();
        formData.append("Userid", sessionStorage["Userid"]);
        formData.append("comment", this.pluntext);
axios({
          url: "http://localhost:8082/commentplun",
          method: "post",
          data: formData,
        })
          .then((response) => {}
```

三、put请求:用于更新数据（修改），将所有数据都推送到后端。


```js
axios.put('接口地址', data}).then(
                (res) => {
                    //执行成功后代码处理
                }
            )
            
//写法二
axios({
                method: 'put',//请求方法
                data: data,
                url: '后台接口地址',
            }).then(res => {
                //执行成功后代码处理
            })
```

四、patch请求:用于更新数据（修改），只将修改的数据推送到后端。


```js
            axios({
                method: 'patch',//请求方法
                data: data,
                url: '后台接口地址',
            }).then(res => {
                //执行成功后代码处理
            })
            
```
五、delete请求:用于删除数据。


```js
axios.delete('接口地址', {
                parmas:{
                    id:12
                }
            }).then(
                (res) => {
                    //执行成功后代码处理
                }
            )
            
//写法二
 axios({
                method: 'patch',//请求方法
                parmas:{
                    id:12
                },
                url: '后台接口地址',
            }).then(res => {
                //执行成功后代码处理
            })
```

## Ajax 异步通信
Ajax包括以下几个步骤
1. 创建XMLHttpRequest实例
1. 发出Http请求
1. 接收服务器传回的数据
1. 更新网页数据

概括起来，就是一句话，AJAX 通过原生的**XMLHttpRequest**对象发出 **HTTP** 请求，得到服务器返回的数据后，再进行处理。现在，服务器返回的都是 **JSON** 格式的数据，XML 格式已经过时了，但是 AJAX 这个名字已经成了一个通用名词，字面含义已经消失了。

![](https://gitee.com/fifteen2020/img-list/raw/master/img/20220301170820.png)

发送Post请求例子:
```js
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
```

