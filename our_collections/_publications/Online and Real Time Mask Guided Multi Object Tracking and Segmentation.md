---
title: Online and Real-Time Mask-Guided Multi-Object Tracking and Segmentation
author: Jongbin Ryu
date: 2020-10-10
publication: SSRN
img: /assets/images/papers/paper_image5.png
tags: tag1 tag2 tag3
paper_url: https://scholar.google.com
code_url: https://github.com
abstract: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
---

Multi-object tracking and segmentation (MOTS) can be mainly used for autonomous driving and video surveillance systems. For this, the tracking system must be able to track in real-time and online. However, recent studies to improve the tracking performance of MOTS have been actively conducted, but studies that do not consider online and real-time performance have been mainly conducted. This paper proposes a MOTS system that operates in real-time using a deep learning-based model with a light backbone and can be tracked online. Additionally, state-of-the-art trackers use an object's bounding box to extract re-identification (ReID) features, which includes unnecessary background. However, this causes confusion in accurately expressing the appearance feature of an object, which causes difficulty in matching. To solve this difficulty, instead of providing the feature of the bounding box as the input of the ReID branch, we focused on expressing the object except for the background by providing the mask feature of the object as an input. As a result of the mask-based ReID experiment, the association accuracy performance was higher than that of the existing bounding box based ReID model, and among the KITTI MOTS benchmarks, it ranked second among models that can operate online. Our experiments show that background information causes ambiguous ReID matching in MOT systems, and at the same time show that object mask information is important to avoid ambiguous matching.