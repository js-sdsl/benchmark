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
js-sdsl x 22,247 ops/sec ±1.47% (83 runs sampled)
heap x 6,865 ops/sec ±2.18% (88 runs sampled)
heap-js x 2,007 ops/sec ±3.22% (80 runs sampled)
mnemonist x 8,259 ops/sec ±0.78% (90 runs sampled)
typescript-collections x 808 ops/sec ±0.72% (86 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 46,736 ops/sec ±0.63% (90 runs sampled)
heap x 34,160 ops/sec ±0.79% (86 runs sampled)
heap-js x 15,317 ops/sec ±0.78% (88 runs sampled)
mnemonist x 33,856 ops/sec ±0.72% (89 runs sampled)
typescript-collections x 5,946 ops/sec ±0.84% (89 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,507 ops/sec ±0.46% (90 runs sampled)
heap x 4,810 ops/sec ±0.59% (89 runs sampled)
heap-js x 2,375 ops/sec ±0.54% (88 runs sampled)
mnemonist x 5,599 ops/sec ±0.68% (90 runs sampled)
typescript-collections x 433 ops/sec ±0.64% (84 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 111,690,615 ops/sec ±7.67% (78 runs sampled)
heap x 49,821,746 ops/sec ±3.79% (80 runs sampled)
heap-js x 12,332,857 ops/sec ±99.09% (81 runs sampled)
mnemonist x 48,952,851 ops/sec ±3.47% (81 runs sampled)
typescript-collections x 54,026,684 ops/sec ±3.93% (78 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 10,524 ops/sec ±1.07% (90 runs sampled)
denque x 2,767 ops/sec ±1.74% (86 runs sampled)
double-ended-queue x 1,310 ops/sec ±1.14% (83 runs sampled)
Js-Array-Push-Back x 14,213 ops/sec ±1.09% (86 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 54,973,029 ops/sec ±0.91% (88 runs sampled)
denque x 108,343,211 ops/sec ±0.22% (96 runs sampled)
double-ended-queue x 591,831,070 ops/sec ±0.23% (93 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -34 KB
size: 10^2    memory-diff: -47 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 120 KB
size: 10^5    memory-diff: 737 KB
size: 10^6    memory-diff: 8635 KB
size: 10^7    memory-diff: 126411 KB
```

## RBTree

### insert

```bash
js-sdsl x 5,502 ops/sec ±1.51% (91 runs sampled)
bintree x 3,470 ops/sec ±1.09% (85 runs sampled)
functional-red-black-tree x 1,962 ops/sec ±0.66% (87 runs sampled)
es6-map x 5,546 ops/sec ±10.48% (52 runs sampled)
Fastest is js-sdsl,es6-map
```

### remove

```bash
js-sdsl x 1,999,227 ops/sec ±1.29% (87 runs sampled)
bintrees x 938,404 ops/sec ±0.60% (89 runs sampled)
functional-red-black-tree x 686,140 ops/sec ±0.72% (87 runs sampled)
es6-map x 3,984,993 ops/sec ±3.44% (67 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 9,680,126 ops/sec ±0.77% (85 runs sampled)
bintrees x 5,220,979 ops/sec ±0.86% (88 runs sampled)
functional-red-black-tree x 5,268,715 ops/sec ±0.65% (91 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 89,505 ops/sec ±1.18% (85 runs sampled)
functional-red-black-tree x 82,863 ops/sec ±0.61% (90 runs sampled)
Fastest is js-sdsl
```
