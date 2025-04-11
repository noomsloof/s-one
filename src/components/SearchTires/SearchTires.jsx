import bg from "../../assets/images/SOne_index_bg_searchtype.jpg";

const SearchTires = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-orange-500 text-white p-2 font-bold"> ค้นหายาง</div>
        <div
          className="w-full flex-1 bg-cover text-white"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="grid grid-cols-5">
            <div className="col-span-0 md:col-span-2"></div>
            <div className="col-span-5 md:col-span-3">
              <div className="p-4">
                <div>
                  <div className="font-bold">หน้ายาง</div>
                  <div className="text-sm">ความกว้าง (มม.)</div>
                  <select className="w-full px-2 py-1 border border-orange-500 bg-white text-black">
                    <option>--เลือกหน้ายาง--</option>
                  </select>
                </div>
                <div className="mt-2">
                  <div className="font-bold">ซีรี่ย์</div>
                  <div className="text-sm">
                    อัตราส่วนความสูงแก้มยาง (%)
                  </div>
                  <select className="w-full px-2 py-1 border border-orange-500 bg-white text-black">
                    <option>--เลือกซีรีย์--</option>
                  </select>
                </div>
                <div className="mt-2">
                  <div className="font-bold">กระทะล้อ</div>
                  <div className="text-sm">
                    เส้นผ่าศูนย์กลาง (นิ้ว)
                  </div>
                  <select className="w-full px-2 py-1 border border-orange-500 bg-white text-black">
                    <option>--เลือกกระทะล้อ--</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTires;
