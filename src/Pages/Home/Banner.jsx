import React from 'react';
import image1 from "../../assets/images/banner/5.jpg";
import image2 from "../../assets/images/banner/1.jpg";
import image3 from "../../assets/images/banner/2.jpg";
import image4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full my-6">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full h-[600px] rounded-xl" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl flex flex-col w-full h-full pl-10 justify-center text-white">
                    <div className='w-1/2 space-y-7 ml-24'>
                        <h3 className='font-bold text-6xl w-[460px]'>Affordable Price For Car Servicing</h3>
                        <p className='text-lg pr-16 mr-12 capitalize'>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div className='flex gap-5'>
                            <button className="btn btn-warning font-semibold text-white h-14 w-40 bg-[#ff3811]
                         border-[#ff3811]">Discover More</button>
                            <button className="btn btn-outline text-white h-14 w-40">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12">
                    <a href="#slide4" className="btn btn-circle bg-[#84808098] text-white hover:text-black">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ff3811] text-white hover:text-black ml-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full h-[600px]" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex flex-col w-full h-full pl-10 justify-center text-white">
                    <div className='w-1/2 space-y-7 ml-24'>
                        <h3 className='font-bold text-6xl w-[460px]'>Affordable Price For Car Servicing</h3>
                        <p className='text-lg pr-16 mr-12 capitalize'>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div className='flex gap-5'>
                            <button className="btn btn-warning font-semibold text-white h-14 w-40 bg-[#ff3811]
                         border-[#ff3811]">Discover More</button>
                            <button className="btn btn-outline text-white h-14 w-40">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12">
                    <a href="#slide1" className="btn btn-circle bg-[#84808098] text-white hover:text-black">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#ff3811] text-white hover:text-black ml-5">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full h-[600px]" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex flex-col w-full h-full pl-10 justify-center text-white">
                    <div className='w-1/2 space-y-7 ml-24'>
                        <h3 className='font-bold text-6xl w-[460px]'>Affordable Price For Car Servicing</h3>
                        <p className='text-lg pr-16 mr-12 capitalize'>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div className='flex gap-5'>
                            <button className="btn btn-warning font-semibold text-white h-14 w-40 bg-[#ff3811]
                         border-[#ff3811]">Discover More</button>
                            <button className="btn btn-outline text-white h-14 w-40">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12">
                    <a href="#slide2" className="btn btn-circle bg-[#84808098] text-white hover:text-black">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#ff3811] text-white hover:text-black ml-5">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full h-[600px]" />
                <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex flex-col w-full h-full pl-10 justify-center text-white">
                    <div className='w-1/2 space-y-7 ml-24'>
                        <h3 className='font-bold text-6xl w-[460px]'>Affordable Price For Car Servicing</h3>
                        <p className='text-lg pr-16 mr-12 capitalize'>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div className='flex gap-5'>
                            <button className="btn btn-warning font-semibold text-white h-14 w-40 bg-[#ff3811]
                         border-[#ff3811]">Discover More</button>
                            <button className="btn btn-outline text-white h-14 w-40">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-12 bottom-12">
                    <a href="#slide3" className="btn btn-circle bg-[#84808098] text-white hover:text-black">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#ff3811] text-white hover:text-black ml-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;