import env from './utils/env';
import dequeTest from './deque';
import rbTreeTest from './rbTree';
import heapTest from './heap';
import saveResult from './utils/saveResult';

async function main(input: string[]) {
  let content;
  if (input.length) {
    content = await Promise.all([
      env(),
      input.includes('heap') ? heapTest() : '',
      input.includes('deque') ? dequeTest() : '',
      input.includes('rbTree') ? rbTreeTest() : ''
    ]);
  } else {
    content = await Promise.all([
      env(),
      input.includes('heap') ? heapTest() : '',
      input.includes('deque') ? dequeTest() : '',
      input.includes('rbTree') ? rbTreeTest() : ''
    ]);
  }
  console.info('saving result...');
  await saveResult(content.filter(x => x !== '').join('\n'));
  console.info('saved!');
}

main(process.argv.slice(2));
