import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-full bg-base-200 pb-8 my-8 rounded-md">
            <div className="hero-content flex-col lg:flex-row">
                <div className='md:w-1/2 relative'>
                    <img src={person} className="w-3/4 text-end h-[450px] rounded-lg " />
                    <img src={parts} className="w-1/2 rounded-lg h-[280px] absolute right-16 border-8 border-white top-1/2" />
                </div>
                <div className='md:w-1/2 space-y-5'>
                    <h1 className="text-xl font-bold text-[#ff3811] pt-10">About Us</h1>
                    <h1 className="text-4xl font-bold text-[#151515] w-[360px] pr-14 mr-8">We are qualified & of experience in this field</h1>
                    <p className=" text-[#737373] w-[480px] capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=" text-[#737373] w-[480px] capitalize pb-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning font-semibold text-white h-14 w-40 bg-[#ff3811]
                         border-[#ff3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;