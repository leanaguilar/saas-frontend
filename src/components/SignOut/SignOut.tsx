// SignOut.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSignOut = async () => {
      try {

        await signOut(auth);
        // Redirect to home page after successful sign out
        navigate('/');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    handleSignOut();
  }, [navigate]);

  return <div>Signing out...</div>;
};

export default SignOut;
