## 高级命令


### 与远程建立联系

- ***在GitHub上维护自己的项目***
  1. 用自己的账号建立一个repository
  2. GitHub返回一个指向该repository的地址（SSH或HTTP）（SSH：安全外壳协议Security Shell Harmony，经过加密，速度较慢）
  3. 将自己本地的文件push到GitHub上去：
     1. 方法1：
        1. 使用clone命令将GitHub的repository复制到本地来（此时已经成功关联，可以使用push、pull直接找到对方）
        2. 然后使用add、commit命令，将本地文件放入本地clone项目中
        3. 然后使用push命令即可
     2. 方法2：
        1. 先使用add和commit
        2. 然后使用 git remote add 命令
- ***合并分支***
  - merge（合并）：在git branch 1中使用git merge branch2，将branch 2 上的文件加入branch 1 中，且不会改变branch 2 上的内容
  - rebase（变基）：同merge，不过在遇到冲突时有差别。
  - **冲突**：如果是克隆过去的目录，存在相同的文件，会进入冲突
    - **merge**需要等到冲突解决才能继续进行（傻子状态，在微信小程序中会跳转到一个乱码分支，然后必须一行一行自己去修改文件（或者直接在远程仓库上复制粘贴），然后声明```git add file \n git commit -m "冲突已解决"```才能回到原来的分支）
    - **rebase**可以选择*自己解决*、*直接覆盖*、*停止*三个选项，快速解决冲突（不过微信小程序中如果冲突太多有时候仍然需要手动解决）
- ***请求合并***
  - master一般是项目的官方分支，merge或push需要审核和权限
  - 审核方法就是发送**merge Request**请求
- ***分支建立关联***
  1. upstream方法
     - ```git branch --set-upstream- to=file/branch 1 branch 2```，相当于手动建立了两个分支之间的关联，可以**直接使用push和pull命令**
  1. simple模式
     - ```git config --global push.default simple```，该命令将git设置成simple模式，即**pull和push的对象是默认相同的**。
- ***分支类型***
  - 命令```git branch -a```
  - 图像![分支类型](https://img-blog.csdn.net/20150602150510181?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveGlhb3h1YW50ZW5na29uZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
  - 本地分支：白色
  - 红色分支：指向远端的指针，是任何改动和传输的缓冲cache
  - 远端分支：红色旁边的白色

### IDE

#### commit调整

git bash中使用commit时，可以在IDE中选择是否忽略一些文件修改。

#### 终端使用git bash

1. 调整设置或setting.json
2. 新建一个git bash终端（或者在源代码管理中打开仓库的终端）

#### VS CODE源代码管理功能

1. 首先建立一个.git仓库，方法有
   1. 直接在文件夹里用git bash初始化配置
   2. 在VS CODE中打开git bash终端，然后建立（终端一开始显示的是vs code中目前文件的本地仓库，源代码管理也是一样。如果要操作其它文件夹就需要路径，而且……git bash里的顶级目录就是Program file 里的 git文件夹，所以不太可能。（路径可以用tab补全）
2. 在源代码管理中可以看到.git仓库后，关联远程仓库
3. 克隆远程仓库到一个缓冲文件中（我原来以为可以像管理windows一样管理git，但是现在发现还是要麻烦一点的，比如这个缓冲文件）
4. 修改缓冲文件，然后add、commit、push（push又会碰到傻瓜git问题，需要命令```git push -f --set-upstream note master:master```来覆盖远程仓库）

### 对象操作

#### blob对象



## 另一种说明

### 工作流

- 你的本地仓库由 git 维护的三棵“树”组成。
  - 第一个是你的 工作目录，它持有实际文件；
  - 第二个是 暂存区（Index），它像个缓存区域，临时保存你的改动；
  - 第三个是 HEAD，它指向你最后一次提交的结果。
- 添加和提交
  - 你可以提出更改（把它们添加到暂存区），使用如下命令：```git add <filename> \n git add *```
  - 使用如下命令以实际提交改动：```git commit -m "代码提交信息"```
  - 现在，你的改动已经提交到了 HEAD，但是还没到你的远端仓库
- 推送改动
  - 你的改动现在已经在本地仓库的 HEAD 中了。执行如下命令以将这些改动提交到远端仓库：```git push origin master```
    - 它可以把 master 换成你想要推送的任何分支
  - 如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：```git remote add origin <server>```
    - 如此你就能够将你的改动推送到所添加的服务器上去了

### 分支

- 分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”分支。在其他分支上进行开发，完成后再将它们合并到主分支上。
- 分支操作
  - 创建一个叫做“feature_x”的分支，并切换过去：```git checkout -b feature_x```
  - 切换回主分支：```git checkout master```
  - 再把新建的分支删掉：```git branch -d feature_x```
  - 除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：```git push origin <branch>```

## 我的实操

### 发送文件

1. 首先打开需要传送的文件页面，如index文件夹，里面包含index.wxml和index.wxss两个文件。
2. 使用 git bash here，打开界面
3. 使用 git init，建立暂存区[xx路径.git]（如果退出了，也还是会保留，可以使用 git status 查看）
4. 使用 git config --username.
5. 使用 git add index.wxml，使文件加入暂存区（一般这个时候可以大胆改动了，已经缓存了）
6. 使用 git remote add [自定义仓库名称] [路径]，关联远程仓库
7. 使用 git remote -v 查看关联的远程仓库
8. 使用 git commit，打开 git 安装时默认的IDE（我的是VS Code）。然后仔细阅读英文，选定要 commit 的文件（因为仅仅写 commit 的话默认会把暂存区的全部文件都传入仓库）。在VS Code中是删除 # 号就可以了。
9. 使用 git push -u origin master 进行第一次推送
   1. 如果出现错误，fetch问题的话用pull把远程仓库里的文件融合一下，改改次序就行了。
   2. 出现历史版本不兼容问题，用 git pull origin master --allow-unrelated-histories 或不用push，改用覆盖命令（额，好像是IDE里面的）

### 拉取文件

1. 首先重复以下指令
   1. 建立暂存区
   2. 推送已修改的文件
   3. 关联远程仓库
   4. 克隆远程仓库（如果不克隆的话，git这个傻瓜程序是不会让你pull的）

### 取消关联

- git remote remove origin

## 微信小程序IDE中使用git

### 基本配置

参考网站[https://blog.csdn.net/kang19940713/article/details/84141698]

1. 首先必须是一个小程序，也就是**一个完整的项目**。不知道为啥代码片段中没有版本管理工具……
2. 然后**git插件**必须运行无误。（这玩意是内置的，不需要特地下载）
3. 在「工作空间」->「设置」->「通用」->「编辑」中**设置用户名和gitee邮箱**，相当于git config命令中的user.name和user.email
4. **添加仓库**：在[项目管理---设置--远程]中添加远程仓库
5. **网络认证**：在[项目管理---设置--网络和认证]中进行用户名和密码认证，和gitee关联起来
6. **修改、再次提交代码**：退出版本管理，然后修改代码。再次进入版本管理，在工作区中提交到本地master分支上。最后使用推送功能提交到远程master分支上。

### 功能

- 初始化本地仓库，相当于git init命令
- 刷新
- 推送
  - push（用户名和密码使用gitee上的）
- 抓取
  - fetch到一个区域中
- 拉取
  - pull到当前HEAD所在的分支中并merge
- 贮藏
  - commit（工作区可能会回退到最后一次commit的版本）

