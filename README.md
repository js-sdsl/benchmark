This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Darwin 21.6.0 arm64
Node.JS 16.14.0
V8 9.4.146.24-node.20
Apple M1 Pro × 10
```

## heap

### init heap in constructor

```bash
js-sdsl x 54,559 ops/sec ±0.24% (96 runs sampled)
heap x 18,313 ops/sec ±0.19% (99 runs sampled)
heap-js x 4,782 ops/sec ±1.26% (93 runs sampled)
mnemonist x 12,125 ops/sec ±0.16% (98 runs sampled)
typescript-collections x 1,397 ops/sec ±0.16% (100 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 97,248 ops/sec ±0.18% (99 runs sampled)
heap x 67,806 ops/sec ±0.16% (97 runs sampled)
heap-js x 33,746 ops/sec ±0.16% (98 runs sampled)
mnemonist x 70,631 ops/sec ±0.24% (100 runs sampled)
typescript-collections x 10,186 ops/sec ±1.01% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 24,389 ops/sec ±0.47% (97 runs sampled)
heap x 11,245 ops/sec ±0.48% (97 runs sampled)
heap-js x 6,568 ops/sec ±0.56% (96 runs sampled)
mnemonist x 12,129 ops/sec ±0.26% (100 runs sampled)
typescript-collections x 718 ops/sec ±0.17% (97 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 152,942,500 ops/sec ±0.08% (97 runs sampled)
heap x 152,613,403 ops/sec ±0.15% (94 runs sampled)
heap-js x 144,298,357 ops/sec ±0.06% (99 runs sampled)
mnemonist x 143,188,834 ops/sec ±0.14% (101 runs sampled)
typescript-collections x 151,051,426 ops/sec ±0.07% (102 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 24,806 ops/sec ±0.29% (99 runs sampled)
denque x 9,426 ops/sec ±0.42% (98 runs sampled)
double-ended-queue x 4,501 ops/sec ±0.52% (99 runs sampled)
Js-Array-Push-Back x 25,804 ops/sec ±0.43% (95 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 154,083,712 ops/sec ±0.14% (99 runs sampled)
denque x 155,259,047 ops/sec ±0.08% (98 runs sampled)
double-ended-queue x 635,783,159 ops/sec ±23.85% (64 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 1,056 ops/sec ±2.19% (87 runs sampled)
bintree x 799 ops/sec ±0.51% (98 runs sampled)
functional-red-black-tree x 5,122 ops/sec ±0.79% (96 runs sampled)
es6 map x 2,940 ops/sec ±0.26% (98 runs sampled)
Fastest is functional-red-black-tree
```

### remove

```bash
js-sdsl x 38,895 ops/sec ±0.54% (99 runs sampled)
bintrees x 22,447 ops/sec ±0.31% (100 runs sampled)
functional-red-black-tree x 11,508 ops/sec ±0.56% (99 runs sampled)
es6 map x 10,855 ops/sec ±0.42% (98 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 17,518,291 ops/sec ±0.88% (94 runs sampled)
bintrees x 11,858,129 ops/sec ±0.17% (98 runs sampled)
functional-red-black-tree x 32,697,149 ops/sec ±0.11% (99 runs sampled)
Fastest is functional-red-black-tree
```
