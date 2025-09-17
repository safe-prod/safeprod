"use client"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

export default function LoginPage() {
  const { signIn, user } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      await signIn({ email, password })
    } catch (err: any) {
      setError(err.message || "Login failed")
    }
  }

  if (user) return <div>Logged in as {user.email}</div>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: <input value={email} onChange={e => setEmail(e.target.value)} type="email" /></label>
      </div>
      <div>
        <label>Password: <input value={password} onChange={e => setPassword(e.target.value)} type="password" /></label>
      </div>
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}
