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
js-sdsl x 22,377 ops/sec ±2.12% (81 runs sampled)
heap x 7,305 ops/sec ±1.08% (87 runs sampled)
heap-js x 1,547 ops/sec ±2.83% (78 runs sampled)
mnemonist x 5,243 ops/sec ±1.37% (84 runs sampled)
typescript-collections x 951 ops/sec ±1.78% (78 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 47,150 ops/sec ±1.84% (78 runs sampled)
heap x 32,538 ops/sec ±2.29% (79 runs sampled)
heap-js x 14,429 ops/sec ±2.16% (75 runs sampled)
mnemonist x 32,529 ops/sec ±1.50% (78 runs sampled)
typescript-collections x 6,274 ops/sec ±0.99% (86 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 11,289 ops/sec ±2.25% (79 runs sampled)
heap x 4,863 ops/sec ±1.82% (83 runs sampled)
heap-js x 1,952 ops/sec ±2.38% (72 runs sampled)
mnemonist x 5,199 ops/sec ±1.24% (87 runs sampled)
typescript-collections x 443 ops/sec ±0.80% (85 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 162,403,626 ops/sec ±0.76% (88 runs sampled)
heap x 152,986,501 ops/sec ±0.92% (87 runs sampled)
heap-js x 26,951,042 ops/sec ±154.40% (87 runs sampled)
mnemonist x 127,193,156 ops/sec ±0.90% (86 runs sampled)
typescript-collections x 160,668,606 ops/sec ±2.01% (80 runs sampled)
Fastest is js-sdsl,typescript-collections
```

## Deque

### push

```bash
js-sdsl x 2,405 ops/sec ±1.53% (84 runs sampled)
denque x 2,774 ops/sec ±1.38% (80 runs sampled)
double-ended-queue x 1,574 ops/sec ±1.50% (81 runs sampled)
Js-Array-Push-Back x 16,788 ops/sec ±2.77% (75 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 68,786,530 ops/sec ±1.77% (82 runs sampled)
denque x 127,863,476 ops/sec ±1.72% (82 runs sampled)
double-ended-queue x 657,160,009 ops/sec ±1.70% (85 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,088 ops/sec ±11.30% (79 runs sampled)
bintree x 4,407 ops/sec ±1.13% (84 runs sampled)
functional-red-black-tree x 1,896 ops/sec ±2.89% (75 runs sampled)
es6-map x 13,615 ops/sec ±1.83% (79 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 187,599 ops/sec ±2.79% (77 runs sampled)
bintrees x 89,973 ops/sec ±1.73% (80 runs sampled)
functional-red-black-tree x 40,174 ops/sec ±2.27% (77 runs sampled)
es6-map x 52,682 ops/sec ±1.57% (85 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 14,058,222 ops/sec ±1.82% (83 runs sampled)
bintrees x 4,594,762 ops/sec ±2.03% (83 runs sampled)
functional-red-black-tree x 4,963,365 ops/sec ±1.72% (85 runs sampled)
Fastest is js-sdsl
```
