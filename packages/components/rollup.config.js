import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    copy({
      targets: [
        { src: 'src/theme/fonts/*.css', dest: 'build/theme/fonts' },
        { src: 'src/theme/fonts/TeleNeoWeb/**', dest: 'build/theme/fonts/TeleNeoWeb' }
      ]
    })
  ],
  input: ['src/theme/theme.ts'],
  output: [
    {
      file: 'build/theme/theme.js',
      format: 'cjs',
    },
    {
      file: 'build/theme/theme.iife.js',
      format: 'iife',
      name: 'scale',
    },
    {
      file: 'build/theme/theme.esm.js',
      format: 'esm',
    },
  ],
};
