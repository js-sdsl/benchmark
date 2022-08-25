This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 20,765 ops/sec ±0.99% (88 runs sampled)
heap x 6,441 ops/sec ±0.34% (95 runs sampled)
heap-js x 1,725 ops/sec ±2.56% (86 runs sampled)
mnemonist x 5,312 ops/sec ±0.94% (93 runs sampled)
typescript-collections x 748 ops/sec ±0.19% (93 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 46,691 ops/sec ±0.18% (93 runs sampled)
heap x 33,179 ops/sec ±0.22% (94 runs sampled)
heap-js x 14,620 ops/sec ±0.44% (94 runs sampled)
mnemonist x 32,497 ops/sec ±0.16% (90 runs sampled)
typescript-collections x 5,550 ops/sec ±0.10% (95 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,235 ops/sec ±0.16% (93 runs sampled)
heap x 4,584 ops/sec ±0.47% (94 runs sampled)
heap-js x 2,309 ops/sec ±0.89% (91 runs sampled)
mnemonist x 5,048 ops/sec ±0.12% (96 runs sampled)
typescript-collections x 415 ops/sec ±0.39% (90 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 117,712,838 ops/sec ±0.17% (97 runs sampled)
heap x 114,047,523 ops/sec ±0.54% (92 runs sampled)
heap-js x 16,645,004 ops/sec ±114.44% (96 runs sampled)
mnemonist x 97,690,637 ops/sec ±1.27% (93 runs sampled)
typescript-collections x 109,673,925 ops/sec ±0.40% (94 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 9,654 ops/sec ±0.21% (96 runs sampled)
denque x 2,661 ops/sec ±1.00% (91 runs sampled)
double-ended-queue x 1,302 ops/sec ±0.65% (91 runs sampled)
Js-Array-Push-Back x 14,970 ops/sec ±1.17% (93 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 57,786,146 ops/sec ±0.55% (90 runs sampled)
denque x 106,665,457 ops/sec ±0.26% (98 runs sampled)
double-ended-queue x 586,640,575 ops/sec ±0.20% (92 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 321 ops/sec ±6.26% (60 runs sampled)
bintree x 358 ops/sec ±0.24% (89 runs sampled)
functional-red-black-tree x 1,737 ops/sec ±1.28% (92 runs sampled)
es6 map x 1,243 ops/sec ±0.86% (92 runs sampled)
Fastest is functional-red-black-tree
```

### remove

```bash
js-sdsl x 15,064 ops/sec ±0.78% (89 runs sampled)
bintrees x 9,392 ops/sec ±0.16% (92 runs sampled)
functional-red-black-tree x 5,159 ops/sec ±0.39% (93 runs sampled)
es6 map x 4,534 ops/sec ±0.55% (96 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 6,003,766 ops/sec ±0.24% (96 runs sampled)
bintrees x 4,969,478 ops/sec ±0.91% (92 runs sampled)
functional-red-black-tree x 12,398,293 ops/sec ±0.65% (94 runs sampled)
Fastest is functional-red-black-tree
```
