import Link from "next/link";
import Image from "next/image";

const pokemons = [
  { name: "Groudon", slug: "groudon", image: "/images/pokemons/Groudon.png" },
  { name: "Kyogre", slug: "kyogre", image: "/images/pokemons/Kyogre.png" },
  { name: "Rayquaza", slug: "rayquaza", image: "/images/pokemons/Rayquaza.png" },
  { name: "Treecko", slug: "treecko", image: "/images/pokemons/treecko.png" },
  { name: "Nicolai", slug: "nicolai", image: "/images/pokemons/billede_ny.png" },
  { name: "Mesprit Illustration Rare", slug: "mesprit_surging_sparks", image: "/images/pokemons/mesprit_surging_sparks.png" },
  { name: "Uxie", slug: "uxie", image: "/images/pokemons/uxie.png" },
  { name: "Azelf", slug: "azelf", image: "/images/pokemons/azelf.png" },
  { name: "Mesprit", slug: "mesprit", image: "/images/pokemons/mesprit.png" },
  { name: "Dialga", slug: "dialga", image: "/images/pokemons/dialga.jpg" },
];

export default function Pokemon() {
  return (
    <main className="min-h-screen bg-[var(--page)]">
      
      {/* 
        Page container
        - max-w-screen-2xl gives the grid more horizontal space
        - wider container = wider cards = visually bigger images
      */}
      <div className="mx-auto max-w-screen-2xl px-6 py-12">

        {/* 
          Grid layout
          - 2 cols on mobile
          - 3 cols on medium screens
          - 5 cols ONLY on very wide screens (xl)
          → prevents cards from becoming too narrow
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">

          {pokemons.map((p) => (
            <Link key={p.slug} href={`/pokemon/${p.slug}`} className="block">

              {/* 
                Card
                - fixed height keeps grid consistent
                - flex-col lets image take most space
              */}
              <div className="rounded-xl bg-[var(--card)] p-4 transition hover:scale-105 h-[360px] flex flex-col">

                {/* 
                  Image box
                  - flex-1 = fills remaining card height
                  - relative is required for next/image with `fill`
                  - image size is limited mainly by CARD WIDTH
                */}
                <div className="relative flex-1">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 45vw"
                  />
                </div>

                {/* Name */}
                <p className="mt-3 text-center font-medium text-lg">
                  {p.name}
                </p>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
