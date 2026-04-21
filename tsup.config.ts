import { defineConfig } from 'tsup';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react'],
  esbuildPlugins: [
    {
      name: 'raw-svg',
      setup(build) {
        build.onResolve({ filter: /\.svg\?raw$/ }, (args) => ({
          path: resolve(dirname(args.importer), args.path.replace('?raw', '')),
          namespace: 'raw-svg',
        }));
        build.onLoad({ filter: /\.svg$/, namespace: 'raw-svg' }, (args) => ({
          contents: `export default ${JSON.stringify(readFileSync(args.path, 'utf-8'))}`,
          loader: 'js',
        }));
      },
    },
  ],
});
