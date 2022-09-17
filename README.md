This is Js-sdsl benchmark. To get source code you can go to [github](https://github.com/js-sdsl/benchmark).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz × 2
```

## heap

### init heap in constructor

```bash
js-sdsl x 27,470 ops/sec ±0.90% (89 runs sampled)
heap x 8,667 ops/sec ±0.99% (85 runs sampled)
heap-js x 2,726 ops/sec ±2.32% (88 runs sampled)
mnemonist x 8,933 ops/sec ±1.42% (80 runs sampled)
typescript-collections x 1,067 ops/sec ±0.63% (92 runs sampled)
Fastest is js-sdsl
```

### init heap in constructor when copy is false

```bash
js-sdsl x 55,048 ops/sec ±0.87% (93 runs sampled)
heap x 38,846 ops/sec ±1.12% (88 runs sampled)
heap-js x 17,432 ops/sec ±1.32% (93 runs sampled)
mnemonist x 41,608 ops/sec ±0.93% (91 runs sampled)
typescript-collections x 6,744 ops/sec ±0.99% (93 runs sampled)
Fastest is js-sdsl
```

### push

```bash
js-sdsl x 12,933 ops/sec ±1.42% (89 runs sampled)
heap x 5,944 ops/sec ±1.20% (90 runs sampled)
heap-js x 2,479 ops/sec ±1.08% (92 runs sampled)
mnemonist x 6,506 ops/sec ±0.62% (94 runs sampled)
typescript-collections x 497 ops/sec ±0.98% (88 runs sampled)
Fastest is js-sdsl
```

### pop

```bash
js-sdsl x 194,431,992 ops/sec ±0.84% (93 runs sampled)
heap x 156,059,630 ops/sec ±1.10% (91 runs sampled)
heap-js x 18,762,027 ops/sec ±122.62% (88 runs sampled)
mnemonist x 195,493,145 ops/sec ±0.53% (96 runs sampled)
typescript-collections x 69,455,290 ops/sec ±2.70% (81 runs sampled)
Fastest is mnemonist,js-sdsl
```

## deque

### push

```bash
js-sdsl x 15,448 ops/sec ±1.03% (89 runs sampled)
denque x 3,176 ops/sec ±1.09% (88 runs sampled)
double-ended-queue x 1,704 ops/sec ±0.97% (91 runs sampled)
Js-Array-Push-Back x 17,365 ops/sec ±2.02% (89 runs sampled)
Fastest is Js-Array-Push-Back
```

### getByPos

```bash
js-sdsl x 73,052,930 ops/sec ±1.01% (94 runs sampled)
denque x 139,730,061 ops/sec ±1.15% (95 runs sampled)
double-ended-queue x 707,289,236 ops/sec ±0.91% (92 runs sampled)
Fastest is double-ended-queue
```

## RBTree

### insert

```bash
js-sdsl x 5,594 ops/sec ±10.54% (80 runs sampled)
bintree x 4,877 ops/sec ±0.73% (94 runs sampled)
functional-red-black-tree x 2,085 ops/sec ±1.03% (92 runs sampled)
es6-map x 15,574 ops/sec ±1.16% (94 runs sampled)
Fastest is es6-map
```

### remove

```bash
js-sdsl x 2,407,810 ops/sec ±0.71% (92 runs sampled)
bintrees x 1,105,532 ops/sec ±0.62% (91 runs sampled)
functional-red-black-tree x 632,591 ops/sec ±1.30% (89 runs sampled)
es6-map x 4,679,483 ops/sec ±3.80% (69 runs sampled)
Fastest is es6-map
```

### lowerBound

```bash
js-sdsl x 11,279,430 ops/sec ±1.43% (90 runs sampled)
bintrees x 5,210,164 ops/sec ±0.77% (92 runs sampled)
functional-red-black-tree x 5,038,228 ops/sec ±1.60% (92 runs sampled)
Fastest is js-sdsl
```

### iterator

```bash
js-sdsl x 112,969 ops/sec ±2.37% (92 runs sampled)
functional-red-black-tree x 106,769 ops/sec ±0.91% (94 runs sampled)
Fastest is js-sdsl
```
