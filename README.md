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
js-sdsl x 18,974 ops/sec ±1.19% (89 runs sampled)
heap x 6,178 ops/sec ±0.66% (95 runs sampled)
heap-js x 1,820 ops/sec ±3.17% (84 runs sampled)
mnemonist x 7,815 ops/sec ±0.77% (95 runs sampled)
typescript-collections x 762 ops/sec ±1.11% (89 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 45,338 ops/sec ±0.52% (92 runs sampled)
heap x 33,012 ops/sec ±0.27% (94 runs sampled)
heap-js x 14,396 ops/sec ±0.70% (93 runs sampled)
mnemonist x 32,360 ops/sec ±0.66% (91 runs sampled)
typescript-collections x 5,615 ops/sec ±0.51% (93 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,244 ops/sec ±0.70% (92 runs sampled)
heap x 4,716 ops/sec ±0.28% (96 runs sampled)
heap-js x 2,305 ops/sec ±0.37% (92 runs sampled)
mnemonist x 5,362 ops/sec ±0.72% (93 runs sampled)
typescript-collections x 412 ops/sec ±0.24% (90 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 117,775,098 ops/sec ±0.27% (93 runs sampled)
heap x 114,264,063 ops/sec ±0.31% (95 runs sampled)
heap-js x 14,772,787 ops/sec ±117.32% (87 runs sampled)
mnemonist x 41,220,574 ops/sec ±2.65% (85 runs sampled)
typescript-collections x 49,736,243 ops/sec ±3.36% (82 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 9,652 ops/sec ±0.75% (90 runs sampled)
denque x 2,590 ops/sec ±1.28% (90 runs sampled)
double-ended-queue x 1,293 ops/sec ±0.59% (89 runs sampled)
Js-Array-Push-Back x 14,914 ops/sec ±0.33% (91 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 64,984,850 ops/sec ±0.75% (92 runs sampled)
denque x 114,831,677 ops/sec ±0.94% (91 runs sampled)
double-ended-queue x 596,338,410 ops/sec ±0.33% (90 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 4,426 ops/sec ±9.10% (85 runs sampled)
bintree x 3,678 ops/sec ±0.27% (95 runs sampled)
functional-red-black-tree x 1,946 ops/sec ±0.36% (94 runs sampled)
es6-map x 13,143 ops/sec ±0.23% (92 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 154,456 ops/sec ±0.20% (96 runs sampled)
bintrees x 87,798 ops/sec ±0.32% (85 runs sampled)
functional-red-black-tree x 34,323 ops/sec ±0.32% (93 runs sampled)
es6-map x 45,892 ops/sec ±0.28% (95 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 8,256,477 ops/sec ±1.40% (89 runs sampled)
bintrees x 4,359,462 ops/sec ±0.28% (94 runs sampled)
functional-red-black-tree x 4,233,602 ops/sec ±0.29% (91 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 191,075 ops/sec ±1.36% (93 runs sampled)
functional-red-black-tree x 141,531 ops/sec ±0.28% (92 runs sampled)
Fastest is js-sdsl
```
