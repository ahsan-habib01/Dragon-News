import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => [
        alert('Logout successful')
          .catch(error => {
          console.log(error);
        })
    ])
  };

  return (
    <div className="flex justify-between items-center py-3">
      <div className="">{user && user.email}</div>
      <div className="nav flex items-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to={'/auth/login'} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
