import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 1000;
  const orderedMap = new OrderedMap<number, number>();
  let functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  for (let i = 0; i < l; ++i) {
    orderedMap.setElement(i, i);
    functionalRedBlackTree = functionalRedBlackTree.insert(i, i);
  }
  const suite = new Benchmark.Suite();
  const end = orderedMap.end();
  suite.add('js-sdsl', function () {
    const iterator = orderedMap.begin();
    while (!iterator.equals(end)) iterator.next();
  }).add('functional-red-black-tree', function () {
    const iterator = functionalRedBlackTree.begin;
    while (iterator.valid) iterator.next();
  });
  return await new Promise<string>(resolve => run(suite, 'iterator', resolve));
}
