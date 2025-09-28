import React from 'react';

interface VideoPlayerProps {
  title: string;
  subtitle: string;
  videoId: string;
  videoTitle: string;
  id?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  subtitle,
  videoId,
  videoTitle,
  id = "video"
}) => {
  return (
    <section className="video-player" id={id}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=1&iv_load_policy=3&fs=0&disablekb=1`}
              title={videoTitle}
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;