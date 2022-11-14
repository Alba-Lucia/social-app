import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCuerrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCuerrentUser({
      id: 1,
      name: "Alba Gonzalez",
      ProfilePic: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?cs=srgb&dl=pexels-guilherme-almeida-1858175.jpg&fm=jpg"
    })
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
