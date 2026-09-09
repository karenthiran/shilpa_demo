"use client";
import { useEffect, useRef, useState } from "react";

const MUSIC_SRC =
  "https://res.cloudinary.com/dtqsjarsl/video/upload/v1788921501/Beloved_chosic.com_wdozag.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    // Most browsers block autoplay with sound until the user interacts
    // with the page, so try immediately and fall back to starting on
    // the first click/scroll/keypress if that gets blocked.
    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    tryPlay();

    const startOnInteraction = () => {
      if (audio.paused) {
        tryPlay();
      }
      removeInteractionListeners();
    };

    const interactionEvents = [
      "click",
      "scroll",
      "keydown",
      "touchstart",
      "mousemove",
      "pointerdown",
    ];
    const removeInteractionListeners = () => {
      interactionEvents.forEach((evt) =>
        window.removeEventListener(evt, startOnInteraction),
      );
    };

    interactionEvents.forEach((evt) =>
      window.addEventListener(evt, startOnInteraction, { once: true }),
    );

    return () => {
      removeInteractionListeners();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying ? "Pause background music" : "Play background music"
        }
        title={isPlaying ? "Pause background music" : "Play background music"}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1050,
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "none",
          background: "#101210",
          color: "#e9a132",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
          cursor: "pointer",
        }}
      >
        <i
          className={`bi ${isPlaying ? "bi-volume-up-fill" : "bi-volume-mute-fill"}`}
        ></i>
      </button>
    </>
  );
};

export default BackgroundMusic;
