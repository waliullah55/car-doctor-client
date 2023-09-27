import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUp from '../../assets/images/login/login.svg';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { googleSignIn, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
        .then(result => {
            const loggesUser = result.user;
            console.log(loggesUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully....',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err))
    }
   

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully....',
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
                        <h1 className="text-4xl text-[#444] text-center font-semibold">Login</h1>
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
                            <button className="btn btn-primary bg-[#ff3811] border-[#ff3811] text-white">Log In</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex gap-4 mb-1 mx-auto'>
                            <BiLogoFacebook className='text-[#0866FF] loginSocialIcon' />
                            <FaLinkedinIn className='text-[#0072b1] loginSocialIcon' />
                            <FcGoogle onClick={handleGoogleLogin} className='loginSocialIcon' />
                        </div>
                        <p className='text-[#737373] mb-6 text-lg text-center'>Have You New Her? <Link to={'/signup'} className='text-[#FF3811] font-semibold'>Sign Up</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;