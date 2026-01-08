import React from "react";
import Link from "next/link";
import Image from "next/image";

const pokemons = [
  { name: "Groudon", slug: "groudon", image: "/images/pokemons/Groudon.png" },
  { name: "Kyogre", slug: "kyogre", image: "/images/pokemons/Kyogre.png" },
  { name: "Rayquaza", slug: "rayquaza", image: "/images/pokemons/Rayquaza.png" },
  { name: "Treecko", slug: "treecko", image: "/images/pokemons/treecko.png" },
  { name: "Nicolai", slug: "Nicolai", image: "/images/pokemons/billede_ny.png" }
];

export default function Pokemon() {
  return (
    <main className="min-h-screen bg-[var(--page)]">
        {/* Pokémon Grid */}
        <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {pokemons.map((p) => (
                <Link key={p.name} href={`/pokemon/${p.slug}`}>
                <div className="group rounded-xl bg-[var(--card)] p-6 hover:scale-110 transition">
                  <div className="relative flex items-center justify-center w-48 h-48 md:w-80 md:h-80">
                    <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                    />
                    </div>
                    <p className="mt-3 text-center font-medium">{p.name}</p>
                </div>
                </Link>
            ))}
            </div>
        </div>
    </main>
  );
}
