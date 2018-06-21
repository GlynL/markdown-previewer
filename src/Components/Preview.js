import React from "react";
import marked from "marked";
import "../styles/Preview.css";

const Preview = props => {
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `
            <a target="_blank" href="${href}">
            ${text}
            </a>
            `;
  };
  renderer.image = function(href, title, text) {
    return `
            <img src="${href}" alt="${text}" title="${title}" height="200" width="200">
            `;
  };

  const markdownHtml = { __html: marked(props.text, { renderer: renderer }) };
  return (
    <div className="preview">
      <h1 className="preview__title">Preview</h1>
      <div id="preview" dangerouslySetInnerHTML={markdownHtml} />
    </div>
  );
};

export default Preview;
