This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1030-azure x64
Node.JS 16.19.0
V8 9.4.146.26-node.24
Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz × 2
```

## heap

### init

```bash
js-sdsl x 117,617 ops/sec ±0.98% (92 runs sampled)
heap x 57,379 ops/sec ±0.30% (92 runs sampled)
heap-js x 27,003 ops/sec ±1.07% (92 runs sampled)
mnemonist x 65,191 ops/sec ±0.36% (95 runs sampled)
typescript-collections x 10,617 ops/sec ±0.16% (97 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 14,183 ops/sec ±0.25% (89 runs sampled)
heap x 6,944 ops/sec ±0.38% (93 runs sampled)
heap-js x 3,187 ops/sec ±0.76% (90 runs sampled)
mnemonist x 7,648 ops/sec ±0.16% (97 runs sampled)
typescript-collections x 584 ops/sec ±0.28% (95 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 113,481,570 ops/sec ±0.13% (93 runs sampled)
heap x 110,955,420 ops/sec ±0.18% (94 runs sampled)
heap-js x 20,909,545 ops/sec ±108.37% (92 runs sampled)
mnemonist x 110,751,033 ops/sec ±0.13% (91 runs sampled)
typescript-collections x 109,943,742 ops/sec ±0.08% (94 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 14,903 ops/sec ±0.17% (96 runs sampled)
denque x 5,521 ops/sec ±0.79% (92 runs sampled)
double-ended-queue x 2,077 ops/sec ±0.19% (94 runs sampled)
Js-Array-Push-Back x 16,910 ops/sec ±0.22% (91 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 111,190,611 ops/sec ±0.68% (89 runs sampled)
denque x 115,734,729 ops/sec ±0.12% (94 runs sampled)
double-ended-queue x 592,741,669 ops/sec ±0.07% (99 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -35 KB
size: 10^2    memory-diff: -25 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 166 KB
size: 10^5    memory-diff: 784 KB
size: 10^6    memory-diff: 7774 KB
size: 10^7    memory-diff: 150377 KB
```

## linklist

### init

```bash
js-sdsl x 131,079 ops/sec ±0.68% (87 runs sampled)
yallist x 93,764 ops/sec ±0.34% (93 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 5,935,073 ops/sec ±27.88% (41 runs sampled)
yallist x 1,151,924 ops/sec ±93.25% (14 runs sampled)
Fastest is js-sdsl
```

### push&pop

```bash
js-sdsl x 21,169,436 ops/sec ±5.51% (82 runs sampled)
yallist x 714,389 ops/sec ±95.14% (7 runs sampled)
Fastest is js-sdsl
```

## RBTree

### insert

```bash
js-sdsl x 7,096 ops/sec ±4.54% (92 runs sampled)
bintree x 3,642 ops/sec ±44.79% (73 runs sampled)
functional-red-black-tree x 1,992 ops/sec ±2.14% (88 runs sampled)
es6-map x 285 ops/sec ±41.69% (7 runs sampled)
Fastest is js-sdsl
```

### remove

```bash
js-sdsl x 2,047,035 ops/sec ±6.30% (84 runs sampled)
bintrees x 989,288 ops/sec ±0.58% (93 runs sampled)
functional-red-black-tree x 388,780 ops/sec ±73.85% (54 runs sampled)
es6-map x 336,360 ops/sec ±72.36% (12 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 9,505,053 ops/sec ±11.88% (89 runs sampled)
bintrees x 5,119,272 ops/sec ±0.56% (92 runs sampled)
functional-red-black-tree x 2,939,763 ops/sec ±72.01% (50 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 106,485 ops/sec ±0.63% (96 runs sampled)
functional-red-black-tree x 103,228 ops/sec ±0.53% (95 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 30,344,004 ops/sec ±0.52% (94 runs sampled)
functional-red-black-tree x 26,663,604 ops/sec ±2.55% (88 runs sampled)
Fastest is js-sdsl
```

## hash table

### set number

```bash
js-sdsl x 10,038 ops/sec ±18.28% (85 runs sampled)
es6-map x 22,766 ops/sec ±0.68% (92 runs sampled)
object x 12,324 ops/sec ±1.04% (93 runs sampled)
Fastest is es6-map
```

### set string

```bash
js-sdsl x 6,780 ops/sec ±71.46% (74 runs sampled)
es6-map x 17,341 ops/sec ±14.03% (78 runs sampled)
object x 13,096 ops/sec ±0.56% (92 runs sampled)
Fastest is es6-map
```

### set object

```bash
js-sdsl x 528 ops/sec ±102.06% (21 runs sampled)
es6-map x 11,164 ops/sec ±12.47% (83 runs sampled)
Fastest is es6-map
```

### get number

```bash
js-sdsl x 63,872 ops/sec ±0.12% (96 runs sampled)
es6-map x 61,901 ops/sec ±0.11% (96 runs sampled)
object x 71,969 ops/sec ±0.16% (94 runs sampled)
Fastest is object
```

### get string

```bash
js-sdsl x 60,703 ops/sec ±4.74% (85 runs sampled)
es6-map x 57,520 ops/sec ±0.89% (94 runs sampled)
object x 69,317 ops/sec ±0.27% (95 runs sampled)
Fastest is object
```

### get object

```bash
js-sdsl x 474 ops/sec ±97.39% (15 runs sampled)
es6-map x 1,048,015 ops/sec ±6.66% (81 runs sampled)
Fastest is es6-map
```
