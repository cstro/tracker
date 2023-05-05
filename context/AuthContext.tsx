'use client';

import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';

import firebaseConfig from '@/firebase/config';

const auth = getAuth(firebaseConfig);

interface AuthContextType {
  user: User | null;
}

export const AuthContext = React.createContext<AuthContextType>({ user: null });

export const useAuthContext = () =>
  React.useContext<AuthContextType>(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged', user);

      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
