This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1022-azure x64
Node.JS 16.18.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 36,235 ops/sec ±0.46% (92 runs sampled)
heap x 10,767 ops/sec ±0.43% (94 runs sampled)
heap-js x 3,195 ops/sec ±3.14% (91 runs sampled)
mnemonist x 12,905 ops/sec ±0.61% (94 runs sampled)
typescript-collections x 820 ops/sec ±0.15% (96 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 63,473 ops/sec ±0.37% (94 runs sampled)
heap x 45,738 ops/sec ±0.62% (95 runs sampled)
heap-js x 21,473 ops/sec ±0.39% (93 runs sampled)
mnemonist x 47,763 ops/sec ±0.64% (93 runs sampled)
typescript-collections x 7,736 ops/sec ±0.12% (95 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 15,190 ops/sec ±0.39% (97 runs sampled)
heap x 7,117 ops/sec ±0.42% (96 runs sampled)
heap-js x 3,446 ops/sec ±0.55% (94 runs sampled)
mnemonist x 7,874 ops/sec ±0.22% (93 runs sampled)
typescript-collections x 586 ops/sec ±0.31% (95 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 113,636,432 ops/sec ±0.15% (94 runs sampled)
heap x 111,168,839 ops/sec ±0.21% (95 runs sampled)
heap-js x 20,929,086 ops/sec ±108.38% (90 runs sampled)
mnemonist x 111,111,945 ops/sec ±0.14% (91 runs sampled)
typescript-collections x 110,255,799 ops/sec ±0.16% (96 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 15,306 ops/sec ±0.36% (91 runs sampled)
denque x 3,616 ops/sec ±0.59% (92 runs sampled)
double-ended-queue x 2,106 ops/sec ±0.28% (94 runs sampled)
Js-Array-Push-Back x 18,640 ops/sec ±0.90% (97 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 110,939,885 ops/sec ±0.15% (96 runs sampled)
denque x 115,971,308 ops/sec ±0.19% (93 runs sampled)
double-ended-queue x 595,233,406 ops/sec ±0.07% (97 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -52 KB
size: 10^2    memory-diff: -36 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 106 KB
size: 10^5    memory-diff: 752 KB
size: 10^6    memory-diff: 14376 KB
size: 10^7    memory-diff: 124050 KB
```

## RBTree

### insert

```bash
js-sdsl x 8,272 ops/sec ±0.51% (96 runs sampled)
bintree x 5,385 ops/sec ±0.33% (98 runs sampled)
functional-red-black-tree x 2,786 ops/sec ±0.36% (93 runs sampled)
es6-map x 7,400 ops/sec ±6.76% (52 runs sampled)
Fastest is js-sdsl
```

### remove

```bash
js-sdsl x 2,357,037 ops/sec ±0.22% (97 runs sampled)
bintrees x 1,082,355 ops/sec ±0.10% (97 runs sampled)
functional-red-black-tree x 913,633 ops/sec ±0.31% (95 runs sampled)
es6-map x 5,346,486 ops/sec ±3.11% (70 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 17,905,067 ops/sec ±0.83% (92 runs sampled)
bintrees x 5,975,329 ops/sec ±0.54% (93 runs sampled)
functional-red-black-tree x 6,596,289 ops/sec ±0.29% (92 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 110,643 ops/sec ±0.19% (94 runs sampled)
functional-red-black-tree x 104,971 ops/sec ±0.10% (99 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 23,600,626 ops/sec ±0.92% (91 runs sampled)
functional-red-black-tree x 21,977,271 ops/sec ±0.64% (93 runs sampled)
Fastest is js-sdsl
```

## hash table

### set number

```bash
js-sdsl x 15,132 ops/sec ±0.25% (96 runs sampled)
es6-map x 29,891 ops/sec ±0.21% (98 runs sampled)
object x 16,319 ops/sec ±1.15% (87 runs sampled)
Fastest is es6-map
```

### set string

```bash
js-sdsl x 15,506 ops/sec ±0.17% (96 runs sampled)
es6-map x 29,198 ops/sec ±0.23% (96 runs sampled)
object x 16,882 ops/sec ±1.13% (95 runs sampled)
Fastest is es6-map
```

### set object

```bash
js-sdsl x 2,012 ops/sec ±12.04% (65 runs sampled)
es6-map x 18,554 ops/sec ±0.15% (97 runs sampled)
Fastest is es6-map
```

### get number

```bash
js-sdsl x 64,127 ops/sec ±0.12% (96 runs sampled)
es6-map x 58,277 ops/sec ±0.07% (97 runs sampled)
object x 70,466 ops/sec ±0.28% (95 runs sampled)
Fastest is object
```

### get string

```bash
js-sdsl x 59,477 ops/sec ±0.26% (94 runs sampled)
es6-map x 58,319 ops/sec ±0.11% (97 runs sampled)
object x 67,288 ops/sec ±0.15% (98 runs sampled)
Fastest is object
```

### get object

```bash
js-sdsl x 4,794 ops/sec ±1.87% (92 runs sampled)
es6-map x 1,433,170 ops/sec ±0.60% (96 runs sampled)
Fastest is es6-map
```
