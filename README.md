This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 25,496 ops/sec ±1.45% (85 runs sampled)
heap x 8,639 ops/sec ±1.19% (88 runs sampled)
heap-js x 2,238 ops/sec ±3.09% (80 runs sampled)
mnemonist x 9,778 ops/sec ±1.80% (85 runs sampled)
typescript-collections x 1,031 ops/sec ±1.36% (88 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 52,103 ops/sec ±0.82% (90 runs sampled)
heap x 37,717 ops/sec ±0.96% (89 runs sampled)
heap-js x 16,289 ops/sec ±1.26% (89 runs sampled)
mnemonist x 39,738 ops/sec ±0.94% (92 runs sampled)
typescript-collections x 6,364 ops/sec ±1.42% (89 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 12,185 ops/sec ±1.21% (89 runs sampled)
heap x 5,580 ops/sec ±1.17% (87 runs sampled)
heap-js x 2,296 ops/sec ±1.51% (87 runs sampled)
mnemonist x 6,337 ops/sec ±1.31% (91 runs sampled)
typescript-collections x 488 ops/sec ±1.17% (87 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 183,655,899 ops/sec ±1.18% (88 runs sampled)
heap x 151,224,955 ops/sec ±0.82% (91 runs sampled)
heap-js x 17,213,031 ops/sec ±123.05% (87 runs sampled)
mnemonist x 146,893,382 ops/sec ±7.84% (80 runs sampled)
typescript-collections x 65,680,849 ops/sec ±3.36% (80 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 14,642 ops/sec ±1.50% (89 runs sampled)
denque x 3,033 ops/sec ±1.76% (86 runs sampled)
double-ended-queue x 1,667 ops/sec ±1.06% (88 runs sampled)
Js-Array-Push-Back x 17,049 ops/sec ±1.06% (87 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 71,213,357 ops/sec ±1.17% (91 runs sampled)
denque x 137,276,151 ops/sec ±1.06% (88 runs sampled)
double-ended-queue x 688,823,748 ops/sec ±0.87% (89 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,336 ops/sec ±11.17% (79 runs sampled)
bintree x 4,669 ops/sec ±0.87% (91 runs sampled)
functional-red-black-tree x 1,892 ops/sec ±1.11% (88 runs sampled)
es6-map x 14,740 ops/sec ±1.02% (87 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 188,680 ops/sec ±1.08% (89 runs sampled)
bintrees x 93,484 ops/sec ±2.09% (82 runs sampled)
functional-red-black-tree x 41,758 ops/sec ±0.87% (88 runs sampled)
es6-map x 56,433 ops/sec ±0.87% (94 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 11,851,064 ops/sec ±1.83% (86 runs sampled)
bintrees x 5,275,779 ops/sec ±1.12% (92 runs sampled)
functional-red-black-tree x 5,556,270 ops/sec ±0.98% (90 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 240,977 ops/sec ±1.81% (92 runs sampled)
functional-red-black-tree x 202,460 ops/sec ±0.86% (92 runs sampled)
Fastest is js-sdsl
```
