'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react"; // Assuming you're using Lucide for icons

export default function PasswordResetPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = () => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);

    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasSpecialChar
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
  };

  const { minLength, hasUpperCase, hasLowerCase, hasSpecialChar } = validatePassword();

  return (
    <div className="bg-ksbl relative h-screen bg-cover bg-center flex items-center justify-center">
      <Card className="w-full backdrop-blur-sm p-6 top-[202px] left-[615px] border-t-[3px] border-r-8 rounded-tl-[15px] max-w-[638px] max-h-screen bg-[#05274F]/85 border-[3px] border-[#FBA733] text-white">
        <CardHeader>
          <h2 className="text-3xl font-bold">Set a new password</h2>
          <p className="text-sm text-white">
            Create a new password. Your new password must be <br /> different from your previous password.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 text-black ${passwordError ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-black"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <div className="relative">
              <label htmlFor="confirm-password" className="block text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`mt-1 text-black ${passwordError ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[38px] text-black"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            {passwordError && (
              <div className="text-xs text-red-500">{passwordError}</div>
            )}

            <ul className="text-xs text-white space-y-1">
              <li className={minLength ? 'text-green-500' : 'text-red-500'}>
                • Must have a minimum of 8 characters
              </li>
              <li className={hasUpperCase ? 'text-green-500' : 'text-red-500'}>
                • Must include at least 1 uppercase letter
              </li>
              <li className={hasLowerCase ? 'text-green-500' : 'text-red-500'}>
                • Must include at least 1 lowercase letter
              </li>
              <li className={hasSpecialChar ? 'text-green-500' : 'text-red-500'}>
                • Must include at least 1 special character
              </li>
            </ul>

            <Button
              type="submit"
              className="w-full bg-[#FBA733] hover:bg-[#FBA733]/90 text-white"
            >
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}