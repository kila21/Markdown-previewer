import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="editor-container">
        <div className="editor-toolbar">
          Editor
          <i className="fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
        <textarea
          id="editor"
          onChange={(e) => setText(marked.parse(e.target.value))}
        ></textarea>
      </div>
      <div className="preview-container">
        <div className="preview-toolbar">
          Previewer
          <i className="fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </>
  );
}

export default App;
