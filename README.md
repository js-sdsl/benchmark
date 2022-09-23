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
js-sdsl x 27,750 ops/sec ±1.14% (89 runs sampled)
heap x 8,472 ops/sec ±1.26% (86 runs sampled)
heap-js x 2,270 ops/sec ±3.15% (84 runs sampled)
mnemonist x 9,697 ops/sec ±1.99% (89 runs sampled)
typescript-collections x 1,014 ops/sec ±1.04% (89 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 55,656 ops/sec ±0.94% (91 runs sampled)
heap x 37,506 ops/sec ±0.90% (93 runs sampled)
heap-js x 16,514 ops/sec ±0.94% (87 runs sampled)
mnemonist x 37,514 ops/sec ±1.57% (85 runs sampled)
typescript-collections x 6,537 ops/sec ±1.14% (91 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,964 ops/sec ±1.01% (87 runs sampled)
heap x 5,781 ops/sec ±0.73% (90 runs sampled)
heap-js x 2,285 ops/sec ±1.34% (89 runs sampled)
mnemonist x 6,163 ops/sec ±0.85% (91 runs sampled)
typescript-collections x 489 ops/sec ±0.77% (89 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 171,891,324 ops/sec ±1.11% (88 runs sampled)
heap x 146,925,406 ops/sec ±1.34% (90 runs sampled)
heap-js x 16,796,929 ops/sec ±122.36% (87 runs sampled)
mnemonist x 171,031,823 ops/sec ±1.07% (84 runs sampled)
typescript-collections x 167,698,144 ops/sec ±1.37% (83 runs sampled)
Fastest is js-sdsl,mnemonist
```

## deque

### push

```bash
js-sdsl x 12,899 ops/sec ±1.05% (84 runs sampled)
denque x 2,835 ops/sec ±1.26% (87 runs sampled)
double-ended-queue x 1,611 ops/sec ±1.43% (85 runs sampled)
Js-Array-Push-Back x 16,449 ops/sec ±1.07% (89 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 72,238,393 ops/sec ±1.26% (90 runs sampled)
denque x 137,929,695 ops/sec ±0.54% (92 runs sampled)
double-ended-queue x 682,293,455 ops/sec ±0.93% (92 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -34 KB
size: 10^2    memory-diff: -42 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 103 KB
size: 10^5    memory-diff: 737 KB
size: 10^6    memory-diff: 12155 KB
size: 10^7    memory-diff: 125384 KB
```

## RBTree

### insert

```bash
js-sdsl x 6,958 ops/sec ±1.52% (88 runs sampled)
bintree x 4,563 ops/sec ±1.01% (92 runs sampled)
functional-red-black-tree x 1,908 ops/sec ±1.17% (83 runs sampled)
es6-map x 5,926 ops/sec ±9.40% (52 runs sampled)
Fastest is js-sdsl,es6-map
```

### remove

```bash
js-sdsl x 2,167,052 ops/sec ±1.44% (88 runs sampled)
bintrees x 1,057,473 ops/sec ±0.88% (91 runs sampled)
functional-red-black-tree x 571,481 ops/sec ±1.84% (83 runs sampled)
es6-map x 4,096,689 ops/sec ±4.14% (67 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 10,459,233 ops/sec ±2.04% (84 runs sampled)
bintrees x 5,186,069 ops/sec ±0.87% (90 runs sampled)
functional-red-black-tree x 4,972,566 ops/sec ±0.92% (87 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 114,241 ops/sec ±0.88% (94 runs sampled)
functional-red-black-tree x 101,795 ops/sec ±0.87% (92 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 23,323,563 ops/sec ±1.15% (88 runs sampled)
functional-red-black-tree x 21,223,224 ops/sec ±1.48% (88 runs sampled)
Fastest is js-sdsl
```
