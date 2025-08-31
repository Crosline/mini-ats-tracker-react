import React, { useState } from "react";
import { ApiRoutes, useApi } from "../../hooks/useApi";
import { RegistrationApi, UserRegistrationRequest } from "../../client";
import { PasswordField } from "../../modules/registration/PasswordField";
import { LoadingSpinner } from "../../modules/common";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const api = useApi(ApiRoutes.Registration) as RegistrationApi;
  const [form, setForm] = useState<UserRegistrationRequest>({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isRegister) {
      const response = await api.apiV1RegisterCreate(form);
    } else {
      console.log("Logging in with", form.username, form.password);
      await login(form.username, form.password);
      window.location.href = "/";
    }

    setIsLoading(false);
  };

  return (
    <main className="flex items-center justify-center h-screen text-center px-4">
      <div className="space-y-6 w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            disabled={isLoading}
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          {isRegister && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              disabled={isLoading}
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              required
            />
          )}
          <PasswordField disabled={isLoading} isRegister={isRegister} form={form} handleChange={handleChange} />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            {isLoading ? <LoadingSpinner /> : <span>{isRegister ? "Register" : "Login"}</span>}
          </button>
        </form>
        <button
          className="text-indigo-600 hover:underline text-sm"
          type="button"
          disabled={isLoading}
          onClick={() => setIsRegister((v) => !v)}
        >
          {isRegister ? "Already have an account? Login" : "Not registered?"}
        </button>
      </div>
    </main>
  );
};

export default LoginPage;
