import React from "react";
import handshakePhoto from "../img/pexelspaveldanilyuk8112180.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center pb-6">
          About Overage Recovery
        </h2>
        <div className="flex flex-col md:flex-row items-center shadow-xl mb-10 border-2 border-gray-300 p-2 rounded-lg">
          <div className="p-3">
            <p className="text-xl leading-relaxed max-w-xl">
              Asset Recovery Firm specializes in recovering overage funds of
              residential properties that have fallen into foreclosure. We help
              prior owners and occupiers recover funds called overages, which
              are the excess funds collected when a foreclosed property is sold
              for more than what is owed. State and county laws provide a
              specified time window to recover these funds, and we are experts
              in navigating this process.
            </p>
          </div>
          <div className="border-2 border-gray-300 p-2 rounded-lg max-w-xl shadow-xl">
            <div className="m-4">
              <img
                src={handshakePhoto}
                alt="Overage Recovery"
                className="rounded shadow-md"
                style={{ width: "100%", height: "100%", maxWidth: "600px" }}
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-300 p-2 rounded-lg shadow-xl hover:divide-solid">
          <h2 className="text-5xl font-bold text-center pt-4">Our Company</h2>

          <br />
          <p className="text-xl leading-relaxed max-w-xl mx-auto border mb-10">
            Based in Utah, Asset Recovery Firm prides itself on a successful
            track record of helping 98% of clients with valid foreclosure
            overages get their money back. Our commitment to honesty and
            transparency is unwavering, and we guarantee that all processes and
            information are handled with the utmost confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
