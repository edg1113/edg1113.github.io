---
title: Automatic Segmentation for Favourable Delineation of Ten Wrist Bones on Wrist Radiographs Using Convolutional Neural Network
author: Jongbin Ryu
date: 2020-10-10
publication: Journal of Personalized Medicine
img: /assets/images/papers/paper_image6.png
tags: tag1 tag2 tag3
paper_url: https://scholar.google.com
code_url: https://github.com
abstract: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
---

Purpose:
This study aimed to develop and validate an automatic segmentation algorithm for the boundary delineation of ten wrist bones, consisting of eight carpal and two distal forearm bones, using a convolutional neural network (CNN).
Methods:
We performed a retrospective study using adult wrist radiographs. We labeled the ground truth masking of wrist bones, and propose that the Fine Mask R-CNN consisted of wrist regions of interest (ROI) using a Single-Shot Multibox Detector (SSD) and segmentation via Mask R-CNN, plus the extended mask head. The primary outcome was an improvement in the prediction of delineation via the network combined with ground truth masking, and this was compared between two networks through five-fold validations.
Results:
In total, 702 images were labeled for the segmentation of ten wrist bones. The overall performance (mean (SD] of Dice coefficient) of the auto-segmentation of the ten wrist bones improved from 0.93 (0.01) using Mask R-CNN to 0.95 (0.01) using Fine Mask R-CNN (p < 0.001). The values of each wrist bone were higher when using the Fine Mask R-CNN than when using the alternative (all p < 0.001). The value derived for the distal radius was the highest, and that for the trapezoid was the lowest in both networks.
Conclusion:
Our proposed Fine Mask R-CNN model achieved good performance in the automatic segmentation of ten overlapping wrist bones derived from adult wrist radiographs.