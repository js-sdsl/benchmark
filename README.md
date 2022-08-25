This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 22,110 ops/sec ±1.96% (82 runs sampled)
heap x 7,738 ops/sec ±1.90% (78 runs sampled)
heap-js x 1,646 ops/sec ±2.87% (81 runs sampled)
mnemonist x 6,062 ops/sec ±2.18% (84 runs sampled)
typescript-collections x 968 ops/sec ±0.84% (89 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 49,816 ops/sec ±2.20% (75 runs sampled)
heap x 39,454 ops/sec ±2.29% (80 runs sampled)
heap-js x 17,945 ops/sec ±2.29% (80 runs sampled)
mnemonist x 43,267 ops/sec ±2.38% (86 runs sampled)
typescript-collections x 7,098 ops/sec ±1.13% (88 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 12,726 ops/sec ±1.61% (82 runs sampled)
heap x 5,464 ops/sec ±1.10% (89 runs sampled)
heap-js x 2,490 ops/sec ±2.86% (74 runs sampled)
mnemonist x 6,043 ops/sec ±1.17% (87 runs sampled)
typescript-collections x 519 ops/sec ±1.48% (85 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 184,806,044 ops/sec ±2.10% (84 runs sampled)
heap x 172,404,654 ops/sec ±1.70% (81 runs sampled)
heap-js x 18,294,017 ops/sec ±121.51% (85 runs sampled)
mnemonist x 154,794,356 ops/sec ±1.24% (86 runs sampled)
typescript-collections x 187,537,873 ops/sec ±1.12% (85 runs sampled)
Fastest is typescript-collections,js-sdsl
```

## Deque

### push

```bash
js-sdsl x 14,102 ops/sec ±1.96% (82 runs sampled)
denque x 2,899 ops/sec ±1.22% (83 runs sampled)
double-ended-queue x 1,598 ops/sec ±1.25% (85 runs sampled)
Js-Array-Push-Back x 15,918 ops/sec ±2.45% (82 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 73,837,051 ops/sec ±0.89% (90 runs sampled)
denque x 126,467,265 ops/sec ±1.35% (89 runs sampled)
double-ended-queue x 691,759,383 ops/sec ±0.81% (90 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 352 ops/sec ±5.57% (55 runs sampled)
bintree x 346 ops/sec ±1.16% (85 runs sampled)
functional-red-black-tree x 1,427 ops/sec ±2.32% (78 runs sampled)
es6 map x 1,318 ops/sec ±0.83% (89 runs sampled)
Fastest is functional-red-black-tree
```

### remove

```bash
js-sdsl x 16,394 ops/sec ±1.25% (85 runs sampled)
bintrees x 8,897 ops/sec ±1.16% (86 runs sampled)
functional-red-black-tree x 4,837 ops/sec ±1.22% (85 runs sampled)
es6 map x 5,100 ops/sec ±1.02% (85 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 7,430,329 ops/sec ±1.13% (87 runs sampled)
bintrees x 4,573,319 ops/sec ±1.27% (88 runs sampled)
functional-red-black-tree x 13,233,760 ops/sec ±1.19% (89 runs sampled)
Fastest is functional-red-black-tree
```
