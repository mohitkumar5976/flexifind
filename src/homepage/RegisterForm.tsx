import React from "react";
import { useForm } from "react-hook-form";
import { PhotoIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-md px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-white">Flexi</span>
          <span className="text-yellow-300">find</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="#"
            className="hover:text-yellow-300 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="#"
            className="hover:text-yellow-300 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div className="flex  items-center justify-center min-h-screen bg-gray-50 overflow-auto px-4 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl w-full bg-white p-6 md:p-10 rounded-lg shadow-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register("firstName", { required: true })}
              placeholder="First Name"
              className="border p-2 rounded"
            />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="border p-2 rounded"
            />
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
              className="border p-2 rounded"
            />
            <input
              {...register("altMobile")}
              placeholder="Alternate Mobile"
              className="border p-2 rounded"
            />
          </div>

          <textarea
            {...register("address")}
            placeholder="Address"
            className="w-full border p-2 rounded"
          />

          {/* Location Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              {...register("city.cityName")}
              placeholder="City Name"
              className="border p-2 rounded"
            />
            <input
              {...register("city.pincode")}
              placeholder="Pincode"
              className="border p-2 rounded"
            />
            <input
              {...register("state.stateName")}
              placeholder="State Name"
              className="border p-2 rounded"
            />
            <input
              {...register("country.countryName")}
              placeholder="Country Name"
              className="border p-2 rounded"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block mb-1 font-medium">Role</label>
            <select
              {...register("role.roleName", { required: true })}
              className="border p-2 rounded w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Hire">Hire</option>
              <option value="Worker">Worker</option>
            </select>
          </div>

          {/* Job Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              {...register("salary")}
              placeholder="Salary"
              className="border p-2 rounded"
            />
            <input
              type="number"
              {...register("experienceMonths")}
              placeholder="Experience (Months)"
              className="border p-2 rounded"
            />
            <input
              {...register("workMode")}
              placeholder="Work Mode"
              className="border p-2 rounded"
            />
            <input
              {...register("workTime")}
              placeholder="Work Time"
              className="border p-2 rounded"
            />
          </div>

          {/* File Uploads */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <PhotoIcon className="h-5 w-5 text-blue-500" />
              Upload Photo
            </label>
            <input
              type="file"
              {...register("photoUrl")}
              accept="image/*"
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 font-medium">
              <DocumentDuplicateIcon className="h-5 w-5 text-green-500" />
              Upload ID Documents
            </label>
            <input
              type="file"
              multiple
              {...register("idDocuments")}
              accept="image/*,.pdf"
              className="border p-2 rounded w-full"
            />
          </div>

          <textarea
            {...register("categories")}
            placeholder="Categories (comma separated)"
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
