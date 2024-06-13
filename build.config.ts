import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: ['unocss'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
