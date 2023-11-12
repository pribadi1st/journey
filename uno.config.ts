import {
    defineConfig,
    presetUno,
    transformerVariantGroup,
    presetAttributify 
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  theme: {
    colors: {
      mainColor: "#e1f55d",
      baseColor: "#f5f5f5",
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1216px',
    }
  },
  rules: [
      // START polyfill custom scss rules
      [/^(p|m)-?(t|b|l|r)?-(\d+)$/, ([, space='', dir = '', body= 1]: [string, string?, string]) => {
        const map: { [key: string]: string } = {
          p: 'padding',
          m: 'margin'
        }
        const dirMap: { [key: string]: string } = {
          t: '-top',
          b: '-bottom',
          l: '-left',
          r: '-right'
        }
        return {
          [`${map[space]}${dirMap[dir]}`]: `${parseInt(body)*4}px !important`
        }
      }],
      [/^(p|m)-(h|v)-(\d+)$/, ([, space, dir, body]: string[]) => {
        return {
          [`${space === 'p' ? 'padding' : 'margin'}-${dir === 'v' ? 'left' : 'top'}`]: `${parseInt(body)*4}px !important`,
          [`${space === 'p' ? 'padding' : 'margin'}-${dir === 'v' ? 'right' : 'bottom'}`]: `${parseInt(body)*4}px !important`
        }
      }],
      [/^gap-(\d+)$/, ([, body]: string[]) => {
        return {
          gap: `${parseInt(body)*4}px`
        }
      }],
      // END polyfill custom scss rules
      // [/^h-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
      //   const color = parseColor(body, theme)
      //   if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      //     return {
      //       '--h-c-context': `${color.cssColor.components.join(',')}`
      //     }
      //   }
      // }]
  ],
  shortcuts: [
    ['base-h', 'h-[calc(100vh-70px)]'],
    ['header-1', 'text-4xl font-bold'],
  ],
  presets: [
      presetUno(),
      presetAttributify(),
      presetRemToPx(),
      // ...
    ],
  transformers: [
      transformerVariantGroup()
  ]
})
