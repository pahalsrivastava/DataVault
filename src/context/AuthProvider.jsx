import React, { useState, useContext, createContext } from 'react';

export const AuthContext = createContext(); // context created

export default function AuthProvider({ children }) { // destructuring children from props
  // bringing user from local storage
  const initialAuthUser = localStorage.getItem("Users");
  let parsedAuthUser;

  try {
    parsedAuthUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  } catch (error) {
    console.error("Error parsing JSON from localStorage", error);
    parsedAuthUser = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// creating a hook useAuth, by using this hook we will make use of authUser hook
export const useAuth = () => useContext(AuthContext);

