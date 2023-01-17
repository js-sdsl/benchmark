import env from './utils/env';
import dequeTest from './deque';
import rbTreeTest from './rbTree';
import heapTest from './heap';
import hashTableTest from './hash-table';
import saveResult from './utils/saveResult';
import linklistTest from './linklist';

const testMap: Record<string, () => Promise<string>> = {
  heap: heapTest,
  deque: dequeTest,
  linklist: linklistTest,
  rbTree: rbTreeTest,
  'hash-table': hashTableTest
};

async function main(input: string[]) {
  if (input.length === 0) {
    input = Object.keys(testMap);
  }
  const testQueue: (Promise<string> | string)[] = [env()];
  for (const str of input) {
    testQueue.push(testMap[str]());
  }
  const content = (await Promise.all(testQueue)).join('\n');
  console.log(content);
  if (process.env.NODE_ENV === 'production') {
    console.info('saving result...');
    await saveResult(content);
    console.info('saved!');
  }
}

main(process.argv.slice(2));
