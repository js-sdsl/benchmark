import testPush from './push';
import testPop from './pop';
import testInit from './init';
import testCopyFalse from './copyFalse';

export default async function () {
  console.info('heap testing...');
  const content = await Promise.all([
    '## heap\n',
    testInit(),
    testCopyFalse(),
    testPush(),
    testPop()
  ]);
  console.log('heap test finished!');
  return content.join('\n');
}
