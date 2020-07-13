import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//Turndown
const TurndownService = require("turndown").default;
const turndownService = new TurndownService();

export default function MyComponent() {
  const [value, setValue] = useState("");
  //HTML to markdown
  const markdown = turndownService.turndown(value);
  //Markdown to html
  debugger;
  var showdown = require("showdown"),
    converter = new showdown.Converter(),
    html = converter.makeHtml(markdown);
  //MD to Text
  const { markdownToTxt } = require("markdown-to-txt");
  const text = markdownToTxt(markdown);

  console.log(value); //HTML
  console.log(markdown); //MD
  // console.log(html); //HTML
  console.log(text); //Text

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      {value}
      <hr />

      <div>{markdown}</div>
      <hr />
      {text}
    </div>
  );
}

//https://www.npmjs.com/package/turndown
//https://attacomsian.com/blog/convert-html-to-markdown#
//https://github.com/domchristie/turndown
//
