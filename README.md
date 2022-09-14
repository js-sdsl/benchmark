This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 19,673 ops/sec ±1.50% (85 runs sampled)
heap x 6,949 ops/sec ±0.88% (89 runs sampled)
heap-js x 1,988 ops/sec ±3.08% (79 runs sampled)
mnemonist x 8,062 ops/sec ±1.21% (84 runs sampled)
typescript-collections x 949 ops/sec ±0.92% (89 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 42,437 ops/sec ±0.83% (90 runs sampled)
heap x 30,609 ops/sec ±0.85% (91 runs sampled)
heap-js x 13,367 ops/sec ±1.13% (91 runs sampled)
mnemonist x 31,087 ops/sec ±0.87% (88 runs sampled)
typescript-collections x 5,736 ops/sec ±0.97% (90 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,234 ops/sec ±1.67% (83 runs sampled)
heap x 4,637 ops/sec ±0.82% (88 runs sampled)
heap-js x 2,048 ops/sec ±1.28% (84 runs sampled)
mnemonist x 5,020 ops/sec ±0.80% (87 runs sampled)
typescript-collections x 434 ops/sec ±0.83% (89 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 160,883,681 ops/sec ±0.74% (91 runs sampled)
heap x 127,372,543 ops/sec ±0.84% (89 runs sampled)
heap-js x 23,924,193 ops/sec ±159.12% (85 runs sampled)
mnemonist x 128,721,119 ops/sec ±0.83% (89 runs sampled)
typescript-collections x 146,278,651 ops/sec ±1.01% (90 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 11,920 ops/sec ±1.40% (87 runs sampled)
denque x 2,505 ops/sec ±1.34% (85 runs sampled)
double-ended-queue x 1,392 ops/sec ±1.07% (85 runs sampled)
Js-Array-Push-Back x 13,462 ops/sec ±1.11% (87 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 61,036,966 ops/sec ±0.87% (89 runs sampled)
denque x 113,696,441 ops/sec ±0.75% (90 runs sampled)
double-ended-queue x 568,550,934 ops/sec ±0.63% (90 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 4,350 ops/sec ±10.11% (79 runs sampled)
bintree x 3,763 ops/sec ±1.52% (89 runs sampled)
functional-red-black-tree x 1,546 ops/sec ±1.02% (87 runs sampled)
es6-map x 12,286 ops/sec ±0.77% (92 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 161,509 ops/sec ±1.17% (86 runs sampled)
bintrees x 79,292 ops/sec ±1.44% (88 runs sampled)
functional-red-black-tree x 34,030 ops/sec ±1.03% (88 runs sampled)
es6-map x 45,989 ops/sec ±0.99% (90 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 9,345,342 ops/sec ±0.94% (88 runs sampled)
bintrees x 4,156,236 ops/sec ±0.91% (90 runs sampled)
functional-red-black-tree x 4,360,322 ops/sec ±1.36% (87 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 204,017 ops/sec ±2.30% (85 runs sampled)
functional-red-black-tree x 174,595 ops/sec ±0.61% (91 runs sampled)
Fastest is js-sdsl
```
