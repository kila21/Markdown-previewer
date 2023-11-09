import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(
    "You Can type anything here, and use any tag from html!."
  );
  const [editor, setEditor] = useState(true);
  const [preview, setPreview] = useState(true);

  return (
    <>
      {editor && (
        <div className="editor-container">
          <div className="editor-toolbar">
            Editor
            {editor && preview && (
              <i
                onClick={() => setPreview(false)}
                className="fa fa-arrows-alt"
                aria-hidden="true"
              ></i>
            )}
            {editor && !preview && (
              <i
                onClick={() => setPreview(true)}
                className="fa fa-compress"
                aria-hidden="true"
              ></i>
            )}
          </div>
          <textarea
            className={!preview ? "resize" : ""}
            id="editor"
            onChange={(e) => setText(marked.parse(e.target.value))}
          ></textarea>
        </div>
      )}
      {preview && (
        <div className="preview-container">
          <div className="preview-toolbar">
            Previewer
            {preview && editor && (
              <i
                onClick={() => setEditor(false)}
                className="fa fa-arrows-alt"
                aria-hidden="true"
              ></i>
            )}
            {preview && !editor && (
              <i
                onClick={() => setEditor(true)}
                className="fa fa-compress"
                aria-hidden="true"
              ></i>
            )}
          </div>
          <div
            className={!editor ? "resize" : ""}
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          ></div>
        </div>
      )}
    </>
  );
}

export default App;
