export const SpotifyTrack = ({
  trackId,
  darkTheme,
  compact,
}: {
  trackId: string;
  darkTheme?: boolean;
  compact?: boolean;
}) => {
  const src = darkTheme
    ? `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`
    : `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={src}
      width="100%"
      height={compact ? "152" : "352"}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};
