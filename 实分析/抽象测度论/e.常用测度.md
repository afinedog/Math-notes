# 常用测度

## 实轴上的测度

- **分布函数**：设 $\mu$ 是 $\R$ 上有限Borel测度，则 $F(x) = \mu\dkh{(-\infty,x]}$ 即为分布函数
- **h区间**：左开右闭区间
- **L-S预测度**：
  - 设
    - $F:\R\to \R$ 是单增右连续函数
    - $(a_j,b_j]$ 是不相交h区间
    - $\mu_0\dkh{\mathop{\bigcup}\limits^n_{j=1} (a_j,b_j]} = \sum\limits^n_{j=1} \big[ F(b_j)-F(a_j) \big]$，且 $\mu(\varnothing) = 0$
  - 则 $\mu_0$ 为预测度
- **Borel扩张定理**：
  - **存在性**：若 $F:\R\to\R$ 是单增右连续函数，则存在唯一对应的Borel测度 $\mu_F\dkh{[a,b]} = F(b)-F(a)$
    - **证明**：只需证其为测度即可
  - **唯一性**：若 $F-G$ 是常函数，则 $\mu_F = \mu_G$
    - **证明**：易得
  - **表出性**：任何一个有限Borel测度都可存在一个 $F$
    - **证明**：$F = \begin{cases} \mu\dkh{[0,x]} & x>0 \\ 0 & x=0 \\ -\mu\dkh{(-x,0]} & x<0\end{cases}$
  - **L-S测度**：定义在 $\mc B_R$ 上的 $\ol\mu_F$ 是 $\mu_F$ 的完备化
    - **证明**：
  - **理解**：用概率论的视角，$\mu$ 是密度函数，$F$ 是分布函数
- **L-S测度性质**：
  - **计算**：$\mu(E) = \inf\{\sum\limits^\infty_{j=1}\mu\dkh{(a_j,b_j]}\mid E\subset \mathop{\bigcup}\limits^\infty_{j=1}(a_j,b_j]\}$
    - <font color='chartreuse'>和外测度公式相同</font>
  - **开闭等价性**：计算公式中h区间换为开区间，结果相同
  - **等测包/核定义法**：计算公式 = 内部紧集上确界 = 外部开集下确界
  - **Borel集逼近性**：$E\in \dom\mu \LR E = V\j N_1 \LR E = H\cup N_2$
    - 其中 $V\in G_\d，H\in F_\sigma$，$N_1,N_2$ 是零测集
- **勒贝格测度（分布定义法）**：分布函数为 $F(x) = x$ 的L-S测度