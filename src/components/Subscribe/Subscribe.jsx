import tips from "../../assets/images/SOne_index_tips1.png";
import go from "../../assets/images/SOne_index_btgo.jpg";
import call from "../../assets/images/SOne_index_call.png";

const Subscribe = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[100%] h-auto flex flex-row justify-center">
          <img src={tips} alt="" />
          <div className="bg-[#252525] h-30 text-white px-5">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="text-orange-600 text-lg p-2">Safety Tips</div>
              <div className="text-sm p-2">
                ควรเติมน้ำมันตอนเช้า ขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 border-b border-dashed border-orange-500 pb-2">
        <div>สมัครรับข่าวสาร</div>
          <div className="flex justify-center">
            <input
              type="text"
              value={"กรุณาใส่อีเมล์"}
              className="border border-orange-500 px-2 text-sm"
            />
            <button type="submit" className="border border-orange-500">
              <img src={go} alt="" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-5">
            <img src={call} alt="" />
          </div>
      </div>
    </>
  );
};

export default Subscribe;
