const Station = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-orange-500 text-white p-2 font-bold">
          ค้นหาศูนย์บริการใกล้บ้านคุณ
        </div>
        <div
          className="w-full flex-1 bg-cover text-white flex items-center justify-center"
        >
          <div className="bg-gray-900 p-6 grid grid-cols-3 gap-4 w-[600px]">
            <div className="col-span-1 self-center text-right">จังหวัด</div>
            <div className="col-span-2">
              <select className="w-full px-2 py-1 border border-orange-500 bg-white text-black">
                <option>--เลือกจังหวัด--</option>
              </select>
            </div>

            <div className="col-span-1 self-center text-right">เขต/อำเภอ</div>
            <div className="col-span-2">
              <select className="w-full px-2 py-1 border border-orange-500 bg-white text-black">
                <option>--เลือกอำเภอ--</option>
              </select>
            </div>

            <div className="col-span-1 self-center text-right">ถนน</div>
            <div className="col-span-2">
              <select className="w-full px-2 py-1 border border-orange-500 bg-white text-black">
                <option>--เลือกถนน--</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Station;
