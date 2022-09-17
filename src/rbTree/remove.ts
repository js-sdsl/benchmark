import BinTree from 'bintrees';
import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 1000;
  const arr: number[] = [];
  const map = new Map();
  const binTree = new BinTree.RBTree((x: number, y: number) => x - y);
  const orderedMap = new OrderedMap<number, number>();
  let functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  for (let i = 0; i < l; ++i) {
    const random = Math.random() * l;
    arr.push(random);
    map.set(random, i);
    binTree.insert(random);
    orderedMap.setElement(random, i);
    functionalRedBlackTree = functionalRedBlackTree.insert(random, i);
  }
  for (let i = 0; i < l; ++i) {
    const a = Math.floor(Math.random() * l);
    const b = Math.floor(a + Math.random() * (l - a));
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  const suite = new Benchmark.Suite();
  let a = 0; let b = 0; let c = 0; let d = 0;
  suite.add('js-sdsl', function () {
    orderedMap.eraseElementByKey(arr[a]);
    orderedMap.setElement(arr[a], arr[a]);
    a = (a + 1) % l;
  }).add('bintrees', function () {
    binTree.remove(arr[b]);
    binTree.insert(arr[b]);
    b = (b + 1) % l;
  }).add('functional-red-black-tree', function () {
    functionalRedBlackTree = functionalRedBlackTree.remove(arr[c]);
    functionalRedBlackTree = functionalRedBlackTree.insert(arr[c], arr[c]);
    c = (c + 1) % l;
  }).add('es6-map', function () {
    map.delete(arr[d]);
    map.set(arr[d], arr[d]);
    d = (d + 1) % l;
  });
  return await new Promise<string>(resolve => run(suite, 'remove', resolve));
}
