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
js-sdsl x 26,800 ops/sec ±1.59% (83 runs sampled)
heap x 8,969 ops/sec ±1.50% (83 runs sampled)
heap-js x 2,080 ops/sec ±3.39% (79 runs sampled)
mnemonist x 6,720 ops/sec ±1.95% (79 runs sampled)
typescript-collections x 1,061 ops/sec ±1.81% (86 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 54,706 ops/sec ±1.36% (85 runs sampled)
heap x 41,428 ops/sec ±1.51% (84 runs sampled)
heap-js x 18,240 ops/sec ±1.83% (86 runs sampled)
mnemonist x 41,397 ops/sec ±1.99% (83 runs sampled)
typescript-collections x 7,144 ops/sec ±1.09% (89 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 13,852 ops/sec ±1.64% (86 runs sampled)
heap x 5,909 ops/sec ±1.74% (78 runs sampled)
heap-js x 2,760 ops/sec ±2.87% (78 runs sampled)
mnemonist x 6,551 ops/sec ±1.48% (87 runs sampled)
typescript-collections x 524 ops/sec ±1.00% (87 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 192,630,727 ops/sec ±1.30% (87 runs sampled)
heap x 193,987,747 ops/sec ±1.24% (87 runs sampled)
heap-js x 34,204,989 ops/sec ±155.85% (87 runs sampled)
mnemonist x 159,134,069 ops/sec ±1.99% (84 runs sampled)
typescript-collections x 163,603,559 ops/sec ±1.75% (82 runs sampled)
Fastest is heap,js-sdsl
```

## Deque

### push

```bash
js-sdsl x 15,011 ops/sec ±1.72% (83 runs sampled)
denque x 3,049 ops/sec ±1.20% (84 runs sampled)
double-ended-queue x 1,664 ops/sec ±1.35% (86 runs sampled)
Js-Array-Push-Back x 17,561 ops/sec ±3.12% (76 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 75,277,988 ops/sec ±1.36% (85 runs sampled)
denque x 132,494,899 ops/sec ±1.68% (83 runs sampled)
double-ended-queue x 700,101,099 ops/sec ±1.31% (90 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 6,062 ops/sec ±9.59% (78 runs sampled)
bintree x 4,713 ops/sec ±1.36% (86 runs sampled)
functional-red-black-tree x 1,864 ops/sec ±2.13% (77 runs sampled)
es6-map x 14,136 ops/sec ±1.80% (79 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 201,150 ops/sec ±2.20% (83 runs sampled)
bintrees x 91,779 ops/sec ±0.88% (88 runs sampled)
functional-red-black-tree x 43,828 ops/sec ±2.07% (80 runs sampled)
es6-map x 52,376 ops/sec ±1.48% (85 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 11,834,186 ops/sec ±1.71% (79 runs sampled)
bintrees x 5,312,323 ops/sec ±1.17% (84 runs sampled)
functional-red-black-tree x 5,658,110 ops/sec ±2.16% (82 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 229,998 ops/sec ±1.88% (86 runs sampled)
functional-red-black-tree x 198,273 ops/sec ±1.27% (84 runs sampled)
Fastest is js-sdsl
```
