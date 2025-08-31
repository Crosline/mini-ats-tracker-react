import React, { useState } from "react";
import { ApiRoutes, useApi } from "../../hooks/useApi";
import { RegistrationApi, UserRegistrationRequest } from "../../client";
import { PasswordField } from "../../modules/registration/PasswordField";

const LoginPage = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister) {
      api.apiV1RegisterCreate(form);
    } else {
      // handle login
    }
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
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              required
            />
          )}
          <PasswordField isRegister={isRegister} form={form} handleChange={handleChange} />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <button
          className="text-indigo-600 hover:underline text-sm"
          type="button"
          onClick={() => setIsRegister((v) => !v)}
        >
          {isRegister ? "Already have an account? Login" : "Not registered?"}
        </button>
      </div>
    </main>
  );
};

export default LoginPage;
