"use client";

import { User } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <li>
      <h3>{user.name}</h3>
      <h4>{user.role}</h4>

      {user.avatar?.[0] && (
        <Image
          src={user.avatar[0]}
          alt={`Avatar of ${user.name}`}
          width={200}
          height={200}
          unoptimized
        />
      )}

      <Link href={`/users/server-version/${user.id}`} className="m-4">
        Details
      </Link>
    </li>
  );
}