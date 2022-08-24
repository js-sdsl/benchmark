import BinTree from 'bintrees';
import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 10000;
  const arr: number[] = [];
  for (let i = 0; i < l; ++i) {
    arr.push(Math.floor(Math.random() * l));
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    const orderedMap = new OrderedMap<number, number>();
    for (let i = 0; i < l; ++i) {
      orderedMap.setElement(arr[i], i);
    }
  }).add('bintree', function () {
    const binTree = new BinTree.RBTree<number>((x: number, y: number) => x - y);
    for (let i = 0; i < l; ++i) {
      binTree.insert(arr[i]);
    }
  }).add('functional-red-black-tree', function () {
    const functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
    for (let i = 0; i < l; ++i) {
      functionalRedBlackTree.insert(arr[i], i);
    }
  }).add('es6 map', function () {
    const map = new Map();
    for (let i = 0; i < l; ++i) {
      map.set(arr[i], i);
    }
  });
  return await new Promise<string>(resolve => run(suite, 'insert', resolve));
}
