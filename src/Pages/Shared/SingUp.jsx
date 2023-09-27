import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUp from '../../assets/images/login/login.svg';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Create User successfully....',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .then(err => console.error(err))
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Create User successfully....',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen">
            <Helmet><title>Car Doctor | Sign Up</title></Helmet>
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signUp} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 border-[#D0D0D0] bg-base-100">
                    <form onSubmit={handleForm} className="card-body mb-0 pb-0">
                        <h1 className="text-4xl text-[#444] text-center font-semibold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#444] text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#444] text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#444] text-lg font-semibold">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#ff3811] border-[#ff3811] text-white">Sign Up</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex gap-4 mb-1 mx-auto'>
                            <BiLogoFacebook className='text-[#0866FF] loginSocialIcon' />
                            <FaLinkedinIn className='text-[#0072b1] loginSocialIcon' />
                            <FcGoogle onClick={handleGoogleLogin} className='loginSocialIcon' />
                        </div>
                        <p className='text-[#737373] mb-6 text-lg text-center'>Already have an account? <Link to={'/login'} className='text-[#FF3811] font-semibold'>Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;