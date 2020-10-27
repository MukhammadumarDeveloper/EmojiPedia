import React from "react";
import "../styles.css";
import Entry from "./Entry";
import emojipedia from '../emojipedia';

export default function App() {
  return (
    <div>
      <div className="App">
        <h1 className="title">emojipedia</h1>
      </div>
      <div className="container">
        {
          emojipedia.map(elem => {
            return <Entry
              key={elem.id}
              emoji={elem.emoji}
              name={elem.name}
              meaning={elem.meaning} />
          })
        }
      </div>
    </div>
  );
}
