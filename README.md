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
js-sdsl x 27,414 ops/sec ±0.83% (89 runs sampled)
heap x 9,867 ops/sec ±0.35% (98 runs sampled)
heap-js x 2,283 ops/sec ±2.50% (86 runs sampled)
mnemonist x 6,537 ops/sec ±0.31% (93 runs sampled)
typescript-collections x 772 ops/sec ±0.22% (94 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 58,437 ops/sec ±0.23% (95 runs sampled)
heap x 41,304 ops/sec ±0.27% (95 runs sampled)
heap-js x 19,348 ops/sec ±0.42% (96 runs sampled)
mnemonist x 42,512 ops/sec ±0.26% (96 runs sampled)
typescript-collections x 7,526 ops/sec ±0.18% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 13,438 ops/sec ±0.58% (92 runs sampled)
heap x 6,559 ops/sec ±0.21% (95 runs sampled)
heap-js x 2,823 ops/sec ±0.93% (89 runs sampled)
mnemonist x 7,190 ops/sec ±0.55% (95 runs sampled)
typescript-collections x 580 ops/sec ±0.60% (91 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 113,362,240 ops/sec ±0.29% (91 runs sampled)
heap x 109,660,120 ops/sec ±0.16% (93 runs sampled)
heap-js x 20,460,372 ops/sec ±109.04% (93 runs sampled)
mnemonist x 97,200,107 ops/sec ±0.21% (93 runs sampled)
typescript-collections x 109,170,192 ops/sec ±0.09% (94 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 14,478 ops/sec ±0.77% (93 runs sampled)
denque x 3,589 ops/sec ±0.83% (92 runs sampled)
double-ended-queue x 2,004 ops/sec ±0.32% (93 runs sampled)
Js-Array-Push-Back x 15,301 ops/sec ±0.77% (94 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 110,941,164 ops/sec ±0.16% (94 runs sampled)
denque x 115,729,293 ops/sec ±0.24% (94 runs sampled)
double-ended-queue x 592,626,772 ops/sec ±0.09% (97 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 7,578 ops/sec ±9.49% (90 runs sampled)
bintree x 5,344 ops/sec ±0.15% (97 runs sampled)
functional-red-black-tree x 2,573 ops/sec ±0.98% (92 runs sampled)
es6-map x 19,728 ops/sec ±0.18% (98 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 244,079 ops/sec ±0.37% (92 runs sampled)
bintrees x 121,175 ops/sec ±0.17% (96 runs sampled)
functional-red-black-tree x 47,821 ops/sec ±0.68% (92 runs sampled)
es6-map x 64,498 ops/sec ±0.11% (97 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 11,798,835 ops/sec ±0.49% (93 runs sampled)
bintrees x 5,155,332 ops/sec ±0.83% (93 runs sampled)
functional-red-black-tree x 6,210,016 ops/sec ±0.22% (96 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 254,133 ops/sec ±1.40% (98 runs sampled)
functional-red-black-tree x 225,536 ops/sec ±0.16% (96 runs sampled)
Fastest is js-sdsl
```
