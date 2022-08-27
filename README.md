This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1017-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 25,244 ops/sec ±5.69% (81 runs sampled)
heap x 6,945 ops/sec ±2.67% (86 runs sampled)
heap-js x 1,926 ops/sec ±2.40% (88 runs sampled)
mnemonist x 5,825 ops/sec ±1.07% (94 runs sampled)
typescript-collections x 969 ops/sec ±0.46% (95 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 54,453 ops/sec ±0.64% (93 runs sampled)
heap x 37,870 ops/sec ±0.25% (94 runs sampled)
heap-js x 17,323 ops/sec ±0.36% (96 runs sampled)
mnemonist x 37,691 ops/sec ±0.61% (93 runs sampled)
typescript-collections x 7,411 ops/sec ±0.30% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,789 ops/sec ±0.49% (94 runs sampled)
heap x 5,617 ops/sec ±0.63% (96 runs sampled)
heap-js x 2,292 ops/sec ±0.91% (89 runs sampled)
mnemonist x 6,265 ops/sec ±0.43% (97 runs sampled)
typescript-collections x 555 ops/sec ±0.56% (93 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 161,472,196 ops/sec ±0.32% (98 runs sampled)
heap x 158,443,886 ops/sec ±0.42% (97 runs sampled)
heap-js x 33,246,255 ops/sec ±149.83% (95 runs sampled)
mnemonist x 142,734,564 ops/sec ±0.36% (94 runs sampled)
typescript-collections x 155,400,746 ops/sec ±0.31% (93 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 2,609 ops/sec ±0.30% (96 runs sampled)
denque x 3,555 ops/sec ±1.02% (89 runs sampled)
double-ended-queue x 1,740 ops/sec ±0.42% (95 runs sampled)
Js-Array-Push-Back x 16,691 ops/sec ±1.27% (89 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 81,131,068 ops/sec ±0.73% (96 runs sampled)
denque x 146,213,171 ops/sec ±0.36% (97 runs sampled)
double-ended-queue x 796,474,459 ops/sec ±0.60% (97 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,628 ops/sec ±11.06% (91 runs sampled)
bintree x 4,827 ops/sec ±0.14% (97 runs sampled)
functional-red-black-tree x 2,258 ops/sec ±0.44% (92 runs sampled)
es6-map x 17,076 ops/sec ±0.52% (88 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 200,533 ops/sec ±0.99% (91 runs sampled)
bintrees x 103,780 ops/sec ±3.37% (92 runs sampled)
functional-red-black-tree x 39,081 ops/sec ±1.79% (86 runs sampled)
es6-map x 49,382 ops/sec ±7.61% (93 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 14,733,199 ops/sec ±1.09% (96 runs sampled)
bintrees x 6,321,397 ops/sec ±0.32% (96 runs sampled)
functional-red-black-tree x 5,707,445 ops/sec ±0.73% (94 runs sampled)
Fastest is js-sdsl
```
