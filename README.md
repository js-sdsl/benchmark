This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz × 2
```

## deque

### push

```bash
js-sdsl x 12,910 ops/sec ±1.16% (88 runs sampled)
denque x 2,884 ops/sec ±1.17% (85 runs sampled)
double-ended-queue x 1,546 ops/sec ±0.95% (87 runs sampled)
Js-Array-Push-Back x 14,107 ops/sec ±1.59% (84 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 64,155,951 ops/sec ±0.76% (85 runs sampled)
denque x 121,094,626 ops/sec ±0.95% (90 runs sampled)
double-ended-queue x 606,979,404 ops/sec ±0.61% (91 runs sampled)
Fastest is double-ended-queue
```

## heap

### init heap in constructor

```bash
js-sdsl x 19,856 ops/sec ±0.97% (88 runs sampled)
heap x 7,639 ops/sec ±1.21% (85 runs sampled)
heap-js x 2,007 ops/sec ±3.11% (82 runs sampled)
mnemonist x 9,056 ops/sec ±0.92% (86 runs sampled)
typescript-collections x 932 ops/sec ±0.75% (88 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 46,563 ops/sec ±1.07% (87 runs sampled)
heap x 33,757 ops/sec ±1.24% (88 runs sampled)
heap-js x 14,610 ops/sec ±1.20% (91 runs sampled)
mnemonist x 35,407 ops/sec ±0.81% (91 runs sampled)
typescript-collections x 6,017 ops/sec ±0.55% (89 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,799 ops/sec ±1.20% (87 runs sampled)
heap x 5,021 ops/sec ±0.97% (89 runs sampled)
heap-js x 2,019 ops/sec ±1.40% (86 runs sampled)
mnemonist x 5,482 ops/sec ±1.44% (87 runs sampled)
typescript-collections x 419 ops/sec ±1.43% (86 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 165,460,590 ops/sec ±0.98% (87 runs sampled)
heap x 134,543,028 ops/sec ±1.01% (88 runs sampled)
heap-js x 7,984,646 ops/sec ±104.78% (74 runs sampled)
mnemonist x 47,074,978 ops/sec ±2.39% (81 runs sampled)
typescript-collections x 60,110,073 ops/sec ±2.21% (83 runs sampled)
Fastest is js-sdsl
```

## RBTree

### insert

```bash
js-sdsl x 5,361 ops/sec ±8.72% (79 runs sampled)
bintree x 4,130 ops/sec ±1.24% (87 runs sampled)
functional-red-black-tree x 1,694 ops/sec ±1.15% (87 runs sampled)
es6-map x 13,196 ops/sec ±1.51% (88 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 166,711 ops/sec ±1.30% (88 runs sampled)
bintrees x 87,780 ops/sec ±0.88% (88 runs sampled)
functional-red-black-tree x 34,862 ops/sec ±1.19% (87 runs sampled)
es6-map x 49,796 ops/sec ±0.87% (88 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 10,317,550 ops/sec ±0.95% (89 runs sampled)
bintrees x 4,510,877 ops/sec ±1.34% (85 runs sampled)
functional-red-black-tree x 4,767,524 ops/sec ±1.02% (89 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 221,810 ops/sec ±0.77% (91 runs sampled)
functional-red-black-tree x 178,766 ops/sec ±1.12% (87 runs sampled)
Fastest is js-sdsl
```
