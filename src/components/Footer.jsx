import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-indigo-950 text-white py-[100px] ">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div>
          <Link to="/">
            <img src={assets.footerLogo} alt="Logo" className="h-12 mb-5" />
          </Link>
          <p className="text-white max-w-[400px] text-[16px]">
            We are a nonprofit organization which exists to provide support to
            the vulnerable and needy in society (Africa) through social
            interventions. Nessa Candlelight Foundation is a Non-profit
            Organisation dedicated to uplifting underprivileged communities
            through sustainable interventions spanning Education, Sports,
            Sanitation, Agriculture, Vocational Skills, and more.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
          <div className="h-1 bg-red-500 w-24 mb-4"></div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-white block">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-white block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-white hover:text-white block"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-white hover:text-white block">
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className="text-white hover:text-white block"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          <div className="h-1 bg-red-500 w-24 mb-4"></div>
          <ul className="space-y-2  text-white">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              No. 33Abuma Street, Bubuashie, Accra, Ghana GA-357
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:koyoccoincltd@gmail.com
"
                className="hover:text-white"
              >
                nessacandlelightfoundation@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              +233547704330 | +233545057066
            </li>
            <li className="flex items-center">
              <FaGlobe className="mr-2" />
              <a
                href="https://nessacandlelightfoundation.org/"
                className="hover:text-white"
              >
                nessacandlelightfoundation.org
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
          <div className="h-1 bg-red-500 w-24 mb-4"></div>
          <div className="flex lg:justify-start space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-purple-600 hover:text-purple-950 w-8 h-8 p-2 rounded-full text-center bg-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              className="text-purple-600 hover:text-purple-950 w-8 h-8 p-2 rounded-full text-center bg-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/koyocco_inc/profilecard/?igsh=MWN1d20xOW9rd2U0Ng=="
              target="_blank"
              className="text-purple-600 hover:text-purple-950 w-8 h-8 p-2 rounded-full text-center bg-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/koyocco-real-estate-ltd-b01440244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              className="text-purple-600 hover:text-purple-950 w-8 h-8 p-2 rounded-full text-center bg-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} NessaCandleLightFoundation. All rights
        reserved | Designed By SugarMedia Ltd | 0541742099.
      </div>
    </div>
  </footer>
);

export default Footer;
