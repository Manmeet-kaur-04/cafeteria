import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("");
  const [email,setEmail]=useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const proceedSignup = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the backend
      const response = await axios.post("http://localhost:8002/admin/signup", {
        username:admin,
        password,
        email,
      });

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        // If login is successful, redirect to orders page
        setTimeout(() => navigate("/admin1"), 1000);
      }
    } catch (err) {
      // Handle errors and display them
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-gray-50 flex items-center justify-center">
        <div className="bg-slate-100 flex mt-7 mb-7 rounded-2xl shadow-lg max-w-xl p-3 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">SignUp</h2>

            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

            <form
              className="flex flex-col gap-3"
              onSubmit={proceedSignup} // Attach the submit handler
            >
              {successMessage && <p className="text-green-500">{successMessage}</p>} 
              <input
                className="bg-slate-300 p-2 mt-8 rounded-xl border"
                onChange={(e) => setAdmin(e.target.value)}
                value={admin}
                type="text"
                name="username"
                placeholder="username"
                required
              />

              <input
                className="bg-slate-300 p-2 mt-8 rounded-xl border"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <input
                className="bg-slate-300 p-2 mt-8 rounded-xl border"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name="email"
                placeholder="email"
                required
              />

              <button
                type="submit" // Change to submit button
                className="p-2 mt-8 border bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm"></p>
              <hr className="border-gray-400" />
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://i.pinimg.com/736x/40/9e/84/409e840cadae9555d1c40f4c5d29c0fd.jpg"
              
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminSignup;