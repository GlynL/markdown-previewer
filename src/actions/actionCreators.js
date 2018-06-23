export const EDITOR_TEXT = "EDITOR_TEXT";

export function editText(editorText) {
  return {
    type: EDITOR_TEXT,
    editorText
  };
}
