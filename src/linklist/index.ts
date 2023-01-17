import testInit from './init';
import testPush from './push';
import testPushPop from './push&pop';

export default async function () {
  console.info('linklist testing...');
  const content = await Promise.all([
    '## linklist\n',
    testInit(),
    testPush(),
    testPushPop()
  ]);
  console.log('linklist test finished!');
  return content.join('\n');
}
