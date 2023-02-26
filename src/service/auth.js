class AuthService {
  isAuthenticated = () => {
    return sessionStorage.getItem("auth-token") ? true : false;
  };

  setAuthToken = (token) => {
    sessionStorage.setItem("auth-token", token);
  }
  setCurrentUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  getCurrentUser=()=> {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  getAuthToken = () => {
    return sessionStorage.getItem("auth-token");
  };

  handleLogout = (history) => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("user");
    history("/login");
  };
}

export const authService = new AuthService();
