This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1020-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 23,776 ops/sec ±0.84% (87 runs sampled)
heap x 7,922 ops/sec ±0.38% (96 runs sampled)
heap-js x 2,309 ops/sec ±2.86% (85 runs sampled)
mnemonist x 9,534 ops/sec ±0.15% (98 runs sampled)
typescript-collections x 933 ops/sec ±0.10% (95 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 54,581 ops/sec ±0.10% (96 runs sampled)
heap x 37,414 ops/sec ±0.44% (96 runs sampled)
heap-js x 16,720 ops/sec ±0.27% (97 runs sampled)
mnemonist x 37,974 ops/sec ±0.21% (97 runs sampled)
typescript-collections x 6,691 ops/sec ±0.31% (97 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,562 ops/sec ±0.25% (95 runs sampled)
heap x 5,424 ops/sec ±0.10% (97 runs sampled)
heap-js x 2,653 ops/sec ±0.73% (94 runs sampled)
mnemonist x 5,845 ops/sec ±0.14% (98 runs sampled)
typescript-collections x 496 ops/sec ±0.11% (96 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 139,258,103 ops/sec ±0.24% (95 runs sampled)
heap x 133,190,456 ops/sec ±0.36% (95 runs sampled)
heap-js x 17,966,939 ops/sec ±117.14% (92 runs sampled)
mnemonist x 134,282,230 ops/sec ±0.13% (94 runs sampled)
typescript-collections x 131,884,062 ops/sec ±0.20% (95 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 12,148 ops/sec ±0.22% (94 runs sampled)
denque x 3,183 ops/sec ±0.83% (93 runs sampled)
double-ended-queue x 1,551 ops/sec ±0.34% (96 runs sampled)
Js-Array-Push-Back x 17,652 ops/sec ±0.90% (94 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 85,684,949 ops/sec ±0.57% (95 runs sampled)
denque x 136,820,375 ops/sec ±0.88% (91 runs sampled)
double-ended-queue x 708,381,985 ops/sec ±0.13% (95 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -34 KB
size: 10^2    memory-diff: -44 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 97 KB
size: 10^5    memory-diff: 737 KB
size: 10^6    memory-diff: 13579 KB
size: 10^7    memory-diff: 115882 KB
```

## RBTree

### insert

```bash
js-sdsl x 5,598 ops/sec ±32.28% (98 runs sampled)
bintree x 4,357 ops/sec ±0.13% (98 runs sampled)
functional-red-black-tree x 2,225 ops/sec ±0.20% (96 runs sampled)
es6-map x 6,628 ops/sec ±8.09% (59 runs sampled)
Fastest is es6-map,js-sdsl
```

### remove

```bash
js-sdsl x 2,286,342 ops/sec ±0.20% (96 runs sampled)
bintrees x 1,098,582 ops/sec ±0.67% (94 runs sampled)
functional-red-black-tree x 796,006 ops/sec ±0.29% (92 runs sampled)
es6-map x 4,834,369 ops/sec ±3.09% (69 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 12,353,691 ops/sec ±0.80% (93 runs sampled)
bintrees x 5,215,362 ops/sec ±1.20% (88 runs sampled)
functional-red-black-tree x 4,972,025 ops/sec ±0.57% (97 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 101,124 ops/sec ±0.45% (96 runs sampled)
functional-red-black-tree x 93,352 ops/sec ±0.08% (98 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 15,979,640 ops/sec ±0.66% (92 runs sampled)
functional-red-black-tree x 13,952,889 ops/sec ±0.91% (92 runs sampled)
Fastest is js-sdsl
```
