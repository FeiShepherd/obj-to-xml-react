const React = require('react')
const prettifyXml = require('prettify-xml')
const ReactDomServer = require('react-dom/server')
const options = {indent: 2, newline: '\n'}

module.exports = {
  getXml: jsobj => {
    try {
      const elements = ['Animal', 'Owner', 'Pets', 'Dog', 'Dogs']

      const xml = {}

      elements.forEach(element => {
        xml[element] = props =>
          React.createElement(element.toLowerCase(), props)
      })

      eval(`var { ${elements.join(', ')} } = xml;`)

      const dog = jsobj.dog

      const elementXML = ReactDomServer.renderToStaticMarkup(
        <Pets>
          <Owner name="Luke">
            <Animal type="guinea pig" name="Sparkles" />
          </Owner>
          <Owner name="Neal">
            <Animal type="guinea pig" name="Wendy" />
            <Animal type="guinea pig" name="Renel" />
          </Owner>
          <Dogs>
            {dog.map(element => (
              <Dog>{element}</Dog>
            ))}
          </Dogs>
          <bla>a</bla>
        </Pets>,
      )

      return prettifyXml(elementXML, options)
    } catch (error) {
      return `<error>${error}</error>`
    }
  },
}
