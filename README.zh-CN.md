# [Js-sdsl Benchmark](https://github.com/js-sdsl/benchmark)

[English](https://github.com/js-sdsl/benchmark/blob/main/README.md) | 简体中文

## 描述

这里是 [Js-sdsl](https://github.com/js-sdsl/js-sdsl) 基准测试, 我们在这里将 Js-sdsl 和 npm 上流行的数据结构库进行性能对比

我们将测试结果保存到了 gh-pages 的 README 文件中，您也可以访问[此处](https://js-sdsl.github.io/#/zh-cn/test/benchmark-result)查看

## 对比结果分析

### PriorityQueue (heap)

目前已知最快的实现，比 [heap](http://npmjs.com/package/heap), [head-js](http://npmjs.com/package/heap-js) 以及其他流行库更快

### LinkList

比 [yallist](https://www.npmjs.com/package/yallist) 快很多

### Deque

在持续存放元素的情况下性能是 [denque](https://npmjs.com/package/denque) 的三倍，并且**几乎和 `Array.push` 持平**

### OrderedMap (RBTree)

目前已知最快的实现

插入、删除和二分查找快于 [functional-red-black-tree](https://npmjs.com/package/functional-red-black-tree) 和 [bintrees](https://npmjs.com/package/bintrees).
