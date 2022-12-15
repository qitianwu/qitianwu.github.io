---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a PhD candidate at the Department of Computer Science and Engineering from Shanghai Jiao Tong University (SJTU), advised by
  <a href="https://thinklab.sjtu.edu.cn/">Prof. Junchi Yan</a>. I also worked with <a href="http://www.davidwipf.com/">David Wipf</a> and <a href="https://sds.cuhk.edu.cn/en/teacher/65">Prof. Hongyuan Zha</a>. 
  I achieved the Bachelor (Microelectronics, Mathematics) and Master (Computer Science) degrees from SJTU, and worked as research intern at Tencent WeChat, Amazon AI Lab and BioMap. 

  <p>
    My primary research area is machine learning (ICLR, ICML, NeurIPS). Currently I focus on learning with semi-structured data (graphs and sequences), with applications to recommender systems and scientific discovery. 
    The goal of my research is to design and build theoretically principled and practically useful models and tools that possess desired expressivity, scalability and robustness for handling real data
    from heterogenous, open and uncertain environments. It involves:
      <ul>
        <li>Learning with Distribution Shifts: Out-of-distribution Generalization on Graphs (<a href="https://openreview.net/pdf?id=FQOC5u-1egI">EERM</a>, <a href="https://openreview.net/pdf?id=2nWUNTnFijm">MoleOOD</a> and Sequences <a href="https://openreview.net/pdf?id=XQu7UFSbzd2">Caseq</a>, 
          Graph Out-of-Distribution Detection (<a href="https://openreview.net/pdf?id=mSiPuHIP7t8">GraphDE</a>)
        <li>Transformers for Large-Scale Graphs: All-Pair Message Passing with Linear Complexity (<a href="https://openreview.net/pdf?id=sMezXGG5So">NodeFormer</a>)
        <li>Open-World Entity Extrapolation: Inductive Collaborative Filtering Algorithms <a href="https://arxiv.org/pdf/2007.04833.pdf">IDCF</a>, Feature Extrapolation Networks <a href="https://arxiv.org/pdf/2110.04514.pdf">FATE</a>
      </ul>
    </p>

  I am always open for collaborations and if you are interested in my research feel free to contact me.