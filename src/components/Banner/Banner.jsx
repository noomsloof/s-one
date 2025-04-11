import { useState } from 'react';
import banner1 from '../../assets/images/SOne_index_banner.jpg';
import banner2 from '../../assets/images/SOne_index_banner.jpg';
import banner3 from '../../assets/images/SOne_index_banner.jpg';

const Banner = () => {
    const images = [banner1, banner2, banner3];
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="relative w-full h-[450px]">
            {/* ภาพพื้นหลัง */}
            <img
                src={mainImage}
                alt="main banner"
                className="w-full h-full object-cover"
            />

            {/* Thumbnail overlay ด้านขวาล่าง */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded shadow-md">
                <div className="flex flex-col gap-2">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`thumb-${index}`}
                            onClick={() => setMainImage(img)}
                            className={`w-auto h-24 border cursor-pointer ring-1 ring-orange-500`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
