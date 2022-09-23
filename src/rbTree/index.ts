import insertTest from './insert';
import removeTest from './remove';
import lowerBoundTest from './lowerBound';
import iteratorTest from './iterator';
import IndexTest from './treeIndex';

export default async function () {
  console.info('rbTree testing...');
  const content = await Promise.all([
    '## RBTree\n',
    insertTest(),
    removeTest(),
    lowerBoundTest(),
    iteratorTest(),
    IndexTest()
  ]);
  console.info('rbTree test finished');
  return content.join('\n');
}
