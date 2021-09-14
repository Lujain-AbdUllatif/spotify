import React from "react";

// Contexts
import AppContext from "../../contextCustomHooks";

// CSS
import "./progressBar.css";

export default function ProgressBar() {
  // Context Hooks
  const { progressBar_Context } = AppContext();

  return (
    <div className="progress-bar">
      <div
        className="progress-line"
        style={{
          width: `${
            progressBar_Context.progressBar?.position
              ? (progressBar_Context.progressBar.position /
                  progressBar_Context.progressBar.duration) *
                100
              : 0
          }%`,
        }}
      ></div>
    </div>
  );
}
