This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 31,956 ops/sec ±0.39% (94 runs sampled)
heap x 10,679 ops/sec ±0.38% (94 runs sampled)
heap-js x 2,608 ops/sec ±2.77% (90 runs sampled)
mnemonist x 7,275 ops/sec ±0.43% (97 runs sampled)
typescript-collections x 783 ops/sec ±0.06% (96 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 61,183 ops/sec ±0.19% (98 runs sampled)
heap x 45,076 ops/sec ±0.30% (97 runs sampled)
heap-js x 21,617 ops/sec ±0.36% (98 runs sampled)
mnemonist x 46,571 ops/sec ±0.27% (95 runs sampled)
typescript-collections x 7,705 ops/sec ±0.21% (97 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 15,049 ops/sec ±0.52% (94 runs sampled)
heap x 6,961 ops/sec ±0.18% (98 runs sampled)
heap-js x 3,599 ops/sec ±0.36% (96 runs sampled)
mnemonist x 7,871 ops/sec ±0.45% (96 runs sampled)
typescript-collections x 588 ops/sec ±0.14% (96 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 114,180,731 ops/sec ±0.22% (95 runs sampled)
heap x 110,779,869 ops/sec ±0.20% (97 runs sampled)
heap-js x 22,382,307 ops/sec ±106.76% (95 runs sampled)
mnemonist x 98,420,374 ops/sec ±0.18% (93 runs sampled)
typescript-collections x 110,443,065 ops/sec ±0.15% (94 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 15,834 ops/sec ±0.65% (94 runs sampled)
denque x 3,625 ops/sec ±0.80% (94 runs sampled)
double-ended-queue x 2,048 ops/sec ±0.23% (96 runs sampled)
Js-Array-Push-Back x 17,180 ops/sec ±0.40% (95 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 111,356,616 ops/sec ±0.26% (94 runs sampled)
denque x 116,409,814 ops/sec ±0.25% (94 runs sampled)
double-ended-queue x 595,945,478 ops/sec ±0.06% (99 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 7,290 ops/sec ±9.35% (84 runs sampled)
bintree x 5,227 ops/sec ±0.68% (94 runs sampled)
functional-red-black-tree x 3,057 ops/sec ±0.21% (96 runs sampled)
es6-map x 20,288 ops/sec ±0.63% (97 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 280,493 ops/sec ±0.22% (92 runs sampled)
bintrees x 136,903 ops/sec ±0.16% (95 runs sampled)
functional-red-black-tree x 58,777 ops/sec ±0.89% (95 runs sampled)
es6-map x 66,611 ops/sec ±0.11% (98 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 14,447,441 ops/sec ±0.97% (92 runs sampled)
bintrees x 5,916,273 ops/sec ±0.32% (97 runs sampled)
functional-red-black-tree x 6,713,503 ops/sec ±0.18% (97 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 254,483 ops/sec ±2.53% (92 runs sampled)
functional-red-black-tree x 223,812 ops/sec ±0.09% (100 runs sampled)
Fastest is js-sdsl
```
