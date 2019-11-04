import React from 'react';
import './App.scss';
import marked from 'marked';

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);

marked.setOptions({
  breaks: true,
});

const Editor = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <textarea id="editor" rows="15" cols="60" onChange={props.handleChange}>{markdown}</textarea>
    </div>
  );
};

const Preview = (props) => {
  return (
    <div id="preview-container">
      <p id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.text) }} />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: marked(markdown)
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: marked(event.target.value)
    });
  }
  render() {
    return (
      <div>
        <Editor text={this.state.text} handleChange={this.handleChange} />
        <Preview text={this.state.text} />
      </div>
    );
  }
}


const markdown = `# This is my Markdown Preview!

## One of the frontend challenges on freeCodeCamp
### Made by Daniel Mimoun
  
In here you can make your text **bold!**
Or _italic_.
Or both if you **_want!_**
You can even ~~cross your text out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

Single-line code block, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code using 3 backticks on each side:

const Example = () => {
  return (
    <div>
      <h1>Hello Markdown Preview!</h1>
    </div>
  );
}
\`\`\`

If you really want to go all out there's even tables!:

Title 1 | Title 2 | Title 3
------- | ------- | ------- 
Use the vertical Bar | for each td | and th.
The preview will make | all of this look good | so don't worry.

- And of course there are lists.
  - You can have them bulleted.
     - With different indentation levels.
        - And they look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. And the list will go on...
-  You can use dashes or asterisks also.
* And finally, let's show an embedded image:

![Thumbs up logo w/o Text](https://bit.ly/2PKltys)
`
export default App;
