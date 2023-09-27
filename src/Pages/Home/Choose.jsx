import SectionTitle from "../../Components/SectionTitle";
import person from '../../assets/icons/check.svg'
import delivery from '../../assets/icons/deliveryt.svg'
import Wrench from '../../assets/icons/Wrench.svg'
import group from '../../assets/icons/group.svg'
import personal from '../../assets/icons/person.svg'
import clock from '../../assets/icons/clock.svg'


const Choose = () => {
    return (
        <div className="my-16">
            <SectionTitle subTitle={'Core Features'} title={'Why Choose Us'}
            decs={'the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. '}></SectionTitle>
            <div className="flex justify-between ">
                <div className="border-2 border-[#E8E8E8] w-[170px] h-[155px] rounded-xl flex flex-col items-center justify-center">
                    <img src={group} alt="" />
                    <h2 className="text-[#444] font-bold text-lg"> Expert Team</h2>
                </div>
                <div className="border border-[#E8E8E8] bg-[#ff3811] w-[170px] h-[155px] rounded-xl flex flex-col items-center justify-center">
                    <img src={clock} alt="" className=""/>
                    <h2 className="font-bold text-lg text-white"> Timely Delivery</h2>
                </div>
                <div className="border border-[#E8E8E8] w-[170px] h-[155px] rounded-xl flex flex-col items-center justify-center">
                    <img src={personal} alt="" />
                    <h2 className="text-[#444] font-bold text-lg"> 24/7 Support</h2>
                </div>
                <div className="border border-[#E8E8E8] w-[170px] h-[155px] rounded-xl flex flex-col items-center justify-center">
                    <img src={Wrench} alt="" />
                    <h2 className="text-[#444] font-bold text-lg"> Best Equipment</h2>
                </div>
                <div className="border border-[#E8E8E8] w-[170px] h-[155px] rounded-xl flex flex-col items-center justify-center">
                    <img src={person} alt="" />
                    <h2 className="text-[#444] font-bold text-lg"> 100% Guranty</h2>
                </div>
                <div className="border border-[#E8E8E8] w-[170px] h-[155px] rounded-xl flex flex-col items-center justify-center">
                    <img src={delivery} alt="" />
                    <h2 className="text-[#444] font-bold text-lg">Timely Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default Choose;