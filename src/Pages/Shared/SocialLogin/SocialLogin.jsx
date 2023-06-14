import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"


    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedInUser = res.user
                console.log(loggedInUser);


                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.photoURL }
                console.log(savedUser);
                fetch('https://assignment-12-server-one-theta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true });

                    })






            })






    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn}  className="btn btn-circle text-white bg-red-500">
                    <FaGoogle />
                </button>
            </div>
        </div>
        
    );
};

export default SocialLogin;

