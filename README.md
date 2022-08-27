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
js-sdsl x 23,720 ops/sec ±1.25% (84 runs sampled)
heap x 7,984 ops/sec ±1.39% (85 runs sampled)
heap-js x 1,729 ops/sec ±2.55% (80 runs sampled)
mnemonist x 5,730 ops/sec ±1.80% (84 runs sampled)
typescript-collections x 938 ops/sec ±0.96% (88 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 48,724 ops/sec ±1.22% (87 runs sampled)
heap x 35,488 ops/sec ±0.91% (87 runs sampled)
heap-js x 15,697 ops/sec ±1.08% (87 runs sampled)
mnemonist x 36,494 ops/sec ±1.46% (87 runs sampled)
typescript-collections x 6,169 ops/sec ±1.17% (89 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 9,872 ops/sec ±2.00% (82 runs sampled)
heap x 5,185 ops/sec ±1.74% (85 runs sampled)
heap-js x 2,048 ops/sec ±1.52% (81 runs sampled)
mnemonist x 5,559 ops/sec ±1.29% (85 runs sampled)
typescript-collections x 449 ops/sec ±1.22% (85 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 172,054,032 ops/sec ±1.15% (89 runs sampled)
heap x 170,659,700 ops/sec ±1.14% (88 runs sampled)
heap-js x 17,534,302 ops/sec ±120.83% (88 runs sampled)
mnemonist x 141,222,494 ops/sec ±0.94% (90 runs sampled)
typescript-collections x 162,370,236 ops/sec ±1.64% (87 runs sampled)
Fastest is js-sdsl,heap
```

## Deque

### push

```bash
js-sdsl x 2,287 ops/sec ±1.40% (85 runs sampled)
denque x 2,769 ops/sec ±1.85% (84 runs sampled)
double-ended-queue x 1,555 ops/sec ±1.23% (85 runs sampled)
Js-Array-Push-Back x 15,038 ops/sec ±1.60% (85 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 67,110,450 ops/sec ±1.18% (89 runs sampled)
denque x 129,690,416 ops/sec ±0.89% (88 runs sampled)
double-ended-queue x 649,572,272 ops/sec ±1.36% (88 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,005 ops/sec ±9.79% (82 runs sampled)
bintree x 4,107 ops/sec ±1.52% (84 runs sampled)
functional-red-black-tree x 1,650 ops/sec ±1.24% (87 runs sampled)
es6-map x 13,410 ops/sec ±1.07% (88 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 168,219 ops/sec ±1.31% (84 runs sampled)
bintrees x 86,321 ops/sec ±1.12% (86 runs sampled)
functional-red-black-tree x 36,254 ops/sec ±1.48% (88 runs sampled)
es6-map x 52,506 ops/sec ±1.35% (89 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 15,256,403 ops/sec ±1.49% (83 runs sampled)
bintrees x 4,723,561 ops/sec ±1.08% (89 runs sampled)
functional-red-black-tree x 4,987,595 ops/sec ±1.71% (90 runs sampled)
Fastest is js-sdsl
```
