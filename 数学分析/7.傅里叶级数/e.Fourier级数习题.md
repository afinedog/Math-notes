# 李扬（傅立叶级数）

### 更多的分析性质

- **Riemann空间内积的C-S不等式**：
  - 设 $\p_j(x)$ 是 $[a,b]$ 上的正交函数列，$f(x)$ 在 $[a,b]$ 可积，$a_n = \dis\int^b_a f(x)\p_n(x)dx$
  - 则 $\sum\limits^\infty_{n=1} a_n^2 \leq \dis\int^b_a f^2(x)dx$ 收敛
  - **证明**：利用定积分的C-S不等式即可
- **推广的Parseval等式**：设 $f,g$ 均在 $[-\pi,\pi]$ 可积，三角系数分别为 $a_n,b_n$ 和 $\a_n,\b_n$
  - 则 $$\frac{1}{\pi}\int^\pi_{-\pi} f(x)g(x)dx = \frac{a_0\a_0}{2} + \sum^\infty_{n=1} (a_n\a_n + b_n\b_n) $$
  - **证明（和差化积）**：
    - 分别写出 $f-g，f+g$ 的P恒等式，相减后除4即可
- **微分估计式**：设 $T_n(x)$ 是三角级数，则 $\max\limits_{x\in [-\pi,\pi]}|T_n'(x)| \leq n^2\max\limits_{x\in [-\pi,\pi]}|T_n'(x)|$
  - **证明（归纳法）**：
    - $n=1$ 时，辅助角公式易得结论
    - $n\geq 2$ 时
      - 辅助角公式得 $|T_n'(x)| \leq \sum\limits^n_{k=1} k\sqrt{a^2_k+b^2_k} \leq n\sum\limits^n_{k=1} \sqrt{a^2_k+b^2_k}$
      - 柯西不等式得 $\leq n\sqrt{n} \Big( \sum\limits^n_{k=1} a^2_k+b^2_k \Big)^{\dfrac{1}{2}}$
      - Bessel不等式得 $\leq \dis n\sqrt{n}\Big( \frac{1}{\pi}\int^\pi_{-\pi} T_n^2(x)dx \Big)^{\dfrac{1}{2}}$
      - 最后由积分上界不等式即得结论
- **一致收敛判别（可积情况）**：设 $f(x)$ 在 $[-\pi,\pi]$ 上可导，且导函数可积
  - 则 $f$ 的三角级数绝对收敛，且一致收敛到 $f$
  - **证明**：
    - 由连续性易得三角级数的点态收敛性，只需证明一致收敛性
    - 由逐项可导定理 + Bessel不等式，级数 $\sum\limits^\infty_{n=1} (n^2a_n^2 + n^2b_n^2)$ 收敛
    - 再由放缩 + 均值不等式，$|a_n\cos nx + b_n\sin nx| \leq \dfrac{1}{n}|na_n| + \dfrac{1}{n}|nb_n| \leq \dfrac{1}{n^2} + \dfrac{1}{2}(n^2a_n^2 + n^2b_n^2)$
    - 比较判别法即得绝对收敛，W判别法即得一致收敛

### 傅立叶系数的性质

- **傅立叶系数的阶**：
  - 设 $f(x)$ 在 $[-\pi,\pi]$ 上 $k$ 阶连续可微，则其三角系数是 $k$ 阶无穷小量
  - 设 $f(x)$ 在 $[-\pi,\pi]$ 上满足 $\a$ 阶Lip条件，则其三角系数是 $\a$ 阶无穷小量
    - **证明**：
      - 由周期性，换元 $t = x+\dfrac{\pi}{n}$ 易得 $$a_n = \dis\frac{1}{\pi}\int^{\pi}_{-\pi} f(x)\cos nxdx = -\frac{1}{\pi}\int^{\pi}_{-\pi} f(t+\frac{\pi}{n})\cos ntdt$$
      - 两式作差，由积分绝对值不等式 + 积分上界不等式，易得结论
- **单调性1**：
  - 设 $f(x)$ 在 $[0,2\pi]$ 上可积
  - 若 $f$ 在 $(0,2\pi)$ 内单减，则 $b_n \geq 0$
  - 若 $f$ 在 $(0,2\pi)$ 内单增，则 $b_n \leq 0$
  - **证明**：
    - 易得 $\sin nx$ 在 $[\dfrac{2k\pi}{n},\dfrac{(2k+1)\pi}{n}]$ 上非负，在 $[\dfrac{(2k+1)\pi}{n},\dfrac{(2k+2)\pi}{n}]$ 上非负
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
    - 函数以 $k,b$ 为周期
    - 对 $a_n$ 关于 $T=k$ 的E-F公式，换元 $x=t+b$，由诱导公式和周期性可化为 $a_n\cos\dfrac{n\pi b}{k}-b_n\sin\dfrac{n\pi b}{k}$
    - 同理可得 $b_n = a_n\sin\dfrac{n\pi b}{k}+b_n\cos\dfrac{n\pi b}{k}$
    - 两者组成线性方程组，易得 $|A|\neq 0$，故仅零解，即 $f$ 为常函数
- **幂级数**：设 $f(x) = \sum\limits^\infty_{n=1} c_nx^n$ 在 $\R$ 上收敛，和函数为周期为 $2\pi$ 的奇函数，则
  - $c_{2k} = 0$
    - **证明**：
      - 易得 $c_n = \dfrac{f^{(n)}(0)}{n!}$
      - 易得 $f^{(2k)}(x)$ 也是奇函数，从而可得结论
  - $\forall k\in\N，\sum\limits^\infty_{n=1} n^kb_n$ 收敛
    - **证明**：
      - 由于幂级数无穷阶可微，故 $b_n = o(\dfrac{1}{n^{k+2}})$，从而收敛
  - 求 $\sum\limits^\infty_{n=1} n^{2k-1}b_n$
    - **解**：
      - 易得 $\sum\limits^\infty_{n=1} (b_n\sin nx)^{(k)}$ 在 $\R$ 上一致收敛，故由逐项微分定理，$f^{(2k-1)}(x) = \sum\limits^\infty_{n=1} (-1)^{k-1}n^{2k-1}b_n\cos nx$。再取 $x=0$ 即得结论

## 常见函数的傅立叶级数

- <font color='red'>换元法的注意事项：要保证换元后的定义域依然是原先的周期 $[-\pi,\pi]$</font>

### 三角函数

- $T_n(x) = \dfrac{A_0}{2} + \sum\limits^n_{n=k}\Big[ A_k\cos kx + B_k\sin kx \Big]$ 的傅立叶展开式为其本身
- $f(x) = \cos ax$
- $f(x) = \cot x$
- 

### 分段函数

- $f(x) = \sgn(x)$


### 幂函数

- $f(x) = x$
- $f(x) = x^2$
- $f(x) = x^3$


### 指数函数


- $f(x) = e^{ax}$


### 三角函数


- $f(x) = \arccos(\cos x)$
- $f(x) = \arccos(\sin x)$
