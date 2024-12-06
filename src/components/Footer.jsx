import React from "react";
import Logo from "../assets/dailytimes-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-sm">
      <div className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Our Company */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-lg font-bold">Our Company</h3>
          <p>
            Daily Times, is a Newspaper company Registered under DED with Reg
            No: 1178444, and regulated by Media regulator of Dubai.
          </p>
          <address className="mt-6">
            <p>Technic Building 402 Salah Aldin,</p>
            <p>Deira United Arab Emirates</p>
          </address>
          <p className="mt-6">
            <strong>Phone:</strong> +971 (04) 410 7908
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:media@dailytimes.ae" className="text-blue-500">
              media@dailytimes.ae
            </a>
          </p>
          <p className="mt-6">
            <strong>Support:</strong> media@dailytimes.ae
          </p>
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-bold text-lg mb-8">About Links</h3>
          <ul className="space-y-8">
            {[
              "About Us",
              "Contact",
              "Advertise With Us",
              "Media Relations",
              "Corporate Information",
              "Compliance",
              "Apps & Products",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-8">Useful Links</h3>
          <ul className="space-y-8">
            {[
              "Privacy Policy",
              "Terms of Use",
              "Closed Captioning Policy",
              "Accessibility Statement",
              "Personal Information",
              "Data Tracking",
              "Register New Account",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Center */}
        <div>   
          <h3 className="font-bold text-lg mb-8">HELP CENTER</h3>
          <ul className="space-y-8">
            {[
              "Instagram",
              "Twitter",
              "Facebook",
              "YouTube",
              "WhatsApp",
              "Linkedin",
              "TikTok",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-gray-300 py-3 px-6">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            <img src={Logo} alt="" className="w-36" />
            <p className="text-2xl font-bold">Daily Times</p>
            </div>
          <p className="text-sm">© 2023 Daily Times</p>
          <div className="flex space-x-9 text-lg ">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
          <FaTiktok className="hover:text-black cursor-pointer" />
          <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
