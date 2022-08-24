import { Suite } from 'benchmark';

export default function (suite: Suite, name = '', resolve: (content: string) => void) {
  console.log(`${name} testing...`);
  let content =
`### ${name}

\`\`\`bash\n`;
  suite.on('cycle', function (e: Event) {
    content += '' + e.target + '\n';
  }).on('complete', async function (this: Suite) {
    content +=
`Fastest is ${this.filter('fastest').map('name')}
\`\`\`\n`;
    console.info(`${name} test finished.`);
    resolve(content);
  }).run();
}
