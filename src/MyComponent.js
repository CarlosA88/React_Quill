import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//Turndown
const TurndownService = require("turndown").default;
const turndownService = new TurndownService();
//Markdown

export default function MyComponent() {
  const [value, setValue] = useState("");

  const markdown = turndownService.turndown(value);

  console.log(value);
  console.log(markdown);

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      {value}
      <div>{markdown}</div>
    </div>
  );
}

//https://www.npmjs.com/package/turndown
//https://attacomsian.com/blog/convert-html-to-markdown#
//https://github.com/domchristie/turndown
//
