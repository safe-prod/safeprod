export default async function useAuth(email, password) {
  const { data, error } = await supabase.auth.signUp(email, password)
}
