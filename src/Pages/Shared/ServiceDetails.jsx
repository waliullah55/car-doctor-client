import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import backImg from '../../assets/images/checkout/checkout.png';
import avatar from '../../assets/images/Vector.png';
import { BiRightArrowAlt } from "react-icons/bi";
import step from '../../assets/images/steps.png';

const ServiceDetails = () => {
    const loadedData = useLoaderData();
    const { img, facility, title, description } = loadedData;
    console.log(img, loadedData);

    return (
        <div className="my-14">
            <Helmet><title>Car Doctor | View Details</title></Helmet>
            <div className="relative">
                <div className="hero h-[300px] rounded-xl mb-32" style={{ backgroundImage: `url(${backImg})` }}>
                    <div className=" h-full w-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                        <h1 className="mb-5 text-5xl font-bold text-white pt-32 ml-24">Service Details</h1>
                    </div>
                    <div className="absolute -bottom-0">
                        <div className="relative">
                            <img src={avatar} alt="" />
                            <h3 className="text-white text-xl font-medium absolute top-[10px] left-12">Home/Service Details</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* main service section  */}
            <div className="flex gap-6">
                {/* service left section  */}
                <aside className="w-2/3 space-y-8">
                    {/* service photo */}
                    <img src={img} className="w-full h-[400px] rounded-xl" alt="" />
                    {/* simple div  */}
                    <div>
                        <h3 className="text[#151515] text-4xl font-bold my-7 pt-5">{title}</h3>
                        <p className="text-[#737373] capitalize">{description}</p>
                    </div>
                    {/* single servie section  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            facility.map((fa, index) => <div key={index + 1} className="p-10 bg-[#F3F3F3] border-t-2 border-[#FF3811] rounded-xl">
                                <h2 className="text-[#444] font-bold text-xl pb-3">{fa.name}</h2>
                                <p className="text-[#737373] capitalize">{fa.details}</p>
                            </div>)
                        }
                    </div>
                    <p className="text-[#737373] capitalize">{description}</p>
                    <div>
                        <h3 className="text[#151515] text-4xl font-bold my-7 pt-5">3 Simple Steps to Process</h3>
                        <p className="text-[#737373] capitalize">{description}</p>
                    </div>
                    {/* steps for work  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-10 rounded-xl border-2 border-[#E8E8E8] text-center">
                            <div className="mx-auto h-20 w-20 relative">
                                <img src={step} className="" alt="" />
                                <h2 className="text-xl font-bold text-white absolute top-[26px] left-7">01</h2>
                            </div>
                            <h3 className="text-[#151515] text-2xl pb-5 font-bold py-5">Step One</h3>
                            <p className="text-[#737373] capitalize">It uses a dictionary <br /> of over 200 .</p>
                        </div>
                        <div className="p-10 rounded-xl border-2 border-[#E8E8E8] text-center">
                            <div className="mx-auto h-20 w-20 relative">
                                <img src={step} className="" alt="" />
                                <h2 className="text-xl font-bold text-white absolute top-[26px] left-7">01</h2>
                            </div>
                            <h3 className="text-[#151515] text-2xl pb-5 font-bold py-5">Step One</h3>
                            <p className="text-[#737373] capitalize">It uses a dictionary <br /> of over 200 .</p>
                        </div>
                        <div className="p-10 rounded-xl border-2 border-[#E8E8E8] text-center">
                            <div className="mx-auto h-20 w-20 relative">
                                <img src={step} className="" alt="" />
                                <h2 className="text-xl font-bold text-white absolute top-[26px] left-7">01</h2>
                            </div>
                            <h3 className="text-[#151515] text-2xl pb-5 font-bold py-5">Step One</h3>
                            <p className="text-[#737373] capitalize">It uses a dictionary <br /> of over 200 .</p>
                        </div>
                    </div>
                    {/* <video className="w-full h-[400px] rounded-xl" controls >
                        <source src='https://youtu.be/2tc-HsVpurg?si=9t_4bdVKaLw_iz6q' type="video/mp4" />
                    </video> */}

                </aside>
                {/* service right section  */}
                <div className="w-1/3">
                    <div className=" bg-[#F3F3F3] rounded-xl p-10">
                        {/* service name  */}
                        <h2 className="text-[#151515] text-2xl pb-5 -pt-5 font-bold">Services</h2>
                        {
                            facility.map((faci, index) => <div key={index + 1} className="p-5 mb-5 rounded-md bg-white flex justify-between">
                                <p className="font-semibold">{faci.name}</p> <BiRightArrowAlt className="text-[#ff3811] text-2xl" />
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;