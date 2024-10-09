import { handleMailboxConnect } from "@/services/handleMailboxConnect";
import React from "react";
import Wave from "./Wave";

const Hero: React.FC = () => {  
  return (
    <section className="relative bg-blue-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16 md:pb-24 text-center tracking-wider min-h-screen sm:min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4 md:text-4xl">
          Build Email Calendar and Contacts
          <span className="text-yellow-300"> Features in No Time</span> with
          Nylas
        </h1>
        <p className="text-lg mb-8 text-white md:mt-0 mt-10">
          Nylas provides powerful APIs that let developers quickly integrate
          email, calendar, and contacts functionalities into their applications.
          Experience seamless connectivity with minimal code.
        </p>
        <p className="text-xl md:text-2xl mb-6 font-semibold">
          Ready to see Nylas in action? 
          Connect your mailbox to get started with our demo application!
        </p>
        <div className="max-w-md mx-auto">
          <button
            className="bg-yellow-500 font-bold text-cream-300 px-6 py-4 rounded hover:bg-gray-100 hover:text-blue-500 mt-6 text-lg tracking-widest"
            onClick={handleMailboxConnect}
          >
            Connect Mailbox
          </button>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Hero;
