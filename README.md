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
js-sdsl x 23,105 ops/sec ±1.12% (89 runs sampled)
heap x 7,482 ops/sec ±0.13% (98 runs sampled)
heap-js x 2,259 ops/sec ±2.87% (85 runs sampled)
mnemonist x 9,329 ops/sec ±0.22% (97 runs sampled)
typescript-collections x 929 ops/sec ±0.11% (97 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 52,408 ops/sec ±0.10% (95 runs sampled)
heap x 36,624 ops/sec ±0.17% (97 runs sampled)
heap-js x 16,648 ops/sec ±0.17% (94 runs sampled)
mnemonist x 37,730 ops/sec ±0.13% (96 runs sampled)
typescript-collections x 6,688 ops/sec ±0.41% (99 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 10,570 ops/sec ±0.16% (93 runs sampled)
heap x 5,495 ops/sec ±0.16% (94 runs sampled)
heap-js x 2,515 ops/sec ±0.74% (92 runs sampled)
mnemonist x 5,880 ops/sec ±0.10% (95 runs sampled)
typescript-collections x 489 ops/sec ±0.12% (94 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 141,866,764 ops/sec ±0.25% (97 runs sampled)
heap x 138,669,663 ops/sec ±0.18% (96 runs sampled)
heap-js x 18,719,933 ops/sec ±117.00% (99 runs sampled)
mnemonist x 140,089,749 ops/sec ±0.13% (95 runs sampled)
typescript-collections x 137,007,937 ops/sec ±0.14% (98 runs sampled)
Fastest is js-sdsl
```

## deque

### push

```bash
js-sdsl x 11,650 ops/sec ±0.74% (93 runs sampled)
denque x 3,119 ops/sec ±0.93% (89 runs sampled)
double-ended-queue x 1,542 ops/sec ±0.37% (94 runs sampled)
Js-Array-Push-Back x 16,825 ops/sec ±0.21% (93 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 77,916,668 ops/sec ±0.60% (92 runs sampled)
denque x 134,854,296 ops/sec ±0.93% (91 runs sampled)
double-ended-queue x 116,510,321 ops/sec ±39.06% (17 runs sampled)
Fastest is denque,double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,300 ops/sec ±8.43% (91 runs sampled)
bintree x 4,426 ops/sec ±0.37% (97 runs sampled)
functional-red-black-tree x 2,260 ops/sec ±0.20% (93 runs sampled)
es6-map x 15,060 ops/sec ±0.39% (96 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 2,334,159 ops/sec ±0.26% (93 runs sampled)
bintrees x 1,061,393 ops/sec ±0.13% (98 runs sampled)
functional-red-black-tree x 764,935 ops/sec ±0.42% (88 runs sampled)
es6-map x 4,553,106 ops/sec ±2.76% (74 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 11,030,438 ops/sec ±0.43% (92 runs sampled)
bintrees x 6,089,316 ops/sec ±1.01% (94 runs sampled)
functional-red-black-tree x 6,002,873 ops/sec ±0.93% (92 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 103,342 ops/sec ±0.11% (99 runs sampled)
functional-red-black-tree x 87,837 ops/sec ±1.16% (99 runs sampled)
Fastest is js-sdsl
```
