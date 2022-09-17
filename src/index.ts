import env from './utils/env';
import dequeTest from './deque';
import rbTreeTest from './rbTree';
import heapTest from './heap';
import saveResult from './utils/saveResult';

const NODE_ENV = process.env.NODE_ENV;

async function main(input: string[]) {
  let content;
  if (input.length === 0) {
    content = await Promise.all([
      env(),
      // heapTest(),
      dequeTest()
      // rbTreeTest()
    ]);
  } else {
    content = await Promise.all([
      env(),
      input.includes('heap') ? heapTest() : '',
      input.includes('deque') ? dequeTest() : '',
      input.includes('rbTree') ? rbTreeTest() : ''
    ]);
  }
  content = content.filter(x => x !== '').join('\n');
  if (NODE_ENV === 'development') {
    console.log(content);
  } else {
    console.info('saving result...');
    await saveResult(content);
    console.info('saved!');
  }
}

main(process.argv.slice(2));
