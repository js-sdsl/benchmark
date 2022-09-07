This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 22,310 ops/sec ±1.02% (90 runs sampled)
heap x 7,423 ops/sec ±0.36% (96 runs sampled)
heap-js x 1,949 ops/sec ±2.50% (88 runs sampled)
mnemonist x 6,028 ops/sec ±0.22% (97 runs sampled)
typescript-collections x 880 ops/sec ±0.21% (96 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 52,332 ops/sec ±0.10% (97 runs sampled)
heap x 37,134 ops/sec ±0.13% (94 runs sampled)
heap-js x 16,303 ops/sec ±0.47% (92 runs sampled)
mnemonist x 36,876 ops/sec ±0.55% (89 runs sampled)
typescript-collections x 6,685 ops/sec ±0.08% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,669 ops/sec ±0.58% (95 runs sampled)
heap x 5,540 ops/sec ±0.08% (98 runs sampled)
heap-js x 2,500 ops/sec ±0.25% (97 runs sampled)
mnemonist x 6,117 ops/sec ±0.53% (97 runs sampled)
typescript-collections x 488 ops/sec ±0.17% (94 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 141,931,099 ops/sec ±0.08% (98 runs sampled)
heap x 136,948,528 ops/sec ±0.38% (97 runs sampled)
heap-js x 19,508,162 ops/sec ±115.84% (98 runs sampled)
mnemonist x 124,365,053 ops/sec ±0.15% (91 runs sampled)
typescript-collections x 136,919,252 ops/sec ±0.13% (96 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 11,855 ops/sec ±0.70% (95 runs sampled)
denque x 3,151 ops/sec ±0.63% (90 runs sampled)
double-ended-queue x 1,541 ops/sec ±0.33% (94 runs sampled)
Js-Array-Push-Back x 17,250 ops/sec ±0.16% (96 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 78,011,346 ops/sec ±0.61% (96 runs sampled)
denque x 132,341,179 ops/sec ±0.81% (90 runs sampled)
double-ended-queue x 379,762,819 ops/sec ±35.29% (53 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,627 ops/sec ±8.20% (87 runs sampled)
bintree x 4,448 ops/sec ±0.12% (97 runs sampled)
functional-red-black-tree x 2,084 ops/sec ±0.74% (91 runs sampled)
es6-map x 15,031 ops/sec ±0.13% (97 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 179,632 ops/sec ±0.31% (92 runs sampled)
bintrees x 109,986 ops/sec ±0.16% (98 runs sampled)
functional-red-black-tree x 38,420 ops/sec ±0.23% (94 runs sampled)
es6-map x 53,744 ops/sec ±0.21% (97 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 9,223,616 ops/sec ±0.40% (96 runs sampled)
bintrees x 5,011,693 ops/sec ±0.87% (93 runs sampled)
functional-red-black-tree x 5,156,555 ops/sec ±0.23% (95 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 226,194 ops/sec ±1.14% (92 runs sampled)
functional-red-black-tree x 164,439 ops/sec ±0.10% (99 runs sampled)
Fastest is js-sdsl
```
