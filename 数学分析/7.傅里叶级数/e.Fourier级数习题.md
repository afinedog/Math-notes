# 李扬（傅立叶级数）

## 更多的分析性质

### 不等式

- **推广的Bessel不等式**：
  - 设 $\p_j(x)$ 是 $[a,b]$ 上的正交函数列，$f(x)$ 在 $[a,b]$ 可积，$a_n = \dis\int^b_a f(x)\p_n(x)dx$
  - 则 $\sum\limits^n_{k=1} a_k^2 \leq \dis\int^b_a f^2(x)dx$，从而收敛
  - <font color='chartreuse'>本质是将Bessel不等式中的 $\cos nx,\sin nx$ 替换成了一般的正交函数列</font>
  - **证明**：
    - 易得 $a_n = (f,\p_n)$，即正交投影
    - 故由勾股定理即得不等式
- **推广的Parseval恒等式**：
  - 设 $f,g$ 均在 $[-\pi,\pi]$ 可积，三角系数分别为 $a_n,b_n$ 和 $\a_n,\b_n$
  - 则 $$\frac{1}{\pi}\int^\pi_{-\pi} f(x)g(x)dx = \frac{a_0\a_0}{2} + \sum^\infty_{n=1} (a_n\a_n + b_n\b_n) $$
  - **证明（和差化积）**：
    - 分别写出 $f-g，f+g$ 的P恒等式，相减后除4即可
  - **证明（内积法）**：
    - 即证 $(f,g) = (F_n,G_n)$
    - 添项后变形易得等价于证明 $(f-F_n,g) + (F_n,g-G_n) = 0$
    - 由Parseval恒等式易得结论
- **微分估计式**：设 $T_n(x)$ 是三角级数，则 $\max\limits_{x\in [-\pi,\pi]}|T_n'(x)| \leq n^2\max\limits_{x\in [-\pi,\pi]}|T_n'(x)^2|$
  - **证明（归纳法）**：
    - $n=1$ 时，辅助角公式易得结论
    - $n\geq 2$ 时
      - 辅助角公式得 $|T_n'(x)| \leq \sum\limits^n_{k=1} k\sqrt{a^2_k+b^2_k} \leq n\sum\limits^n_{k=1} \sqrt{a^2_k+b^2_k}$
      - 柯西不等式得 $\leq n\sqrt{n} \Big( \sum\limits^n_{k=1} a^2_k+b^2_k \Big)^{\dfrac{1}{2}}$
      - Bessel不等式得 $\leq \dis n\sqrt{n}\Big( \frac{1}{\pi}\int^\pi_{-\pi} T_n^2(x)dx \Big)^{\dfrac{1}{2}}$
      - 最后由积分上界不等式即得结论
- **均值不等式与微分公式**：
  - 设 $f$ 二阶连续可导，若 $\sum\limits^\infty_{n=1} |b_n''|$ 收敛，则 $$ \sum^\infty_{n=1} \sqrt{|b_n|} < \frac{2+\sum\limits^\infty_{n=1} |b_n''|}{2} $$
  - **证明**：
    - 由均值不等式易得 $\sqrt{|b_n|} = \sqrt{\frac{1}{n}|nb_n|} \leq \cfrac{\frac{1}{n^2} + |b_n''|}{2}$
    - 再由于 $\sum\limits^\infty_{n=1} \dfrac{1}{n^2} = \frac{\pi^2}{6} < 2$ 即得结论

### 傅立叶系数的性质

- **傅立叶系数的阶**：
  - 设 $f(x)$ 在 $[-\pi,\pi]$ 上 $k$ 阶连续可微，则其三角系数是 $k$ 阶无穷小量
    - **证明**：
      - 由连续可微性，$f^{(k)}$ 的三角级数收敛，故 $\lim\limits_{n\to\infty} a_n,b_n = 0$
      - 再对其逐项积分 $k$ 次即可
  - 设 $f(x)$ 在 $[-\pi,\pi]$ 上满足 $\a$ 阶Lip条件，则其三角系数是 $\a$ 阶无穷小量
    - **证明**：
      - 由周期性，换元 $t = x+\dfrac{\pi}{n}$ 易得 $$a_n = \dis\frac{1}{\pi}\int^{\pi}_{-\pi} f(x)\cos nxdx = -\frac{1}{\pi}\int^{\pi}_{-\pi} f(t+\frac{\pi}{n})\cos ntdt$$
      - 两式作差，由积分绝对值不等式 + 积分上界不等式，易得结论
- **单调性1**：
  - 设 $f(x)$ 在 $[0,2\pi]$ 上可积
  - 若 $f$ 在 $(0,2\pi)$ 内单减，则 $b_n \geq 0$
  - 若 $f$ 在 $(0,2\pi)$ 内单增，则 $b_n \leq 0$
  - **证明**：
    - 易得 $\sin nx$ 在 $\dkh{\dfrac{2k\pi}{n},\dfrac{(2k+1)\pi}{n}}$ 上为正，在 $\dkh{\dfrac{(2k+1)\pi}{n},\dfrac{(2k+2)\pi}{n}}$ 上为负
    - 在 $b_n$ 的E-F公式中，划分积分区间，按照上面的方法换元，即可易得结论
- **单调性2**：
  - 设 $f(x)$ 在 $[0,2\pi]$ 上连续可微
  - 若 $f'$ 在 $(0,2\pi)$ 内单减，则 $b_n \leq 0$
  - 若 $f'$ 在 $(0,2\pi)$ 内单增，则 $b_n \geq 0$
  - **证明**：方法同上
- **轴对称性**：
  - 设 $f(x)$ 在 $[-l,l]$ 上可积
  - 若 $f$ 为偶函数，关于 $x=\dfrac{l}{2}$ 对称，则 $b_n = 0$ 且 $a_{2n-1} = 0$
  - 若 $f$ 为奇函数，关于 $x=\dfrac{l}{2}$ 对称，则 $a_n = 0$ 且 $b_{2n} = 0$
- **中心对称性**：
  - 设 $f(x)$ 在 $[-l,l]$ 上可积
  - 若 $f$ 为偶函数，关于 $(\dfrac{l}{2},0)$ 对称，则 $b_n = 0$ 且 $a_{2n} = 0$
  - 若 $f$ 为奇函数，关于 $(\dfrac{l}{2},0)$ 对称，则 $a_n = 0$ 且 $b_{2n-1} = 0$
- **总结**：由于 $f$ 具有周期性，故随意添加一些周期或对称相关的性质，利用换元法都可以解出新性质

## 抽象函数的傅立叶级数

### 求级数

- 设 $[-\pi,\pi]$ 上可积的 $f$ 满足 $f(x+\pi) = -f(x)$，求 $a_n,b_n$
  - **解**：
    - 对 $a_n$ 的E-F公式换元 $t = x-\pi$，容易发现 $n$ 为偶数时 $a_n = -a_n$，即 $a_{2k} = 0$
    - $b_n$ 同理
- 设 $f$ 是 $\R$ 上以 $2\pi$ 为周期的连续函数，求 $F(x) = \dis\frac{1}{\pi}\int^\pi_{-\pi} f(t)f(x+t)dt$ 的傅里叶级数
  - **解**：
    - 对 $F(-x)$ 换元 $u=t-x$ 易得 $F(-x) = F(x)$，从而是偶函数，$b_n' = 0$
    - 对 $a_n'$ 的E-F公式换元 $u = t+x$，再由诱导公式即得 $a_n' = a_n^2+b_n^2$

### 求函数

- **双周期函数**：设 $f$ 在 $\R$ 上可导，$f(x) = f(x+2k) = f(x+b)\pad (k\in\N^+，b\in\Q^+)$，则 $f$ 是常函数
  - **证明**：
    - 函数以 $2k,b$ 为周期
    - 对 $a_n$ 关于 $T=k$ 的E-F公式，换元 $x=t+b$，由诱导公式和周期性可化为 $a_n\cos\dfrac{n\pi b}{k}-b_n\sin\dfrac{n\pi b}{k}$
    - 同理可得 $b_n = a_n\sin\dfrac{n\pi b}{k}+b_n\cos\dfrac{n\pi b}{k}$
    - 两者组成线性方程组，易得 $|A|\neq 0$，故仅零解，即 $f$ 为常函数
- **幂级数**：
  - 设
    - $f(x) = \sum\limits^\infty_{n=1} c_nx^n$ 在 $\R$ 上收敛，和函数为周期为 $2\pi$ 的奇函数
    - $f$ 的傅立叶系数为 $b_n$
  - 则
    - $c_{2k} = 0$
      - **证明**：
        - 由泰勒展开的唯一性，$c_n = \dfrac{f^{(n)}(0)}{n!}$
        - 再由 $f^{(2k)}(x)$ 也是奇函数即得结论
    - $\forall k\in\N，\sum\limits^\infty_{n=1} n^kb_n$ 收敛
      - **证明**：
        - 由于幂级数无穷阶可微，故由傅立叶级数逐项微分定理得 $b_n = o(\dfrac{1}{n^{k+2}})$，从而收敛
    - 求 $\sum\limits^\infty_{n=1} n^{2k-1}b_n$
      - **解**：
        - 易得 $\sum\limits^\infty_{n=1} (b_n\sin nx)^{(k)}$ 在 $\R$ 上一致收敛，故由逐项微分定理，$f^{(2k-1)}(x) = \sum\limits^\infty_{n=1} (-1)^{k-1}n^{2k-1}b_n\cos nx$。再取 $x=0$ 即得结论

## 常见函数的傅立叶级数

- <font color='red'>对于非周期函数，将它们在 $[-\pi,\pi]$ 上的值周期延拓到 $\R$ 上
- 换元法的注意事项：要保证换元后的定义域依然是原先的周期 $[-\pi,\pi]$</font>

### 三角函数

- $T_n(x) = \dfrac{A_0}{2} + \sum\limits^n_{n=k}\Big[ A_k\cos kx + B_k\sin kx \Big]\pad (k\in\N)$ 的傅立叶展开式为其本身
  - **证明**：
    - E-F公式求积分，再由积化和差公式线性分离即可
- $f(x) = \cos(ax)$，其中 $a$ 不是自然数
  - **解**：
    - E-F公式 + 积化和差公式即可
- $f(x) = \sin^m x\cos^n x$
  - **解**：
    - 积化和差即可
- $f(x) = \cot x$
  - **解（复数展开法）**：
    - 奇函数，故 $a_n = 0$
    - <font color='chartreuse'>此时E-F公式求积分非常麻烦，考虑其它方法</font>
    - 复数展开易得 $$\cot x = \cfrac{\cos x}{\sin x} = \Re\dkh{\cfrac{\cos x + i\sin x}{\sin x}} =  \Re\dkh{\cfrac{e^{ix}}{\dfrac{e^{ix}-e^{-ix}}{2i}}}$$
      - <font color='chartreuse'>最后一步是因为 $\cot x$ 是实数，故总体取实部即可</font>
    - 通分得 $2\Re\dkh{\cfrac{i}{1-e^{-2ix}}}$，化为等比级数得 $=2\sum\limits^\infty_{n=1}\sin (2nx)$
- $f(x) = \tan x$
  - **解（复数展开法）**：
    - 奇函数，故 $a_n = 0$
    - <font color='chartreuse'>此时E-F公式求积分非常麻烦，考虑其它方法</font>
    - 复数展开易得 $$\tan x = \Im \dkh{\cfrac{\cos x + i\sin x}{\cos x}} = \Im\dkh{\cfrac{e^{ix}}{\dfrac{e^{ix}+e^{-ix}}{2}}}$$
    - 通分得 $2\Im\dkh{\cfrac{1}{1-(-e^{-2ix})}}$，化为等比级数得 $= 2\sum\limits^\infty_{n=1}(-1)^{n-1}\sin (2nx)$
  - **解（换元法）**：
    - 将 $\cot x$ 的展开式换元 $u = \dfrac{\pi}{2}-x$ 即可

### 分段函数

- $f(x) = \sgn(x)$
  - **解**：
    - 奇函数，故 $a_n = 0$
    - E-F公式求积分易得 $b_n = \begin{cases} 0 & 奇数 \\ \dfrac{4}{n\pi} & 偶数 \end{cases}$
    - 即展开式为 $$\frac{4}{\pi}\sum^\infty_{n=1} \frac{1}{2n-1} \sin(2n-1)x$$
- $f(x) = \sgn(\cos x)$
  - **解**：
    - 偶函数，故 $b_n = 0$
    - E-F公式求积分易得 $a_n = \begin{cases} 0 & 奇数 \\ \dfrac{4}{n\pi} & 偶数 \end{cases}$
    - 即展开式为 $$\frac{4}{\pi}\sum^\infty_{n=1} \frac{(-1)^{n-1}}{2n-1} \cos(2n-1)x$$


### 幂函数

- $f(x) = x$
  - **解**：
    - 奇函数，故 $a_n = 0$
    - E-F公式计算积分，易得 $b_n = (-1)^{n-1}\dfrac{2}{n}$
- $f(x) = x^2$
  - **解（定义法）**：
    - 偶函数，故 $b_n = 0$
    - E-F公式计算积分，易得 $a_n = -\dfrac{2}{n}(-1)^{n-1}\dfrac{2}{n}$
    - <font color='chartreuse'>由此可见，系数存在共轭递推关系</font>
  - **解（逐项积分法）**
- $f(x) = x^k$
  - **解（逐项积分法）**
  - **解（定义法 + 递推）**：
    - 当 $k$ 为奇数时，其为奇函数
      - 设 $b^{(k)}_n$ 表示傅立叶系数，由E-F公式 + 分部积分易得递推关系 $$b^{(k)}_n = \frac{(-1)^{n+1}2\pi^{k-1}}{n}-\frac{k(k-1)}{n^2}b^{(k-2)}_n$$
      <!-- - 故得到递推关系 $$b_n = (-1)^{\dfrac{k-1}{2}}\frac{k!}{n^k}(-1)^{n-1}2$$ -->
      <!-- - 直接计算易得 $a_0 = 0$ -->
    - 当 $k$ 为偶数时，其为偶函数
      - 设 $a^{(k)}_n$ 表示傅立叶系数，由E-F公式 + 分部积分易得递推关系 $$a^{(k)}_n = \frac{(-1)^{n+1}2\pi^{k-1}}{n}-\frac{k(k-1)}{n^2}a^{(k-2)}_n$$
      <!-- - 再已知 $I_2(n)$，故 $$a_n = (-1)^{\dfrac{k}{2}}\frac{k!}{n^k}(-1)^{n-1}2$$ -->
      - 直接计算易得 $\cfrac{a_0}{2} = \cfrac{\pi^k}{k+1}$

### 绝对值函数

- $f(x) = \arccos(\cos x) = |x|$
  - **解**：
    - 偶函数，故 $b_n = 0$
    - 由E-F公式计算，易得 $a_n = \dfrac{2}{\pi}\dfrac{(-1)^n}{n^2}$
    - 即 $$ f(x) \sim \frac{\pi^2}{2} + \frac{2}{\pi}\sum^\infty_{n=1} \frac{(-1)^n}{n^2}\cos(nx) $$
- $f(x) = \arccos(\sin x) = |\dfrac{\pi}{2}-x|$
  - **解**：
    - 上面的傅立叶级数换元即可
    - 即 $$ f(x) \sim \frac{\pi^2}{2} + \frac{2}{\pi}\sum^\infty_{n=1} \frac{(-1)^n}{n^2}\cos(nx) $$

### 反三角转化函数

- $f(x) = \arcsin(\sin x) = \begin{cases} x & x\in [-\dfrac{\pi}{2},\dfrac{\pi}{2}] \\\\ \pi-x & x\in [\dfrac{\pi}{2},\dfrac{3\pi}{2}] \end{cases}$
  - <font color='red'>反三角函数需要尤其注意这一点</font>
  - **解（定义法）**：
    - 奇函数，故 $a_n = 0$
    - 由E-F公式计算，易得 $a_n = \dfrac{2}{\pi}\dfrac{(-1)^n-1}{n^2} = \begin{cases} -\dfrac{4}{n^2\pi} & n为奇数 \\ 0 & n为偶数 \end{cases}$
    - 即 $$ f(x) \sim \frac{4}{\pi}\sum^\infty_{n=1} \frac{(-1)^{n+1}}{(2n-1)^2}\sin(2n-1)x $$
- $f(x) = \arcsin(\cos x) = \begin{cases} \dfrac{\pi}{2} - x & x\in [-\dfrac{\pi}{2},\dfrac{\pi}{2}] \\\\ \dfrac{\pi}{2} + x & x\in [\dfrac{\pi}{2},\dfrac{3\pi}{2}] \end{cases}$
  - <font color='red'>反三角函数需要尤其注意这一点</font>
  - **解**：
    - 代入易得 $$ f(x) \sim \frac{4}{\pi}\sum^\infty_{n=1} \frac{1}{(2n-1)^2}\cos(2n-1)x $$
- $f(x) = \arctan(\tan x) = \begin{cases} x & x\in [-\dfrac{\pi}{2},\dfrac{\pi}{2}] \\\\ x-\pi & x\in [\dfrac{\pi}{2},\dfrac{3\pi}{2}]  \end{cases}$
  - **解（定义法）**：
    - 奇函数，故 $a_n = 0$
    - 由E-F公式计算，易得 $a_n = \dfrac{2}{\pi}\dfrac{(-1)^n-1}{n^2} = \begin{cases} -\dfrac{4}{n^2\pi} & n为奇数 \\ 0 & n为偶数 \end{cases}$
    - 即 $$ f(x) \sim \sum^\infty_{n=1} \frac{(-1)^{n+1}}{n}\sin(2n)x $$
- $f(x) = \arcsin(\cot x) = \begin{cases} \dfrac{\pi}{2} - x & x\in [-\dfrac{\pi}{2},\dfrac{\pi}{2}] \\\\ -\dfrac{\pi}{2} - x & x\in [\dfrac{\pi}{2},\dfrac{3\pi}{2}] \end{cases}$
  - **解**：
    - 代入易得 $$ f(x) \sim \sum^\infty_{n=1} \frac{1}{n}\sin(2n)x $$

### 指数函数


- $f(x) = e^{ax}$
  - **解**：
    - 已知 $\dis\int e^{ax}\cos (nx)dx$ 和 $\dis\int e^{ax}\sin (nx)dx$ 的积分结果，再由E-F公式即得结论



## 求级数通项


### 幂函数

- <font color='red'>可用幂级数的逐项求导法求解（但高次幂时很麻烦），也可用傅立叶级数的Parseval恒等式配凑</font>
- $\dis\sum^\infty_{n=1}\frac{1}{n^2} = \frac{\pi^2}{6}$
  - <font color='chartreuse'>这题如果用幂级数做，最后转化为计算 $\dis\int^1_0 \frac{\ln(1-x)}{x}dx$，基本无法求解</font>
  - **解（P恒等式法）**：
    - 已知 $x$ 的傅立叶展开式为 $\dis 2\sum^\infty_{n=1}\frac{(-1)^{n+1}}{n}\sin(nx)$
     <!-- - $$2(\sin\ x-\frac{\sin\ 2x}{2}+\frac{\sin\ 3x}{3}-...+\frac{(-1)^{n+1}\sin\ nx}{n}+...)$$ -->
    - 由Parseal恒等式即得结论
  - **解（代入法）**：
    - 已知 $x^2$ 的傅里叶展开式为 $\dis \frac{\pi^2}{3} + 4\sum^\infty_{n=1}\frac{(-1)^{n}}{n^2}\cos(nx)$
    - 取 $x=\pi$ 即得结论
- $\dis\sum^\infty_{n=1} \frac{1}{n^4} = \frac{\pi^4}{90}$
  - **解（P恒等式法）**：
    - 已知 $x^2$ 的傅立叶展开式为 $\dis\frac{\pi^2}{3} + 4\sum^\infty_{n=1} \frac{(-1)^n}{n^2}\cos(nx)$
    - 再由Parseval恒等式即得结论

### 常波函数

- $\dis\sum\limits^\infty_{n=1} \frac{(-1)^n}{2n+1} = \frac{\pi}{4}$
  - **解（代入法）**：
    - 设 $f(x) = \begin{cases} 1，x\in [-\pi,0) \\ 0，x\in[0,\pi)\end{cases}$
    - 易得其傅立叶展开式为 $$\frac{1}{2} - \frac{2}{\pi}(\sin\ x + \frac{\sin\ 3x}{3} + ... + \frac{\sin\ (2k+1)}{2k+1}+...)$$
    - 则由 $f(\dfrac{\pi}{2}) = 0$，得 $\frac{\pi}{4} = \sum\limits^\infty_{k=1} \frac{(-1)^k}{2k+1}$
- $\dis\sum^\infty_{n=1} \frac{1}{(2n-1)^2} = \frac{\pi^2}{8}$
  - **解（P恒等式）**：
    - 已知 $f(x) = \begin{cases} 1 & x\in [-\pi,0) \\ 0 & x\in [0,\pi) \end{cases}$ 的傅立叶展开式为 $$\dis\frac{1}{2} + \frac{2}{\pi}\sum^\infty_{n=1} \frac{1}{2n-1}\sin(2n-1)x$$
    - 再由Parseval恒等式即得结论
- $\dis\sum^\infty_{n=1} \frac{1}{(2n-1)^4} = \frac{\pi^4}{96}$
  - **解（P恒等式）**：
    - 已知 $|x|$ 的傅立叶展开式为 $\dis\frac{\pi}{2} + \frac{4}{\pi}\sum^\infty_{n=1} \frac{1}{(2n-1)^2}\cos(2n-1)x$
    - 再由Parseval恒等式 $$ \frac{1}{\pi}\int^\pi_{-\pi} |x|^2dx = \frac{\pi^2}{2} + \frac{16}{\pi^2}\sum^\infty_{n=0} \frac{1}{(2n-1)^4} $$ 即得结论

### 幂函数 + 三角级数

- $\dis\sum^\infty_{n=1}\frac{(-1)^{n+1}\sin n}{n} = \frac{1}{2}$
  - **解**：
    - 由 $x$ 的傅立叶展开式 + $f(1) = 1$ 即得结论



## 求积分


- $\dis\int^1_0 \frac{\ln (1-t)}{t}dt = -\cfrac{\pi^2}{6}$
  - **解**：
    - 被积函数幂级数展开，然后逐项积分得转化为 $-\sum\limits^\infty_{n=1}\cfrac{1}{n^2}$
- $\dis\int^1_{0} \frac{\ln (1+t)}{t}dt = \cfrac{\pi^2}{12}$
  - **解**：
    - 被积函数幂级数展开，然后逐项积分得转化为 $\sum\limits^\infty_{n=1}\cfrac{(-1)^{n+1}}{n^2}$