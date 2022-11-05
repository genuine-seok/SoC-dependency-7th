// interface
// signup, signin, logout

import { createContext, useContext } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children, authService }) {
  const signup = authService.signup.bind(authService);
  const signin = authService.signin.bind(authService);
  const logout = authService.logout.bind(authService);

  return (
    <AuthContext.Provider value={{ signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
