import React from "react";
import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";

export const metadata = {
  title: "Users page title",
  description: "Users page description",
};

export default async function About() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <>
      <h1>Users Page</h1> <br />
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
      <br />
      <Link href="/">Go back to Home</Link>
    </>
  );
}
