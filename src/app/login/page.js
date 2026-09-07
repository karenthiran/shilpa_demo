'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ✅ Send login request
      const res = await fetch("/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Important!
        },
        body: JSON.stringify(form),
      });

      // ✅ Handle non-JSON or failed response
      let data;
      try {
        data = await res.json();
      } catch {
        data = { error: "Unexpected server response" };
      }

      setLoading(false);

      if (res.ok && data.success) {
        // ✅ Success → redirect
        console.log("✅ Login successful:", data);
        router.push("/dashboard");
      } else {
        // ⚠️ API responded with an error
        setError(data?.error || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      // ❌ Network or unexpected failure
      console.error("Login request failed:", err);
      setError("Unable to connect to server. Please try again later.");
      setLoading(false);
    }
  };
   

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #FFE4B5, #FFFFFF, #FFD580)',
      }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          maxWidth: '420px',
          width: '100%',
        }}
      >
        <h2 className="text-center text-orange fw-bold mb-2" style={{ color: '#FF7A00' }}>
          Welcome Back
        </h2>
        <p className="text-center text-muted mb-4">Login to your dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">User Id</label>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="you@example.com"
              className="form-control border border-warning-subtle shadow-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              placeholder="••••••••"
              className="form-control border border-warning-subtle shadow-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
          </div>

          {error && (
            <p className="text-danger small text-center mb-3">{error}</p>
          )}
  
          <button
            type="submit"
            disabled={loading}
            className="btn btn-warning w-100 fw-semibold text-white shadow-sm py-2"
            style={{
              backgroundColor: '#FF7A00',
              border: 'none',
            }}
          >
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="text-center text-muted small mt-4">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
