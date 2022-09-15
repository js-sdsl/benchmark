import getTest from './get';
import pushTest from './push';

export default async function () {
  console.info('deque testing...');
  const content = await Promise.all([
    '## deque\n',
    pushTest(),
    getTest()
  ]);
  console.info('deque test finished.');
  return content.join('\n');
}
