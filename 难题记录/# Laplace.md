# Laplace变换

- **Laplace变换**：$\dis \hat f(s) = \int^\infty_0 f(t) e^{-st}dt$
- **Laplace变换的终值定理**：$\lim\limits_{s\to 0} s\hat f(s) = \lim\limits_{t\to\infty} f(t)$
  - **证明**：由性质，$\dis sf(s) = \widehat{f'}(s) = \int^\infty_0 f'(t)e^{-st}dt$
  - 故 $\dis\lim\limits_{s\to 0} s\hat f(s) = \lim\limits_{s\to 0} \int^\infty_0 f'(t)e^{-st}dt = \int^\infty_0 f'(t)dt = \lim\limits_{t\to\infty}f(t)$（**证毕**）
  <br>

- **Laplace反变换的终值定理**：$\lim\limits_{t\to 0} f(t) = \lim\limits_{s\to\infty} s\hat f(s)$
  <br>
  - **证明**：由分部积分得，$\widehat{f'}(s) =  s\hat f(s) - f(0)$
  - 仿照上式取极限即可
- （**该定理又称为Laplace变换的初值定理**）

### 错误，函数反常可积 $\neq$ 函数极限存在

- 再由原函数可积，得 $\lim\limits_{t\to\infty}f(t) = O(1)$
- 则 $s\to 0$ 时，$\hat f(s) = \cfrac{O(1)}{O(s)} = O(\frac{1}{n})$

### 改为用反证法（也是错的，搞反了s和t，但不影响）

- 反设 $f(t) > O(\frac{1}{n})$
- 则 $s\hat f(s) = f(t) > O(\frac{1}{n})\quad (n\to\infty，t\to\infty，s\to 0)$
- 则 $\hat f(s) = \dfrac{1}{s}\cdot f(t) > O(n) \cdot O(\frac{1}{n}) = O(1)\quad (s\to 0)$
- 即 $f(s)$ 大于一切有界量 （$s\to 0$），或者说，$f(s)$ 在 $s\to 0$ 时无界
- 但由于可积函数的Fourier系数一定存在，故产生矛盾

### 再次修改

- 反设 $f(s) > O(\frac{1}{s})\quad (s\to\infty)$
- 则 $s\hat f(s) = f(t) > O(1)\quad (s\to \infty，t\to 0)$，与 $f(0)$ 存在相矛盾


## 特征函数

- 已知区间 $[a,b]$
- 区间 $[a,b]$ 上的特征函数 $\chi_{[a,b]}(t) = \begin{cases} 1 ，t\in [a,b] \\ 0，t\notin [a,b] \end{cases}$
