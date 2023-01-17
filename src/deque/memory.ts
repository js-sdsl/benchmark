import { Deque } from 'js-sdsl';
import Denque from 'denque';

function catchMemory(Queue: typeof Deque | typeof Denque, size: number) {
  const pre = process.memoryUsage().heapUsed;
  const a = new Queue();
  for (let i = 0; i < size; ++i) {
    if (a instanceof Denque) a.push(i);
    else if (a instanceof Deque) a.pushBack(i);
  }
  const now = process.memoryUsage().heapUsed;
  return [a, now - pre] as [unknown, number];
}

export default function () {
  console.log('deque memory testing...');
  const testList = [1];
  for (let i = 1; i <= 7; ++i) {
    testList.push(testList[i - 1] * 10);
  }
  testList.shift();
  let content =
`### memory

memory diff is \`Denque\` - \`Deque\`

\`\`\`bash\n`;
  content += testList.map(size => {
    const [, memoryA] = catchMemory(Deque, size);
    const [, memoryB] = catchMemory(Denque, size);
    return memoryB - memoryA;
  }).map((memory, index) =>
    `size: 10^${index + 1}    memory-diff: ${Math.floor(memory / 1024)} KB`
  ).join('\n');
  return content + '\n```\n';
}
