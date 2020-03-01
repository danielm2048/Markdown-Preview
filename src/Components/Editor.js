import React from "react";

const Editor = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <textarea
        id="editor"
        rows="15"
        cols="60"
        onChange={props.handleChange}
        defaultValue={props.markdown}
      />
    </div>
  );
};

export default Editor;
