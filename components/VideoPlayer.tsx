"use client";

type VideoPlayerProps = {
  src: string;
};

export default function VideoPlayer({
  src,
}: VideoPlayerProps) {
  return (
    <video
      className="player"
      controls
      playsInline
      preload="metadata"
      src={src}
    >
      Your browser does not support HTML5 video.
    </video>
  );
}
