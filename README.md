This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 31,598 ops/sec ±0.47% (90 runs sampled)
heap x 9,989 ops/sec ±0.34% (94 runs sampled)
heap-js x 2,412 ops/sec ±2.65% (88 runs sampled)
mnemonist x 6,784 ops/sec ±0.35% (98 runs sampled)
typescript-collections x 774 ops/sec ±0.09% (95 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 60,026 ops/sec ±0.08% (98 runs sampled)
heap x 42,828 ops/sec ±0.52% (89 runs sampled)
heap-js x 20,464 ops/sec ±0.12% (96 runs sampled)
mnemonist x 43,678 ops/sec ±0.11% (93 runs sampled)
typescript-collections x 7,544 ops/sec ±0.28% (99 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 14,422 ops/sec ±0.44% (95 runs sampled)
heap x 6,716 ops/sec ±0.20% (98 runs sampled)
heap-js x 3,150 ops/sec ±0.93% (89 runs sampled)
mnemonist x 7,525 ops/sec ±0.06% (97 runs sampled)
typescript-collections x 580 ops/sec ±0.09% (94 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 113,455,727 ops/sec ±0.17% (94 runs sampled)
heap x 109,978,494 ops/sec ±0.14% (92 runs sampled)
heap-js x 21,036,527 ops/sec ±108.33% (93 runs sampled)
mnemonist x 97,111,572 ops/sec ±0.10% (93 runs sampled)
typescript-collections x 109,476,092 ops/sec ±0.08% (95 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 2,809 ops/sec ±0.42% (95 runs sampled)
denque x 3,500 ops/sec ±0.66% (92 runs sampled)
double-ended-queue x 2,014 ops/sec ±0.28% (95 runs sampled)
Js-Array-Push-Back x 16,299 ops/sec ±0.70% (96 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 111,047,222 ops/sec ±0.12% (93 runs sampled)
denque x 115,636,665 ops/sec ±0.13% (93 runs sampled)
double-ended-queue x 593,131,634 ops/sec ±0.18% (92 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 7,206 ops/sec ±9.51% (88 runs sampled)
bintree x 4,951 ops/sec ±0.34% (95 runs sampled)
functional-red-black-tree x 2,737 ops/sec ±0.17% (96 runs sampled)
es6-map x 19,356 ops/sec ±0.21% (97 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 254,585 ops/sec ±0.21% (97 runs sampled)
bintrees x 126,530 ops/sec ±0.17% (98 runs sampled)
functional-red-black-tree x 51,174 ops/sec ±1.61% (94 runs sampled)
es6-map x 64,111 ops/sec ±0.22% (93 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 15,139,005 ops/sec ±0.92% (95 runs sampled)
bintrees x 4,993,001 ops/sec ±0.49% (93 runs sampled)
functional-red-black-tree x 5,777,756 ops/sec ±0.85% (94 runs sampled)
Fastest is js-sdsl
```
