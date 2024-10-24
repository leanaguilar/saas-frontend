import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';
import axios from 'axios';


const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Firebase restored the user, now verify the token with the backend
          debugger;
          const backendUrl = import.meta.env.VITE_BACKEND_URL;

          const token = await user.getIdToken();
          const response = await axios.get(`${backendUrl}/verify-token`, {
                headers: {
                 Authorization: `Bearer ${token}`,
                 },
          });

          if (response.status === 200) {
            setIsAuthenticated(true); // Token is valid
          } else {
            setIsAuthenticated(false); // Token is invalid
          }
        } catch (err) {
          console.error('Error verifying token with backend:', err);
          setError('Error verifying token with backend');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false); // User is not authenticated
      }
      setLoading(false); // Stop loading after Firebase checks
    });

    // Cleanup the onAuthStateChanged listener
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading while checking auth status
  if (error) return <div>{error}</div>; // Show error if there's a problem

  // If authenticated, render the child component; otherwise, redirect to /signin
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;