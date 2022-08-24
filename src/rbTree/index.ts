import insertTest from './insert';
import removeTest from './remove';
import lowerBound from './lowerBound';

export default async function () {
  console.info('rbTree testing...');
  const content = await Promise.all([
    '## RBTree\n',
    insertTest(),
    removeTest(),
    lowerBound()
  ]);
  console.info('rbTree test finished');
  return content.join('\n');
}
