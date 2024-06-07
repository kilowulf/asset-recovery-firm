import React, { useState } from "react";
import ReactPlayer from "react-player";

const videoUrls = [
  "../img/clips/337855_House Neighborhood Trees Car_By_Erik_Nuenighoff_Artlist_HD.mp4",
  "../img/clips/94466_Real estate agent putting a sticker that says sold on a for sale sign_By_Via_Films_Artlist_HD.mp4",
  "../img/clips/693405_Legal Paperwork Contract Law Firm_By_Pressmaster_Artlist_HD.mp4"
  // Add more video URLs as needed
];

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section id="home" className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-0 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Recover funds from foreclosures
        </h2>
        <div className="relative overflow-hidden h-80 bg-darker-maroon text-white">
          <ReactPlayer
            url={videoUrls[currentVideoIndex]}
            playing
            controls={false}
            loop={true}
            muted
            width="100vw" // extend width to full viewport width
            height="100%"
            style={{ marginLeft: "calc(-50vw + 50%)" }} // adjust margin to center the video
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
