This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 23,030 ops/sec ±1.25% (87 runs sampled)
heap x 6,760 ops/sec ±0.73% (87 runs sampled)
heap-js x 1,855 ops/sec ±2.78% (83 runs sampled)
mnemonist x 5,669 ops/sec ±0.97% (89 runs sampled)
typescript-collections x 791 ops/sec ±0.74% (87 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 47,852 ops/sec ±0.58% (89 runs sampled)
heap x 34,799 ops/sec ±0.93% (88 runs sampled)
heap-js x 15,558 ops/sec ±0.69% (89 runs sampled)
mnemonist x 35,114 ops/sec ±0.75% (89 runs sampled)
typescript-collections x 5,787 ops/sec ±0.76% (87 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,608 ops/sec ±0.60% (87 runs sampled)
heap x 4,934 ops/sec ±0.78% (89 runs sampled)
heap-js x 2,461 ops/sec ±0.86% (90 runs sampled)
mnemonist x 5,262 ops/sec ±0.61% (94 runs sampled)
typescript-collections x 419 ops/sec ±0.35% (91 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 121,608,601 ops/sec ±0.49% (94 runs sampled)
heap x 118,001,010 ops/sec ±0.34% (94 runs sampled)
heap-js x 15,290,492 ops/sec ±117.25% (88 runs sampled)
mnemonist x 108,067,164 ops/sec ±0.90% (87 runs sampled)
typescript-collections x 120,303,655 ops/sec ±0.67% (89 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 10,193 ops/sec ±1.00% (89 runs sampled)
denque x 2,802 ops/sec ±1.41% (87 runs sampled)
double-ended-queue x 1,362 ops/sec ±0.78% (87 runs sampled)
Js-Array-Push-Back x 15,789 ops/sec ±0.79% (89 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 65,078,580 ops/sec ±0.97% (89 runs sampled)
denque x 114,607,767 ops/sec ±0.66% (90 runs sampled)
double-ended-queue x 617,937,146 ops/sec ±0.82% (88 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 335 ops/sec ±5.82% (58 runs sampled)
bintree x 345 ops/sec ±0.87% (87 runs sampled)
functional-red-black-tree x 1,854 ops/sec ±0.87% (88 runs sampled)
es6 map x 1,326 ops/sec ±0.72% (90 runs sampled)
Fastest is functional-red-black-tree
```

### remove

```bash
js-sdsl x 16,812 ops/sec ±0.68% (92 runs sampled)
bintrees x 9,350 ops/sec ±0.66% (89 runs sampled)
functional-red-black-tree x 5,418 ops/sec ±0.81% (87 runs sampled)
es6 map x 4,765 ops/sec ±0.78% (88 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 6,667,223 ops/sec ±1.63% (87 runs sampled)
bintrees x 4,596,672 ops/sec ±0.70% (89 runs sampled)
functional-red-black-tree x 12,643,610 ops/sec ±0.64% (92 runs sampled)
Fastest is functional-red-black-tree
```
