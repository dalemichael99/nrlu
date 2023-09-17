import React from 'react';
import '../styles/Videobar.css';

const Videobar = () => {
  const videoLinks = [
    'https://www.youtube.com/watch?v=RQnJAGTo7M4',
    'https://youtu.be/IGXcQGN-lQA?si=71y591m7bHTlt-KD',
    'https://youtu.be/jmMscFn7xGQ?si=yTAKtGhvRlzcKqmI',
    'https://youtu.be/MKop78Ck2vI?si=BYm-JpNklD8feGV4',
  ];

  return (
    <div className="videobarContainer">
      {videoLinks.map((link, index) => (
        <iframe 
          key={index}
          className="videoFrame"
          src={link}
          title={`video-${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default Videobar;