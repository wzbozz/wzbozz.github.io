---
date: 2017-02-24
title: "JMI科普"
layout: post
author: wzbozz
---
# Outline

> 目标： 从装系统到识别手写。


## 硬件搭建：
- Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz
- mem 8G
- Nvidia GTX1060 6G ~ ￥2000
  - 据说1070更超值，但更贵。

## 操作系统安装：
- U盘安装Ubuntu
  - 安装盘[镜像下载](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/16.10/ubuntu-16.10-desktop-amd64.iso)
  - [U盘安装盘制作](https://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows)
  - 安装系统（略）

## 软件安装：
- 更改清华镜像源：系统设置->软件与更新->下载，改为`mirrors.tuna.tsinghua.edu.cn`
- 安装python环境：左上搜索terminal打开，运行sudo apt install -y python-dev python-pip；
- 安装jupyter: 更改为清华的pip源([步骤](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/))，运行sudo pip install -U jupyter 安装jupyter notebook，[配置远程访问](http://www.cnblogs.com/zhanglianbo/p/6109939.html)，**注意**：不会用vim教程中`vim ~/.jupyter/jupyter_notebook_config.py`改为`gedit ~/.jupyter/jupyter_notebook_config.py`;
- 安装[TensorFlow](https://www.tensorflow.org/install/install_linux): 步骤较多，其中包含了安装NVIDIA相关库及python库的步骤，注意选择with GPU，选择Installing with native pip的方式比较简单，同样也有清华的[安装源](https://mirrors.tuna.tsinghua.edu.cn/help/tensorflow/)可以选择；
- SSH远程访问：两条命令`sudo apt-get install openssh-server; sudo /etc/init.d/ssh resart`，可以实现远程连接；

## Python 基础：
 - 看书去吧

## Jupyter Notebook简介:
 - 计算
 - 公式
 - MarkDown
 - 画图
 - 插图

## 远程访问：
 - `ssh your_user_name@xx.xx.xx.xx`

## 编程：
 - 打开terminal，输入jupyter notebook运行后台计算服务，可以用浏览器访问;
 - 本地情况下，浏览器打开`localhost:8888`
 - 远程情况下，记下服务器ip地址，浏览器打开`xx.xx.xx.xx:8888`
 - 参考TensorFlow[教程](https://www.tensorflow.org/get_started/get_started)开始学习；

## 深度学习基础
### 特别推荐：
  - [*Neural Networks and Deep Learning*](http://neuralnetworksanddeeplearning.com/index.html) By **Michael Nielsen**(《量子计算与量子信息》的作者)

## 手写识别：
  - [MNIST For ML Beginners](https://www.tensorflow.org/get_started/mnist/beginners)

## 其他快速参考：
 - [Linux常用命令行操作](https://learnxinyminutes.com/docs/bash/)
 - [Python语法](https://learnxinyminutes.com/docs/python3/) 推荐学python3
 - [Python教程](http://old.sebug.net/paper/books/scipydoc/index.html) 比较老，适合MATLAB基础转python
 - [Python数值计算库numpy参考](https://docs.scipy.org/doc/numpy-dev/user/quickstart.html)，类似MATLAB
 - *Jupyter Notebook*没发现好的，用`H`命令找帮助
 - [Markdown参考](https://learnxinyminutes.com/docs/markdown/)
 - 各种问题搜索[stackoverflow](stackoverflow.com)有奇效
