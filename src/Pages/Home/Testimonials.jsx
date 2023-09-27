import SectionTitle from "../../Components/SectionTitle";
import img1 from '../../assets/images/testimonials/Ellipse.png';
import img2 from '../../assets/images/testimonials/Ellipse 2.png';
import quote from '../../assets/icons/quote 1.svg';
import ReactStars from "react-rating-stars-component";


const Testimonials = () => {
    return (
        <div className="my-16">
            <SectionTitle subTitle={'Testimonial'} title={'What Customer Says'}
                decs={'the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. '}></SectionTitle>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5">

                <div className="border-2 border-[#F3F3F3] rounded-xl p-10 space-y-5">
                    <div className="flex gap-5 w-4/5">
                        <img src={img1} className="" alt="" />
                        <div className="">
                            <h2 className="text-[#444] text-2xl font-bold">Awlad Hossain</h2>
                            <p className="text-[#737373] text-xl font-semibold">Businessman</p>
                        </div>
                        <img src={quote} className="pl-20" alt="" />
                    </div>
                    <p className="text-[#737373] capitalize"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <ReactStars count={5} isHalf={true} value={5} edit={false}
                        size={30} activeColor="#FF912C" />
                </div>
                <div className="border-2 border-[#F3F3F3] rounded-xl p-10 space-y-5">
                    <div className="flex gap-5 w-4/5">
                        <img src={img2} className="" alt="" />
                        <div className="">
                            <h2 className="text-[#444] text-2xl font-bold">Awlad Hossain</h2>
                            <p className="text-[#737373] text-xl font-semibold">Businessman</p>
                        </div>
                        <img src={quote} className="pl-20" alt="" />
                    </div>
                    <p className="text-[#737373] capitalize"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <ReactStars count={5} isHalf={true} value={5} edit={false}
                        size={30} activeColor="#FF912C" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 -left-5 -right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-[#84808098] text-white hover:text-black">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ff3811] text-white hover:text-black ml-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;