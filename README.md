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
js-sdsl x 23,251 ops/sec ±1.04% (85 runs sampled)
heap x 6,942 ops/sec ±0.70% (85 runs sampled)
heap-js x 1,807 ops/sec ±2.30% (86 runs sampled)
mnemonist x 5,662 ops/sec ±1.03% (85 runs sampled)
typescript-collections x 784 ops/sec ±0.75% (89 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 47,288 ops/sec ±0.85% (85 runs sampled)
heap x 33,982 ops/sec ±0.75% (87 runs sampled)
heap-js x 15,315 ops/sec ±0.72% (88 runs sampled)
mnemonist x 34,011 ops/sec ±0.84% (86 runs sampled)
typescript-collections x 5,776 ops/sec ±0.56% (87 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,872 ops/sec ±0.69% (90 runs sampled)
heap x 4,998 ops/sec ±0.66% (86 runs sampled)
heap-js x 2,434 ops/sec ±1.14% (88 runs sampled)
mnemonist x 5,318 ops/sec ±0.77% (89 runs sampled)
typescript-collections x 421 ops/sec ±0.74% (86 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 121,419,763 ops/sec ±1.25% (84 runs sampled)
heap x 114,830,980 ops/sec ±0.56% (92 runs sampled)
heap-js x 16,430,465 ops/sec ±115.58% (91 runs sampled)
mnemonist x 107,434,901 ops/sec ±0.72% (88 runs sampled)
typescript-collections x 117,922,180 ops/sec ±0.85% (83 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 2,012 ops/sec ±0.76% (88 runs sampled)
denque x 2,811 ops/sec ±0.90% (85 runs sampled)
double-ended-queue x 1,356 ops/sec ±0.82% (85 runs sampled)
Js-Array-Push-Back x 15,510 ops/sec ±0.57% (89 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 67,904,436 ops/sec ±1.00% (87 runs sampled)
denque x 117,836,573 ops/sec ±1.15% (85 runs sampled)
double-ended-queue x 605,651,662 ops/sec ±0.64% (85 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 4,731 ops/sec ±8.88% (79 runs sampled)
bintree x 3,909 ops/sec ±0.61% (88 runs sampled)
functional-red-black-tree x 2,027 ops/sec ±0.53% (90 runs sampled)
es6-map x 13,820 ops/sec ±0.70% (88 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 158,375 ops/sec ±0.42% (85 runs sampled)
bintrees x 89,187 ops/sec ±0.36% (91 runs sampled)
functional-red-black-tree x 37,787 ops/sec ±0.59% (88 runs sampled)
es6-map x 44,946 ops/sec ±0.40% (92 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 10,490,805 ops/sec ±1.55% (90 runs sampled)
bintrees x 4,903,984 ops/sec ±0.68% (88 runs sampled)
functional-red-black-tree x 4,552,971 ops/sec ±0.43% (89 runs sampled)
Fastest is js-sdsl
```
