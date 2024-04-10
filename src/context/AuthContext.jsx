import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getUser } from "../utils";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async (dbUser) => {
      if (dbUser) {
        const mergeUser = await getUser(dbUser.uid);
        setUser(mergeUser)
      } else {
        setUser(null)
      }
    })
  }, []);

  useEffect(() => {
    if (!user) setUser(null);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}