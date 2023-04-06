import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Hello world !!</h1>
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/users">Go to Users</Link>
    </main>
  );
}
