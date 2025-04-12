import news from "../../assets/images/SOne_index_pic01.jpg";
import btn from "../../assets/images/SOne_index_bullet1.png";

const News = () => {
  return (
    <>
      <div className="flex flex-col w-full mx-auto border-2 border-solid border-orange-500">
        <div className="bg-white text-black p-2 font-bold border-b border-orange-500 flex justify-between">
          <div>News & Events</div>
          <div className="gap-1 flex items-center">
            <div><img src={btn} alt="" /></div>
            <div><img src={btn} alt="" /></div>
            <div><img src={btn} alt="" /></div>
          </div>
        </div>
        <div className="w-full flex-1 bg-white text-black p-4">
          <div className="flex gap-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="relative w-1/3 flex flex-col gap-2" >
                <img src={news} alt="" className="w-full h-auto object-cover" />
                <div className="absolute top-0 left-2 bg-gray-900 w-auto h-auto text-white text-[0.8rem] p-2 w-auto text-center">
                  <div>19</div>
                  <div>NOV</div>
                  <div>2014</div>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-orange-500 font-medium text-sm"
                  >
                    ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
