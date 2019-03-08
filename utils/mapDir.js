const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const mapDir = (d) => {
  let tree = {}
  const [dir, file] = _(fs.readdirSync(d)).partition((o)=> fs.statSync( path.join(d, o) ).isDirectory())
  
  dir.forEach(k => {
    tree[k] = mapDir(path.join(d, k))
  })

  file.forEach(f=>{
    if( path.extname(f) === '.js' ) {
      tree[ path.basename(f, '.js') ] = require( path.join(d, f) )
    }
  })
  return tree
}

module.exports = mapDir