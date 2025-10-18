import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center py-5">
            Login your account
          </h2>
          <hr className="pb-5 text-gray-200" />
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Enter Your Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Enter Your Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center font-semibold text-sm py-2">
              Dont’t Have An Account ?{' '}
              <Link
                to={'/auth/register'}
                className="text-secondary text-center"
              >
                Register
              </Link> Now
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
