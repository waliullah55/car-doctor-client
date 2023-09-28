import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, []);
    return (
        <div>
            <SectionTitle 
            subTitle={'Service'} title={'Our Service Area'}
            decs={'the majority have suffered alteration in some form, by injected humour, or randomised words which don ot look even slightly believable.'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-12 mb-6'>
             {
                services.map(service => <div key={service._id} className="card w-96 bg-base-100 border border-[#e8e8e8]">
                <figure className="px-5 pt-5">
                    <img src={service.img} alt="Shoes" className="rounded-xl h-[210px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#444] text-2xl font-bold">{service.title}</h2>
                    <div className="flex items-center text-xl font-semibold text-[#ff3811]">
                        <p> Price: $ {service.price}</p>
                        <Link to={`serviceDetails/${service._id}`}  className='text-2xl border border-[#e4e3e3] rounded-full p-2'><BiRightArrowAlt/></Link>
                    </div>
                </div>
            </div>)
             }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline text-[#ff3811] border-2 border-[#ff3811] font-semibold mb-8">More Services</button>
            </div>
        </div>
    );
};

export default Services;