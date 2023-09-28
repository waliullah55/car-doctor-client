import step from '../../assets/images/steps.png';

const LeftSide = ({ img, title, description, facility }) => {
    return (
        <div className="w-2/3 space-y-8">
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
            <video className="w-full h-[400px] rounded-xl" controls >
                {/* <source src='https://youtu.be/2tc-HsVpurg?si=9t_4bdVKaLw_iz6q' type="video/mp4" /> */}
            </video>

        </div>
    );
};

export default LeftSide;