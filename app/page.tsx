import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page)] px-6">
      <div className="mx-auto max-w-4xl pt-32 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.15]
          bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300
          bg-clip-text text-transparent">
          Andreas 
        </h1>

        <p className="mt-6 text-lg">
          Software Engineering student.  
          I build things and experiment on the web.
        </p>

        {/* Pokémon Route */}
        <Link href="/pokemon" className="font-medium">
            Pokémon
          </Link>
      </div>
    </main>
  );
}
