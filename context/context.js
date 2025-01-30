import { createContext, useState, useContext } from "react";

export const Auth = createContext(null);

function Context({ children }) {
    const [currUser, setCurrUser] = useState(null);
  
    return (
      <Auth.Provider value={{ currUser, setCurrUser }}>
        {children}
      </Auth.Provider>
    );
  }

export default Context

export const useAuth = () => {
    return useContext(Auth);
  };