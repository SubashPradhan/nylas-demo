import { connectMailbox } from "@/services/nylasConnectServices";
import React from "react";

const Hero: React.FC = () => {
  const handleMailboxConnect = async () => {
    try{
      const response = await connectMailbox()
      return response
    } catch (error) {
      console.error("An error occured while connecting mailbox", error)
    }
  }
  
  return (
    <section className="relative bg-blue-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16 md:pb-24 text-center tracking-wider min-h-screen sm:min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4 md:text-4xl">
          Build Email Calendar and Contacts
          <span className="text-yellow-300"> Features in No Time</span> with
          Nylas
        </h1>
        <p className="text-lg mb-8 text-white md:mt-0 mt-10">
        Use Nylas to easily integrate email, calendar, and contacts into your apps, delivering seamless connectivity with minimal code.
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
      <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1200 50" className="w-full">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0 0L29 7.875C57 15.75 114 31.5 171 28.875C229 26.25 286 5.25 343 5.25C400 5.25 457 26.25 514 35.4375C571 44.625 629 42 686 34.125C743 26.25 800 13.125 857 17.0625C914 21 971 42 1029 43.3125C1086 44.625 1143 26.25 1171 17.0625L1200 7.875V63H1171C1143 63 1086 63 1029 63C971 63 914 63 857 63C800 63 743 63 686 63C629 63 571 63 514 63C457 63 400 63 343 63C286 63 229 63 171 63C114 63 57 63 29 63H0V0Z"
        />
      </svg>
      </div>
    </section>
  );
};

export default Hero;
