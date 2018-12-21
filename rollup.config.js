import nodeResolve from 'rollup-plugin-node-resolve';

import del from './plugins/del';
import terser from './plugins/terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/components/my-counter.js',
  output: {
    format: 'esm',
    dir: 'public',
  },
  plugins: [
    del(['public/*.js']),
    nodeResolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),
    production &&
      terser({
        mangle: {
          module: true,
        },
      }),
  ],
  experimentalCodeSplitting: true,
};
