
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/context';

const ProtectedRoute = ({ children }) => {
  const { currUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currUser) {
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [currUser, router]);

  return currUser ? children : null;
};

export default ProtectedRoute;