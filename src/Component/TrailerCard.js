import React from "react";
import { useLocation } from "react-router-dom";

const TrailerCard = () => {
  const location = useLocation();
  const item = location.state;
  // Extract the VIDEO_ID from the regular YouTube URL
  const videoId = item.src.split("v=")[1];

  // Create the embed URL using the extracted VIDEO_ID
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <h2>TRAILER, VIDEO</h2>
      <div className="container">
        <iframe
          frameborder="0"
          className="responsive-iframe"
          src={embedUrl}
          title={item.title}
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerCard;
