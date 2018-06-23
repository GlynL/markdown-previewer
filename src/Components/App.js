import React, { Component } from "react";
import "../styles/App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import Header from "./Header";
import { connect } from "react-redux";
import { editText } from "../actions/actionCreators";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.editText(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Editor text={this.props.editorText} handleChange={this.handleChange} />
        <Preview text={this.props.editorText} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(
  mapStateToProps,
  { editText }
)(App);
// \` <div>inlined code</div> \` \n \n \`\`\`\n multi-line code: \n console.log(hello); \n \`\`\` \n * list item \n > Block Quote \n
//       `
