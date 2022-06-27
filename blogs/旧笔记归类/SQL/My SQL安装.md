# 关于MySQL安装：

## 一、下载

网址:www.oracle.com (oracle公司)

## 二、配置

mysqld 服务端

mysql 客户端

在5.7之前的版本，是有data文件夹与my.ini文件的

#### 1.运行cmd (管理员模式)

​	切换到mysql安装文件夹下的bin目录中

#### 2.创建data目录,输入命令:

`mysqld --initialize-insecure --user=mysql;`

就可在目录下创建data目录

#### 3.安装服务

运行命令 `mysqld --install;`

注释:如果安装过，运行卸载命令 `mysqld --remove;`

#### 4.启动服务

运行 `net start mysql`  启动服务

#### 5.测试登录

登录命令: `mysql -uroot -p;`

注释: -u后面代表用户名, -p后面代表密码

#### 6.修改密码

5.8(8.0)版本后，命令为 `SET PASSWORD FOR 'root'@'localhost' = '密码';`

#### 7.退出登录

​	运行命令 `exit`

#### 8.再登录

使用设置的密码进行登录,例:

`mysql -uroot -p123456`





## 三、修改编码

#### 1.

在登录状态下,输入运行命令`show variables like "%character%";` 查看默认的编码

#### 2.创建my.ini

​	在目录下，创建文件`my.ini`

用文本打开my.ini,输入

```
[mysqld]
character_set_server=utf8

[mysql]
default-character-set=utf8
```



#### 3.测试

先退出 :`exit`

停止服务: `net stop mysql`

再启动服务: `net start mysql`

注:"如果服务启动失败，则尝试重启电脑，或者无可奈何，重装系统

再次登录: `mysql -uroot -p123456`

运行命令查看编码: `show variables like "%character%";`

成功即如下图：![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)\



四、卸载My SQL



​	语法：`mysqld  --remove;`



###### 结束语：该文档的一切请参照SQL Server文件夹下的mysql安装教程(5.8)wold文档









