import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 1000;
  const orderedMap = new OrderedMap<number, number>(undefined, undefined, true);
  let functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  for (let i = 0; i < l; ++i) {
    orderedMap.setElement(i, i);
    functionalRedBlackTree = functionalRedBlackTree.insert(i, i);
  }
  const suite = new Benchmark.Suite();
  const orderedMapIter = orderedMap.lowerBound(l >> 1);
  const functionalRedBlackTreeIter = functionalRedBlackTree.ge(l >> 1);
  suite.add('js-sdsl', function () {
    return orderedMapIter.index;
  }).add('functional-red-black-tree', function () {
    return functionalRedBlackTreeIter.index;
  });
  return await new Promise<string>(resolve => run(suite, 'index', resolve));
}
