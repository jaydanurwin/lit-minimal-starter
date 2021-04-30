import html from '@web/rollup-plugin-html';
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['src/pages/*.html'],
  plugins: [
    html(),
    // Resolve bare module specifiers to relative paths
    multiInput(),
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*'],
    }),
  ],
  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
};