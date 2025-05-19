import "./styles.css";
import React, { useState } from "react";

const sections = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "JAVASCRIPT",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function App() {
  const [openSections, setOpenSections] = useState(
    new Array(sections.length).fill(false)
  );

  const toggleSection = (index) => {
    let updatedOpenSections = [...openSections];
    updatedOpenSections[index] = !updatedOpenSections[index];
    setOpenSections(updatedOpenSections);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div className="section" key="index">
          <div
            className="title"
            onClick={() => toggleSection(index)}
            style={{ cursor: "pointer" }}
          >
            {section.title}{" "}
            <span
              className={`accordion-icon ${openSections[index] ? "open" : ""}`}
            ></span>
          </div>
          <hr />
          {openSections[index] && (
            <div className="content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
