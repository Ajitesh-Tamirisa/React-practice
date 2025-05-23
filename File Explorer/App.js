// https://www.greatfrontend.com/questions/user-interface/file-explorer?practice=practice&tab=coding

// File Explorer

// Given an array of file objects, build a component that displays them in a hierarchical tree format.

// There are two types of objects – files and directories:

// Files are essentially leaf nodes of the tree, they do not have children.
// Directories can contain other objects – either files or directories.
// You may assume that the IDs and names within the same directory are unique.

// Requirements
// The names of the directories/files should be displayed.
// Directories
// Contents of the directory should be displayed in a manner that indicates it belongs within the directory. The recommended approach is to indent the contents to the right.
// Directories can be expanded and collapsed. Clicking on a directory should toggle its expanded/collapsed state.
// Directories should appear before files. All the items should be sorted alphabetically within their respective categories.
// You may style the expand/collapse functionality in a way you prefer as long as it is clear that the item is a directory and whether it is in the expanded or collapsed state.
// Directories can be empty.
// Files
// Files are not expandable and cannot be interacted with.
// The focus of the exercise is on the functionality and not the styling.

import "./styles.css";
import React, { useEffect, useState } from "react";
import data from "./data.json";

export default function App() {
  return (
    <div>
      {data.map((dataItem) => {
        if (dataItem && dataItem.children) {
          return <Folder key={dataItem.id} {...dataItem} />;
        } else {
          return <File key={dataItem.id} {...dataItem} />;
        }
        return null;
      })}
    </div>
  );
}

function Folder({ id, name, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div id={id} className="folder" onClick={() => setOpen((prev) => !prev)}>
        {name}
      </div>
      <div className="folderDrawer">
        {open &&
          children.map((child) =>
            child.children ? (
              <Folder key={child.id} {...child} />
            ) : (
              <File key={child.id} {...child} />
            )
          )}
      </div>
    </div>
  );
}

function File({ id, name }) {
  return (
    <div id={id} className="file">
      {name}
    </div>
  );
}
