This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 21,616 ops/sec ±0.60% (94 runs sampled)
heap x 6,463 ops/sec ±0.36% (98 runs sampled)
heap-js x 1,967 ops/sec ±2.62% (84 runs sampled)
mnemonist x 8,194 ops/sec ±0.64% (88 runs sampled)
typescript-collections x 781 ops/sec ±0.31% (92 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 45,726 ops/sec ±0.26% (93 runs sampled)
heap x 32,570 ops/sec ±0.18% (96 runs sampled)
heap-js x 14,908 ops/sec ±0.48% (92 runs sampled)
mnemonist x 33,395 ops/sec ±0.30% (93 runs sampled)
typescript-collections x 5,568 ops/sec ±0.13% (96 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,367 ops/sec ±0.49% (94 runs sampled)
heap x 4,722 ops/sec ±0.15% (94 runs sampled)
heap-js x 2,467 ops/sec ±1.13% (88 runs sampled)
mnemonist x 5,319 ops/sec ±0.15% (95 runs sampled)
typescript-collections x 404 ops/sec ±0.11% (92 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 114,244,275 ops/sec ±0.38% (95 runs sampled)
heap x 110,258,755 ops/sec ±0.46% (91 runs sampled)
heap-js x 15,324,714 ops/sec ±115.65% (92 runs sampled)
mnemonist x 95,379,782 ops/sec ±0.31% (89 runs sampled)
typescript-collections x 107,761,568 ops/sec ±0.32% (95 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 10,165 ops/sec ±0.27% (89 runs sampled)
denque x 2,745 ops/sec ±1.09% (90 runs sampled)
double-ended-queue x 1,311 ops/sec ±0.71% (94 runs sampled)
Js-Array-Push-Back x 15,111 ops/sec ±0.21% (93 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 57,235,737 ops/sec ±0.98% (88 runs sampled)
denque x 106,578,335 ops/sec ±0.11% (95 runs sampled)
double-ended-queue x 583,014,544 ops/sec ±0.13% (95 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 4,466 ops/sec ±8.57% (85 runs sampled)
bintree x 3,770 ops/sec ±0.13% (97 runs sampled)
functional-red-black-tree x 1,959 ops/sec ±0.12% (94 runs sampled)
es6-map x 12,882 ops/sec ±0.12% (95 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 174,880 ops/sec ±0.13% (97 runs sampled)
bintrees x 93,391 ops/sec ±0.21% (95 runs sampled)
functional-red-black-tree x 35,059 ops/sec ±0.15% (96 runs sampled)
es6-map x 44,607 ops/sec ±0.60% (96 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 8,276,855 ops/sec ±0.63% (95 runs sampled)
bintrees x 4,537,487 ops/sec ±1.37% (94 runs sampled)
functional-red-black-tree x 4,266,581 ops/sec ±0.22% (93 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 187,771 ops/sec ±0.73% (94 runs sampled)
functional-red-black-tree x 136,236 ops/sec ±0.76% (98 runs sampled)
Fastest is js-sdsl
```
