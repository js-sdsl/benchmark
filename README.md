This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 25,415 ops/sec ±1.42% (85 runs sampled)
heap x 8,505 ops/sec ±1.25% (88 runs sampled)
heap-js x 1,890 ops/sec ±2.61% (82 runs sampled)
mnemonist x 6,209 ops/sec ±1.70% (87 runs sampled)
typescript-collections x 967 ops/sec ±1.06% (88 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 51,649 ops/sec ±0.59% (90 runs sampled)
heap x 36,584 ops/sec ±1.32% (88 runs sampled)
heap-js x 16,389 ops/sec ±0.77% (90 runs sampled)
mnemonist x 39,403 ops/sec ±0.69% (93 runs sampled)
typescript-collections x 6,590 ops/sec ±0.64% (92 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 12,168 ops/sec ±0.78% (91 runs sampled)
heap x 5,550 ops/sec ±1.08% (90 runs sampled)
heap-js x 2,238 ops/sec ±1.29% (87 runs sampled)
mnemonist x 6,008 ops/sec ±1.12% (90 runs sampled)
typescript-collections x 481 ops/sec ±1.06% (87 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 183,746,311 ops/sec ±0.74% (92 runs sampled)
heap x 177,009,797 ops/sec ±1.16% (87 runs sampled)
heap-js x 11,984,233 ops/sec ±103.26% (87 runs sampled)
mnemonist x 150,191,573 ops/sec ±1.15% (89 runs sampled)
typescript-collections x 175,770,958 ops/sec ±1.37% (89 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 2,454 ops/sec ±0.80% (90 runs sampled)
denque x 3,048 ops/sec ±1.34% (85 runs sampled)
double-ended-queue x 1,668 ops/sec ±0.77% (88 runs sampled)
Js-Array-Push-Back x 16,563 ops/sec ±1.17% (89 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 70,606,983 ops/sec ±0.74% (90 runs sampled)
denque x 127,169,295 ops/sec ±1.01% (91 runs sampled)
double-ended-queue x 671,369,799 ops/sec ±0.81% (89 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,389 ops/sec ±9.73% (87 runs sampled)
bintree x 4,592 ops/sec ±1.32% (90 runs sampled)
functional-red-black-tree x 1,879 ops/sec ±0.91% (88 runs sampled)
es6-map x 14,712 ops/sec ±1.00% (89 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 188,105 ops/sec ±1.30% (87 runs sampled)
bintrees x 95,167 ops/sec ±0.66% (90 runs sampled)
functional-red-black-tree x 40,281 ops/sec ±1.28% (89 runs sampled)
es6-map x 55,170 ops/sec ±0.60% (88 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 14,766,702 ops/sec ±1.09% (88 runs sampled)
bintrees x 4,925,695 ops/sec ±0.84% (89 runs sampled)
functional-red-black-tree x 5,346,138 ops/sec ±0.92% (89 runs sampled)
Fastest is js-sdsl
```
