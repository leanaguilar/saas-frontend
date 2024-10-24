import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const LogoutButton = () => {

  const navigate = useNavigate();  // React Router v6 hook to navigate

  const handleLogout = async () => {

    try {

      await signOut(auth);
      console.log('User signed out successfully');
      navigate('/');  // Redirect to login page after successful logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;