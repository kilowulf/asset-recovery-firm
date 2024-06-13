import React from "react";
import depressedGuy from "../img/pexels-andrew-3132388.jpg";

const Services = () => {
  return (
    <section id="services" className="min-h-screen bg-gray-300">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 border-2 border-white-300 p-2 rounded-lg max-w-xl">
            <img
              src={depressedGuy}
              alt="Overage Recovery"
              className="rounded shadow-md"
              style={{ width: "100%", height: "100%", maxWidth: "600px" }}
            />
          </div>
          <div className="md:w-1/2 ml-9">
            <p className="text-lg leading-relaxed">
              Asset Recovery Firm specializes in recovering overage funds of
              residential properties that have fallen into foreclosure. We help
              prior owners and occupiers recover funds called overages, which
              are the excess funds collected when a foreclosed property is sold
              for more than what is owed. State and county laws provide a
              specified time window to recover these funds, and we are experts
              in navigating this process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
