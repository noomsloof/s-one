import "../Navbar/Navbar.scss";
import logo from "../../assets/images/SOne_index_logo.png";
import thicon from "../../assets/images/SOne_index_iconthai2.jpg";
import thiconhover from "../../assets/images/SOne_index_iconthai.jpg";
import enicon from "../../assets/images/SOne_index_iconeng2.jpg";
import eniconhover from "../../assets/images/SOne_index_iconeng.jpg";
import menu from "../../assets/images/SOne_index_menu01.png";
import menuhover from "../../assets/images/SOne_index_menu02.png";

import fb from "../../assets/images/SOne_index_btfacebook.png";
import twt from "../../assets/images/SOne_index_bttwitter.png";
import yt from "../../assets/images/SOne_index_btyoutube.png";
import fbhv from "../../assets/images/SOne_index_btfacebook1.png";
import twthv from "../../assets/images/SOne_index_bttwitter1.png";
import ythv from "../../assets/images/SOne_index_btyoutube1.png";


import { FaSearch } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50">
        <nav className="bg-white">
          <div className="mx-auto px-4 py-3 flex flex-col justify-between items-center md:flex-row">
            <div className="text-xl font-bold text-gray-800">
              <img src={logo} alt="Logo" />
            </div>

            <div className="space-x-4">
              <div className="flex justify-end max-w-sm mx-auto gap-2">
                <img src={thicon} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = thiconhover)} onMouseOut={(e) => (e.currentTarget.src = thicon)} />
                <img src={enicon} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = eniconhover)} onMouseOut={(e) => (e.currentTarget.src = enicon)} />
              </div>
              <div className="flex justify-end max-w-sm mx-auto mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full md:w-60 px-2 py-1 border border-orange-500 focus:outline-none focus:ring-2"
                />
                <button
                  type="submit"
                  className="px-2 py-1 bg-gray-900 text-white "
                >

                  <FaSearch />
                </button>
              </div>
              <div className="flex justify-end max-w-sm mx-auto mt-2 gap-1 text-sm hidden md:flex">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  About S-ONE
                </a>
                |
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Job Opportunity
                </a>
                |
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Contact Us
                </a>
                |
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Site Map
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto px-4 py-3 flex justify-between items-center bg-gray-900 rounded-lg">
            {/* Hamburger */}
            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="flex gap-2 text-md hidden md:flex">
              <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
              <a href="#" className="text-white hover:text-orange-500"> Product & Services </a>

              <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
              <a href="#" className="text-white hover:text-orange-500"> Promotions </a>

              <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
              <a href="#" className="text-white hover:text-orange-500"> News & Events</a>

              <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
              <a href="#" className="text-white hover:text-orange-500"> Safety Tips </a>

              <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
              <a href="#" className="text-white hover:text-orange-500"> FAQS </a>

              <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
              <a href="#" className="text-white hover:text-orange-500"> Location</a>
            </div>

            <div className="flex gap-2 text-md ">
              <a href="#" className="text-white hover:text-orange-500">
              <img src={fb} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = fbhv)} onMouseOut={(e) => (e.currentTarget.src = fb)} />
              </a>
              <a href="#" className="text-white hover:text-orange-500">
              <img src={twt} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = twthv)} onMouseOut={(e) => (e.currentTarget.src = twt)} />
              </a>
              <a href="#" className="text-white hover:text-orange-500">
              <img src={yt} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = ythv)} onMouseOut={(e) => (e.currentTarget.src = yt)} />
              </a>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden px-4 py-2 flex flex-col gap-2 bg-gray-800">
              <div className="flex flex-row gap-2">
                <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
                <a href="#" className="text-white hover:text-orange-500"> Product & Services </a>
              </div>

              <div className="flex flex-row gap-2">
                <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
                <a href="#" className="text-white hover:text-orange-500"> Promotions </a>
              </div>

              <div className="flex flex-row gap-2">
                <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
                <a href="#" className="text-white hover:text-orange-500"> News & Events</a>
              </div>

              <div className="flex flex-row gap-2">
                <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
                <a href="#" className="text-white hover:text-orange-500"> Safety Tips </a>
              </div>

              <div className="flex flex-row gap-2">
                <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
                <a href="#" className="text-white hover:text-orange-500"> FAQS </a>
              </div>

              <div className="flex flex-row gap-2">
                <img src={menu} width="25" height="18" onMouseOver={(e) => (e.currentTarget.src = menuhover)} onMouseOut={(e) => (e.currentTarget.src = menu)} />
                <a href="#" className="text-white hover:text-orange-500"> Location</a>
              </div>
            </div>
          )}
        </nav>
      </header>
      <div className="h-[250px] md:h-[180px]"></div>
    </>
  );
};

export default Navbar;
