import { useState, useEffect } from "react";
import { UserRegistrationRequest } from "../../client";

function passwordValidation(password: string, secondPassword: string): string[] {
  if (!password && !secondPassword) {
    return [];
  }

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChars = /[!@#$%^&*]/.test(password);

  let errs: string[] = [];

  if (password.length < minLength) {
    errs.push(`Password must be at least ${minLength} characters long.`);
  }
  if (!hasUpperCase) {
    errs.push("Password must contain at least one uppercase letter.");
  }
  if (!hasLowerCase) {
    errs.push("Password must contain at least one lowercase letter.");
  }
  if (!hasNumbers) {
    errs.push("Password must contain at least one number.");
  }
  if (!hasSpecialChars) {
    errs.push("Password must contain at least one special character.");
  }
  if (secondPassword && password !== secondPassword) {
    errs.push("Passwords do not match.");
  }
  return errs;
}

interface PasswordFieldProps {
  isRegister: boolean;
  form: UserRegistrationRequest;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ isRegister, form, handleChange }) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [secondPassword, setSecondPassword] = useState<string>("");

  useEffect(() => {
    if (!isRegister) {
      return;
    }

    const errs = passwordValidation(form.password, secondPassword);
    setErrors(errs);
  }, [form.password, secondPassword, isRegister]);

  useEffect(() => {
    setSecondPassword("");
  }, [isRegister]);

  const handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.target.value);
  };

  return (
    <>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        required
      />

      {isRegister && (
        <>
          <input
            type="password"
            name="password"
            placeholder="Repeat Password"
            value={secondPassword}
            onChange={handleSecondPasswordChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          {errors.length > 0 && (
            <ul className="text-red-500 text-xs text-left mb-2">
              {errors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};
