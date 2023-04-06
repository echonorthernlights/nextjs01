import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About page title",
  description: "About page description",
};

export default function About() {
  //throw new Error("Not today!");
  return (
    <>
      <h1>About Page</h1>
      <br />
      <Link href="/">Go back to Home</Link>
    </>
  );
}
