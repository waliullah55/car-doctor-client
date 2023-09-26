import time from '../../assets/images/contact/001-timetable.png';
import call from '../../assets/images/contact/call.png';
import loca from '../../assets/images/contact/loca.png';

const Contact = () => {
    return (
        <div className="bg-[#151515] rounded-xl grid grid-cols-1 md:grid-cols-3 my-6 px-20 py-24"> 
            <div className='flex items-center gap-5'>
                <img src={time} alt="" />
                <div className='text-white'>
                    <p className="font-medium">We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <img src={call} alt="" />
                <div className='text-white'>
                    <p className="font-medium">Have a question?</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <img src={loca} alt="" />
                <div className='text-white'>
                    <p className="font-medium">Need a repair? our address</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;