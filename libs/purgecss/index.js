const path = require('path')
const fs = require('fs')
const { PurgeCSS } = require('purgecss')

let srcDir = path.join(__dirname, '../../out')
if (path.sep === '\\') srcDir = srcDir.replace(/\\/g, '/')
const srcCssDir = `${srcDir}/_next/static/css`
const destCssDir = srcCssDir

console.log([srcDir, srcCssDir, destCssDir])
if (!fs.existsSync(destCssDir)) fs.mkdirSync(destCssDir, { recursive: true })
;(async () => {
  const purgeCSS = new PurgeCSS()
  const purgeRes = await purgeCSS.purge({
    output: `${destCssDir}/`, safelist: [/^swiper-/],
    content: ['**/*.js', '**/*.html'].map(s => `${srcDir}/${s}`),
    css: [`${srcCssDir}/**/*.css`],
    // fontFace: true,
    rejected: true,
    // keyframes: true,
    // rejectedCss: true,
    // variables: true
  })
  const data = purgeRes.map(({ file, rejected, css }) => {
    const output = path.join(destCssDir, file.replace(`${srcCssDir}/`, ''))
    fs.writeFileSync(output, css)

    return {
      css,
      file,
      rejected,
      output
    }
  })
  fs.writeFileSync(path.join(__dirname, 'out.js'), JSON.stringify(data))
  console.log(data.map(({ file, output }) => [file, output]))
})().catch(console.log)
