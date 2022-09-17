import Heap from 'heap';
import { PriorityQueue } from 'js-sdsl';
import Benchmark from 'benchmark';
import run from '../utils/run';
import HeapJs from 'heap-js';
import { MinHeap } from 'mnemonist';
import { PriorityQueue as PriorityQueueCollections } from 'typescript-collections';

export default async function () {
  const heap = new Heap<number>((x, y) => x - y);
  const minHeap = new HeapJs<number>((x, y) => x - y);
  const mnemonistHeap = new MinHeap<number>((x, y) => x - y);
  const priorityQueue = new PriorityQueue<number>(undefined, (x, y) => x - y);
  const priorityQueueCollections = new PriorityQueueCollections<number>((x, y) => x - y);
  const l = 100000;
  for (let i = 0; i < l; ++i) {
    heap.push(i);
    minHeap.push(i);
    mnemonistHeap.push(i);
    priorityQueue.push(i);
    priorityQueueCollections.add(i);
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    priorityQueue.pop();
  }).add('heap', function () {
    heap.pop();
  }).add('heap-js', function () {
    minHeap.pop();
  }).add('mnemonist', function () {
    mnemonistHeap.pop();
  }).add('typescript-collections', function () {
    priorityQueueCollections.dequeue();
  });
  return await new Promise(resolve => run(suite, 'pop', resolve));
}
