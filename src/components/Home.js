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
    <section id="home" className="font-sans">
      <container className="container px-0 py-20 font-sans">
        <div className="relative overflow-hidden">
          <ReactPlayer
            url={videoUrls[currentVideoIndex]}
            playing
            controls={false}
            loop={false}
            muted
            width="100vv"
            height="100%"
            wrapper="container"
            style={{
              filter: "brightness(0.5)",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            } // extend width to full viewport width
            }
            onEnded={
              handleVideoEnd // adjust margin to center the video
            }
          />
          <div className="content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-center text-white text-8xl font-bold mb-5">
              Recover Overages from Foreclosed Properties
            </h1>
            <p className="text-center text-white text-base font-bold text-xl">
              Let our professionals take care of your property recovery
            </p>
            <p className="text-center text-white text-base text-xl">
              Millions of dollars are recovered yearly by homeowners who might
              have lost properties due to foreclosure proceedings
            </p>
          </div>
        </div>
      </container>
    </section>
  );
};

export default Home;
