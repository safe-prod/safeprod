"use client"
import { useAuth } from "./contexts/AuthContext"

const { signOut } = useAuth()

export default function Page() {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}
