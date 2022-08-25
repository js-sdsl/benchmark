# [Js-sdsl Benchmark](https://github.com/js-sdsl/benchmark)

English | [简体中文](https://github.com/js-sdsl/benchmark/blob/main/README.zh-CN.md)

## describe

Here is the [Js-sdsl](https://github.com/zly201/js-sdsl) benchmark, where we compare the performance of Js-sdsl and popular data structure libraries on npm.

We saved the test results to the README file of gh-pages, you can also visit [here](https://js-sdsl.github.io/#/zh-cn/test/benchmark) to view.

## Comparison result analysis

### PriorityQueue (heap)

Fastest known implementation, faster than [heap](http://npmjs.com/package/heap), [head-js](http://npmjs.com/package/heap-js) and other popular libraries.

### Deque

Three times the performance of [denque](https://npmjs.com/package/denque) and **nearly equal to `Array.push`** in the case of push elements.

### OrderedMap (RBTree)

Insert function is slower than [functional-red-black-tree](https://npmjs.com/package/functional-red-black-tree).

Remove elements faster than functional-red-black-tree.

Binary search is equal to functional-red-black-tree after optimization (to be released).
