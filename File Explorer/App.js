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
