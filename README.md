This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 31,196 ops/sec ±0.59% (91 runs sampled)
heap x 10,147 ops/sec ±0.29% (97 runs sampled)
heap-js x 2,437 ops/sec ±2.58% (88 runs sampled)
mnemonist x 6,871 ops/sec ±0.34% (97 runs sampled)
typescript-collections x 774 ops/sec ±0.07% (97 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 60,490 ops/sec ±0.10% (97 runs sampled)
heap x 42,424 ops/sec ±0.44% (96 runs sampled)
heap-js x 20,270 ops/sec ±0.21% (97 runs sampled)
mnemonist x 43,774 ops/sec ±0.14% (96 runs sampled)
typescript-collections x 7,664 ops/sec ±0.37% (95 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 14,097 ops/sec ±0.16% (95 runs sampled)
heap x 6,802 ops/sec ±0.24% (98 runs sampled)
heap-js x 3,110 ops/sec ±0.63% (90 runs sampled)
mnemonist x 7,541 ops/sec ±0.09% (97 runs sampled)
typescript-collections x 585 ops/sec ±0.14% (95 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 74,726,059 ops/sec ±4.54% (69 runs sampled)
heap x 68,701,319 ops/sec ±4.35% (74 runs sampled)
heap-js x 17,014,940 ops/sec ±101.31% (82 runs sampled)
mnemonist x 56,863,177 ops/sec ±3.34% (81 runs sampled)
typescript-collections x 68,222,075 ops/sec ±4.20% (78 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 14,138 ops/sec ±0.14% (95 runs sampled)
denque x 3,512 ops/sec ±0.63% (90 runs sampled)
double-ended-queue x 1,979 ops/sec ±0.25% (95 runs sampled)
Js-Array-Push-Back x 15,799 ops/sec ±0.72% (93 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 111,032,194 ops/sec ±0.11% (96 runs sampled)
denque x 115,619,735 ops/sec ±0.14% (92 runs sampled)
double-ended-queue x 593,698,113 ops/sec ±0.09% (99 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 413 ops/sec ±4.04% (67 runs sampled)
bintree x 407 ops/sec ±1.56% (94 runs sampled)
functional-red-black-tree x 2,369 ops/sec ±0.80% (91 runs sampled)
es6 map x 1,673 ops/sec ±0.37% (96 runs sampled)
Fastest is functional-red-black-tree
```

### remove

```bash
js-sdsl x 26,240 ops/sec ±0.19% (97 runs sampled)
bintrees x 12,934 ops/sec ±0.24% (97 runs sampled)
functional-red-black-tree x 7,026 ops/sec ±1.97% (94 runs sampled)
es6 map x 6,498 ops/sec ±0.17% (98 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 8,411,161 ops/sec ±0.76% (95 runs sampled)
bintrees x 5,391,982 ops/sec ±0.45% (93 runs sampled)
functional-red-black-tree x 14,181,461 ops/sec ±0.96% (92 runs sampled)
Fastest is functional-red-black-tree
```
