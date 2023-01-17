import { LinkList } from 'js-sdsl';
import Yallist from 'yallist';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const linklist = new LinkList();
  const yallist = new Yallist();
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    return linklist.pushBack(1);
  }).add('yallist', function () {
    return yallist.push(1);
  });
  return await new Promise(
    resolve => run(suite, 'push', resolve)
  );
}
