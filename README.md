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
js-sdsl x 36,329 ops/sec ±0.52% (92 runs sampled)
heap x 11,103 ops/sec ±0.47% (96 runs sampled)
heap-js x 3,228 ops/sec ±3.39% (84 runs sampled)
mnemonist x 12,965 ops/sec ±0.52% (92 runs sampled)
typescript-collections x 820 ops/sec ±0.16% (96 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 65,320 ops/sec ±0.50% (95 runs sampled)
heap x 48,275 ops/sec ±0.42% (91 runs sampled)
heap-js x 22,188 ops/sec ±0.24% (98 runs sampled)
mnemonist x 48,431 ops/sec ±1.67% (93 runs sampled)
typescript-collections x 7,586 ops/sec ±0.10% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 15,144 ops/sec ±0.79% (94 runs sampled)
heap x 7,142 ops/sec ±0.34% (94 runs sampled)
heap-js x 3,401 ops/sec ±1.11% (90 runs sampled)
mnemonist x 8,106 ops/sec ±0.27% (93 runs sampled)
typescript-collections x 586 ops/sec ±0.24% (95 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 114,171,411 ops/sec ±0.16% (95 runs sampled)
heap x 111,451,115 ops/sec ±0.15% (93 runs sampled)
heap-js x 21,508,549 ops/sec ±107.68% (94 runs sampled)
mnemonist x 111,447,002 ops/sec ±0.12% (96 runs sampled)
typescript-collections x 110,248,898 ops/sec ±0.12% (94 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 15,552 ops/sec ±0.18% (95 runs sampled)
denque x 3,672 ops/sec ±0.67% (94 runs sampled)
double-ended-queue x 2,118 ops/sec ±0.21% (95 runs sampled)
Js-Array-Push-Back x 18,851 ops/sec ±0.69% (95 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 111,270,567 ops/sec ±0.19% (96 runs sampled)
denque x 116,172,991 ops/sec ±0.17% (94 runs sampled)
double-ended-queue x 596,116,049 ops/sec ±0.05% (100 runs sampled)
Fastest is double-ended-queue
```

### memory

memory diff is `Denque` - `Deque`

```bash
size: 10^1    memory-diff: -35 KB
size: 10^2    memory-diff: -25 KB
size: 10^3    memory-diff: 38 KB
size: 10^4    memory-diff: 183 KB
size: 10^5    memory-diff: 784 KB
size: 10^6    memory-diff: 10612 KB
size: 10^7    memory-diff: 145279 KB
```

## RBTree

### insert

```bash
js-sdsl x 8,579 ops/sec ±0.79% (95 runs sampled)
bintree x 5,129 ops/sec ±0.74% (95 runs sampled)
functional-red-black-tree x 2,880 ops/sec ±0.31% (97 runs sampled)
es6-map x 7,814 ops/sec ±6.33% (54 runs sampled)
Fastest is js-sdsl
```

### remove

```bash
js-sdsl x 2,456,587 ops/sec ±0.42% (95 runs sampled)
bintrees x 1,068,111 ops/sec ±0.45% (97 runs sampled)
functional-red-black-tree x 929,832 ops/sec ±0.82% (94 runs sampled)
es6-map x 5,205,895 ops/sec ±2.71% (71 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 15,945,420 ops/sec ±0.76% (93 runs sampled)
bintrees x 5,757,218 ops/sec ±0.57% (94 runs sampled)
functional-red-black-tree x 6,216,904 ops/sec ±0.37% (95 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 108,991 ops/sec ±1.28% (96 runs sampled)
functional-red-black-tree x 104,721 ops/sec ±0.08% (95 runs sampled)
Fastest is js-sdsl
```

### index

```bash
js-sdsl x 23,690,847 ops/sec ±1.00% (93 runs sampled)
functional-red-black-tree x 21,963,575 ops/sec ±0.89% (92 runs sampled)
Fastest is js-sdsl
```

## hash table

### set number

```bash
js-sdsl x 15,995 ops/sec ±1.20% (96 runs sampled)
es6-map x 30,498 ops/sec ±0.30% (95 runs sampled)
object x 17,041 ops/sec ±0.26% (97 runs sampled)
Fastest is es6-map
```

### set string

```bash
js-sdsl x 16,284 ops/sec ±1.28% (96 runs sampled)
es6-map x 30,035 ops/sec ±0.28% (96 runs sampled)
object x 17,802 ops/sec ±0.74% (94 runs sampled)
Fastest is es6-map
```

### set object

```bash
js-sdsl x 2,097 ops/sec ±11.83% (66 runs sampled)
es6-map x 18,825 ops/sec ±0.49% (94 runs sampled)
Fastest is es6-map
```

### get number

```bash
js-sdsl x 60,053 ops/sec ±0.12% (97 runs sampled)
es6-map x 59,042 ops/sec ±0.97% (99 runs sampled)
object x 69,557 ops/sec ±0.18% (95 runs sampled)
Fastest is object
```

### get string

```bash
js-sdsl x 58,386 ops/sec ±0.26% (96 runs sampled)
es6-map x 59,678 ops/sec ±0.11% (99 runs sampled)
object x 69,681 ops/sec ±0.16% (97 runs sampled)
Fastest is object
```

### get object

```bash
js-sdsl x 5,051 ops/sec ±1.62% (92 runs sampled)
es6-map x 1,471,217 ops/sec ±0.41% (95 runs sampled)
Fastest is es6-map
```
