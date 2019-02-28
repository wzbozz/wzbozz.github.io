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

## [图像识别](https://medium.com/zylapp/review-of-deep-learning-algorithms-for-image-classification-5fdbca4a05e2)

</section> <section markdown="1">

## Datasets

- MNIST
- CIFAR-10
- CIFAR-100
- __Imagenet__

</section> <section markdown="1">

![img]({{ site.imageurl }}/imagenet.jpeg)

</section> <section markdown="1">

![img]({{ site.imageurl }}/samp1.jpeg)

</section> <section markdown="1">

![img]({{ site.imageurl }}/samp2.jpeg)

</section> <section markdown="1">

### The advent of deep learning

![img]({{ site.imageurl }}/lenet.png)

[LeNet - Y. Lecun et al. (1998)](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf) MNIST

*LeNet-5 architecture for digit recognition. Source:* [*Y. Lecun et al. (1998)*](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf)

</section> <section markdown="1">

[AlexNet - A. Krizhevsky et al. (2012)](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks)  15.3% >> 26.2% SIFT model

![img]({{ site.imageurl }}/alexnet.png)

*AlexNet architecture for training with 2 GPUs. Source:* [*A. Krizhevsky et al. (2012)*](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks)

</section> <section markdown="1">

### Going deeper

Since the 2012 milestone, researchers have tried to go deeper in the sequences of convolutional layers. In 2014, [VGG16 model - K. Simonyan & A. Zisserman (2015)](https://arxiv.org/abs/1409.1556.pdf) sixteen convolutional layers, multiple max-pool layers and three final fully-connected layers, 7.3% top-5 error rate on the 2014 ImageNet challenge

</section> <section markdown="1">

![img]({{ site.imageurl }}/vgg16.png)

</section> <section markdown="1">

### Inception modules

[C. Szegedy et al. (2014)](https://arxiv.org/abs/1409.4842)  GoogLeNet (aka Inception V1)  6.7% error rate over the 2014 ImageNet challenge which is somewhat lower than the VGG16 but astonishingly smaller (55 MB vs 490 MB)

</section> <section markdown="1">

![img]({{ site.imageurl }}/inception-block.png)

*Inception module. Source:* [*C. Szegedy et al. (2014)*](https://arxiv.org/abs/1409.4842)

</section> <section markdown="1">


![img]({{ site.imageurl }}/GoogLeNet.png)

*GoogLeNet architecture. Source:* [*C. Szegedy et al. (2014)*](https://arxiv.org/abs/1409.4842)

</section> <section markdown="1">

- [Inception V2 - C. Szegedy et al. (2015)](https://arxiv.org/abs/1512.00567) top-5 error rate of 5.6%

- [ Inception V3 - C. Szegedy et al. (2015)](https://arxiv.org/abs/1512.00567)  3.58%

</section> <section markdown="1">

### Residual learning

[ResNet - K. He et al. (2015)](http://arxiv.org/abs/1512.03385)  won the 2015 challenge with a top-5 error rate of 3.57%.

![img]({{ site.imageurl }}/residual-block.png)

*Residual learning block architecture. Source:* [*K. He et al. (2015)*](http://arxiv.org/abs/1512.03385)

</section> <section markdown="1">


![img]({{ site.imageurl }}/res-comp-vgg.png)

*ResNet architecture. Source:* [*K. He et al. (2015)*](http://arxiv.org/abs/1512.03385)

</section> <section markdown="1">

### The Inception-ResNet

[Inception V4 (Inception-ResNet) - C. Szegedy et al. (2016)](http://arxiv.org/abs/1602.07261) 2012 ImageNet challenge with a top-5 error rate of 3.08%.

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

</section> <section markdown="1">

![See the source image]({{ site.imageurl }}/res-vs-dense.png)

</section> <section markdown="1">

## [MobileNet & ShuffleNet](https://medium.com/@yu4u/why-mobilenet-and-its-variants-e-g-shufflenet-are-fast-1c7048b9618d)

![See the source image]({{ site.imageurl }}/conv.png)
</section> <section markdown="1">
![See the source image]({{ site.imageurl }}/full_conv.png)
![See the source image]({{ site.imageurl }}/grp_conv.png)
![See the source image]({{ site.imageurl }}/dep_conv.png)
</section> <section markdown="1">

## 快速应用：Transfer Learning

[示例](https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html) 
- ConvNet as fixed feature extractor
- Finetuning the convnet
</section> <section markdown="1">

## 深度学习目标检测(Object Detection)

![See the source image]({{ site.imageurl }}/img_tasks.png)
</section> <section markdown="1">
![See the source image]({{ site.imageurl }}/Sliding-window.gif)
</section> <section markdown="1">
## datasets
- COCO - Common Objects in Context
- PASCAL VOC
- Open Images

</section> <section markdown="1">

## history
### two stages
1. Object Detection using Hog Features:
  - Hog features are computationally inexpensive 
2. Region-based Convolutional Neural Networks(R-CNN):

3. Spatial Pyramid Pooling(SPP-net):

4. Fast R-CNN:

5. Faster R-CNN:
</section> <section markdown="1">

### one stages
6. YOLO(You only Look Once):

7. Single Shot Detector(SSD)
</section> <section markdown="1">
![See the source image]({{ site.imageurl }}/progress.png)
</section> <section markdown="1">
[Region-based Convolutional Neural Networks(R-CNN)](https://www.analyticsvidhya.com/blog/2018/10/a-step-by-step-introduction-to-the-basic-object-detection-algorithms-part-1/)
- First, an image is taken as an input
 ![See the source image]({{ site.imageurl }}/rcnn.png)
</section> <section markdown="1">
- Then, we get the Regions of Interest (ROI) using some proposal method (for example, selective search as seen above):

![See the source image]({{ site.imageurl }}/rcnn.png)
</section> <section markdown="1">
- All these regions are then reshaped as per the input of the CNN, and each region is passed to the ConvNet:

![See the source image]({{ site.imageurl }}/rcnn.png)
</section> <section markdown="1">
- CNN then extracts features for each region and SVMs are used to divide these regions into different classes:

![See the source image]({{ site.imageurl }}/rcnn.png)
</section> <section markdown="1">
- Finally, a bounding box regression (Bbox reg) is used to predict the bounding boxes for each identified region:
![See the source image]({{ site.imageurl }}/rcnn.png)
</section> <section markdown="1">

### SSD vs YOLO
![See the source image]({{ site.imageurl }}/SSDvsYOLO.png)
</section> <section markdown="1">
###  YOLO v3
![See the source image]({{ site.imageurl }}/yolo_bm.png)
</section> <section markdown="1">

## 比较新的综述
#### 参考文章
- https://medium.com/@jonathan_hui/object-detection-series-24d03a12f904
- https://cv-tricks.com/object-detection/faster-r-cnn-yolo-ssd/
- https://towardsdatascience.com/r-cnn-fast-r-cnn-faster-r-cnn-yolo-object-detection-algorithms-36d53571365e
- https://www.analyticsvidhya.com/blog/2018/10/a-step-by-step-introduction-to-the-basic-object-detection-algorithms-part-1/
- http://www.mooc.ai/course/604/learn?lessonid=2936
</section> <section markdown="1">


## [3D目标检测](https://medium.com/@whatdhack/fusing-lidar-and-camera-data-a-survey-of-deep-learning-approaches-4b8ddedee2dc)(3D Object Detection)
![See the source image]({{ site.imageurl }}/3d_det.jpeg)


</section> <section markdown="1">

### Datasets
- KITTI

- Apollo (Baidu)

- Stanford 2D-3D-Semantics Dataset (2D-3D-S)

- ShapeNet
</section> <section markdown="1">

## [KITTI](http://www.cvlibs.net/datasets/kitti)

![See the source image]({{ site.imageurl }}/kitti.png)

</section> <section markdown="1">

## Models
- Pixel Based
- Voxel Based
- Point Based
- ref:  https://www.bilibili.com/video/av21442008

</section> <section markdown="1">



## Pixel Based-Apollo

![See the source image]({{ site.imageurl }}/apollo.png)

</section> <section markdown="1">

## Pixel Based-FCN

![See the source image]({{ site.imageurl }}/fcn_3d.png)

</section> <section markdown="1">



## Voxel Based-ShapeNet

![See the source image]({{ site.imageurl }}/ShapeNet.png)

</section> <section markdown="1">

## PointNet / PointNet++ and Fustrum PointNet

- https://www.bilibili.com/video/av28340597

![See the source image]({{ site.imageurl }}/PointNet.png)

</section> <section markdown="1">

## Fustrum PointNet

![See the source image]({{ site.imageurl }}/FPointNet.jpg)

</section> <section markdown="1">
## TODO

[Fustrum PointNet](https://github.com/charlesq34/frustum-pointnets)

http://www.cvlibs.net/datasets/kitti/eval_object.php?obj_benchmark=3d

</section> <section markdown="1">

END

</section>
