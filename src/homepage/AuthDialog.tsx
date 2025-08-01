import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { backendBaseUrl } from "../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthDialog = ({ setShowDialog }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // 👈 initialize

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);

    // Get location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await axios.post(`${backendBaseUrl}/signup`, {
            phoneNumber,
            password,
            latitude: `${latitude}`, // If you want them as strings
            longitude: `${longitude}`,
          });

          console.log("Success:", response.data);
          setShowDialog(false);
        } catch (err: any) {
          setError("Failed to submit. Try again.");
          console.error(err);
        } finally {
          setLoading(false);
          navigate("/register"); // 👈 redirect to next route
        }
      },
      (geoError) => {
        console.error("Geolocation error:", geoError);
        setError("Location access denied. Please allow location.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setShowDialog(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Login / Register
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded font-semibold transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Submitting...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthDialog;
