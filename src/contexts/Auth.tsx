import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

interface AuthData {
  token: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (token: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: any) => {
  const [authData, setAuthData] = useState<AuthData>();

  //faz a busca e caso tenha token altera a pilha de delas
  useEffect(() => {
    async function main() {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        const authData = {
          token,
        };

        setAuthData(authData);
      }
    }

    main();
  }, []);

  async function signIn(token: string): Promise<AuthData> {
    const authData = {
      token: token,
    };
    setAuthData(authData);
    return authData;
  }

  async function signOut() {
    setAuthData(undefined);
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
