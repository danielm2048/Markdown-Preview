import React from "react";

import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

const Preview = props => {
  return (
    <div id="preview-container">
      <p
        id="preview"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.text) }}
      />
    </div>
  );
};

export default Preview;
