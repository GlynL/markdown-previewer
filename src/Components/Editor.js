import React from "react";
import "../styles/Editor.css";

const Editor = props => {
  return (
    <div className="editor">
      <h1 className="editor__title">Editor</h1>
      <textarea
        className="editor__text"
        name="editor"
        id="editor"
        cols="30"
        rows="10"
        value={props.text}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Editor;
