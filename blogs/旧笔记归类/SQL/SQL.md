

  数据库的基本操作：

### 一、创建

##### 1.1 创建数据库

```sql
create database 库名
```

##### 1.2 切换数据库

```sql
use 库名
```

##### 1.3 创建表

```sql
create table 表名(
		
		)
```

### 二、关于数据的类型

数据类型:int、float、numeric\decimal、char(n)/varchar(n)
				money、date、datetime、binary(n)/varbinary(n)
				bit ......

```sql
int -整型
float -单精度 浮点数
double -双精度 浮点数
------------------------
字符串类型
char() -字符串
varchar() -变长字符串
text -长文本数据
mediumtext -中等长度文本数据
longtext -极大文本数据
----------------------------
日期和时间类型
date -日期值 (格式：YYYY-MM-DD)
time -时间值或持续时间	(HH:MM:SS)
year -年份值(YYYY)
datetime -混合日期和时间值(YYYY-MM-DD  HH:MM:SS)

```



 ##### 1.4 约束

```sql
主键：primary key   (不能重复，不能出现空值)
自增：identity(m,n) 整型列才可以用。 m代表自增开始的数 ， n代表每次自增的数量
非空：not null
唯一：unique   不能重复，允许出现一个空值
默认值：default '值'
检查：check(条件表达式)
外键：foreign key references 表名(列名)
```

### 三、添加数据

			--自增列不需要指定数据;
			--非空列一定要指定数据;
			--在insert语句中使用default表示默认值
#####  - - 1)最常用的: 

  ```sql
insert into 表名 values(...),(...)
  ```

##### 1.5 实例

```
insert into Department values('外联部')
insert into Department values('信息部'),('外交部')
```

##### - - 2)变化写法：可以指定列名

```sql
insert into Worker(wid,wname)
values('1004','赵六')
go
```

#####  - -3) 用insert ....select语句添加数据(不能用default)

```sql
insert into Worker
select '1005','王小五','女','555555','119','2019-1-1',3  union
select '1006','王小六','女','444444','119','2019-10-15',3  union
select '1007','王小七','女','666666','119','2019-10-15',3
go
```

##### - - 4) --4）select into语句：常用于备份

```sql
select *
into worker_new
from worker
```

### 四、查询数据

##### - - 1)

```sql
select * from product  --*表示所有列

--查部分列
select pid,pname,price from product

--查询给列取别名
select pid as 商品编号,pname as 商品名称,price as 价格
from product   --as可以省略

select 商品编号=pid,商品名称=pname,价格=price 
from product   -- =取别名时，别名在前
```

##### - - 2)distinct修饰列：去除重复数据

```sql
select distinct pstime from product
```

##### - - 3) top n 修饰列：查询前n条数据

```sql
select top 2 * from product

select top 30 percent * from product  --percent表示百分比
```



### 五、修改数据

```sql
		--update 表名 set 列名1=值1,列名2=值2
		--where 条件
```

##### - - 1) 实例

```sql
update Worker
set wsex='女',did=3
go
```

##### - - 2) 实例二：加入where条件

```sql
update Worker
set wsex='女',did=3
where age = 1000
go
```

### 六、删除数据

##### - - 1) 

```sql
delete from Worker
where did=1  --删除编号为1的员工
go
```

##### - - 2) 关于删除主键表的数据

```sql
update Worker
set did=null
where did=2  --将部门编号为2的员工的部门清空
go

delete from Department
where did=2
go

思路：先将外键修改成null， 再删除主键表数据
```

##### - - 3) 附加知识：清空表 （不能加where）

```sql
truncate table Worker
go
```

### 七、group by 子句： 分组

```sql
   -- 常与聚合函数配合使用
   --就是分组后要进行统计
   	--如果有分组语句，select后只可以写两种列：
		--	1）用于分组的列
		--	2 ) 聚合函数的列
```

#####  - - 1)  AVG() :统计均价

```sql
--1）按照商品类型编号ptid进行分组,统计均价
select ptid 类型,AVG(price) 均价 from product
group by ptid
```

#####  - - 2) COUNT(): 统计数量

```sql
select adid 产地编号,COUNT(*) 数量  from product
group by adid
go
```

##### - - 3) having子句：分组后的再次筛选，紧跟group by

```sql
select adid 产地编号,COUNT(*) 数量  from product
group by adid
having COUNT(*)>1  --数量大于1的组
go

注：having跟where不同，where用于分组前的筛选
```

#####  - - 4) 实例演示

```sql
select ptid 类型,AVG(price) 均价 from product
where pid>3
group by ptid
having AVG(price)>5  --不能用别名
order by 均价 desc  --排序可以用别名
go

```

### 八、order by子句：排序，一定要写在最后面

##### - - 1)  默认

```sql

select * from product
order by price   --默认升序
go
-------------------------------
--也可以根据多个列进行排序
select * from product
order by price desc,pname desc
go

```

##### - - 2)  实例

```sql
select * from product
order by price desc  --desc表示降序,asc表示升序
go
```

### 九、where子句：筛选数据

##### 实例

```sql
select * from product
where pname like '%旺%'  -- 包含'旺'关键字的商品
go

select * from product
where pid not in(1,3,5)  --不在(1,3,5)里面
go

```

### 十、聚合函数：用于统计的函数

##### - - 1）

```sql
计数函数：COUNT（列名） 
求和函数：SUM（列名）
平均值函数：AVG（列名）
最大值函数：MAX（列名）
最小值：MIN（列名）    
   -- 注：不分大小写!
```

### 十一、运算符

##### 赋值运算符：

```sql
--关系运算符
 	= 		  等于
	!=或者<>  都表示不等于
--逻辑运算符:and 、or、not   
	  check(age>=18 and age<=30)     and:与，并且
      check(gender='男' or gender='女')    or：或者，
      not null 非空        				not ： 非,反的
      	like ：像...一样
```

##### 通配符：

```sql
   % :匹配0个或者多个任意字符
   		where name like '%小%'  --小明、黄小明、小时候、小
   _ :下划线，匹配一个任意字符
   		where username like '_abc'   --xabc、yabc  
   []：匹配[]里面出现的某一个字符
   		where username  like 'aa[xyz]'  -- aax、aay、aaz
		where username  like 'aa[^xyz]'  --aaa、aab、.. (匹配xyz以外的任意一个字符)
		where username like 'aa[0-9]'  --aa0 、aa1、aa2..
```

### 十二、多表连接

##### - - 1)内连接：innser  join  ....   on

```sql
设有 StudentInfo表 与 ScoreInfo表 ，
--内连接:inner join ... on
--返回两张表匹配的数据
select A.StuCode,StuName, SubjectName,Score
from StudentInfo A
inner join ScoreInfo B
on A.StuCode=B.StuCode 
go
```

##### - - 2) 左连接: left join .... on

```sql
--左连接
--一般，在join左边的表为主表，也就是StudentInfo,从表为ScoreInfo
--即使数据不匹配，join左边的表中数据也将被保留，为主表，
--不满足匹配结果的结果集在相应列中添加null值
 select * from StudentInfo 
 		left join ScoreInfo      ---- 关键词:left
 		on coun = coun
```



##### - - 3) 右连接：right join  ....   on

```sql
 
 --右连接
 --相反，在join右边的表为主表，右边的表中数据将被保留，
  select * from StudentInfo 
 		right join ScoreInfo     -- 关键词:right 
 		on coun = coun
```

##### - - 4) 全外连接：full join ... on

```sql
 --全外连接
 --返回连接表中所有行的数据
 --在整个全外连接的返回结果中，包含了两个完全连接表的数据
    select * from StudentInfo 
 		full join ScoreInfo     -- 关键词:full 
 		on coun = coun
```

##### - - 5) 交叉连接: cross join ... on

```sql
 	--除此之外：还有交叉连接
 	-- 形成的数据是没有意思的，因为很多数据是不对的
-- 但是，它却是其它有意义的连接的内在基础  
	select * from emp, dept;
	select * from emp
  		[cross] join dept;
```

​	数据库编程二:

在设计表时，我们应该遵守设计的理论依据：范式

- 范式并不是强制性的，而是我们创建表时的一些参考
- 但是为了能更合理创建表，我们应该遵守一些范式
- 最重要的是前三个范式 

使用范式主要的意图，吸取前人的经验：

- 让表的结构更合理
- 减少表中数据的冗余
- 能够保证后期数据检索的效率

1. 第一范式：（所有的列都是原子性的，每一列都必须分明）
2. 第二范式：消除对主键的部分依赖（拆分表，将表分成若干份）
3. 第三范式（消除对主键的传递依赖）

这样，整个数据的设计就合理了许多

### 一、索引，视图与事务

```sql

```

### 二、T-SQL编程

#### 1.1概述:

##### T-SQL对数据表进行各种复杂多变的查询，提供了丰富的编程结构。运用这些编程的控制结构，用户就可以实现任意复杂的应用规则，从而变出任意复杂的查询控制语句。用户可用T-SQL语句编写服务器端的程序，这些程序由批处理，注释，变量，流控制语句，错误和消息的处理等成分组成。

##### 1.2 批(go)

```sql
 --批：从客户机传递到服务器上的一组完整的数据和SQL指令.
 --	由一条或多条T-SQL语句组成的语句集，一起提交给服务器作为一个整体来执行。
 	--例：
 	select * from emp;
	select * frmo dept; -- 一个批处理中的语句，如果有一条编译出错，它们整个批中的命令都将不会执行
	go
	select * from emp;
	go 					--go的作用是批处理，他会将之前的若干语句一起编译并发送给服务器去执行
						--GO 并不是标准的 SQL 关键词
```

##### 1.3 脚本(script)

```sql
		--脚本用于保存SQL语句，带.sql扩展名保存。如 Stua.sql，就是一个脚本文件。
		脚本一般可以用于两个方面：
				1.将服务器上创建一个数据库的步骤永久的记录在脚本文件中，将语句保存为脚本文件
				2.从一台计算机传递到另一台，可以方便的使两台计算机执行同样的操作
					
```

##### 1.4 变量 (Variable)

- 变量用于临时存放数据，变量有名字及数据类型两个属性。

- 变量名用于标识该变量，数据类型确定了该变量存放值的格式以及允许的运算

- 变量名必须是一个合法的标识符

###### 1.4.1 变量的命名：

```sql
	1.以 ACII … 等开头，不能使用保留字，不允许空格和特殊字符
	2.虽然可以使用中文，但是不建议
	3.一些不符合标准的名字，可以使用 [] 或者 "" 的方式引起来
```

###### 1.4.2 局部变量

```sql
局部变量的声明周期是一个 P:
				是用户定义的，作用在一个 P 范围内的变量
				名字必须要以 @ 开始
				使用 declare 定义，使用 set/select 赋值，使用 select 查看值
    -- 例子 1
    declare @sss int;   -- 定义
    set @sss = 2000;    -- 赋值
        select * from emp where sal > @sss; -- 使用
    -- 例子 2
    declare @s int, @job varchar(20);
    set @s = 1000;
    select @job = 'sales';
    select * from emp where sal > @s and job like @job + '%';
    select @s;

    -- 例子 3，可以将查询的结果保存到变量中
    declare @s int;
    select @s=sal from emp where empno = 7499;
    select * from emp where sal >= @s;
```

###### 1.4.3 全局变量

服务器内部使用的一些变量，通过修改它们，可以影响服务器的行为。

用户只能修改这些变量，不能删除、创建它们。

分为两种，一种是静态的，一种是动态的:

```sql
-- 每次查询都会不变
select @@VERSION;

-- 每次查询，会根据实际情况返回相应数据
delete from emp where sal < 1200;
select @@ROWCOUNT;
```

常见的全局变量:

- @@connections / @@dbts / @@cpu_busy / @version;
- @@rowcount
- @@cursor_rows
- @@error !!! 如果不出错，返回 0
- @@identity



#### 2.1 逻辑(T-SQL 流控制语句):

##### 2.1.1   IF...ElSE 条件判断语句

```sql
--基本句式:
	if 条件
		操作
	else if 
		操作
	else
		操作         --IF...ELSE语句可用在批处理、存储过程及特殊查询中
```

##### 2.1.2 BEGIN...END语句块

```sql
-- 使用BEGIN...END关键字可以将一组T-SQL语句封装成一个完整的SQL语句。
-- 关键字 BEGIN 定义T-SQL语句块的起始位置
-- 关键字 END 标识同一块T-SQL语句的结尾    （允许使用嵌套的BEGIN...END 语句块）
--										(可以搭配 IF...ELSE 语句 一起使用)

--基本语法:
		BEGIN
			//T-SQL语句
		END
```

​	案例：

```sql
-- 给某个人加工资 (7499)
--  如果工资小于 1500 加上 1000
--  如果工资小于 3000 加上 500
--  如果工资大于等于 3000 加上 50

declare @empno int;
set @empno = 7499;

if (select sal from emp where empno = @empno) < 1500
  begin
    update emp set sal = sal + 1000 where empno = @empno;
    insert into my_log (message) values ('money is so cool.');
  end
else if (select sal from emp where empno = @empno) < 3000
  begin
    update emp set sal = sal + 500 where empno = @empno;
    insert into my_log (message) values ('what a pity.');
  end
else
  begin
    update emp set sal = sal + 50 where empno = @empno;
    insert into my_log (message) values ('fxxxxxk.');
  end     -- BEGIN...END语句块 与 IF...ElSE 判断 配合使用
```

##### 2.1.3 WHERE 循环语句

###### 基本语法:

```sql
 where 条件
 	engin
 		//T-SQL语句
 	end
 	
 	-- 注:T-SQL 中只有while循环语句，没有for循环和do...while循环		
```

案例：

```sql
-- 向数据库中插入 1000000 条测试数据

declare @count int;
set @count = 1000000;
while @count > 0
  begin
      insert into my_log (message) values ('hello');
      set @count = @count - 1
  end
```

##### 2.1.4  CASE-WHEN (**)

case结构提供比 if 判断结构更多的选择和判断的机会。使用case语句可以很方便的实现多重选择的情况

​	类似于Switch

实例:

```sql
-- 列出每个员工的基本工资情况
select ename,
       case
         when sal < 1500 then '很少'
         when sal < 3000 then '可以'
         else '太多了'
       end as '工资情况'
 	from emp;	
 
 -- 列出每个员工的基本工资情况
select ename,
       case
         when sal < 1500 then '很少'
         when sal < 3000 then '可以'
         else '太多了'
       end as '工资情况'
 from emp;
```

##### 2.1.5  return/returns

​	return语句可以在过程，批，和语句块中的任何位置使用，作用是无条件地从过程，批或语句块中退出，在	return之后的其他语句不会被执行。

##### 2.1.6 waitfor 计时器

 计时器，可以指定计划任务。waitfor语句可以将它之后的语句在一个指定的间隔之后去执行，或在未来的某一个时间执行。

实例：

```sql
waitfor delay '00:00:05' select * from emp; --等待5秒后查询表
waitfor time '00:00:05' select * from emp; --等待到00点05秒执行查询
```

##### 2.1.7 print

 用来输出字符串到标准输出的

```sql
print 'hello world';
```

##### 2.1.8 raiserror

raiserror是一个比print功能更强大的返回信息的语句，它的作用是将错误信息显示在屏幕上。同时也可以记录在NT日志中。   	(抛出一个错误.  类似JAVA中的 throw new Exception)

```sql
-- 一个有瑕疵的例子
declare @emsg varchar(200), @ecode int;
set @emsg = 'xxx';
set @ecode = 404;

raiserror('发生了一个错误: %s (%s)', @emsg, @ecode);
```



#### 3.1 函数(Function)

为了用户对数据库进行查询和修改时更加方便，SQL server 在T-SQL中提供了许多内部函数以供用户调用。

T-SQL提供的函数可以分为：数学函数、字符串函数、日期函数、统计函数、系统函数及其他函数。此外，用户还可以自定义函数。

##### 3.1.1 数学函数	

- ABS（数值表达式）

  ```sql
  select ABS(xx) ,ABS(数值表达式)    -- 绝对值
  ```

- 反余弦函数 :ACOS(float 型表达式)        float:小数类型

```sql
    SELECT ACOS()
```

- 反正弦函数：ASIN(float表达式)           ---参数为real或float

- 反正切函数：ATAN（float表达式）

- 反ASCII码函数：ASCII（字符型表达式）  

  ```sql
  SELECT ASCII("H")
  ```

- 求平均值函数：AVG（[ALL|DISTINCT]表达式）:  

  ```sql
  select AVG(*) from exam 
   --如果数据中包含NULL的数据，该数据将会被忽略。 
   --ALL关键字表示所有的数据将会计算在内，
   --DISTINCT关键字表示相同实质的数据将只会计算一次，默认取值为ALL
  ```

- 计算函数：COUNT({[ALL|DISTINCT]}| *} 表达式) :求一组数据的个数

- 角度转换函数：DEGREES（numeric表达式） ：将以numeric型表达式给出的弧度转换成角的类型的数值

- CEILING（数值表达式）：返回最小的大于或等于给定数值型表达式的整数值。返回值的数据类型与参数的数据类型相同。

- FLOOR（数据表达式）:返回最大的小于或等于给定数值表达式的整数值。返回值的数据类型与参数的数据类型相同。

- 求自然对数函数：LOG（float表达式）：返回给定参数值的自然对数结果。

- 求常用对数函数：LOGIO（float表达式）：返回给定参数值的常用对数结果。

-   乘方运算函数：POWER（数值表达式1，数值表达式2）：进行乘方运算，如POWER（2,3）表示2的3次方

- 求自然指数运算：EXP（float表达式）：求指定float表达式的自然指数值

- 求圆周率运算：PI（）：不使用参数，返回圆周率 π 的常量值

- 求平方根：SQRT（）：求指定float表达式的平方根，返回float型的结果

- 求平方值：SQUARE（float表达式）：返回指定float表达式的平方，返回float型的结果

- SICN（数值表达式）：判断相应数值表达式的正负属性，在SQL server中用+1表示正数，用-1表示负数

- 产生随机数：RAND（整型表达式）：返回一个位于0和1之间的随机数，整型表达式在这里起着产生随机数的起始值的作用。

- ROUND（数值表达式，整数）：四舍五入，将数值表达式四舍五入成整数指定精度的形式，

##### 3.1.2 字符串函数

- len(字符型表达式):返回给定字符串数据的长度

- datalength(表达式)/left(字符表达式，整型表达式)/right(字符表达式，整型表达式)

- substring(字符串，表示开始位置的表达式，表示长度的表达式)/upper(字符表达式)/lower(字符表达式)

- space(整型表达式)/replicate(字符表达式，整型表达式)/stuff(字符表达式1，开始位置，长度，字符表达式2)

- reverse(字符表达式)/ltrim(字符表达式)/rtrim(字符表达式)/charindex(字符串表达式1，字符表达式2[,查找位置])

- patindex('%pattern',字符表达式)/str()/char(整型表达式)

  ##### 3.1.3 日期函数

  getdate() !!

  datename/dateadd/datediff/day/month/year()

  ##### 3.1.4 类型转换 (cast/convert) 

  基本语法：

  ```sql
  -- CAST Syntax:
  CAST ( expression AS data_type [ ( length ) ] )
  
  -- CONVERT Syntax:
  CONVERT ( data_type [ ( length ) ] , expression [ , style ] )
  ```

实例：

```sql
select cast('12345' as int);
select cast('2012-3-4' as datetime);

select convert(varchar(19), getdate());
select convert(varchar(19), getdate(), 20); -- yyyy-mm-dd hh:mi:ss
select convert(varchar(10), getdate(), 110);
select convert(varchar(11), getdate(), 106);
select convert(varchar(24), getdate(), 113);
```

### 4.1 存储过程 (Procedure)

##### 4.1.1 什么是存储过程

​	将一系列进行处理的语句过程保存下来，后面可以复用。使得管理数据库，显示关于数据库及其用户信息的工作更为容易。

 好处：

1. 存储过程允许标准组件式编程
2. 存储过程能够实现较快的执行速度
3. 存储过程能够减少网络流量
4. 存储过程可被作为一种安全机制来充分利用，可以保障安全机制

坏处：1.【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性

##### 4.1.2 创建存储过程

###### 示例:

```sql
-- 创建
create procedure p_aa1 as
  create table xxx (a int, b varchar(20));
  insert into xxx values (1, 2), (2, 3), (3, 4);
  select * from xxx;
  waitfor delay '00:00:20' drop table xxx;
GO

-- 执行
exec p_aa1;
GO

-- 删除
drop procedure p_aa1;
drop proc p_aa1;

-- 修改
alter procedure p_aa1 as
  select * from emp;

```



##### 4.1.3 存储过程参数

在存储过程中使用参数，包括输入参数和输出参数，以及参数的默认值等。

输入参数与输出参数，其中：

- 输入参数允许用户将数据值传递到存储过程或函数

- 输出参数允许存储过程将数据值或游标变量传递给用户

- 每个存储过程向用户返回一个整数代码，如果存储过程没有显示设置返回代码的值，则返回代码为0.

  

