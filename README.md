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
js-sdsl x 25,298 ops/sec ±1.32% (83 runs sampled)
heap x 8,326 ops/sec ±1.17% (84 runs sampled)
heap-js x 1,877 ops/sec ±2.45% (79 runs sampled)
mnemonist x 6,157 ops/sec ±1.19% (89 runs sampled)
typescript-collections x 940 ops/sec ±1.48% (88 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 51,139 ops/sec ±0.91% (91 runs sampled)
heap x 37,233 ops/sec ±0.73% (91 runs sampled)
heap-js x 16,322 ops/sec ±1.02% (87 runs sampled)
mnemonist x 39,025 ops/sec ±0.80% (92 runs sampled)
typescript-collections x 6,534 ops/sec ±0.73% (90 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 12,114 ops/sec ±1.01% (92 runs sampled)
heap x 5,673 ops/sec ±0.75% (93 runs sampled)
heap-js x 2,313 ops/sec ±0.69% (88 runs sampled)
mnemonist x 6,204 ops/sec ±1.03% (93 runs sampled)
typescript-collections x 477 ops/sec ±1.06% (88 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 181,478,665 ops/sec ±0.73% (91 runs sampled)
heap x 185,107,071 ops/sec ±0.97% (88 runs sampled)
heap-js x 19,152,059 ops/sec ±121.53% (92 runs sampled)
mnemonist x 155,462,756 ops/sec ±0.48% (86 runs sampled)
typescript-collections x 182,621,656 ops/sec ±0.82% (91 runs sampled)
Fastest is heap
```

## Deque

### push

```bash
js-sdsl x 14,772 ops/sec ±1.03% (87 runs sampled)
denque x 3,171 ops/sec ±0.93% (84 runs sampled)
double-ended-queue x 1,706 ops/sec ±1.08% (88 runs sampled)
Js-Array-Push-Back x 16,988 ops/sec ±1.30% (88 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 71,003,145 ops/sec ±1.16% (86 runs sampled)
denque x 129,747,211 ops/sec ±1.01% (91 runs sampled)
double-ended-queue x 685,943,533 ops/sec ±1.25% (91 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 6,325 ops/sec ±8.24% (85 runs sampled)
bintree x 4,779 ops/sec ±0.93% (92 runs sampled)
functional-red-black-tree x 1,955 ops/sec ±1.15% (90 runs sampled)
es6-map x 15,541 ops/sec ±0.69% (90 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 198,434 ops/sec ±0.86% (89 runs sampled)
bintrees x 99,472 ops/sec ±0.61% (91 runs sampled)
functional-red-black-tree x 41,475 ops/sec ±0.60% (92 runs sampled)
es6-map x 56,297 ops/sec ±0.96% (93 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 16,925,257 ops/sec ±1.08% (86 runs sampled)
bintrees x 5,096,027 ops/sec ±1.51% (92 runs sampled)
functional-red-black-tree x 5,413,553 ops/sec ±0.78% (87 runs sampled)
Fastest is js-sdsl
```
