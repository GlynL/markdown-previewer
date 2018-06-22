import React, { Component } from "react";
import "../styles/App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    const heading = "# # heading";
    const subheading = "## ## Subheading";
    const link = "[Glyn Lewington - Portfolio](https://glynlewington.com)";
    const inlineCode = "`inline code `";
    const codeBlock =
      "``` \n this is a codeblock \n console.log(multiline) \n ```";
    const listItem = "* list item";
    const blockQuote = "> block quote";
    const image = `![alt text](https://goo.gl/Umyytc "Image")`;
    const bold = "**Bold**";

    this.state = {
      editorText:
        heading +
        "\n" +
        subheading +
        "\n" +
        link +
        "\n\n" +
        inlineCode +
        "\n" +
        codeBlock +
        "\n" +
        listItem +
        "\n\n" +
        blockQuote +
        "\n\n" +
        bold +
        "\n\n" +
        image +
        "\n" +
        link
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ editorText: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Editor text={this.state.editorText} handleChange={this.handleChange} />
        <Preview text={this.state.editorText} />
      </div>
    );
  }
}

export default App;
// \` <div>inlined code</div> \` \n \n \`\`\`\n multi-line code: \n console.log(hello); \n \`\`\` \n * list item \n > Block Quote \n
//       `
