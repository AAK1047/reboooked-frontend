import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="pr-4">
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">Leave Feedback</li>
            <li className="hover:underline">Blog</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="pr-4">
          <h4 className="text-lg font-bold mb-4">Useful Links</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:underline">How It Works</li>
            <li className="hover:underline">FAQs</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Chat Guidelines</li>
          </ul>
        </div>

        {/* Why Choose ReBooked Section */}
        <div className="pr-4">
          <h4 className="text-lg font-bold mb-4">Why Choose ReBooked?</h4>
          <ul className="text-sm space-y-2">
            <li>💳 Secure Payment: 100% safe transactions.</li>
            <li>🛡️ Trusted Platform: Payments released only after buyer confirmation.</li>
            <li>📞 Friendly Customer Support.</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
          <div className="flex space-x-4 text-gray-400">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-white" />
            <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-white" />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-white" />
            <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:text-white" />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />
      <p className="text-center text-gray-400 text-sm">
        ReBooked © 2024. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
