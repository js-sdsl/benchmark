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
js-sdsl x 21,322 ops/sec ±0.90% (87 runs sampled)
heap x 6,267 ops/sec ±0.39% (96 runs sampled)
heap-js x 1,856 ops/sec ±2.85% (86 runs sampled)
mnemonist x 7,842 ops/sec ±0.68% (94 runs sampled)
typescript-collections x 749 ops/sec ±0.14% (95 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 44,327 ops/sec ±0.08% (96 runs sampled)
heap x 31,742 ops/sec ±0.68% (95 runs sampled)
heap-js x 14,057 ops/sec ±0.70% (96 runs sampled)
mnemonist x 31,598 ops/sec ±0.70% (94 runs sampled)
typescript-collections x 5,318 ops/sec ±0.36% (96 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,021 ops/sec ±0.11% (98 runs sampled)
heap x 4,389 ops/sec ±0.68% (96 runs sampled)
heap-js x 2,312 ops/sec ±0.51% (93 runs sampled)
mnemonist x 5,096 ops/sec ±0.28% (98 runs sampled)
typescript-collections x 396 ops/sec ±0.13% (94 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 112,004,239 ops/sec ±0.16% (99 runs sampled)
heap x 108,593,557 ops/sec ±0.21% (98 runs sampled)
heap-js x 13,915,046 ops/sec ±136.27% (51 runs sampled)
mnemonist x 44,724,689 ops/sec ±2.62% (87 runs sampled)
typescript-collections x 48,807,845 ops/sec ±3.60% (84 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 9,756 ops/sec ±0.91% (96 runs sampled)
denque x 2,622 ops/sec ±1.17% (89 runs sampled)
double-ended-queue x 1,214 ops/sec ±1.03% (90 runs sampled)
Js-Array-Push-Back x 14,604 ops/sec ±0.86% (91 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 61,814,372 ops/sec ±0.55% (95 runs sampled)
denque x 108,749,432 ops/sec ±0.60% (92 runs sampled)
double-ended-queue x 560,824,118 ops/sec ±0.14% (96 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -34 KB
size: 10^2    memory-diff: -25 KB
size: 10^3    memory-diff: 40 KB
size: 10^4    memory-diff: 154 KB
size: 10^5    memory-diff: 752 KB
size: 10^6    memory-diff: -567 KB
size: 10^7    memory-diff: 132141 KB
```

## RBTree

### insert

```bash
js-sdsl x 4,637 ops/sec ±23.42% (93 runs sampled)
bintree x 3,427 ops/sec ±0.85% (93 runs sampled)
functional-red-black-tree x 1,810 ops/sec ±0.29% (93 runs sampled)
es6-map x 5,096 ops/sec ±11.16% (59 runs sampled)
Fastest is es6-map,js-sdsl
```

### remove

```bash
js-sdsl x 1,812,431 ops/sec ±0.88% (89 runs sampled)
bintrees x 869,555 ops/sec ±0.09% (96 runs sampled)
functional-red-black-tree x 657,088 ops/sec ±0.92% (84 runs sampled)
es6-map x 3,826,780 ops/sec ±4.00% (69 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 8,375,321 ops/sec ±0.30% (92 runs sampled)
bintrees x 4,373,351 ops/sec ±0.39% (96 runs sampled)
functional-red-black-tree x 4,655,697 ops/sec ±0.22% (96 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 85,045 ops/sec ±0.84% (96 runs sampled)
functional-red-black-tree x 75,070 ops/sec ±0.14% (97 runs sampled)
Fastest is js-sdsl
```
