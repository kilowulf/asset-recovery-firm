import React, { useState } from "react";
import ReactPlayer from "react-player";

const videoUrls = [
  "https://videos.pexels.com/video-files/7735852/7735852-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/8426052/8426052-uhd_3840_2160_25fps.mp4"
  // Add more video URLs as needed
];

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex(
      prevIndex => (prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <section id="home" className="min-h-screen bg-black">
      <container className="container mx-auto px-0 py-20">
        <div className="overflow-hidden">
          <ReactPlayer
            url={videoUrls[currentVideoIndex]}
            playing
            controls={false}
            loop={false}
            muted
            width="100vw"
            height="100%"
            style={{
              marginLeft: "calc(-50vw + 50%)",
              filter: "brightness(0.5)"
            } // extend width to full viewport width
            }
            onEnded={
              handleVideoEnd // adjust margin to center the video
            }
          />
          <div className="content">
            <h1 className="text-6xl font-bold">
              Recover Overages from Foreclosed Properties
            </h1>
            <p className="text-base font-bold">
              Let our professionals take care of your property recovery
            </p>
          </div>
        </div>
      </container>
    </section>
  );
};

export default Home;
