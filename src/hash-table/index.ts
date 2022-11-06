import { setNumberTest, setStringTest, setObjectTest } from './set';
import { getNumberTest, getStringTest, getObjectTest } from './get';

export default async function () {
  console.info('hash table testing...');
  const content = await Promise.all([
    '## hash table\n',
    setNumberTest(),
    setStringTest(),
    setObjectTest(),
    getNumberTest(),
    getStringTest(),
    getObjectTest()
  ]);
  console.log('hash table test finished!');
  return content.join('\n');
}
