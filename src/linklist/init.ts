import { LinkList } from 'js-sdsl';
import Yallist from 'yallist';
import Benchmark from 'benchmark';
import run from '../utils/run';

export default async function () {
  const l = 1000;
  const arr = new Array(l).fill(1);
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    // eslint-disable-next-line no-new
    new LinkList(arr);
  }).add('yallist', function () {
    // eslint-disable-next-line no-new
    new Yallist(arr);
  });
  return await new Promise(
    resolve => run(suite, 'init', resolve)
  );
}
