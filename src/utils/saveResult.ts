import path from 'path';
import { appendFileSync } from 'fs';

export default async function (content: string) {
  const savePath = path.resolve(__dirname, '../../docs/README.md');
  await appendFileSync(savePath, content, { encoding: 'utf-8' });
}
