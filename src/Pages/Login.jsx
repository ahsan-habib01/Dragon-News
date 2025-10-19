import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
  const { logIn } = use(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(res => {
        const user = res.user;
        // console.log(user);
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        const errorCode = error.code;
        // alert(error.message);
        setError(errorCode)
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center py-5">
            Login your account
          </h2>
          <hr className="pb-5 text-gray-200" />
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Your Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
              </div>
              <button type="submit" className="btn btn-neutral mt-3">
                Login
              </button>
              <p className=" font-semibold text-sm py-2">
                Don’t Have An Account? Please {''}
                <Link
                  to={'/auth/register'}
                  className="text-secondary text-center"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
