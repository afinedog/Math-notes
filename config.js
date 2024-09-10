({
  katexConfig: {
  "macros": {
    
    // display写法
    "\\dis": "\\displaystyle",
    "\\ts" : "\\textstyle",
    "\\lsum": "\\sum\\limits",
    "\\dsum": "\\displaystyle\\sum^{#1}_{#2}\\scriptstyle",
    "\\dint": "\\displaystyle\\int^{#1}_{#2}\\inlinestyle",
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
    "\\vek": "\\begin{pmatrix} #1 \\end{pmatrix}",
    "\\dkh" : "\\left(  #1  \\right)", "\\ddkh" : "\\Big( #1 \\Big)",
    "\\fkh" : "\\left[ #1 \\right]"  ,  "\\ffkh" : "\\Big[ #1 \\Big]",
    "\\hkh" : "\\left.\\begin{cases} #1 \\end{cases}\\right\\}",

    // 普通向量
    "\\bs": "\\boldsymbol{#1}",
    "\\bd": "\\bold{#1}",
    "\\vector": "\\overrightarrow{#1}",

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
    "\\X" : "\\mathscr{X}", "\\U":"\\mathbb{U}", "\\M" : "\\mathbb{M}",

    /* 文字符号 */
    // 数分
    "\\grad" : "\\text{grad}\\ ", "\\diam" : "\\text{diam}\\ ", "\\ker" : "\\text{Ker}\\ ", "\\Im" : "\\text{Im}\\ " ,"\\supp" : "\\text{spt}(#1)",
    // 抽代
    "\\char" : "\\text{char}\\ ", "\\Aut" : "\\text{Aut}\\ ", "\\aut":"\\text{Aut}", "\\End" : "\\text{End}\\ ", "\\coi" : "\\text{Coim}\\ ", "\\cok" : "\\text{Coker}\\ ", "\\rank" : "\\text{rank}\\ ", "\\Hom" : "\\text{Hom}\\ ", "\\Dom" : "\\text{Dom}\\ ", "\\dom" : "\\text{dom}\\ ", "\\Codom" : "\\text{Codom}\\ ",
    // 偏微分
    "\\lip" : "\\text{Lip}", "\\divt":"\\text{div}\\ ", "\\te" : "\\text{#1}", "\\dx" : "\\text{dx}" , "\\ds" : "\\text{ds}", "\\dS" : "\\text{dS}", "\\dr" : "\\text{dr}", "\\dist" : "\\text{dist}", "\\loc" : "\\text{loc}", "\\sgn" : "\\text{sgn}",
    // 大于符号
    "\\leq" : "\\leqslant" , "\\geq" : "\\geqslant" , 
    // 逻辑量词
    "\\for" : "\\forall" , "\\exi" : "\\exist", 
    // 上标
    "\\oo" : "\\overset{\\circ}{#1}" , "\\ol" : "\\overline{#1}" , "\\or" : "\\overrightarrow{#1}", "\\ul" : "\\underline{#1}",
    // 几乎处处收敛
    "\\ae" : "\\pad \\text{a.e.}\\ ", "\\pw" : "\\pad\\text{p.w.}" , "\\im" : "\\pad\\text{i.m.}","\\uni" : "\\pad\\text{uni.}",
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