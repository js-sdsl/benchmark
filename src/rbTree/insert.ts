import BinTree from 'bintrees';
import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 1000;
  const arr: number[] = [];
  for (let i = 0; i < l; ++i) {
    arr.push(Math.random() * l * l);
  }
  const suite = new Benchmark.Suite();
  const orderedMap = new OrderedMap<number, number>();
  const binTree = new BinTree.RBTree<number>((x: number, y: number) => x - y);
  let functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  const map = new Map();
  suite.add('js-sdsl', function () {
    for (let i = 0; i < l; ++i) {
      orderedMap.setElement(arr[i], i);
    }
    orderedMap.clear();
  }).add('bintree', function () {
    for (let i = 0; i < l; ++i) {
      binTree.insert(arr[i]);
    }
    binTree.clear();
  }).add('functional-red-black-tree', function () {
    for (let i = 0; i < l; ++i) {
      functionalRedBlackTree = functionalRedBlackTree.insert(arr[i], i);
    }
    functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  }).add('es6-map', function () {
    for (let i = 0; i < l; ++i) {
      map.set(arr[i], i);
    }
    map.clear();
  });
  return await new Promise<string>(resolve => run(suite, 'insert', resolve));
}
