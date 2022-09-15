This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz × 2
```

## deque

### push

```bash
js-sdsl x 15,981 ops/sec ±2.11% (81 runs sampled)
denque x 2,809 ops/sec ±1.91% (74 runs sampled)
double-ended-queue x 1,646 ops/sec ±1.57% (85 runs sampled)
Js-Array-Push-Back x 18,869 ops/sec ±2.73% (81 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 69,646,854 ops/sec ±1.51% (81 runs sampled)
denque x 122,625,714 ops/sec ±1.65% (84 runs sampled)
double-ended-queue x 702,734,788 ops/sec ±1.29% (86 runs sampled)
Fastest is double-ended-queue
```

## heap

### init heap in constructor

```bash
js-sdsl x 24,699 ops/sec ±1.72% (83 runs sampled)
heap x 8,580 ops/sec ±1.70% (84 runs sampled)
heap-js x 2,094 ops/sec ±5.13% (77 runs sampled)
mnemonist x 10,309 ops/sec ±1.64% (82 runs sampled)
typescript-collections x 1,014 ops/sec ±1.87% (79 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 53,045 ops/sec ±1.85% (82 runs sampled)
heap x 38,979 ops/sec ±2.19% (81 runs sampled)
heap-js x 17,148 ops/sec ±2.07% (82 runs sampled)
mnemonist x 33,835 ops/sec ±2.23% (71 runs sampled)
typescript-collections x 6,546 ops/sec ±1.54% (82 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 12,896 ops/sec ±1.44% (83 runs sampled)
heap x 5,249 ops/sec ±1.86% (81 runs sampled)
heap-js x 1,872 ops/sec ±1.30% (86 runs sampled)
mnemonist x 4,950 ops/sec ±0.89% (87 runs sampled)
typescript-collections x 453 ops/sec ±1.79% (83 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 173,531,604 ops/sec ±1.41% (81 runs sampled)
heap x 148,638,193 ops/sec ±1.64% (86 runs sampled)
heap-js x 30,647,935 ops/sec ±158.83% (88 runs sampled)
mnemonist x 158,215,608 ops/sec ±1.17% (87 runs sampled)
typescript-collections x 162,417,628 ops/sec ±6.64% (83 runs sampled)
Fastest is js-sdsl,typescript-collections
```

## RBTree

### insert

```bash
js-sdsl x 5,542 ops/sec ±10.67% (74 runs sampled)
bintree x 4,339 ops/sec ±1.70% (86 runs sampled)
functional-red-black-tree x 1,986 ops/sec ±1.87% (78 runs sampled)
es6-map x 13,734 ops/sec ±1.78% (82 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 181,815 ops/sec ±2.95% (71 runs sampled)
bintrees x 100,648 ops/sec ±1.06% (83 runs sampled)
functional-red-black-tree x 46,645 ops/sec ±1.77% (84 runs sampled)
es6-map x 50,806 ops/sec ±2.16% (78 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 9,502,127 ops/sec ±2.21% (83 runs sampled)
bintrees x 5,245,869 ops/sec ±1.86% (84 runs sampled)
functional-red-black-tree x 5,630,170 ops/sec ±1.24% (84 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 239,798 ops/sec ±2.40% (82 runs sampled)
functional-red-black-tree x 200,498 ops/sec ±1.26% (83 runs sampled)
Fastest is js-sdsl
```
