This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 24,112 ops/sec ±0.76% (90 runs sampled)
heap x 7,628 ops/sec ±0.26% (95 runs sampled)
heap-js x 2,388 ops/sec ±2.71% (89 runs sampled)
mnemonist x 9,551 ops/sec ±0.10% (96 runs sampled)
typescript-collections x 934 ops/sec ±0.09% (96 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 54,982 ops/sec ±0.38% (97 runs sampled)
heap x 38,580 ops/sec ±0.10% (94 runs sampled)
heap-js x 17,291 ops/sec ±0.19% (95 runs sampled)
mnemonist x 38,989 ops/sec ±0.47% (98 runs sampled)
typescript-collections x 6,758 ops/sec ±0.08% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,638 ops/sec ±0.12% (96 runs sampled)
heap x 5,594 ops/sec ±0.41% (97 runs sampled)
heap-js x 2,693 ops/sec ±0.40% (93 runs sampled)
mnemonist x 6,446 ops/sec ±0.08% (98 runs sampled)
typescript-collections x 497 ops/sec ±0.30% (93 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 141,985,131 ops/sec ±0.10% (100 runs sampled)
heap x 139,100,161 ops/sec ±0.15% (97 runs sampled)
heap-js x 124,453,310 ops/sec ±0.11% (95 runs sampled)
mnemonist x 140,407,675 ops/sec ±0.16% (100 runs sampled)
typescript-collections x 137,438,901 ops/sec ±0.24% (94 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 12,034 ops/sec ±0.17% (94 runs sampled)
denque x 3,194 ops/sec ±0.71% (92 runs sampled)
double-ended-queue x 1,544 ops/sec ±0.34% (95 runs sampled)
Js-Array-Push-Back x 17,742 ops/sec ±0.93% (94 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 85,566,665 ops/sec ±0.58% (93 runs sampled)
denque x 136,597,173 ops/sec ±0.95% (88 runs sampled)
double-ended-queue x 707,930,273 ops/sec ±0.15% (98 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -34 KB
size: 10^2    memory-diff: -13 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 154 KB
size: 10^5    memory-diff: 784 KB
size: 10^6    memory-diff: 7618 KB
size: 10^7    memory-diff: 118752 KB
```

## RBTree

### insert

```bash
js-sdsl x 6,727 ops/sec ±0.08% (97 runs sampled)
bintree x 4,184 ops/sec ±0.14% (97 runs sampled)
functional-red-black-tree x 2,231 ops/sec ±0.17% (96 runs sampled)
es6-map x 6,515 ops/sec ±8.42% (57 runs sampled)
Fastest is js-sdsl,es6-map
```

### remove

```bash
js-sdsl x 2,295,465 ops/sec ±0.89% (94 runs sampled)
bintrees x 1,100,863 ops/sec ±0.12% (95 runs sampled)
functional-red-black-tree x 786,884 ops/sec ±0.26% (96 runs sampled)
es6-map x 4,753,222 ops/sec ±3.43% (70 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 12,352,771 ops/sec ±0.76% (94 runs sampled)
bintrees x 5,131,485 ops/sec ±1.16% (90 runs sampled)
functional-red-black-tree x 4,978,777 ops/sec ±0.41% (95 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 100,097 ops/sec ±0.70% (89 runs sampled)
functional-red-black-tree x 88,161 ops/sec ±0.10% (99 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 15,895,324 ops/sec ±0.72% (95 runs sampled)
functional-red-black-tree x 13,908,315 ops/sec ±0.85% (92 runs sampled)
Fastest is js-sdsl
```
