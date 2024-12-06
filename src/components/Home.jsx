import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  // Ensure no scrollbars on the page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    return () => {
      // Clean up when the component unmounts
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="h-screen px-4 bg-black-950 flex flex-row justify-between items-center bg-slate-200">
        <div className="text-black shadow-slate-400 w-full lg:w-2/3 space-y-5">
          <h1 className="text-backgroundColor font-bold text-6xl">
            J. C. BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY, YMCA
          </h1>
          <p className="text-2xl font font-extrabold text-backgroundColor">
            Welcome to YMCA cafeteria!
          </p>
          <div>
            <button
              className="bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <Link to="/admin1" className="bg-slate-100 fas fa-arrow-alt-circle-down">Login</Link>
            </button>
            <button
              className="bg-slate-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              <Link to="/sign" className="bg-slate-100 fas fa-arrow-alt-circle-down">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
