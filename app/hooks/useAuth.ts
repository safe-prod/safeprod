export default async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp(email, password)
}
