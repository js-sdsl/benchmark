import testPush from './push';
import testPop from './pop';
import testInit from './init';

export default async function () {
  console.info('heap testing...');
  const content = await Promise.all([
    '## heap\n',
    testInit(),
    testPush(),
    testPop()
  ]);
  console.log('heap test finished!');
  return content.join('\n');
}
