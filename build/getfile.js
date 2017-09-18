'use strict'

const fs = require('fs')
const mkdirp = require('mkdirp')
const axios = require('axios')
const LineByLineReader = require('line-by-line')

const source = `${__dirname}/files.txt`

// 配置响应arraybuffer
axios.defaults.responseType = 'arraybuffer'

let lr = new LineByLineReader(source)

lr.on('error', function (err) {
	throw err
})

lr.on('line', function (line) {
  console.log(line)
  lr.pause()
  axios.get(`http://www.yixingauto.com${line}`)
    .then(({data}) => {
      // console.log(data)
      let path = line
      path = path.replace('/static/',`${__dirname}/../public/static/`)
      path = path.replace('/uploads/',`${__dirname}/../public/uploads/`)
      if (!fs.existsSync(path)) {
        mkdirp.sync(path.substring(0,path.lastIndexOf('/')))
      }
      fs.writeFile(path, data, err => {
        if (err) {
          throw err
        } else {
          lr.resume()
        }
      })
    })
    .catch(err => {
      throw err
      lr.resume()
    })
})

lr.on('end', function () {
	console.log('完成')
})
