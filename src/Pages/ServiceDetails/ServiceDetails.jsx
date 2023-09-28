import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import backImg from '../../assets/images/checkout/checkout.png';
import avatar from '../../assets/images/Vector.png';
// import step from '../../assets/images/steps.png';
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

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
                <LeftSide img={img} title={title} description={description} facility={facility}></LeftSide>
                <RightSide loadedData={loadedData}></RightSide>
            </div>
        </div>
    );
};

export default ServiceDetails;