import React from 'react';
import logo from '../../assets/logo.svg';
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './customStyle.css';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515] text-[#F3F3F3]">
            <aside>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                <div className='flex '>
                    <AiOutlineGoogle className='socialFooter' />
                    <BsTwitter className='socialFooter ' />
                    <BsInstagram className='socialFooter ' />
                    <AiFillLinkedin className='socialFooter ' />
                </div>
            </aside>
            <nav>
                <header className="footer-title text-[#f7faf8]">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title text-[#f7faf8]">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-[#f7faf8]">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;