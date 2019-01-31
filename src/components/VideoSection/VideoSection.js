import React from 'react';

import './VideoSection.scss';

const VideoSection = (props) => (
      <section className="video-section" id="video-section">
            <div className="container">
                  <iframe  
                        title={props.title}                       
                        src={props.src} 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  ></iframe>
            </div>
      </section>
);

export default VideoSection;