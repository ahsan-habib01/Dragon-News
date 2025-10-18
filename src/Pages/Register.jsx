import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('submit', name, photo, email, password);
    createUser(email, password).then(result => {
      const user = result.user;
      console.log(user);
      setUser(user)
    }).catch(error => {
      console.log(error.message);
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center py-5">
            Register your account
          </h2>
          <hr className="pb-5 text-gray-200" />
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Your Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Your Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className=" font-semibold text-sm py-2">
                Already Have An Account?{' '}
                <Link to={'/auth/login'} className="text-secondary text-center">
                  Login
                </Link>{' '}
                Now
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
