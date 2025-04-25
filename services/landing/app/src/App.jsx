import React, { useState, useEffect } from "react";

// Replace these with your Authentik instance details
const AUTHENTIK_BASE_URL = "https://authentik.example.com";
const CLIENT_ID = "YOUR_CLIENT_ID";
const REDIRECT_URI = window.location.origin;
const AUTH_URL = `${AUTHENTIK_BASE_URL}/application/o/authorize/?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

function getTokenFromHash() {
  if (window.location.hash) {
    const params = new URLSearchParams(window.location.hash.slice(1));
    return params.get("access_token");
  }
  return null;
}

function App() {
  const [token, setToken] = useState(getTokenFromHash());
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      // Fetch user info from Authentik's userinfo endpoint
      fetch(`${AUTHENTIK_BASE_URL}/application/o/userinfo/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then(setUser)
        .catch(() => setUser(null));
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    window.location.hash = "";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="ministack.png"
          alt="MiniStack Logo"
          className="w-48 mb-6"
          style={{ boxShadow: "0 4px 24px rgba(80, 0, 120, 0.08)" }}
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">MiniStack</h1>
        <p className="text-lg text-gray-600 max-w-xl text-center">
          The minimal, modern stack for your personal projects. Organize, build, and launch with ease.
        </p>
      </div>

      {/* Login/Logged Area */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm flex flex-col items-center">
        {!token || !user ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Sign in to continue</h2>
            <a
              href={AUTH_URL}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded shadow hover:from-purple-600 hover:to-indigo-600 transition"
            >
              Login with Authentik
            </a>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2">Welcome, {user.name || user.preferred_username}!</h2>
            <p className="text-gray-600 mb-4">You are now logged in.</p>
            <button
              onClick={handleLogout}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
      <footer className="mt-12 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MiniStack. Powered by Authentik.
      </footer>
    </div>
  );
}

export default App;