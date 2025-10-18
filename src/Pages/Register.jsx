import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center py-5">
            Register your account
          </h2>
          <hr className="pb-5 text-gray-200" />
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Enter Your Name" />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Your Photo URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Enter Your Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Enter Your Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-center font-semibold text-sm py-2">
              Already Have An Account? {' '}Please {''}
              <Link to={'/auth/login'} className="text-secondary text-center">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
