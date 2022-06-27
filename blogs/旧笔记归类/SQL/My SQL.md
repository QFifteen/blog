# My SQL 

​	1.语句不区分大小写

​	2.使用`;`结尾

​	3.

## 操作数据库

#### 一、查看所有数据库

​	语法：`SHOW DATABASES;`

​	2.使用like语句，

​		可查看与数据库匹配的数据库

​	1.1语法：`show databases like '数据库名;'`

​	1.2语法：`show databases like '%数据库名%;'` //查看名字中包含xxx的数据库

​	1.3语法：`show databases like '数据库名%';`//查看名字以xx开头的数据库

​	1.4语法：`show database like '%数据库';`//查看名字以db结尾的数据库





#### 二、创建数据库

创建语法：`create database 数据库名;`

三、切换数据库



#### 三、修改数据库

修改语法：`alter database 数据库名;`



#### 四、删除数据库

删除语法：`drop database 数据库名;`

```sql

```



注: 安装MySQL后，会自动创建名为 information_schema 和 mysql 的两个系统数据库，删除后将不能正常工作，请谨慎!!



---

## My SQL 数据类型



---

## 数据表

1.创建数据表

```sql
	create table 表名(
    id int,
     name varchar(20),
     text varchar(100)
    );
```

2.插入数据

```sql
	insert into 表名
	(id,name,text)
	values
	(1,'十五','xxxx');
```

3.查询数据

```sql
	select * from 表名
```

4.删除数据

```sql
	drop table 表名
```



where 条件

```sql
例:
	select * from 表名
	where 条件 ;
```

修改数据:update

```sql
	--update 表名 set 列名1=值1,列名2=值2
		--where 条件
```

删除数据 delete

```sql
	delete from 表名

  //where
  	
  如果没有指定where子句，那么表中的所有数据都会被删除
```

like 子句

```sql
	例:
		select * from 表名
		where name like '%xx'; 
		  //查找以xx结尾的数据
```

连接表 : union  //连接表，不包括重复数据

​				union all	//连接表，包括重复数据

```sql
例：
	有表xxx、和表nxxx
	
	select * from xxx
	union
	select * from nxxx;
	
```



操作

---

```sql
show databases;     //显示所有数据库
show tables;		//显示所有表
use 库名				//切换到库
desc 表名				//查看表的结构
exit				//退出

```

杂乱小知识

---

```mysql
1、获取当前时间：
`createtime` timestamp null default CURRENT_TIMESTAMP

2、主键、自增:
`id` int primary key not null auto_increment

3、表添加字段
ALTER TABLE <表名> ADD <新字段名><数据类型>[约束条件];

4、外键
alter table tb_active add constraint FK_ID foreign key(user_id) REFERENCES tb_user(id)

```






