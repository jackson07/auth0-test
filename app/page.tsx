import Link from "next/link";
import ProfileClient from "./api/components/profileClient/client";

export default function Home() {
  return (
    <main className="h-screen space-x-5 flex flex-col space-y-10 items-center justify-center bg-slate-300">
      <ProfileClient/>
      <div>
        <button className="h-10 w-20 bg-blue-500">
          <a href="/api/auth/login">Login</a>
        </button>
        <button className="h-10 w-20 bg-red-500">
          <a href="/api/auth/logout">Logout</a>
        </button>
        <button className="h-10 w-20 bg-green-500">
          <Link href={'/products'}>Products</Link>
        </button>
      </div>      
    </main>
  )
}
