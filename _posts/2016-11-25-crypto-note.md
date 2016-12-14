---
title: "一点微小的密码学知识"
date: 2016-11-25
layout: post
mathjax: true
---

<details markdown="1"><summary>目录</summary>
* TOC
{:toc}
</details>

## RSA 算法

参见[Wikipedia:RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem))

一言以蔽之, 记住以下定义, $d$是私钥:

$$ (m^e)^d \equiv m  \mod n $$

其中: 

$$ 
n = pq \\
ed \equiv 1 \mod (p - 1)(q - 1) 
$$

Encryption:

$$ c = m^e \mod n $$

Decryption:

$$ m = c^d \mod n $$
