# Js-sdsl Benchmark

## Description

Here is the [Js-sdsl](https://github.com/zly201/js-sdsl) benchmark repository, where we compare Js-sdsl with other popular data structure libraries on npm.

We save the results to the README in the gh-pages branch.

You can also visit [here](https://js-sdsl.github.io/#/test/benchmark) to see the comparison result.

## Comparison result analysis

## PriorityQueue (heap)

In all heap tests, js-sdsl beats all libraries by a huge margin including [heap](http://npmjs.com/package/heap), [head-js](http://npmjs.com/package/heap-js) and so on.

## Deque

Even outperforms [denque](https://npmjs.com/package/denque) in the case of continuous push.

## OrderedMap (RBTree)

Insertion is inferior to [functional-red-black-tree](https://npmjs.com/package/functional-red-black-tree).

Removing is stronger than functional-red-black-tree.

Binary search is on par with functional-red-black-tree.
