
import { User } from "@/types";
import Link from "next/link";

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
      {users.map((user: User) => (
        <li key={user.id}>
          {user.name}
          <Link href={`/users/server-version/${user.id}`}>To user</Link>
        </li>
      ))}
    </div>
  );
};

export default UsersServerVersion;
