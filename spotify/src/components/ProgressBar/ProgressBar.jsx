import React from "react";

// CSS
import "./progressBar.css";

export default function ProgressBar({ progress, total }) {
  // Calculating the progress
  let timeProgress = (progress / total) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-line"
        style={{ width: `${timeProgress}%` }}
      ></div>
    </div>
  );
}
