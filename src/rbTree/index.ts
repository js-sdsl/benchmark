import insertTest from './insert';
import removeTest from './remove';
import lowerBoundTest from './lowerBound';
import iteratorTest from './iterator';

export default async function () {
  console.info('rbTree testing...');
  const content = await Promise.all([
    '## RBTree\n',
    insertTest(),
    removeTest(),
    lowerBoundTest(),
    iteratorTest()
  ]);
  console.info('rbTree test finished');
  return content.join('\n');
}
