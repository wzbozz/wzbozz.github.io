---
layout: slide
date: 2019-02-17
title: "Lorentz技术分享"
theme: night
author: wzbozz
transition: slide 
diagram: true
mathjax: true
---

<section markdown="1">

# 深度学习分享

</section> <section markdown="1">

## Outline
    - 神经网络/深度学习简介
    - 深度学习图像分类(Image Classification)
    - 深度学习目标检测(Object Detection)
    - 3D目标检测(3D Object Detection)/摄像头激光雷达融合(Camera Lidar Fusion)

</section> <section markdown="1">

## 神经网络基础

- 浅显易于入门 [*Neural Networks and Deep Learning*](http://neuralnetworksanddeeplearning.com/index.html) By **Michael Nielsen**(《量子计算与量子信息》的作者)

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

## 深度学习框架：
 - Theano: 学术

 - Caffe: 老牌经典

 - __TensorFlow__: Google的

 - Torch: Facebook的，pytorch支持python，口碑不错

 - MxNet: Amazon支持，支持多种编程语言，中国人编写的据说不错

 - DarkNet: 纯C语言

 - OpenCV: 老牌图像库

 - Dlib: 代码清爽，开箱即用

   </section> <section markdown="1">


</section> <section markdown="1"> 

## 图像识别


![img]({{ site.imageurl }}/imagenet.jpeg)

</section> <section markdown="1">

![img]({{ site.imageurl }}/samp1.jpeg)

</section> <section markdown="1">

![img]({{ site.imageurl }}/samp2.jpeg)

</section> <section markdown="1">

### The advent of deep learning

The ImageNet challenge has been traditionally tackled with image analysis algorithms such as SIFT with mitigated results until the late 90s. However, a gap in performance has been brought by using neural networks. Inspired by [Y. Lecun et al. (1998)](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf), the first deep learning model published by [A. Krizhevsky et al. (2012)](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks) drew attention to the public by getting a top-5 error rate of 15.3% outperforming the previous best one with an accuracy of 26.2% using a SIFT model. This famous model, the so-called “AlexNet” is what can be considered today as a simple architecture with five consecutive convolutional filters, max-pool layers and three fully-connected layers.

</section> <section markdown="1">

![img]({{ site.imageurl }}/lenet.png)

*LeNet-5 architecture for digit recognition. Source:* [*Y. Lecun et al. (1998)*](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf)

</section> <section markdown="1">

![img]({{ site.imageurl }}/alexnet.png)

*AlexNet architecture for training with 2 GPUs. Source:* [*A. Krizhevsky et al. (2012)*](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks)

</section> <section markdown="1">

### Going deeper

Since the 2012 milestone, researchers have tried to go deeper in the sequences of convolutional layers. In 2014, [K. Simonyan & A. Zisserman (2015)](https://arxiv.org/abs/1409.1556.pdf) released the VGG16 model, composed of sixteen convolutional layers, multiple max-pool layers and three final fully-connected layers. One of its specificities is to chain multiple convolutional layers with ReLU activation functions creating nonlinear transformations. Indeed, introducing nonlinearities allow models to learn more complex patterns. Moreover they introduced 3x3 filters for each convolution (as opposed to 11x11 filters for the AlexNet model) and noticed they could recognized the same patterns than larger filters while decreasing the number of parameters to train. These transformations reached 7.3% top-5 error rate on the 2014 ImageNet challenge reducing by a factor of two the error of the AlexNet model.

</section> <section markdown="1">

![img]({{ site.imageurl }}/vgg16.png)

</section> <section markdown="1">

### Inception modules

This same year, [M. Lin et al. (2014)](https://arxiv.org/abs/1312.4400.pdf) have developed the concept of “inception modules”. Original convolutional layer uses linear transformations with a nonlinear activation function. However, training multiple convolutional layers simultaneously and stack their feature maps linked with a multi-layer perceptron also produces a nonlinear transformation. This idea has been exploited by [C. Szegedy et al. (2014)](https://arxiv.org/abs/1409.4842) who proposed a deeper network called GoogLeNet (aka Inception V1) with 22 layers using such “inception modules” for a total of over 50 convolution layers. Each module is composed of 1x1, 3x3, 5x5 convolution layers and a 3x3 max-pool layer to increase sparsity in the model and obtain different type of patterns. The feature maps produced are then concatenated and analyzed by the next inception module. The GoogLeNet model has a 6.7% error rate over the 2014 ImageNet challenge which is somewhat lower than the VGG16 but astonishingly smaller (55 MB vs 490 MB). This gap is mainly due to the presence of the three large fully-connected layers in the VGG architecture.

</section> <section markdown="1">


![img]({{ site.imageurl }}/inception-block.png)

*Inception module. Source:* [*C. Szegedy et al. (2014)*](https://arxiv.org/abs/1409.4842)



![img]({{ site.imageurl }}/GoogLeNet.png)

*GoogLeNet architecture. Source:* [*C. Szegedy et al. (2014)*](https://arxiv.org/abs/1409.4842)

</section> <section markdown="1">


In 2015, [C. Szegedy et al. (2015)](https://arxiv.org/abs/1512.00567) developed the Inception V2 model, mostly inspired by the first version. The authors have however changed the 5x5 filter in the inception modules by two 3x3 filters, a 3x3 convolution and a 3x1 fully-connected slided over the first one. This method called convolution factorization decreases the number of parameters in each inception module, thus reducing the computational cost. This model reached a top-5 error rate of 5.6% on the 2012 ImageNet challenge.

Going further, [C. Szegedy et al. (2015)](https://arxiv.org/abs/1512.00567) have fine-tuned the batch-normalization and used a higher resolution input, the famous Inception V3 model. They reduced the strides of the first two layers and removed a max-pool layer to analyze images with higher precision. They finally reached a top-5 error rate of 3.58% over the 2012 ImageNet challenge.

</section> <section markdown="1">

### Residual learning

The main common trend in convolutional neural network models is their increasing depth. [K. He et al. (2015)](http://arxiv.org/abs/1512.03385) noticed however, that the increasing depth involves an increasing error rate, not due to overfitting but to the difficulties to train and optimize an extremely deep models. “Residual Learning” has been introduced to create a connection between the output of one or multiple convolutional layers and their original input with an identity mapping. In other words, the model is trying to learn a residual function which keeps most of the information and produces only slight changes. Consequently, patterns from the input image can be learned in deeper layers. Moreover, this method doesn’t add any additional parameter and doesn’t increase the computational complexity of the model. This model, dubbed “ResNet”, is composed of 152 convolutional layers with 3x3 filters using residual learning by block of two layers. Although it got a top-5 error rate of 4.49% over the 2012 ImageNet challenge (less than the Inception V3), the ResNet model has won the 2015 challenge with a top-5 error rate of 3.57%.

</section> <section markdown="1">


![img]({{ site.imageurl }}/residual-block.png)

*Residual learning block architecture. Source:* [*K. He et al. (2015)*](http://arxiv.org/abs/1512.03385)

</section> <section markdown="1">


![img]({{ site.imageurl }}/res-comp-vgg.png)

*ResNet architecture. Source:* [*K. He et al. (2015)*](http://arxiv.org/abs/1512.03385)

</section> <section markdown="1">

### The Inception-ResNet

One year after the success of the ResNet model, [C. Szegedy et al. (2016)](http://arxiv.org/abs/1602.07261)combined inception modules (to increase sparsity) and residual blocks (to learn deeper layers), building residual inception blocks. The inception modules have been improved to fine-tune the layer sizes and to detect more specific patterns. This model doesn’t use batch-normalization before the first traditional layers of the network to increase even more the number of inception blocks. The resulting Inception V4 (Inception-ResNet)² model can be trained faster and outperforms all other models over the 2012 ImageNet challenge with a top-5 error rate of 3.08%.

</section> <section markdown="1">


![img]({{ site.imageurl }}/incept-res-block.png)

Architecture of an Inception-resnet-A module. Source: [*C. Szegedy et al. (2016)*](http://arxiv.org/abs/1602.07261)

</section> <section markdown="1">


![img]({{ site.imageurl }}/Inception-ResNet.png)

*Inception-ResNet architecture using customized Inception-ResNet modules. Source:* [*C. Szegedy et al. (2016)*](http://arxiv.org/abs/1602.07261)

</section> <section markdown="1">

## DenseNet



### ![See the source image]({{ site.imageurl }}/densenet.png)

Original DenseNet paper: <https://arxiv.org/pdf/1608.06993v3.pdf>

![See the source image]({{ site.imageurl }}/res-vs-dense.png)

</section> <section markdown="1">

## 应用：Transfer Learning

示例 https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html

</section> <section markdown="1">

END

</section>
