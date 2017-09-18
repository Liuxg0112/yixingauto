'use strict'

const fs = require('fs')

const source = `${__dirname}/../static/index.html`
const result = `${__dirname}/files.txt`
// 删除已存在文件
if (fs.existsSync(result)) {
  fs.unlinkSync(result);
}
// 读取html文件
const html = fs.readFileSync(source,'utf8')
// 匹配href
const reg_href_g = /\shref="(.*?)"/g
const reg_href = /\shref="(.*?)"/
// 匹配src
const reg_src_g = /\ssrc="(.*?)"/g
const reg_src = /\ssrc="(.*?)"/

let matched_href = html.match(reg_href_g)
matched_href.forEach(value => {
  let href = value.match(reg_href)[1]
  if (href && !href.endsWith('.html') && href.includes('.')) {
    fs.appendFile(result, `${href}\n`, 'utf8', (err) => {
      if (err) throw err
    })
  }
})
let matched_src = html.match(reg_src_g)
matched_src.forEach(value => {
  let src = value.match(reg_src)[1]
  if (src) {
    fs.appendFile(result, `${src}\n`, 'utf8', (err) => {
      if (err) throw err
    })
  }
})