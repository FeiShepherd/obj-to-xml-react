const React = require('react');
const prettifyXml = require('prettify-xml');
const ReactDomServer = require('react-dom/server');

const elements = ['Animal', 'Owner', 'Pets', 'Dog', 'Dogs'];

const xml = {};

elements.forEach(element => {
  xml[element] = props => React.createElement(element.toLowerCase(), props);
});

eval(`var { ${elements.join(', ')} } = xml;`);

const dog = [1, 2, 3];

const elementXML = ReactDomServer.renderToStaticMarkup(React.createElement(
  Pets,
  null,
  React.createElement(
    Owner,
    { name: 'Luke' },
    React.createElement(Animal, { type: 'guinea pig', name: 'Sparkles' })
  ),
  React.createElement(
    Owner,
    { name: 'Neal' },
    React.createElement(Animal, { type: 'guinea pig', name: 'Wendy' }),
    React.createElement(Animal, { type: 'guinea pig', name: 'Renel' })
  ),
  React.createElement(
    Dogs,
    null,
    dog.map(element => React.createElement(
      Dog,
      null,
      element
    ))
  ),
  React.createElement(
    'bla',
    null,
    'a'
  )
));

const options = { indent: 2, newline: '\n' };
const output = prettifyXml(elementXML, options);

console.log(output);
