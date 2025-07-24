import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";

// by default - server component
const UsersServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    // cache: "force-cache",
    next: { tags: ["users"] },
  });
  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  const users = await res.json();

  return (
    <div>
      <h2>Users list</h2>
      <ul>
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersServerVersion;
