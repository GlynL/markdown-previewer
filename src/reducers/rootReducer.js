import { EDITOR_TEXT } from "../actions/actionCreators";

const heading = "# # heading";
const subheading = "## ## Subheading";
const link = "[Glyn Lewington - Portfolio](https://glynlewington.com)";
const inlineCode = "`inline code `";
const codeBlock = "``` \n this is a codeblock \n console.log(multiline) \n ```";
const listItem = "* list item";
const blockQuote = "> block quote";
const image = `![alt text](https://goo.gl/Umyytc "Image")`;
const bold = "**Bold**";

const initialState = {
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

const rootReducer = (state = initialState, { type, editorText }) => {
  switch (type) {
    case EDITOR_TEXT:
      return {
        ...state,
        editorText
      };

    default:
      return state;
  }
};

export default rootReducer;
