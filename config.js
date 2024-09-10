({
  katexConfig: {
  "macros": {
    
    // display写法
    "\\dis": "\\displaystyle",
    "\\ts" : "\\textstyle",
    "\\Ss" : "\\scriptstyle",
    "\\lsum": "\\sum\\limits",
    "\\dsum": "\\displaystyle\\sum\\textstyle",
    "\\dint": "\\displaystyle\\int\\textstyle",
    "\\nint": "\\mathop{\\int\\cdots\\int}\\limits",
    "\\liint": "\\iint\\limits",
    "\\liiint": "\\iiint\\limits",
    

    // 均值积分
    "\\aint" : "\\dis\\int_{#1}\\hspace{-#2 em}-\\hspace{#2 em}\\hspace{-0.7 em}\\ts",
    "\\aintb" : "\\aint{B(x,r)}{2.7}",
    "\\aintp" : "\\aint{\\pa B(x,r)}{3.1}",
    "\\ainte" : "\\aint{E}{1.2}",
    
    // 分式
    "\\pfrac": "\\frac{\\partial #1}{\\partial #2}",
    "\\pa":"\\partial",
    "\\na": "\\nabla",
    "\\dfrac" : "\\large\\frac{#1}{#2}\\normalsize",
    "\\lfrac" : "\\Large\\frac{#1}{#2}\\normalsize",
    "\\cpfrac": "\\cfrac{\\partial #1}{\\partial #2}",
    "\\dpfrac": "\\dfrac{\\partial #1}{\\partial #2}",

    // 列向量和大括号
    "\\tvek": "\\begin{pmatrix}#1\\\\#2\\end{pmatrix}",
    "\\tvec": "\\begin{pmatrix} #1 \\end{pmatrix}", "\\pvec" : "\\begin{pmatrix} #1 \\end{pmatrix}",
    "\\bvec": "\\begin{bmatrix} #1 \\end{bmatrix}",
    "\\vvec" : "\\begin{vmatrix} #1 \\end{vmatrix}",
    "\\dkh" : "\\left(  #1  \\right)", "\\ddkh" : "\\Big( #1 \\Big)",
    "\\fkh" : "\\left[ #1 \\right]"  ,  "\\ffkh" : "\\Big[ #1 \\Big]",
    "\\hkh" : "\\left.\\begin{cases} #1 \\end{cases}\\right\\}",

    // 群的乘法表
    "\\tab" : "\\begin{array}{#1} #2 \\end{array}",

    // 普通向量
    "\\bs": "\\boldsymbol{#1}",
    "\\bd": "\\bold{#1}",
    "\\ve": "\\overrightarrow{#1}",

    // 圆弧
    "\\arc" : "\\mathop{\\scriptsize #1}\\limits^{\\frown}",
    // 集合
    "\\j" : "\\setminus",
    "\\ss": "\\subset\\subset",
    // 勒让德符号
    "\\leg" : "\\dkh{\\dfrac{#1}{#2}}",
    // 帽子
    "\\wt" : "\\widetilde", "\\wh" : "\\widehat",

    //简写
    "\\a" : "\\alpha",
    "\\b" : "\\beta",
    "\\d" : "\\delta", "\\D" : "\\Delta",
    "\\e" : "\\varepsilon",
    "\\g" : "\\gamma", "\\G" : "\\Gamma",
    "\\i" : "\\infty",
    "\\l" : "\\lambda", "\\L" : "\\Lambda",
    "\\t" : "\\theta", "\\the" : "\\theta", "\\T" : "\\Theta",
    "\\p" : "\\varphi",
    "\\o" : "\\omega" , "\\O" : "\\Omega",
    "\\z" : "\\zeta" ,
    // 范数、数列简写
    "\\norm": "\\| #1 \\|", "\\seq" : "\\{ #1 \\}",
    // 泛函分析的空间简写
    "\\normk" : "\\mathbb{K}^n",  "\\fk" : "\\mathbb{K}",
    // 泛函分析的线性算子简写
    "\\funcx" : "\\mathscr{X}","\\funcy" : "\\mathscr{Y}", "\\op" : "\\mathscr{L}", "\\opxy" : "\\mathscr{L}(\\funcx,\\funcy)", "\\opyx" : "\\mathscr{L}(\\funcy^*,\\funcx^*)" , "\\fun" : "\\mathscr{L}(\\funcx,\\fk)", "\\opx" : "\\mathscr{L}(\\funcx)", "\\opy" : "\\mathscr{L}(\\funcy)" ,
    "\\cxy" : "\\mathfrak{C}(\\funcx,\\funcy)" , "\\cx" : "\\mathfrak{C}(\\funcx)", "\\cyx" : "\\mathfrak{C}(\\funcy^*,\\funcx^*)", 
    // 空白符号简写
    "\\pad" : "\\ \\ " ,
    "\\whh" : "\\quad\ ", "\\whhh" : "\\qquad\\qquad", "\\whhhh" : "\\qquad\\qquad\\qquad",
    // 等于符号
    "\\deq" : "\\overset{d}{=}", "\\neq" : "\\not =", "\\notin": "\\not\\in",
    //箭头价符号简写
    "\\LR" : "\\red\\Leftrightarrow", "\\xto" : "\\xrightarrow{#1}", "\\xTo" : "\\xRightarrow{#1}" ,  "\\tto" : "\\rightrightarrows", "\\nto" : "\\nrightarrow", 
    "\\Rt"  : "\\Rightarrow", "\\lto" : "\\leftarrow", "\\xlto" : "\\xleftarrow{#1}",
    // 花体字母的简写
    "\\ms" : "\\mathscr{#1}" , "\\mc" : "\\mathcal{#1}", "\\mb" : "\\mathbb{#1}",  "\\mf" : "\\mathfrak{#1}", "\\mt" : "\\mathtt{#1}" ,
    "\\Q" : "\\mathbb{Q}", "\\I" : "\\mathbb{I}" , "\\P" : "\\mathbb{P}", "\\N" : "\\mathbb{N}", "\\Z" : "\\mathbb{Z}", "\\C" : "\\mathbb{C}",
    "\\X" : "\\mathscr{X}", "\\U":"\\mathbb{U}", "\\M" : "\\mathbb{M}", "\\H" : "\\mathbb{H}",

    /* 文字符号 */
    // 数分
    "\\grad" : "\\text{grad}\\ ", "\\diam" : "\\text{diam}\\ ", "\\ker" : "\\text{Ker}\\ ", "\\Ker":"\\text{Ker}\\ ", "\\Im" : "\\text{Im}\\ " ,"\\supp" : "\\text{spt}(#1)", "\\span" : "\\text{span}", "\\diag" : "\\text{diag}",
    // 抽代
    "\\char" : "\\text{char}\\ ", "\\Aut" : "\\text{Aut}\\ ", "\\aut":"\\text{Aut}", "\\End" : "\\text{End}\\ ", "\\coi" : "\\text{Coim}\\ ", "\\cok" : "\\text{Coker}\\ ", "\\rank" : "\\text{rank}\\ ", "\\Hom" : "\\text{Hom}", "\\Dom" : "\\text{Dom}\\ ", "\\dom" : "\\text{dom}\\ ", "\\Codom" : "\\text{Codom}\\ ", "\\In" : "\\text{In}\\ ", "\\Rad" : "\\text{Rad}\\ ", "\\adj" : "\\text{adj}", "\\Syl" : "\\text{Syl}", "\\Gal" : "\\text{Gal}",
    // 偏微分
    "\\lip" : "\\text{Lip}", "\\divt":"\\text{div}\\ ", "\\rot":"\\text{rot}\\ ", "\\te" : "\\text{#1}", "\\dx" : "\\text{dx}" , "\\ds" : "\\text{ds}", "\\dS" : "\\text{dS}", "\\dr" : "\\text{dr}", "\\dist" : "\\text{dist}", "\\loc" : "\\text{loc}", "\\sgn" : "\\text{sgn}",
    // 大于符号
    "\\leq" : "\\leqslant" , "\\geq" : "\\geqslant" , 
    // 逻辑量词
    "\\for" : "\\forall" , "\\exi" : "\\exist", 
    // 上标
    "\\oo" : "\\overset{\\circ}{#1}" , "\\ol" : "\\overline{#1}" , "\\or" : "\\overrightarrow{#1}", "\\ul" : "\\underline{#1}",
    // 几乎处处收敛
    "\\ae" : "\\pad \\text{a.e.}\\ ", "\\pw" : "\\pad\\text{p.w.}" , "\\im" : "\\pad\\text{i.m.}","\\uni" : "\\pad\\text{uni.}",
    // 图论
    "\\val" : "\\text{val}\\ ", "\\capa" : "\\text{cap}\\ ",

    /* 邪道画图法 */
    // 内射模交换图，先写横着写 #1 \to #2，然后下面的映射是 #3，内射模是 #4，
    "\\injl" : "\\underset{\\underset{\\normalsize #3}{ #2 \\bigm\\downarrow}}{#1}" , 
    "\\injr" : "\\underset{\\hspace{-1em}\\large\\swarrow \\footnotesize #2}{#1}",
    // 投射模交换图，先横着写 #1 \to #2，然后下面的映射是 #3
    "\\prol" : "\\overset{\\hspace{1em} \\footnotesize ^{^#2} \\hspace{-0.5em} \\large\\swarrow }{#1}\\hspace{-1em}",
    "\\pror" : "\\overset{\\overset{\\hspace{-0.7em}\\normalsize #3}{\\bigm\\downarrow #2}}{#1}" , 
  }
},
  
  mathjaxConfig: {
  "tex": {},
  "options": {},
  "loader": {}
},
  
  mermaidConfig: {
  "startOnLoad": false
},
})