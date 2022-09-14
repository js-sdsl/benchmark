import Heap from 'heap';
import { PriorityQueue } from 'js-sdsl';
import Benchmark from 'benchmark';
import run from '../utils/run';
import HeapJs from 'heap-js';
import { MinHeap } from 'mnemonist';
import { PriorityQueue as PriorityQueueCollections } from 'typescript-collections';

export default async function () {
  const l = 10000;
  const arr: number[] = [];
  for (let i = 0; i < l; ++i) arr.push(i);
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    // eslint-disable-next-line no-new
    new PriorityQueue(arr, (x, y) => x - y);
  }).add('heap', function () {
    const heap = new Heap<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      heap.push(arr[i]);
    }
  }).add('heap-js', function () {
    const minHeap = new HeapJs<number>((x, y) => x - y);
    minHeap.init(arr);
  }).add('mnemonist', function () {
    const minHeap = new MinHeap<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      minHeap.push(arr[i]);
    }
  }).add('typescript-collections', function () {
    const minHeap = new PriorityQueueCollections<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      minHeap.add(i);
    }
  });
  return await new Promise(resolve => run(suite, 'init heap in constructor', resolve));
}
