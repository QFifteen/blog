[toc]

## 一、Git 版本控制

### 前言：

版本控制是一种在开发的过程中用于管理我们的文件、工程等内容的修改历史，提供修改、备份等操作

- 实现跨区域多人协同开发
- 追踪、记载文件的历史记录
- 并行开发，提高开发效率
- 组织、托管、保护源代码和文档

概括：用于管理多人协同开发项目的技术



### 常见版本控制工具：

git(分布式版本控制系统)、svn(集中式管理版本控制系统)、cvs(C/S系统,代码版本控制软件)、vss(微软出品版本控制系统)



### 集中版本控制

所有版本数据都保存在服务器上，协同开发者从服务器中同步更新或上传修改

是一对多的关系。



### 分布式版本控制

所有版本信息仓库都存在于本地的用户，可以在本地查看所有历史、离线提交



### Git和SVN的区别

#### 1.SVN

是集中式版本控制系统，版本库放在中央服务器。工作时，使用自己电脑获取最新中央服务器的版本，然后工作，工作完成后，把自己所需要提交的活推送到服务器。

特点：必须是联网才能工作，对网络带宽比较高

#### 2.Git

是分布式版本控制系统，没有中央服务器，每个人的电脑都是一个完整的版本库。工作不需要联网了。

Git是目前世界上最先进的分布式版本控制系统



### Linux 命令

```git
查看系统config
git config --system --list
查看当前用户配置
git config --global --list

常用命令：
1) cd /xx  切换目录
2) cd..  回退到上一个目录，
3) pwd 显示当前所在的目录路径
4) clear  清屏
5) ls 列出当前目录下的所有文件
6) touch xx.js   在当前目录下新建一个xx.js文件
7) rm xx.js   删除xx.js文件
8) mkdir xxx新建一个目录，就是新建一个文件夹
9) rm -r xxx  删除一个xxx文件夹
10)mv xx.js  xxx  移动文件，将xx.js移动到xxx文件夹中
11) history  查看命令历史
12) help 帮助
13) exit 退出
```

#### 1.设置用户名与邮箱

安装git后首要做的事就是设置用户名和邮箱地址，

```git
git config --global user.name "xxx"  //设置用户名称
git config --global user.email "xxx.@qq.com" //设置邮箱
```



#### 2.初始化

```git
git init  //生成一个隐藏的.git文件(本地版本仓库)
```



#### 3.查看文件状态

```git
git status  //查看所有文件状态
git status [文件名]  //查看指定文件状态
```



```git
git commit -m '内容'  提交暂存区中的内容到本地仓库   
```



克隆远程仓库

```git
git clone [仓库地址]
```



#### 4.忽略文件 .gitignore

有些时候我们不需要将某些文件纳入版本控制中，在目录中建立.gitignore文件，代表忽略文件中的内容,其遵循一些规则

```git
*.text   //过滤所有后缀为text的文件
/xxx/    //过滤整个文件夹
/xx/xx.text  //指定过滤文件夹下的文件
!src/     //！表示不过滤该文件夹

常见的忽略操作有
# dependencies  npm包文件
/node_modules    //忽略

# production  打包文件
/build
```



详细了解传送门：[Git忽略提交规则](https://www.cnblogs.com/kevingrace/p/5690241.html)



## 二、基础使用

#### 1.1.1 初始

目录变成Git可以管理的仓库

```git
git init
```

目录下就多了一个隐藏的.git目录，是Git用来跟踪管理版本库的

#### 1.1.2 文件添加到仓库

`git add`  可以有多个选择，如输入`.`代表上传所有修改文件，或指定文件名

```git
git add .
git add readme.txt
```

#### 1.1.3 说明

`git commit`    `-m `后面输入的是本次提交的说明,

```git
git commit -m 'xxxxx'
```

#### 1.1.4 暂存区文件

`git status` 查看暂存区文件

`git restore --staged <file>` -- 将文件从缓冲区移除

#### 1.1.5 提交日志、历史记录

`git log` 查看当前分支的历史版本等等

#### 1.1.6 分支

master主分支，一般用来发布新版本，一般不允许在上面直接工作，会创建如dev这样的分支来进行工作，工作完成后，可以将dev分支合并到master上来	

```git
// 列出所有本地分支
git branch

// 列出所有远程分支
git branch -r

//新建分支
git branch [分支名]
git branch -b [分支名] //新建一个分支，且切换到该分支

//删除分支
git branch -d [分支名]
git push origin --delete [分支名]  //删除远程分支

//切换分支
git checkout [分支名]

//合并指定分支到当前分支
git merge [分支名]
```



#### 1.1.7 上传

`git push` -- 上传修改的文件

`git push -u origin xxx`   -- 将其推送到服务器上,(master是默认分支)

git push <远程主机名> <本地分支名>:<远程分支名>

#### 1.1.8 拉取

`git pull` -- 从远处仓库进行拉取，同步，更新操作

#### 1.1.9 克隆

`git clone -b [分支名称] [git地址]` 

例:`git clone https://github.com/xxxx/xxxxx.git `

#### 1.1.10 查看远程地址

`git remote -v`



### 2.1 课题:版本回退

1、看见所有版本信息

```git
git log
```

2、根据id回退到指定的版本

```git
git reset --hard id
```

3、推送本地到远程仓库 让远程仓库和本地一致，到当前本地的版本

```git
git push origin HEAD --force
```



**当回退后发现不需要回退了，消失代码重新找回方法:**



查看命令操作的历史

```git
git reflog
```

找到需要操作的id,使用`git reset --hard id` 就回退到当初一模一样的版本



### 3.1 项目初始上传gitee、github操作

- `git init` - 创建隐藏.git版本仓库
- `git add . && git add xxx.text` 推送全部文件或指定文件到暂存区
- `git commit -m 'xx'` 添加注释
- `git remote add 仓库名称 {仓库地址}` origin代表远程地址的别名
- `git push -u origin master`  推送到指定远程仓库:gitee、github



`git remote rm xxx`  删除远程仓库

`git remote rename {旧仓库名} {新仓库名}` 修改仓库名



## 三、最后

Git命令较为繁多，这里不再赘述。

相关链接：[Gitee官方大全、](https://gitee.com/all-about-git)[Gitee官方游戏学习](https://oschina.gitee.io/learn-git-branching/)

[学生gitee地址](https://gitee.com/fifteen2020)