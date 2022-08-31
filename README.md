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
js-sdsl x 25,542 ops/sec ±0.62% (96 runs sampled)
heap x 7,546 ops/sec ±0.35% (95 runs sampled)
heap-js x 2,145 ops/sec ±2.81% (90 runs sampled)
mnemonist x 6,239 ops/sec ±0.22% (97 runs sampled)
typescript-collections x 884 ops/sec ±0.10% (96 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 52,958 ops/sec ±0.10% (96 runs sampled)
heap x 38,016 ops/sec ±0.14% (96 runs sampled)
heap-js x 16,957 ops/sec ±0.47% (94 runs sampled)
mnemonist x 37,578 ops/sec ±0.13% (98 runs sampled)
typescript-collections x 6,728 ops/sec ±0.08% (98 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,829 ops/sec ±0.56% (96 runs sampled)
heap x 5,502 ops/sec ±0.15% (95 runs sampled)
heap-js x 2,583 ops/sec ±0.73% (95 runs sampled)
mnemonist x 6,298 ops/sec ±0.08% (97 runs sampled)
typescript-collections x 494 ops/sec ±0.12% (95 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 141,815,196 ops/sec ±0.13% (97 runs sampled)
heap x 138,319,424 ops/sec ±0.13% (98 runs sampled)
heap-js x 18,021,429 ops/sec ±117.35% (91 runs sampled)
mnemonist x 124,486,254 ops/sec ±0.17% (93 runs sampled)
typescript-collections x 136,545,632 ops/sec ±0.21% (96 runs sampled)
Fastest is js-sdsl
```

## Deque

### push

```bash
js-sdsl x 11,959 ops/sec ±0.66% (93 runs sampled)
denque x 3,187 ops/sec ±0.85% (89 runs sampled)
double-ended-queue x 1,550 ops/sec ±0.33% (96 runs sampled)
Js-Array-Push-Back x 17,215 ops/sec ±0.92% (94 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 78,059,606 ops/sec ±0.56% (93 runs sampled)
denque x 129,114,501 ops/sec ±0.09% (96 runs sampled)
double-ended-queue x 706,103,274 ops/sec ±0.26% (97 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,281 ops/sec ±8.64% (89 runs sampled)
bintree x 4,248 ops/sec ±0.12% (97 runs sampled)
functional-red-black-tree x 2,269 ops/sec ±0.16% (96 runs sampled)
es6-map x 15,492 ops/sec ±0.12% (94 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 181,131 ops/sec ±0.13% (97 runs sampled)
bintrees x 103,577 ops/sec ±0.09% (94 runs sampled)
functional-red-black-tree x 43,178 ops/sec ±0.32% (90 runs sampled)
es6-map x 54,064 ops/sec ±0.15% (94 runs sampled)
Fastest is js-sdsl
```

### lowerBound

```bash
js-sdsl x 9,752,199 ops/sec ±0.53% (93 runs sampled)
bintrees x 5,121,695 ops/sec ±0.97% (95 runs sampled)
functional-red-black-tree x 5,608,574 ops/sec ±0.29% (94 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 227,542 ops/sec ±0.55% (99 runs sampled)
functional-red-black-tree x 163,778 ops/sec ±1.00% (96 runs sampled)
Fastest is js-sdsl
```
