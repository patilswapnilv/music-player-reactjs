import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Player } from "./App";

const tracks = [{
        url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
        title: "Madza - Chords of Life",
        tags: ["house"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        title: "Madza - Late Night Drive",
        tags: ["dnb"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        title: "Madza - Persistence",
        tags: ["dubstep"],
    },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
  <React.StrictMode >
    <Player trackList = { tracks }/> 
    </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();