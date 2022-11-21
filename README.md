This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1022-azure x64
Node.JS 16.18.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 24,554 ops/sec ±1.48% (84 runs sampled)
heap x 7,666 ops/sec ±0.88% (92 runs sampled)
heap-js x 2,003 ops/sec ±2.54% (87 runs sampled)
mnemonist x 8,331 ops/sec ±0.54% (91 runs sampled)
typescript-collections x 773 ops/sec ±0.69% (91 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 47,034 ops/sec ±0.61% (94 runs sampled)
heap x 31,706 ops/sec ±0.99% (93 runs sampled)
heap-js x 14,823 ops/sec ±0.27% (94 runs sampled)
mnemonist x 33,483 ops/sec ±0.20% (95 runs sampled)
typescript-collections x 5,680 ops/sec ±0.38% (93 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,352 ops/sec ±0.54% (96 runs sampled)
heap x 4,831 ops/sec ±0.30% (95 runs sampled)
heap-js x 2,495 ops/sec ±0.85% (92 runs sampled)
mnemonist x 5,482 ops/sec ±0.29% (92 runs sampled)
typescript-collections x 420 ops/sec ±0.33% (91 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 119,919,300 ops/sec ±0.30% (93 runs sampled)
heap x 114,577,893 ops/sec ±0.27% (95 runs sampled)
heap-js x 16,769,049 ops/sec ±114.59% (97 runs sampled)
mnemonist x 115,616,843 ops/sec ±0.34% (94 runs sampled)
typescript-collections x 112,169,670 ops/sec ±0.40% (95 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 9,879 ops/sec ±1.22% (93 runs sampled)
denque x 2,703 ops/sec ±1.53% (90 runs sampled)
double-ended-queue x 1,332 ops/sec ±0.60% (92 runs sampled)
Js-Array-Push-Back x 16,714 ops/sec ±0.34% (92 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 71,735,624 ops/sec ±0.61% (93 runs sampled)
denque x 115,342,971 ops/sec ±1.47% (90 runs sampled)
double-ended-queue x 670,920,229 ops/sec ±0.55% (96 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -34 KB
size: 10^2    memory-diff: -25 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: -14715 KB
size: 10^5    memory-diff: 752 KB
size: 10^6    memory-diff: 392 KB
size: 10^7    memory-diff: 130280 KB
```

## RBTree

### insert

```bash
js-sdsl x 6,026 ops/sec ±0.98% (90 runs sampled)
bintree x 3,652 ops/sec ±0.26% (95 runs sampled)
functional-red-black-tree x 1,958 ops/sec ±0.27% (94 runs sampled)
es6-map x 5,654 ops/sec ±9.49% (55 runs sampled)
Fastest is js-sdsl,es6-map
```

### remove

```bash
js-sdsl x 2,277,597 ops/sec ±1.41% (88 runs sampled)
bintrees x 1,126,502 ops/sec ±1.72% (89 runs sampled)
functional-red-black-tree x 713,457 ops/sec ±0.76% (88 runs sampled)
es6-map x 4,162,245 ops/sec ±3.74% (71 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 10,153,386 ops/sec ±0.46% (92 runs sampled)
bintrees x 4,606,042 ops/sec ±1.39% (85 runs sampled)
functional-red-black-tree x 4,031,190 ops/sec ±0.40% (94 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 86,779 ops/sec ±0.65% (88 runs sampled)
functional-red-black-tree x 75,860 ops/sec ±0.49% (88 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 13,371,544 ops/sec ±0.86% (90 runs sampled)
functional-red-black-tree x 11,176,357 ops/sec ±1.16% (88 runs sampled)
Fastest is js-sdsl
```

## hash table

### set number

```bash
js-sdsl x 8,164 ops/sec ±1.97% (79 runs sampled)
es6-map x 17,074 ops/sec ±0.79% (86 runs sampled)
object x 8,644 ops/sec ±1.63% (86 runs sampled)
Fastest is es6-map
```

### set string

```bash
js-sdsl x 8,490 ops/sec ±1.60% (86 runs sampled)
es6-map x 14,976 ops/sec ±1.24% (92 runs sampled)
object x 9,056 ops/sec ±1.73% (86 runs sampled)
Fastest is es6-map
```

### set object

```bash
js-sdsl x 1,715 ops/sec ±9.70% (66 runs sampled)
es6-map x 13,713 ops/sec ±0.75% (88 runs sampled)
Fastest is es6-map
```

### get number

```bash
js-sdsl x 37,467 ops/sec ±0.25% (96 runs sampled)
es6-map x 39,217 ops/sec ±0.10% (88 runs sampled)
object x 41,955 ops/sec ±0.24% (88 runs sampled)
Fastest is object
```

### get string

```bash
js-sdsl x 34,292 ops/sec ±0.35% (94 runs sampled)
es6-map x 32,180 ops/sec ±0.45% (95 runs sampled)
object x 40,327 ops/sec ±0.58% (95 runs sampled)
Fastest is object
```

### get object

```bash
js-sdsl x 3,936 ops/sec ±2.17% (84 runs sampled)
es6-map x 1,149,005 ops/sec ±0.70% (94 runs sampled)
Fastest is es6-map
```
