---
date: 2017-02-24
title: "深度学习的浅度科普 for JMI"
layout: post 
theme: night
author: wzbozz
diagram: true
mathjax: true
---

<section markdown="1">
# 深度学习的浅度科普
## Outline

> 目标： 从装系统到识别手写。

</section> <section markdown="1">
```flowchart
st=>start: Start
e=>end: End
op1=>operation: Linux
op2=>operation: Python
op3=>operation: Jupyter
op4=>operation: Tensorflow
op5=>operation: Keras
op6=>operation: Mnist 
st(right)->op1(right)->op2(right)->op3(right)->op4(right)->op5(right)->op6(right)->e
```
</section> <section markdown="1">
## 神经网络基础
- 神经网络基本单元
- ![](http://cs231n.github.io/assets/nn1/neuron_model.jpeg)
</section> <section markdown="1">
- 前向全连接网络：神经元互联
- ![](http://cs231n.github.io/assets/nn1/neural_net2.jpeg)
</section> <section markdown="1">
- 卷积神经网络：全连接到部分连接
- ![](http://cs231n.github.io/assets/cnn/depthcol.jpeg)
</section> <section markdown="1">
- 训练算法：梯度反向传播
- ![](http://cs231n.github.io/assets/nn3/opt2.gif)

</section> <section markdown="1">
## 硬件搭建：
- Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz
- mem 8G
- Nvidia GTX1060 6G ~ ￥2000
  - 据说1070更超值，但更贵。
</section> <section markdown="1">
## 操作系统安装：
- U盘安装Ubuntu
  - 安装盘[镜像下载](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/16.10/ubuntu-16.10-desktop-amd64.iso)
  - [U盘安装盘制作](https://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows)
  - 安装系统（略）
  - （此处未包含显卡配置，参考NVidia官方指引。）
</section> <section markdown="1">
## VirtualBox虚拟机安装
- 安装VirtualBox软件
- 下载镜像（同上）
- 安装系统
</section> <section markdown="1">
## Ubuntu(Linux)基本命令：
- [bash](https://learnxinyminutes.com/docs/zh-cn/bash-cn/)
- ls, cd, cp, mv, rm, sudo, apt, pip
- vi或vim在命令行下好用，但学习曲线陡峭，此处略(入门可用图形界面gedit替代)
</section> <section markdown="1">
## 软件安装（重点是利用好清华镜像资源，节省时间）：
- 更改清华镜像源：系统设置->软件与更新->下载，改为`mirrors.tuna.tsinghua.edu.cn`
- 安装python环境：左上搜索terminal打开，运行sudo apt install -y python-dev python-pip；
- 安装jupyter: 更改为清华的pip源([步骤](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/))，运行sudo pip install -U jupyter 安装jupyter notebook，[配置远程访问](http://www.cnblogs.com/zhanglianbo/p/6109939.html)，**注意**：不会用vim教程中`vim ~/.jupyter/jupyter_notebook_config.py`改为`gedit ~/.jupyter/jupyter_notebook_config.py`;
- 安装[TensorFlow](https://www.tensorflow.org/install/install_linux): 步骤较多，其中包含了安装NVIDIA相关库及python库的步骤，注意选择Installing with native pip的方式比较简单，同样也有清华的[安装源](https://mirrors.tuna.tsinghua.edu.cn/help/tensorflow/)可以选择；
- 安装[Keras](https://keras.io):`sudo pip install keras`

</section> <section markdown="1">
## MacOS
- [Brew](https://brew.sh/)
- 清华镜像使用[帮助](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)
</section> <section markdown="1">
## Jupyter Notebook ([IPython Notebook]())简介,常用功能:
 - 计算
 - 公式
 - MarkDown
 - 画图
 - 插图
 - 远程计算（从web界面访问GPU服务器计算资源，[教程](http://www.cnblogs.com/yangxiaolan/p/5778305.html)）
 - 按ESC后H，即时帮助；
</section> <section markdown="1">
## Python 基础：
- [用Python做科学计算](http://old.sebug.net/paper/books/scipydoc/index.html) 适用于从MATLAB转Python；
- [Dive into Python](http://www.diveintopython.net/) 口碑不错的教材；
- [LeetCode](https://leetcode.com/) 练习算法基础，面试考题；
</section> <section markdown="1">
## 远程访问（用于远程操作服务器）：
 - `sudo apt install openssh-server`
 - `ssh your_user_name@xx.xx.xx.xx`
 </section> <section markdown="1">
## 编程：
 - 打开terminal，输入jupyter notebook，程序启动后台计算服务，可以用浏览器访问;
 - 本地情况下，浏览器打开`localhost:8888`
 - 远程情况下，记下服务器ip地址，浏览器打开`xx.xx.xx.xx:8888`；
 - 参考TensorFlow[教程](https://www.tensorflow.org/get_started/get_started)开始学习；
</section> <section markdown="1">
## git 
- git clone!
- [tutorial](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
</section> <section markdown="1">
## 深度学习框架：
 - Theano: 学术
 - Caffe: 老牌但过时
 - __TensorFlow__: Google的，资料被墙
 - Torch: Facebook的，pytorch支持python，口碑不错
 - MxNet: Amazon支持，支持多种编程语言，中国人编写的据说不错
 - Neon: Intel的？速度快，用的人少。
</section> <section markdown="1">
## kaggle（数据比赛，可以拿奖金，阿里有类似平台天池）
 - [tutorial](https://www.kaggle.com/wiki/Tutorials)
 - [playground & 101](https://www.zhihu.com/question/23987009)
</section> <section markdown="1">
## 深度学习教材
### 特别推荐：
- 浅显易于入门 [*Neural Networks and Deep Learning*](http://neuralnetworksanddeeplearning.com/index.html) By **Michael Nielsen**(《量子计算与量子信息》的作者)
- 比较好懂 Convolutional Neural Networks for Visual Recognition [CS231n](cs231n.github.io) 
- [Deep Learning](http://www.deeplearningbook.org/)
- 周志华西瓜书：不好啃
</section> <section markdown="1">
## 手写识别（深度学习的hello world）：
  - [MNIST For ML Beginners](https://www.tensorflow.org/get_started/mnist/beginners)
  - github上各架构下的各种项目很多，感兴趣自己找下；
</section> <section markdown="1">
## 其他快速参考：
 - [Linux常用命令行操作](https://learnxinyminutes.com/docs/bash/)
 - [Python语法](https://learnxinyminutes.com/docs/python3/) 推荐学python3
 - [Python教程](http://old.sebug.net/paper/books/scipydoc/index.html) 比较老，适合MATLAB基础转python
 - [Python数值计算库numpy参考](https://docs.scipy.org/doc/numpy-dev/user/quickstart.html)，类似MATLAB
 - [Markdown参考](https://learnxinyminutes.com/docs/markdown/)
 - 各种问题搜索[stackoverflow](stackoverflow.com)有奇效
</section> 
