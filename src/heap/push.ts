import Heap from 'heap';
import { PriorityQueue } from 'js-sdsl';
import Benchmark from 'benchmark';
import run from '../utils/run';
import HeapJs from 'heap-js';
import { MinHeap } from 'mnemonist';
import { PriorityQueue as PriorityQueueCollections } from 'typescript-collections';

export default async function () {
  const l = 10000;
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    const priorityQueue = new PriorityQueue<number>(undefined, (x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      priorityQueue.push(i);
    }
  }).add('heap', function () {
    const heap = new Heap<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      heap.push(i);
    }
  }).add('heap-js', function () {
    const minHeap = new HeapJs<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      minHeap.push(i);
    }
  }).add('mnemonist', function () {
    const minHeap = new MinHeap<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      minHeap.push(i);
    }
  }).add('typescript-collections', function () {
    const minHeap = new PriorityQueueCollections<number>((x, y) => x - y);
    for (let i = 0; i < l; ++i) {
      minHeap.add(i);
    }
  });
  return await new Promise(resolve => run(suite, 'push', resolve));
}
