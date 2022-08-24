import BinTree from 'bintrees';
import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 10000;
  const arr: number[] = [];
  const map = new Map();
  const binTree = new BinTree.RBTree((x: number, y: number) => x - y);
  const orderedMap = new OrderedMap<number, number>();
  const functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  for (let i = 0; i < l; ++i) {
    const random = Math.random() * l;
    arr.push(random);
    map.set(random, i);
    binTree.insert(random);
    orderedMap.setElement(random, i);
    functionalRedBlackTree.insert(random, i);
  }
  for (let i = 0; i < l; ++i) {
    const a = Math.floor(Math.random() * l);
    const b = Math.floor(a + Math.random() * (l - a));
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    for (const a of arr) {
      orderedMap.eraseElementByKey(a);
    }
  }).add('bintrees', function () {
    for (const a of arr) {
      binTree.remove(a);
    }
  }).add('functional-red-black-tree', function () {
    for (const a of arr) {
      functionalRedBlackTree.remove(a);
    }
  }).add('es6 map', function () {
    for (const a of arr) {
      map.delete(a);
    }
  });
  return await new Promise<string>(resolve => run(suite, 'remove', resolve));
}
