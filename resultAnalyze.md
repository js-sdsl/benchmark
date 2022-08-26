# [Js-sdsl Benchmark](https://github.com/js-sdsl/benchmark)

English | [简体中文](https://github.com/js-sdsl/benchmark/blob/main/README.zh-CN.md)

## Describe

Here is the [Js-sdsl](https://github.com/zly201/js-sdsl) benchmark, where we compare the performance of Js-sdsl and popular data structure libraries on npm.

We saved the test results to the README file of gh-pages, you can also visit [here](https://js-sdsl.github.io/#/zh-cn/test/benchmark) to view.

## Comparison result analysis

### PriorityQueue (heap)

Fastest known implementation, faster than [heap](http://npmjs.com/package/heap), [head-js](http://npmjs.com/package/heap-js) and other popular libraries.

### Deque

Three times the performance of [denque](https://npmjs.com/package/denque) and **nearly equal to `Array.push`** in the case of push elements.

### OrderedMap (RBTree)

Fastest known implementation.

Inserting, removing and binary search functions are fater than [functional-red-black-tree](https://npmjs.com/package/functional-red-black-tree) and [bintrees](https://npmjs.com/package/bintrees).

Removing even faster than es6 map!