import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState({ signin: false, signup: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [resetEmail, setResetEmail] = useState("");

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // -------------------- Signin --------------------
  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const emailOrMobile = form.signinEmail.value.trim();
    const password = form.signinPassword.value;
    const rememberMe = form.rememberMe.checked;

    if (!emailOrMobile || !password) {
      setError("Please fill all required fields");
      setLoading(false);
      return;
    }

    if (!rememberMe) {
      setError("Please check 'Keep me signed in'");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_or_mobile: emailOrMobile, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.detail === "Invalid password") {
          setResetEmail(emailOrMobile); // Prepare reset
        }
        if (data.errors) {
          setError(
            Object.entries(data.errors)
              .map(([field, msg]) => `${field}: ${msg}`)
              .join(" | ")
          );
        } else if (data.detail) {
          setError(data.detail);
        } else {
          setError("Login failed");
        }
      } else {
        console.log("Login success:", data);
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        setError("");
        form.reset();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------- Signup --------------------
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const name = form.signupName.value.trim();
    const email = form.signupEmail.value.trim();
    const mobile = form.signupMobile.value.trim();
    const password = form.signupPassword.value;
    const confirm = form.signupConfirm.value;

    if (!name || !email || !password || !confirm) {
      setError("All required fields must be filled");
      setLoading(false);
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          mobile,
          password,
          re_password: confirm,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setError(
            Object.entries(data.errors)
              .map(([field, msg]) => `${field}: ${msg}`)
              .join(" | ")
          );
        } else if (data.detail) {
          setError(data.detail);
        } else {
          setError("Signup failed");
        }
      } else {
        console.log("Signup success:", data);
        alert("Account created successfully! Please sign in.");
        setActiveTab("signin");
        setError("");
        form.reset();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------- Forgot / Reset Password --------------------
  const handleForgotPassword = async () => {
    if (!resetEmail) {
      setError("Email/Mobile required for password reset");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/forgot-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_or_mobile: resetEmail }),
      });

      const data = await res.json();

      if (res.ok && data.reset_token) {
        setResetToken(data.reset_token);
        setShowResetForm(true);
      } else {
        setError(data.detail || "Failed to generate reset token");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const token = form.token.value.trim();
    const new_password = form.newPassword.value;
    const confirm_password = form.confirmPassword.value;

    if (!token || !new_password || !confirm_password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (new_password !== confirm_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/reset-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_or_mobile: resetEmail, token, new_password, confirm_password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Password reset successful, please login again.");
        setShowResetForm(false);
        setActiveTab("signin");
        setResetToken("");
      } else {
        setError(data.detail || "Failed to reset password");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------- JSX --------------------
  return (
    <section className={styles.authSixpine}>
      <div className={styles.authSixpineCard}>
        <div className="text-center">
          <a href="/" className={styles.authSixpineLogo}>Sixpine</a>
        </div>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {!showResetForm ? (
          <>
            <div className={styles.authSixpineTabs}>
              <button
                className={`${styles.tabBtn} ${activeTab === "signin" ? styles.active : ""}`}
                onClick={() => setActiveTab("signin")}
              >
                Sign in
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === "signup" ? styles.active : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Create account
              </button>
            </div>

            {activeTab === "signin" && (
              <form className={styles.authSixpineForm} onSubmit={handleSignin}>
                <label htmlFor="signinEmail">Email or Mobile</label>
                <input
                  type="text"
                  id="signinEmail"
                  required
                  defaultValue={resetEmail}
                  onChange={(e) => { setError(""); setResetEmail(e.target.value); }}
                />

                <div className={styles.passwordField}>
                  <label htmlFor="signinPassword" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Password</span>
                    <span
  className={styles.authSixpineLink}
  onClick={handleForgotPassword}
>
  Forgot Password?
</span>

                  </label>
                  <input
                    type={showPassword.signin ? "text" : "password"}
                    id="signinPassword"
                    required
                    onChange={() => setError("")}
                  />
                  <button
                    type="button"
                    className={styles.authSixpineEye}
                    onClick={() => togglePassword("signin")}
                  >
                    {showPassword.signin ? "🙈" : "👁️"}
                  </button>
                </div>

                <div className={styles.checkboxContainer}>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Keep me signed in</label>
                </div>

                <button type="submit" className={styles.authSixpineBtn} disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>
            )}

            {activeTab === "signup" && (
              <form className={styles.authSixpineForm} onSubmit={handleSignup}>
                <label htmlFor="signupName">Your name</label>
                <input type="text" id="signupName" required onChange={() => setError("")} />

                <label htmlFor="signupEmail">Email</label>
                <input type="email" id="signupEmail" required onChange={() => setError("")} />

                <label htmlFor="signupMobile">Mobile (optional)</label>
                <input type="tel" id="signupMobile" onChange={() => setError("")} />

                <div className={styles.passwordField}>
                  <label htmlFor="signupPassword">Password</label>
                  <input
                    type={showPassword.signup ? "text" : "password"}
                    id="signupPassword"
                    minLength="6"
                    required
                    onChange={() => setError("")}
                  />
                  <button
                    type="button"
                    className={styles.authSixpineEye}
                    onClick={() => togglePassword("signup")}
                  >
                    {showPassword.signup ? "🙈" : "👁️"}
                  </button>
                </div>

                <label htmlFor="signupConfirm">Re-enter password</label>
                <input
                  type="password"
                  id="signupConfirm"
                  minLength="6"
                  required
                  onChange={() => setError("")}
                />

                <button type="submit" className={styles.authSixpineBtn} disabled={loading}>
                  {loading ? "Creating..." : "Create account"}
                </button>
              </form>
            )}
          </>
        ) : (
          <form className={styles.resetForm} onSubmit={handleResetPassword}>
            <h2>Reset Password</h2>
            <label>Email / Mobile</label>
            <input type="text" value={resetEmail} readOnly />

            <label>Token</label>
            <input type="text" name="token" value={resetToken} readOnly />

            <label>New Password</label>
            <input type="password" name="newPassword" required />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" required />

            <button type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        <div className={styles.authSixpineMini}>
          <a href="/privacy">Privacy</a>
          <span> • </span>
          <a href="/terms">Terms</a>
          <span> • </span>
          <a href="/help">Help</a>
        </div>
      </div>
    </section>
  );
}
