import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ApiRoutes, useApi } from "../hooks/useApi";
import { ApiApi } from "../client";
import { useCookies } from "react-cookie";

interface AuthContextType {
  accessToken: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  loading: boolean;
}

const AccessTokenKey = "access_token";
const RefreshTokenKey = "refresh_token";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const api = useApi(ApiRoutes.Token) as ApiApi;
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem(AccessTokenKey));
  const [cookies, setCookie, removeCookie] = useCookies([RefreshTokenKey]);
  const [loading, setLoading] = useState(true);

  const login = async (username: string, password: string) => {
    const response = await api.apiV1LoginCreate({ username, password });

    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;

    setAccessToken(accessToken);
    localStorage.setItem(AccessTokenKey, accessToken);
    setCookie(RefreshTokenKey, refreshToken, { path: "/" });
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem(AccessTokenKey);
    removeCookie(RefreshTokenKey, { path: "/" });
  };

  const refreshToken = async () => {
    try {
      const refreshRequest = cookies[RefreshTokenKey];
      const response = await api.apiV1LoginRefreshCreate({ refresh: refreshRequest });

      if (!response.data) {
        throw new Error("Failed to refresh token");
      }

      const accessToken = response.data.access;
      setAccessToken(accessToken);
      localStorage.setItem(AccessTokenKey, accessToken);
    } catch (err) {
      logout();
    }
  };

  useEffect(() => {
    const init = async () => {
      if (!accessToken) {
        await refreshToken();
      }
      setLoading(false);
    };
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout, refreshToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
