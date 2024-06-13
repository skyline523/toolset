import {
  mergeConfigs,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export type Config = ReturnType<typeof mergeConfigs>

export function unocssConfig(configs: Config | Config[] = []): Config {
  return mergeConfigs([
    {
      presets: [
        /**
         * The default preset for UnoCSS. It's currently equivalent to @unocss/preset-wind.
         *
         * @see https://unocss.dev/presets/uno
         */
        presetUno(),

        /**
         * This enables the attributify mode for other presets.
         *
         * @see https://unocss.dev/presets/attributify
         */
        presetAttributify(),

        /**
         * Provides a set of prose classes
         * you can use to add typographic defaults to vanilla HTML.
         *
         * @see https://unocss.dev/presets/typography
         */
        presetTypography(),

        /**
         * Use any icon with Pure CSS for UnoCSS.
         *
         * @see https://unocss.dev/presets/icons
         */
        presetIcons({
          scale: 1.2,
        }),
      ],
      transformers: [
        /**
         * UnoCSS transformer for @apply, @screen and theme() directives: @unocss/transformer-directives.
         * You can use a combination of directives and CSS to take advantage of the available utilities.
         *
         * @see https://unocss.dev/transformers/directives
         */
        transformerDirectives({
          applyVariable: ['--at-apply', '--uno-apply', '--uno'],
        }),

        /**
         * Apply utilities for the same variant by grouping them with a parenthesis.
         *
         * @see https://unocss.dev/transformers/variant-group
         */
        transformerVariantGroup(),
      ],
      content: {
        pipeline: {
          exclude: ['node_modules'],
        },
      },
    },
    ...(Array.isArray(configs) ? configs : [configs]),
  ])
}
