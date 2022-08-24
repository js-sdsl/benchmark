import Denque from 'denque';
import { Deque } from 'js-sdsl';
import Benchmark from 'benchmark';
import DoubleEndedQueue from 'double-ended-queue';
import run from '../utils/run';

export default async function () {
  const l = 100000;
  const deque = new Deque();
  const denque = new Denque();
  const doubleEndedQueue = new DoubleEndedQueue();

  for (let i = 0; i < l; ++i) {
    deque.pushFront(i);
    denque.unshift(i);
    doubleEndedQueue.unshift(i);
  }

  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    deque.getElementByPos(l >> 1);
  }).add('denque', function () {
    denque.get(l >> 1);
  }).add('double-ended-queue', function () {
    doubleEndedQueue.get(l >> 1);
  });
  return await new Promise<string>(resolve => run(suite, 'getByPos', resolve));
}
