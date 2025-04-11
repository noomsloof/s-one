import bg from '../../assets/images/SOne_index_bg_searchtype.jpg';


const SearchTires = () => {
    return (
        <>
            <div className='h-[450px] flex flex-col'>
                <div className='bg-orange-500 text-white p-2 font-bold'> ค้นหายาง</div>
                <div className="w-full flex-1 bg-cover text-white" style={{ backgroundImage: `url(${bg})` }}>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-2'></div>
                        <div className='col-span-3'>
                            <div className='mt-4'>
                                <div className='font-bold'>หน้ายาง</div>
                                <div className='text-sm font-bold'>ความกว้าง (มม.)</div>
                                <select className="w-60 px-2 py-1 border border-orange-500 bg-white text-black"><option>--เลือกหน้ายาง--</option></select>
                            </div>
                            <div className='mt-9'>
                                <div className='font-bold'>ซีรี่ย์</div>
                                <div className='text-sm font-bold'>อัตราส่วนความสูงแก้มยาง (%) (มม.)</div>
                                <select className="w-60 px-2 py-1 border border-orange-500 bg-white text-black"><option>--เลือกซีรีย์--</option></select>
                            </div>
                            <div className='mt-9'>
                                <div className='font-bold'>กระทะล้อ</div>
                                <div className='text-sm font-bold'>เส้นผ่าศูนย์กลาง (นิ้ว)</div>
                                <select className="w-60 px-2 py-1 border border-orange-500 bg-white text-black"><option>--เลือกกระทะล้อ--</option></select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SearchTires;