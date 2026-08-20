import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 px-6 py-10">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Top Text */}
        <p className="mb-6">
          Questions? Call{" "}
          <span className="underline cursor-pointer">
            000-800-919-1694
          </span>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <p className="hover:underline cursor-pointer">FAQ</p>
          <p className="hover:underline cursor-pointer">Help Centre</p>
          <p className="hover:underline cursor-pointer">Account</p>
          <p className="hover:underline cursor-pointer">Media Centre</p>
          <p className="hover:underline cursor-pointer">Investor Relations</p>
          <p className="hover:underline cursor-pointer">Jobs</p>
          <p className="hover:underline cursor-pointer">Ways to Watch</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Cookie Preferences</p>
          <p className="hover:underline cursor-pointer">Corporate Information</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>

        {/* Language Button */}
        <div className="mt-6">
          <button className="border border-gray-600 px-4 py-2 rounded text-sm hover:bg-gray-800">
            English
          </button>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-sm">Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;