import "../Navbar/Navbar.scss";
import logo from "../../assets/images/SOne_index_logo.png";
import thicon from "../../assets/images/SOne_index_iconthai.jpg";
import enicon from "../../assets/images/SOne_index_iconeng.jpg";
import { FaSearch } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
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
                <img src={thicon} width="25" height="18" />
                <img src={enicon} width="25" height="18" />
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
                  {" "}
                  <FaSearch />{" "}
                </button>
              </div>
              <div className="flex justify-end max-w-sm mx-auto mt-2 gap-1 text-sm hidden md:flex">
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  About S-ONE
                </a>{" "}
                |
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Job Opportunity
                </a>{" "}
                |
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Contact Us
                </a>{" "}
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
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <div className="flex">
                  {" "}
                  <MdSmartDisplay className="custom-navbar-menuicon" /> Product
                  & Services{" "}
                </div>{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <div className="flex">
                  {" "}
                  <MdSmartDisplay className="custom-navbar-menuicon" />{" "}
                  Promotions{" "}
                </div>{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <div className="flex">
                  {" "}
                  <MdSmartDisplay className="custom-navbar-menuicon" /> News &
                  Events{" "}
                </div>{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <div className="flex">
                  {" "}
                  <MdSmartDisplay className="custom-navbar-menuicon" /> Safety
                  Tips{" "}
                </div>{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <div className="flex">
                  {" "}
                  <MdSmartDisplay className="custom-navbar-menuicon" /> FAQS{" "}
                </div>{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <div className="flex">
                  {" "}
                  <MdSmartDisplay className="custom-navbar-menuicon" /> Location{" "}
                </div>{" "}
              </a>
            </div>

            <div className="flex gap-2 text-md ">
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <FaFacebookSquare className="custom-navbar-menuicon" />{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <FaTwitterSquare className="custom-navbar-menuicon" />{" "}
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                {" "}
                <FaYoutube className="custom-navbar-menuicon" />{" "}
              </a>
            </div>
          </div>

          {menuOpen && (
              <div className="md:hidden px-4 py-2 flex flex-col gap-2 bg-gray-800">
                <a href="#" className="text-white hover:text-orange-500">
                  <div className="flex">
                    <MdSmartDisplay className="custom-navbar-menuicon" />
                    Product & Services
                  </div>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <div className="flex">
                    <MdSmartDisplay className="custom-navbar-menuicon" /> Promotions
                  </div>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <div className="flex">
                    <MdSmartDisplay className="custom-navbar-menuicon" /> News & Events
                  </div>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <div className="flex">
                    <MdSmartDisplay className="custom-navbar-menuicon" /> Safety Tips
                  </div>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <div className="flex">
                    <MdSmartDisplay className="custom-navbar-menuicon" /> FAQS
                  </div>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <div className="flex">
                    <MdSmartDisplay className="custom-navbar-menuicon" /> Location
                  </div>
                </a>
              </div>
            )}
        </nav>
      </header>
      <div className="h-[250px] md:h-[180px]"></div>
    </>
  );
};

export default Navbar;
