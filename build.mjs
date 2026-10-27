import { mkdir, copyFile } from 'node:fs/promises';

// Publish only these assets, never the repository or local configuration.
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
for (const file of ['jsx-figure-v1.js', 'jsxgraphcore-1.13.3.js', '_headers']) {
  await copyFile(new URL(file, import.meta.url), new URL(`dist/${file}`, import.meta.url));
}
