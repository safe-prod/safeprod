"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { createClient, SupabaseClient, Session } from "@supabase/supabase-js"
import { Email } from "../regulation/IETF-RFC-3696"
import { Password } from "../regulation/NIST-SP-800-63"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

type AuthContextType = {
  user: Session["user"] | null
  signIn: (options: { email: Email, password: Password }) => Promise<void>
  signUp: (options: { email: Email, password: Password }) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Session["user"] | null>(null)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null))
    return () => { authListener?.subscription.unsubscribe() }
  }, [])

  const signIn = async ({ email, password }: { email: Email, password: Password }) => {
    await supabase.auth.signInWithPassword({ email, password })
  }

  const signUp = async ({ email, password }: { email: Email, password: Password }) => {
    await supabase.auth.signUp({ email, password })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }
  
  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider")
  return context
}

export default function Auth() {
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
