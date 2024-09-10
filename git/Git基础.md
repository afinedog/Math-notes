# Git

## GitHub/Gitee

GitHub是一个代码托管云服务网站，帮助开发者存储和管理其项目源代码，且能够追踪、记录并控制用户对其代码的修改。（一个网盘）
Gitee也差不多，不过不用翻墙。

### 功能

- 托管代码或其它文件
  - 对历史版本进行管理
  - 可以随时回退到历史上修改的版本
- 搜索、下载、使用开源项目（就比如我配latex环境的时候从GitHub上latexworkshop插件的创始人的那里找代码）
- 协同开发（当仓库）
- GitHub Pages：静态网页托管服务
  - 它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript文件，然后构建并发布网站。
  - GitHub 提供免费的 github.io子域，也支持自定义域名
- GitHub新手教程[https://www.jianshu.com/p/3a81cab0cae7]

### 基本操作

1. 建立一个仓库
   1. 一个仓库通常创建一个单一的项目，一般是创建一个Readme文件夹
   2. 设置好description注释后，创建一个master分支（默认是main，不过我觉得还是master好）
   3. 然后成功创建仓库
2. 创建一个分支
   1. 在仓库中直接操作即可。
3. 在分支中进行编辑
4. 发送pull request请求
5. 进行merge文件

## git简介

- Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
- Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
- Git 是内容管理系统(Comment Manager Systerm)，工作管理系统，等。
- 参考资料
  - 廖雪峰[https://www.liaoxuefeng.com/wiki/896043488029600/896067008724000]
  - git的项目操作详解[https://blog.csdn.net/qq_37772475/article/details/107140061]
  - git常用命令[https://blog.csdn.net/weixin_37292229/article/details/71080573]
  - git对象理解[https://blog.csdn.net/nobody_1/article/details/88766916]
  - git使用总结[https://blog.csdn.net/KevinDGK/article/details/51606925]
  - （然而这些玩意都比不过一个chatgpt……）

### git的三个部分

- git Bash：键入式控制工具（终端）
- git Cmd：使用电脑cmd控制（终端）
- git GUI：图形化控制工具（不好用）
- IDE内置git（微信小程序、vscode等）（比原装git好用，但是功能不太强大）

### 一些名词

- 文件夹file：普遍意义上的文件夹
- 目录directory：电脑的本地存储目录/云端的远程目录
  - 项目project：为了一个特定任务组建的文件集锦
  - 远程仓库：网站上存放代码的地方，分布式开发的核心
  - 本地仓库（版本库）repository：特定的项目目录，可以与项目关联并一同管理
  - 分支branch：目录的平行结构
  - 工作目录（工作区）：比如微信小程序的开发界面（它仅仅保留记录，修改它并不能修改.git文件）
  - 暂存库（add命令传输到的区域，它并没有reset版本回退功能，就是一个草稿）
  - 版本库（commit命令传输的区域，可以reset版本回退、可以加注释```git commit -m "注释"```）
- 缓存cache
- stash暂存，commit提交，tag标签，remote远程，merge合并，rebase变基，

- **文件状态**
  - 已修改  modified
  - 已暂存  staged
  - 已提交  commited

- git仓库的基本文件
  - **config文件**：包含项目的特定配置项，比如命令别名的配置可以配置在该文件；
  - **description文件**：仅供GitWeb程序使用；
  - **HEAD文件**：文件自始至终只有一行内容，表示当前分支；
  - **hooks**/文件夹：包含客户端或者服务端的钩子文件，主要用来设置自动脚本减少手工操作；为了保证项目的安全，一般不会用到钩子脚本；
  - **info**/文件夹：默认含有一个可执行的文件，文件为.gitignore忽略的内容；
  - **objects**/文件夹：用来存储所有的对象信息；
  - **refs**/文件夹：存储指向分支的提交对象的指针，包括项目中所有的分支指针；

## 工作流程

### 基本流程

![工作流程](https://www.runoob.com/wp-content/uploads/2015/02/git-process.png)
![工具关系](https://www.runoob.com/wp-content/uploads/2015/02/1352126739_7909.jpg)

1. 资源库
   1. 克隆操作——建立一个工作副本——转到工作副本
   2. 更新操作——对工作副本进行改动（编辑、添加、删除文件）
2. 工作副本
   1. 检查修改——查看文件和修改情况
   2. 提交修改——提交和推送操作——回到资源库
   3. 修改错误——修改、再次推送
3. 工作区
   1. 就是你在电脑里能看到的目录。用来编辑文件
   2. **add操作（向暂存区传送文件）**：当对**工作区里编辑后的文件**执行```git add```命令时
      1. **暂存区的目录树**被更新
      2. **编辑文件的内容**被写入到**对象库**中的一个新的对象中，而该**对象的ID**被记录在**暂存区的文件索引**中。
4. 版本库（仓库）
   1. 工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库
   2. ***暂存区（stage/index）***
          1. 一般存放在 .git 目录下的 index 文件（.git/index）中，也叫作索引（index）。
   3. ***目录树***：
      1. **master分支（主分支）**：
         1. 每次提交，Git都把文件串成一条时间线，这条时间线就是一个分支
         2. master分支就是最后一次分支（主分支）。除了master还可以自己创建其它分支
      2. **HEAD**：可以理解为指针，默认指向当前仓库所处的分支（master分支）。新建分支之后就指向新建的分支（相当于光标，所以出现HEAD的命令也可以用具体地址(例如 master )来替换）
   4. ***对象库（objects）***：包含各种创建的对象和内容，实际位于 ".git/objects" 目录下（相当于总仓库）
         1. **数据对象blob**：使用**add操作**将文件或者目录加入到暂存区时产生，是一个存储在git系统中的包含具体文本内容的文件
         2. **树对象tree**：目录对象，包含blob对象和子tree对象
         3. **提交对象commiter**：包含提交的信息和备注
   5. ***操作***（一般都会改变HEAD的指向）
      1. **reset HEAD（重置）操作**：```git reset HEAD```暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响
      2. **commit（提交）操作**：暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。
      3. **cached（删除）操作**：```git** rm --cached <file>```
      4. **checkout（替换）操作**  *(！危险！)*：
         1. ```git checkout .```或```git checkout -- <file>```用暂存区的文件替换工作区的文件
         2. ```git checkout HEAD .``` 或 ```git checkout HEAD <file>```用暂存区的文件替换HEAD指向的文件

### 编辑模式

- 当使用diff、show等查看命令时，git bash会进入编辑模式
  - 此时按回车是换行，按Pagedown是翻页
  - **按小写wq是退出**

## 基本命令

![操作说明](https://www.runoob.com/wp-content/uploads/2015/02/git-command.jpg)
![常用命令](https://www.runoob.com/wp-content/uploads/2015/02/011500266295799.jpg)

### 创建和克隆仓库

- 创建文件夹
  - mkdir [] 创建文件夹
  - cd [] 进入文件
  - rm [] 删除文件
- 初始化仓库（建立.git虚拟文件、版本库）：
  - 执行```git init```，会在当前目录创建一个新的.git目录（默认创建mater分支）
  - 执行```git init newrep```，会在newrep指定目录创建一个新的.git目录
- 克隆仓库（与pull的区别是从无到有、自动追踪upstream，一般都是必不可少的一步）：
- ```<repository>```：仓库名。```<directory>```：本地目录路径
  - 本地仓库```git clone <repo> name```，
    - ```git clone <repo> <directory> name```，克隆仓库到指定的目录
  - 远程仓库```git clone [url]```

```git中几种等价的克隆写法
git clone http://github.com/CosmosHua/locate new
git clone http://github.com/CosmosHua/locate.git new
git clone git://github.com/CosmosHua/locate new
git clone git://github.com/CosmosHua/locate.git new
```

### 基本配置（写一次就行了）

- ```git config --global user.name []``` 用户名
- ```git config --global user.email []``` 邮箱
- ```git config --global push.default simple ``` 简单模式
- `git config --golbal core.quotepath false` 将文件路径名设为中文而非数字
- "global"是全局的意思

### 查看状态

- ```pwd``` ```dir``` ```ls```查看当前文件夹（看看自己现在有哪些文件）
- ```git status``` 查看暂存区状态
  - （用于查看是否解决完冲突，**是否可以commit**）
  - （用于查看暂存区是否为空，防止占用硬盘空间）
- ```git diff```	比较暂存区和工作区的差异。（**是否已经add**）
  - 若有任何输出，就是完全一样
- ```git remote -v``` 查看远程仓库（**是否关联远程仓库成功**）
- ```git log``` **查看commit的历史**（用于reset版本回退）（从后往前）
  - --pretty==online参数：只显示有message的提交记录
- ```git log 分支名``` 查看特定分支的commit历史
  - --merges参数：只显示包含合并的commit记录
  - --graph参数：显示合并的树状图
- ```git reflog``` 查看git命令历史 + 指针指向位置的历史
  - **理论上可用于回滚误删，但实际基本无法执行。所以一定要先干好！**
- ```git blame <file>```	以列表形式查看指定文件的历史修改记录（没用过，但是Gitlens插件里面有，而且可视化之后乱七八槽的，小项目用不着）

### 暂存和提交

- ```git add```	添加文件修改到暂存区（不可调用和回退暂存区的文件）
  - `git add .`：提交该目录下所有文件（**在根目录中用它即可**）
  - -a参数(all)：提交所有文件
  - -u参数：提交已跟踪文件（不包括新增文件）
  - 文件路径参数：提交指定文件
- ```git diff```	比较文件的不同，即暂存区和工作区的差异。
- ```git commit```	提交暂存区文件到本地仓库（版本库）
  - -m参数(message)：指定提交信息
  - -a参数(all)：
  - -p参数(patch)：指定哪些文件需要提交（比如vscode的#文件）
  - -c参数：
  - -s参数：对提交信息进行GPG签名（以后提交需要密码）
  - `git commit --amend -m "xxx"`（**单人笔记提交可以用这个，但是在push后再使用amend时必须有相同m参数，否则会与远程仓库发生冲突**）

### 标签和测试

- tag的作用是替代commit ID
  - commit message不能用于回退版本（因为不唯一），但是commit ID（唯一标识符）可以
- ```git tag``` 查看所有标签
  - ```git show <filename>``` 查看标签名和commit的对应关系
    - -p参数：以diff格式输出（默认参数）
    - -s参数：只显示摘要，不显示diff记录（**用这个就行**）
    - -name-only：只显示修改的文件名列表，不显示具体变更内容
    - --name-status: 显示包含文件名和变更状态（例如添加、修改或删除）的变更记录列表
- ```git checkout "标签名"```
  - 切换版本
- ```git tag 标签名``` 提交完成后，对当前提交（最后一次提交）打上标签
- ```git tag "标签名" commitID``` 为以前的提交打上标签
  - commitID可以在git log中看到

### 版本调试（切换回之前的某个版本，查看后再切换回当前版本）

1. 使用 `git reflog` 查看提交版本号
2. 使用 `checkout <commit>` 创建一个临时分支进行修改调试
3. 调试完后使用 `checkout -f master` 切回当前版本，不会对仓库任何影响

### 版本回退（不同于版本调试，它基本会毁灭某个版本）

- ```git reset``` 将暂存区和HEAD回滚到以前的版本，但不改变工作区
  - --mixed参数：默认选项
  - --keep参数：不改变暂存区状态，仅重置未commit文件为HEAD的内容。
  - --soft参数：仅将HEAD回滚到以前的版本
  - --hard参数：将工作区、暂存区、HEAD都回滚到以前的版本（丢失所有未commit的更改）
  - --merge参数：合并
- ```git reset --hard [标签名或commitID]```	使当前分支被指定版本覆盖
  - ```git reset --hard HEAD^``` 回退到上一个版本
  - ```git reset HEAD []```      撤销对暂存区的修改
  - 版本是版本库里的，也就是 commit -m"" 传过去的，里面的注释也可以是版本号。不写全也可以
- ```git checkout [标签名或commitID]``` 跳转指针到之前的版本所在的分支
  - （如果此时再次进行commit，则会删除原先后面的commit记录，所以要先创建新分支，用它来保留当前的提交记录，然后再回退版本）
- ```git switch <分支名或标签名>``
  - **它会放弃当前暂存区！！！默认Stash没有用！！！在切换分支前一定要先commit一下！！**
    - ``git stash save <message>``：保存当前暂存区，并存储记录信息
    - ``git stash apply <stash>``：恢复当前暂存区的指定stash
    - ``git stash drop <stash>``：删除保存记录
    - ``git stash list``：查看保存记录
    - ``git stash clear``：移除所有stash
  - **一般查看笔记类型的回滚版本用这个就行**

### 分支签出（万不得已不要使用！！！）

- ```git checkout```通过跳出工作区的方式放弃工作区的修改，接下来再回来看到的是暂存区的文件（可能会发生隐性merge，不建议用）
  - ```git checkout 分支名```：切换HEAD到另一个分支中
    - -b参数：创建新分支并跳转
    - -f参数：强制切换，覆盖本地修改
  - ```git checkout --文件名```：将文件回复到最后一次commit时的状态


### 分支管理

使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作

- 列出分支：```git branch```
- 创建分支命令:```git branch 分支名```（没有切换分支）
  - 当前分支的所有commit记录均保存在新分支中
- 切换分支命令：```git switch 分支名```
- 创建并切换分支命令:```git checkout -b[]```
- 重命名分支：```git branch -m 原名字 现名字```
- 删除分支命令：```git branch -d []```

#### 分支合并

- 合并：（合并指定分支到当前分支，指定分支不变。变的是当前分支（可能会冲突））
- 合并分类
  - **向前合并（快进合并）**：没有冲突的合并，结果更简洁
    - 比如主分支和在主分支的基础上建立的新分支
    - 如果存在冲突，则不可用
  - **向后合并（非快进合并）**：存在冲突的合并。此时会给出多个分支的不同提交历史，结果更复杂
    - 比如主分支下的两个新分支
    - 这就是分布式开发的精髓所在，不同的分支代表的就是不同的开发人员所作出的调整
- 合并分支命令：```git merge 指定分支``` 
  - --no-ff参数：禁止快速向前合并（强制进行一次commit来记录合并）
  - --commit参数：保留两个分支的所有提交记录
  - --squash参数：折叠成单一的提交（对偶于--commit参数）
  - --abort参数：撤销未完成的合并
  - --continue参数：已经解决冲突，继续进行合并
  - --no-commit：合并后先不生成提交记录
- 冲突：两个文件不同的地方，需要手动编辑（vscode的解决冲突工具还是挺好用的）

#### 分支变基

- 变基：强制快速合并
  - 始终保持合并后的提交历史是线性的（单人比较好用，如果多人协作时使用变基，提交历史就找不到了）
  - 无论是合并还是变基，都需要解决冲突。它们的不同仅仅体现在提交历史上
- ```git rebase 当前分支 指定分支```

### 远程操作

- ```git remote```	远程仓库操作
  - ```git remote add 仓库名 仓库网址``` 添加仓库
  - ```git remote -v``` 查看已关联仓库
  - ```git remote show``` 查看仓库详细信息
  - ```git remote rename 旧名 新名``` 更改仓库名称
  - ```git remote rm 仓库名``` 删除已关联仓库
- ```git clone``` 从远程获取代码库
- ```git fetch```	从远程获取更新，下载到远程跟踪分支中，不影响本地分支
  - -a参数：拉取所有分支和标签
  - -t参数：拉去指定标签
  - -prune参数：删除不存在于远程仓库的本地分支（**强合并，慎用**）
- ```git pull```	下载远程代码并合并（git pull = git fetch + git merge，先获取再融合）
  - -r参数：用变基代替合并
  - --no-rebase参数：使用合并
- ```git push 远程仓库名 本地分支名:远程分支名```	上传远程代码并合并
  - -u参数：关联本地分支和远程分支（**第一次推送时必须用**）
  - -f参数：强制推送，覆盖远程仓库的内容（**强合并，多人开发时慎用，单人无所谓，因为你本地也有和远程仓库一样的提交历史**）
  - --tags参数：将标签一起推送到远程仓库（**默认不开启，单人必用，多人慎用**）

### 比较差异（当本地仓库落后于远程仓库时，push会失败，此时所需要的操作）

- **分布式开发时**：此时一般是别人提交了自己开发的部分，那么只需`git pull`，并在本地合并冲突，然后再`git push`即可
- **单独开发时**：此时一般是你在远程仓库端编辑了一部分内容
  - 一般简单点直接用-f覆盖就行了
  - 如果不想用 -f 参数直接覆盖，那么先`git fetch`，获取提交信息，再用 `git diff 远程仓库/本地分支` 来比较差异，或用 `git log 远程仓库/本地分支` 来比较提交历史