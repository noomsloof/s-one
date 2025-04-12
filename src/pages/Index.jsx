import "../components/Navbar/Navbar";
import Navbar from "../components/Navbar/Navbar";
import Footerbar from "../components/Footerbar/Footerbar";
import SearchTires from "../components/SearchTires/SearchTires";
import Banner from "../components/Banner/Banner";
import Servicebar from "../components/Servicebar/Servicebar";
import Station from "../components/Station/Station";
import News from "../components/News/News";
import Subscribe from "../components/Subscribe/Subscribe";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-4 md:col-span-1 h-full">
          <SearchTires />
        </div>
        <div className="col-span-4 md:col-span-3 h-full">
          <Banner />
        </div>
        <div className="col-span-4">
          <Servicebar />
        </div>
        <div className="col-span-4 md:col-span-1">
          <div className="col-span-4 md:col-span-3 h-full">
            <Station />
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <News />
        </div>
        <div className="col-span-4 md:col-span-1">
          <Subscribe />
        </div>
      </div>
      <Footerbar />
    </>
  );
}
