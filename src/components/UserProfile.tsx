import { useFetchUser } from "../hooks/useFetchUser";

export default function UserProfile() {
  const { user, loading, error } = useFetchUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>Role: {user?.role}</p>
    </div>
  );
}
