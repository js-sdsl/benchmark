import Denque from 'denque';
import { Deque } from 'js-sdsl';
import Benchmark from 'benchmark';
import DoubleEndedQueue from 'double-ended-queue';
import run from '../utils/run';

export default async function () {
  const l = 10000;
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    const deque = new Deque();
    for (let i = 0; i < l; ++i) {
      deque.pushFront(i);
    }
    deque.clear();
  }).add('denque', function () {
    const denque = new Denque();
    for (let i = 0; i < l; ++i) {
      denque.unshift(i);
    }
    denque.clear();
  }).add('double-ended-queue', function () {
    const doubleEndedQueue = new DoubleEndedQueue();
    for (let i = 0; i < l; ++i) {
      doubleEndedQueue.unshift(i);
    }
    doubleEndedQueue.clear();
  }).add('Js-Array-Push-Back', function () {
    const arr = [];
    for (let i = 0; i < l; ++i) {
      arr.push(i);
    }
    arr.length = 0;
  });
  return await new Promise<string>(resolve => run(suite, 'push', resolve));
}
