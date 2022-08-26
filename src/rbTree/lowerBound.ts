import BinTree from 'bintrees';
import { OrderedMap } from 'js-sdsl';
import FunctionalRedBlackTree from 'functional-red-black-tree';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 10000;
  const binTree = new BinTree.RBTree((x: number, y: number) => x - y);
  const orderedMap = new OrderedMap<number, number>();
  let functionalRedBlackTree = FunctionalRedBlackTree<number, number>();
  for (let i = 0; i < l; ++i) {
    const random = Math.random() * l;
    binTree.insert(random);
    orderedMap.setElement(random, i);
    functionalRedBlackTree = functionalRedBlackTree.insert(random, i);
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    orderedMap.lowerBound(l << 1);
  }).add('bintrees', function () {
    binTree.lowerBound(l << 1);
  }).add('functional-red-black-tree', function () {
    functionalRedBlackTree.ge(l << 1);
  });
  return await new Promise<string>(resolve => run(suite, 'lowerBound', resolve));
}
