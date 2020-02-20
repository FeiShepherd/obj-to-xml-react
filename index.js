const template = require('./xml/template.js')

const jsobj = {
  dog: [1,2,3,4]
}

console.log(template.getXml(jsobj))
