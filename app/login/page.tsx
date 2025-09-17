"use client"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

export default function LoginPage() {
  const { signIn, signUp, signOut, user } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")
    try {
      if (mode === "login") {
        await signIn({ email, password })
      } else {
        await signUp({ email, password })
        setMessage("Check your email for a confirmation link!")
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed")
    }
  };

  if (user) {
    return (
      <div>
        <div>Logged in as {user.email}</div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: <input value={email} onChange={e => setEmail(e.target.value)} type="email" /></label>
        </div>
        <div>
          <label>Password: <input value={password} onChange={e => setPassword(e.target.value)} type="password" /></label>
        </div>
        <button type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>
        {error && <div>{error}</div>}
        {message && <div>{message}</div>}
      </form>
      <button onClick={() => setMode(mode === "login" ? "signup" : "login")}>
        {mode === "login" ? "No account? Sign Up" : "Have an account? Login"}
      </button>
    </div>
  )
}
