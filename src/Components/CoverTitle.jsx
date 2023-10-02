import backImg from '../assets/images/checkout/checkout.png';
import avatar from '../assets/images/Vector.png';

const CoverTitle = ({page, title}) => {
    return (
        <div className="relative">
        <div className="hero h-[300px] rounded-xl mb-32" style={{ backgroundImage: `url(${backImg})` }}>
            <div className=" h-full w-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
                <h1 className="mb-5 text-5xl font-bold text-white pt-32 ml-24">{title}</h1>
            </div>
            <div className="absolute -bottom-0">
                <div className="relative">
                    <img src={avatar} alt="" />
                    <h3 className="text-white text-xl font-medium absolute top-[10px] left-12">Home/{page}</h3>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CoverTitle;