import React, { useEffect } from "react";

// Contexts
import AppContext from "../../contextCustomHooks";

// CSS
import "./progressBar.css";

export default function ProgressBar({ total, setProgress, progress }) {
  // Context Hooks
  const { play_Context, songChanged_Context } = AppContext();

  useEffect(() => {
    // if the song is changed the progress is set back to zero
    if (songChanged_Context.songChanged) setProgress(0);
    else {
    }
    const interval = setInterval(() => {
      if (progress < total && !play_Context.play.state) {
        setProgress(progress + 1000);
        // console.log("progress when playing ", progress);
      } else {
        setProgress(progress); //optional (?)
        // console.log("progress when pausing ", progress);
        return () => clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress, total, play_Context.play.state]);

  // Calculating the progress
  let timeProgress = progress === 0 ? 0 : (progress / total) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-line"
        style={{ width: `${timeProgress}%` }}
      ></div>
    </div>
  );
}
