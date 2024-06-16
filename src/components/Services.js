import React from "react";
import depressedGuy from "../img/pexels-andrew-3132388.jpg";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gray-300 shadow-xl font-serif"
    >
      <div className="mx-auto px-2 pb-20 pt-8">
        <div className="bg-maroon text-white rounded-lg py-13 mb-4 border border-gray-300 shadow-lg filter drop-shadow-md">
          <h2 className="text-5xl font-bold text-center pt-6 pb-6">
            Our Services
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center border-2 border-gray-300 rounded-lg shadow-xl">
          <div className="md:w-1/2 p-2 rounded-lg max-w-xl">
            <div className="border-2 rounded-lg shadow-xl w-full h-auto">
              <img
                src={depressedGuy}
                alt="Overage Recovery"
                className="rounded shadow-xl w-full h-auto"
                style={{ maxWidth: "600px", minWidth: "400px" }}
              />
            </div>
          </div>
          <div className="md:w-1/2 pl-8">
            <p className="text-xl leading-relaxed m-4">
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

        <div className="mt-10 border-2 border-gray-300 p-6 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-10 pt-6">
            The Process...
          </h2>
          <div className="justify-center mb-10 text-8 text-center p-6">
            <p className="text-lg leading-relaxed">It's Easy To Get Started</p>
            <p className="text-lg leading-relaxed mb-9">
              Below are the steps to get your claim going:
            </p>
            <div className="justify-center align-items-center text-left md:text-center">
              <strong className="text-3xl">Step 1:</strong>
              <p className="text-xl leading-relaxed mb-8 italic">
                Contact us by calling, emailing, or completing the contact form.
                Before we get the process started, we set up an initial call to
                answer questions or concerns with no obligation to move forward.
                We will also determine what funds are available to you.
              </p>
              <strong className="text-3xl">Step 2:</strong>
              <p className="text-xl leading-relaxed mb-8 italic">
                We will send you the necessary paperwork needed to work on
                recovering your money.
              </p>
              <strong className="text-3xl">Step 3:</strong>
              <p className="text-xl leading-relaxed mb-8 italic">
                We will coordinate to have the paperwork signed and notarized
                where needed.
              </p>
              <strong className="text-3xl">Step 4:</strong>
              <p className="text-xl leading-relaxed mb-8 italic">
                Return the paperwork back to us via mail or email.
              </p>
              <strong className="text-3xl">Step 5:</strong>
              <p className="text-xl leading-relaxed mb-8 italic">
                We take care of the rest! You sit back and let us do the work.
                We will contact you as soon as a check is ready and on its way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
