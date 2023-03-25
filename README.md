This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1034-azure x64
Node.JS 18.15.0
V8 10.2.154.26-node.25
Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz × 2
```

## heap

### init

```bash
js-sdsl x 91,132 ops/sec ±0.86% (93 runs sampled)
heap x 50,478 ops/sec ±0.20% (97 runs sampled)
heap-js x 14,860 ops/sec ±0.39% (92 runs sampled)
mnemonist x 56,664 ops/sec ±0.50% (93 runs sampled)
typescript-collections x 10,317 ops/sec ±0.21% (89 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,262 ops/sec ±0.23% (93 runs sampled)
heap x 4,558 ops/sec ±0.63% (95 runs sampled)
heap-js x 2,449 ops/sec ±0.39% (93 runs sampled)
mnemonist x 5,141 ops/sec ±0.19% (95 runs sampled)
typescript-collections x 413 ops/sec ±0.36% (90 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 112,246,654 ops/sec ±0.24% (92 runs sampled)
heap x 110,060,018 ops/sec ±0.31% (92 runs sampled)
heap-js x 26,959,546 ops/sec ±140.69% (91 runs sampled)
mnemonist x 109,454,379 ops/sec ±0.23% (91 runs sampled)
typescript-collections x 107,167,846 ops/sec ±0.22% (92 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 10,350 ops/sec ±0.24% (93 runs sampled)
denque x 3,949 ops/sec ±0.52% (89 runs sampled)
double-ended-queue x 1,243 ops/sec ±0.43% (91 runs sampled)
Js-Array-Push-Back x 15,568 ops/sec ±0.28% (95 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 81,494,158 ops/sec ±0.20% (95 runs sampled)
denque x 112,911,772 ops/sec ±0.22% (97 runs sampled)
double-ended-queue x 261,187,852 ops/sec ±26.72% (65 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -35 KB
size: 10^2    memory-diff: -40 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 102 KB
size: 10^5    memory-diff: 739 KB
size: 10^6    memory-diff: 15057 KB
size: 10^7    memory-diff: 147192 KB
```

## linklist

### init

```bash
js-sdsl x 69,240 ops/sec ±6.19% (80 runs sampled)
yallist x 60,178 ops/sec ±0.24% (91 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 4,799,711 ops/sec ±32.41% (41 runs sampled)
yallist x 2,011,359 ops/sec ±81.54% (28 runs sampled)
Fastest is js-sdsl
```

### push&pop

```bash
js-sdsl x 17,054,678 ops/sec ±12.86% (81 runs sampled)
yallist x 1,002,008 ops/sec ±127.42% (6 runs sampled)
Fastest is js-sdsl
```

## RBTree

### insert

```bash
js-sdsl x 11,248 ops/sec ±5.92% (84 runs sampled)
bintree x 8,533 ops/sec ±0.56% (92 runs sampled)
functional-red-black-tree x 3,522 ops/sec ±0.52% (94 runs sampled)
es6-map x 726 ops/sec ±69.23% (10 runs sampled)
Fastest is js-sdsl
```

### remove

```bash
js-sdsl x 1,797,646 ops/sec ±8.36% (84 runs sampled)
bintrees x 949,046 ops/sec ±0.38% (84 runs sampled)
functional-red-black-tree x 517,290 ops/sec ±0.82% (91 runs sampled)
es6-map x 534,879 ops/sec ±105.87% (14 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 7,915,782 ops/sec ±1.36% (89 runs sampled)
bintrees x 3,644,318 ops/sec ±0.58% (91 runs sampled)
functional-red-black-tree x 3,836,097 ops/sec ±0.56% (91 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 103,548 ops/sec ±1.28% (94 runs sampled)
functional-red-black-tree x 81,140 ops/sec ±0.52% (92 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 15,944,056 ops/sec ±0.40% (92 runs sampled)
functional-red-black-tree x 14,449,590 ops/sec ±0.51% (92 runs sampled)
Fastest is js-sdsl
```

## hash table

### set number

```bash
js-sdsl x 3,774 ops/sec ±79.26% (49 runs sampled)
es6-map x 14,074 ops/sec ±0.45% (91 runs sampled)
object x 7,662 ops/sec ±0.64% (90 runs sampled)
Fastest is es6-map
```

### set string

```bash
js-sdsl x 7,081 ops/sec ±0.74% (87 runs sampled)
es6-map x 14,282 ops/sec ±0.54% (90 runs sampled)
object x 7,795 ops/sec ±0.63% (93 runs sampled)
Fastest is es6-map
```

### set object

```bash
js-sdsl x 508 ops/sec ±90.29% (29 runs sampled)
es6-map x 8,971 ops/sec ±5.38% (83 runs sampled)
Fastest is es6-map
```

### get number

```bash
js-sdsl x 38,459 ops/sec ±0.24% (92 runs sampled)
es6-map x 37,533 ops/sec ±0.21% (96 runs sampled)
object x 40,488 ops/sec ±0.24% (95 runs sampled)
Fastest is object
```

### get string

```bash
js-sdsl x 35,656 ops/sec ±0.20% (94 runs sampled)
es6-map x 33,536 ops/sec ±0.45% (89 runs sampled)
object x 38,376 ops/sec ±0.19% (96 runs sampled)
Fastest is object
```

### get object

```bash
js-sdsl x 1,043 ops/sec ±88.14% (33 runs sampled)
es6-map x 669,178 ops/sec ±9.70% (90 runs sampled)
Fastest is es6-map
```
