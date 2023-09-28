import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import fa from '../../assets/icons/socials/Group 4889.svg';
import yu from '../../assets/icons/socials/Group 4891.svg';
import li from '../../assets/icons/socials/Group 4892.svg';
import back from '../../assets/icons/socials/Group.svg';
// import ins from '../../assets/icons/socials//Vector.svg';


const Team = () => {
    const [teamm, setTeamm] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTeamm(data);
            })
    }, [])
    return (
        <div>
            <SectionTitle subTitle={'Team'} title={'Meet Our Team'}
                decs={'the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. '}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 relative">
                {
                    teamm.map(t => <div key={t.id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img src={t.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#444] text-2xl font-bold">{t.name}</h2>
                            <p className="text-[#737373] text-xl font-semibold">{t.role}</p>
                            <div className="card-actions">
                                <img src={fa} alt="" />
                                <img src={yu} alt="" />
                                <img src={li} alt="" />
                                <img className="instagram h-10 w-10 rounded-full" src={back} alt="" />
                            </div>
                        </div>
                    </div>)
                }
                <div className="absolute flex justify-between transform -translate-y-1/2 -left-3 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-[#84808098] text-white hover:text-black">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ff3811] text-white hover:text-black ml-5">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Team;