import { BiRightArrowAlt } from "react-icons/bi";
import memory from '../../assets/images/memory.svg';
import imgSide from '../../assets/images/sideImg.svg';
import { Link } from "react-router-dom";


const RightSide = ({ loadedData }) => {
    const { facility, price } = loadedData;
    return (
        <div className="w-1/3 space-y-8">
            <div className=" bg-[#F3F3F3] rounded-xl p-10">
                {/* service name  */}
                <h2 className="text-[#151515] text-2xl pb-5 -pt-5 font-bold">Services</h2>
                {
                    facility.map((faci, index) => <div key={index + 1} className="p-5 mb-5 rounded-md bg-white flex justify-between">
                        <p className="font-semibold">{faci.name}</p> <BiRightArrowAlt className="text-[#ff3811] text-2xl" />
                    </div>)
                }
            </div>
            <div className=" bg-[#151515] rounded-xl p-10">
                <h2 className="text-white text-2xl pb-5 -pt-5 font-bold">Download</h2>
                <div className="py-5 pr-5 rounded-md flex items-center justify-between">
                    <div className=" flex gap-2 items-center">
                        <img src={memory} alt="" />
                        <div className="w-32">
                            <p className="font-semibold text-white">Our Brochure</p>
                            <p className="text-[#A2A2A2]">Download</p>
                        </div>
                    </div>
                    <BiRightArrowAlt className="bg-[#ff3811] text-white w-10 h-10 rounded-md text-lg" />
                </div>
                <div className="py-5 pr-5 rounded-md flex items-center justify-between">
                    <div className=" flex gap-2 items-center">
                        <img src={memory} alt="" />
                        <div className="w-32">
                            <p className="font-semibold text-white">Our Brochure</p>
                            <p className="text-[#A2A2A2]">Download</p>
                        </div>
                    </div>
                    <BiRightArrowAlt className="bg-[#ff3811] text-white w-10 h-10 rounded-md text-lg" />
                </div>
            </div>
            <div className="relative bg-[#151515] text-white rounded-xl p-10">
                <div className="w-[135px] mx-auto">
                    <img src={imgSide} className="" alt="" />
                    <h2 className="text-white font-bold text-2xl pl-[6px]">Car Doctor</h2>
                </div>
                <h1 className="font-bold text-xl py-5 text-center">Need Help? We Are Here <br /> To Help You</h1>
                <div className="bg-white rounded-xl px-11 pt-5 pb-14">
                    <h2 className="text-xl font-bold text-[#ff3811] text-center">Car Doctor <span className="text-[#151515]">Special</span> </h2>
                    <p className="text-[#737373] font-bold py-2 text-center">Save up to <span className="text-[#ff3811]">60% off</span></p>
                </div>
                <button className="rounded-xl absolute bottom-3 left-[125px] text-lg font-semibold text-white bg-[#ff3811] border-[#ff3811] py-4  block px-8">Get A Quote</button>
            </div>
            <h2 className="text-[#151515] text-4xl font-bold">Price ${price}</h2>
            <Link to={'/checkout'} className="btn btn-primary py-4 w-full  text-white bg-[#ff3811] border-[#ff3811]">Proceed Checkout</Link>
        </div>
    );
};

export default RightSide;