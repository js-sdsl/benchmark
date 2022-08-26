This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 21,748 ops/sec ±1.75% (80 runs sampled)
heap x 8,221 ops/sec ±1.37% (88 runs sampled)
heap-js x 1,789 ops/sec ±2.57% (80 runs sampled)
mnemonist x 5,917 ops/sec ±1.42% (87 runs sampled)
typescript-collections x 900 ops/sec ±1.07% (86 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 48,384 ops/sec ±0.84% (86 runs sampled)
heap x 35,049 ops/sec ±0.83% (86 runs sampled)
heap-js x 14,868 ops/sec ±1.39% (84 runs sampled)
mnemonist x 36,382 ops/sec ±1.17% (88 runs sampled)
typescript-collections x 6,283 ops/sec ±0.97% (88 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 11,570 ops/sec ±1.30% (87 runs sampled)
heap x 5,227 ops/sec ±1.17% (84 runs sampled)
heap-js x 2,200 ops/sec ±1.15% (85 runs sampled)
mnemonist x 5,735 ops/sec ±1.14% (89 runs sampled)
typescript-collections x 473 ops/sec ±1.08% (86 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 174,282,178 ops/sec ±1.17% (88 runs sampled)
heap x 167,621,253 ops/sec ±1.24% (84 runs sampled)
heap-js x 11,609,672 ops/sec ±103.66% (89 runs sampled)
mnemonist x 143,880,172 ops/sec ±0.79% (88 runs sampled)
typescript-collections x 171,876,218 ops/sec ±0.81% (90 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 13,054 ops/sec ±1.00% (86 runs sampled)
denque x 2,963 ops/sec ±1.31% (86 runs sampled)
double-ended-queue x 1,544 ops/sec ±1.23% (85 runs sampled)
Js-Array-Push-Back x 15,801 ops/sec ±1.45% (86 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 68,076,376 ops/sec ±0.93% (89 runs sampled)
denque x 130,257,328 ops/sec ±0.90% (88 runs sampled)
double-ended-queue x 642,940,977 ops/sec ±1.01% (87 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,130 ops/sec ±11.05% (81 runs sampled)
bintree x 4,570 ops/sec ±1.16% (89 runs sampled)
functional-red-black-tree x 1,733 ops/sec ±1.49% (82 runs sampled)
es6-map x 13,356 ops/sec ±0.91% (88 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 169,883 ops/sec ±1.11% (86 runs sampled)
bintrees x 89,750 ops/sec ±0.82% (89 runs sampled)
functional-red-black-tree x 35,119 ops/sec ±1.20% (87 runs sampled)
es6-map x 52,302 ops/sec ±1.10% (88 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 8,018,989 ops/sec ±1.11% (85 runs sampled)
bintrees x 4,933,760 ops/sec ±1.04% (89 runs sampled)
functional-red-black-tree x 4,852,360 ops/sec ±1.94% (88 runs sampled)
Fastest is js-sdsl
```
