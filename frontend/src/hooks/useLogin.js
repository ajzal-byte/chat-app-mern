import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const sucecss = handleInputErrors(username, password);

    if (!sucecss) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleInputErrors = (username, password) => {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (username !== username.trim() || password !== password.trim()) {
    toast.error("Please avoid whitespaces from all fields");
    return false;
  }

  if (username.length < 3) {
    toast.error("Username must have atleast 3 characters");
    return false;
  }

  return true;
};
