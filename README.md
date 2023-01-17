This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1030-azure x64
Node.JS 16.19.0
V8 9.4.146.26-node.24
Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz × 2
```

## heap

### init

```bash
js-sdsl x 103,129 ops/sec ±0.78% (86 runs sampled)
heap x 50,088 ops/sec ±0.18% (95 runs sampled)
heap-js x 22,870 ops/sec ±1.30% (91 runs sampled)
mnemonist x 56,751 ops/sec ±0.22% (97 runs sampled)
typescript-collections x 11,853 ops/sec ±0.10% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 11,459 ops/sec ±0.27% (93 runs sampled)
heap x 5,542 ops/sec ±0.43% (96 runs sampled)
heap-js x 2,710 ops/sec ±0.52% (93 runs sampled)
mnemonist x 6,198 ops/sec ±0.12% (96 runs sampled)
typescript-collections x 484 ops/sec ±0.29% (93 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 143,380,178 ops/sec ±0.11% (96 runs sampled)
heap x 138,354,602 ops/sec ±0.35% (95 runs sampled)
heap-js x 19,523,875 ops/sec ±116.20% (98 runs sampled)
mnemonist x 140,146,740 ops/sec ±0.13% (99 runs sampled)
typescript-collections x 137,660,487 ops/sec ±0.09% (99 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 11,966 ops/sec ±0.18% (93 runs sampled)
denque x 4,799 ops/sec ±0.59% (91 runs sampled)
double-ended-queue x 1,574 ops/sec ±0.35% (95 runs sampled)
Js-Array-Push-Back x 18,310 ops/sec ±0.37% (95 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 78,154,935 ops/sec ±0.32% (99 runs sampled)
denque x 129,012,374 ops/sec ±0.08% (96 runs sampled)
double-ended-queue x 705,116,105 ops/sec ±0.18% (97 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -35 KB
size: 10^2    memory-diff: -28 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: -83 KB
size: 10^5    memory-diff: 784 KB
size: 10^6    memory-diff: 11890 KB
size: 10^7    memory-diff: 149294 KB
```

## linklist

### init

```bash
js-sdsl x 78,645 ops/sec ±0.38% (85 runs sampled)
yallist x 73,625 ops/sec ±0.31% (97 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 5,657,028 ops/sec ±31.16% (43 runs sampled)
yallist x 1,849,748 ops/sec ±79.72% (20 runs sampled)
Fastest is js-sdsl
```

### push&pop

```bash
js-sdsl x 21,729,977 ops/sec ±7.17% (84 runs sampled)
yallist x 253,416 ops/sec ±67.65% (8 runs sampled)
Fastest is js-sdsl
```

## RBTree

### insert

```bash
js-sdsl x 2,452 ops/sec ±93.83% (40 runs sampled)
bintree x 3,692 ops/sec ±1.11% (88 runs sampled)
functional-red-black-tree x 1,807 ops/sec ±0.72% (91 runs sampled)
es6-map x 205 ops/sec ±60.39% (9 runs sampled)
Fastest is bintree
```

### remove

```bash
js-sdsl x 1,090,004 ops/sec ±83.16% (64 runs sampled)
bintrees x 918,599 ops/sec ±6.21% (86 runs sampled)
functional-red-black-tree x 579,044 ops/sec ±1.48% (88 runs sampled)
es6-map x 163,669 ops/sec ±79.15% (7 runs sampled)
Fastest is bintrees,es6-map
```

### lowerBound

```bash
js-sdsl x 9,238,232 ops/sec ±5.33% (84 runs sampled)
bintrees x 2,587,582 ops/sec ±55.95% (49 runs sampled)
functional-red-black-tree x 4,386,971 ops/sec ±2.01% (86 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 104,395 ops/sec ±0.53% (97 runs sampled)
functional-red-black-tree x 87,607 ops/sec ±0.46% (98 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 8,492,386 ops/sec ±106.02% (46 runs sampled)
functional-red-black-tree x 15,039,731 ops/sec ±7.09% (91 runs sampled)
Fastest is functional-red-black-tree
```

## hash table

### set number

```bash
js-sdsl x 7,626 ops/sec ±0.78% (88 runs sampled)
es6-map x 16,131 ops/sec ±0.71% (90 runs sampled)
object x 5,088 ops/sec ±68.65% (85 runs sampled)
Fastest is es6-map
```

### set string

```bash
js-sdsl x 7,937 ops/sec ±0.78% (90 runs sampled)
es6-map x 15,993 ops/sec ±0.81% (86 runs sampled)
object x 5,037 ops/sec ±77.63% (88 runs sampled)
Fastest is es6-map
```

### set object

```bash
js-sdsl x 442 ops/sec ±111.68% (21 runs sampled)
es6-map x 11,540 ops/sec ±3.75% (85 runs sampled)
Fastest is es6-map
```

### get number

```bash
js-sdsl x 44,526 ops/sec ±0.10% (98 runs sampled)
es6-map x 52,826 ops/sec ±0.06% (97 runs sampled)
object x 49,644 ops/sec ±3.80% (92 runs sampled)
Fastest is es6-map
```

### get string

```bash
js-sdsl x 41,164 ops/sec ±0.19% (98 runs sampled)
es6-map x 43,529 ops/sec ±0.04% (94 runs sampled)
object x 50,074 ops/sec ±0.04% (95 runs sampled)
Fastest is object
```

### get object

```bash
js-sdsl x 416 ops/sec ±102.45% (15 runs sampled)
es6-map x 1,064,274 ops/sec ±1.20% (87 runs sampled)
Fastest is es6-map
```
