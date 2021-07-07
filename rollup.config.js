import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import clean from 'postcss-clean'
// import babili from 'rollup-plugin-babili'
import minify from 'rollup-plugin-babel-minify'

const dev = 'development'
const prod = 'production'
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev

const plugins = [
  peerDepsExternal(),
  replace({'process.env.NODE_ENV': JSON.stringify(env)}),
  resolve(),
  commonjs({
    // All of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react/index.js': [
        'Component',
        'PropTypes',
        'createElement',
      ]
    },
  }),
  postcss({
    extract: false,
    plugins: [autoprefixer, clean],
    writeDefinitions: true,
  }),
  typescript()
]

if (env === prod) {
  plugins.push(minify())
}

export default {
  plugins,
  external: ['react', 'flagpack-core'],
  input: './src/main.ts',
  output: {
    file: 'dist/react-flag-rollup.cjs.js',
    format: 'cjs',
    exports: 'auto'
  }
}
