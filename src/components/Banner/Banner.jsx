import { useState } from 'react';
import banner1 from '../../assets/images/SOne_index_banner.jpg';
import thum from '../../assets/images/SOne_index_pic02.jpg';
import thumhv from '../../assets/images/SOne_index_pic01.jpg';

const Banner = () => {
    const images = [thum, thum, thum];
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="relative w-auto h-full">
            <img
                src={banner1}
                alt="main banner"
                className="w-full h-full object-cover"
            />

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded shadow-md">
                <div className="flex flex-col gap-2">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img} onMouseOver={(e) => (e.currentTarget.src = thumhv)} onMouseOut={(e) => (e.currentTarget.src = thum)}
                            alt={`thumb-${index}`}
                            onClick={() => setMainImage(img)}
                            className={'hidden md:block w-full max-w-xs h-20 border cursor-pointer ring-1 ring-orange-500'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
