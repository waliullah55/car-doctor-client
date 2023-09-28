import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
// import backImg from '../../assets/images/checkout/checkout.png';
// import avatar from '../../assets/images/Vector.png';
// import step from '../../assets/images/steps.png';
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import CoverTitle from "../../Components/CoverTitle";

const ServiceDetails = () => {
    const loadedData = useLoaderData();
    const { img, facility, title, description } = loadedData;
    console.log(img, loadedData);

    return (
        <div className="my-14">
            <Helmet><title>Car Doctor | View Details</title></Helmet>

            <CoverTitle page={'Service Details'}></CoverTitle>

            {/* main service section  */}
            <div className="flex gap-6">
                <LeftSide img={img} title={title} description={description} facility={facility}></LeftSide>
                <RightSide loadedData={loadedData}></RightSide>
            </div>
        </div>
    );
};

export default ServiceDetails;