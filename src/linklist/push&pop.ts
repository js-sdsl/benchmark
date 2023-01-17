import { LinkList } from 'js-sdsl';
import Yallist from 'yallist';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const arr = new Array(1000).fill(1);
  const linklist = new LinkList(arr);
  const yallist = new Yallist(arr);
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    linklist.pushFront(1);
    return linklist.popBack();
  }).add('yallist', function () {
    yallist.unshift(1);
    return yallist.pop();
  });
  return await new Promise(
    resolve => run(suite, 'push&pop', resolve)
  );
}
