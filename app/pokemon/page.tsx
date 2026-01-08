import Link from "next/link";
import Image from "next/image";

const pokemons = [
  { name: "Victini IR (Promo)", slug: "victini", image: "/images/pokemons/victini.png" },
  { name: "Kyogre Amazing Rare", slug: "kyogre", image: "/images/pokemons/Kyogre.png" },
  { name: "Shaymin X", slug: "shaymin", image: "/images/pokemons/shaymin.jpg" },
  { name: "Treecko", slug: "treecko", image: "/images/pokemons/treecko.png" },
  { name: "Nicolai Runge (Menneske)", slug: "nicolai", image: "/images/pokemons/billede_ny.png" },
  { name: "Mesprit IR", slug: "mesprit_surging_sparks", image: "/images/pokemons/mesprit_surging_sparks.png" },
  { name: "Uxie Holo Rare", slug: "uxie", image: "/images/pokemons/uxie.png" },
  { name: "Azelf Holo Rare", slug: "azelf", image: "/images/pokemons/azelf.png" },
  { name: "Mesprit Holo Rare", slug: "mesprit", image: "/images/pokemons/mesprit.png" },
  { name: "Dialga Holo Rare", slug: "dialga", image: "/images/pokemons/dialga.jpg" },
  { name: "Celebi Holo Rare", slug: "celebi", image: "/images/pokemons/celebi.jpg" },
  { name: "Ferroseed IR", slug: "ferroseed", image: "/images/pokemons/ferroseed.png" },
  { name: "Simisear IR", slug: "simisear", image: "/images/pokemons/simisear.png" },
  { name: "Samurott IR", slug: "samurott", image: "/images/pokemons/samurott.png" },
  { name: "Chandelure V", slug: "chandelurev", image: "/images/pokemons/chandelure_v.png" },
  { name: "Latias EX", slug: "latias", image: "/images/pokemons/latias.png" },
  { name: "Reshiram EX", slug: "reshiram", image: "/images/pokemons/reshiram.png" },
  { name: "Slaking EX", slug: "slaking", image: "/images/pokemons/slaking.png" },
  { name: "Tornadus IR (Promo)", slug: "tornadus", image: "/images/pokemons/tornadus.png" },
  { name: "Tyranitar EX", slug: "tyranitar", image: "/images/pokemons/tyranitar.png" },
  { name: "Zamazenta V", slug: "zamazentav", image: "/images/pokemons/zamazenta.png" },
  { name: "Whimsicott EX", slug: "whimsicott", image: "/images/pokemons/whimsicott.png" },
  { name: "Greninja EX", slug: "greninja", image: "/images/pokemons/greninja.png" },
  { name: "Jellicent EX", slug: "jellicent", image: "/images/pokemons/jellicent.png" },
  { name: "Iron Thorns EX", slug: "ironthorns", image: "/images/pokemons/ironthorns.png" },
  { name: "Keldeo EX", slug: "keldeo", image: "/images/pokemons/keldeo_ex.png" },
  { name: "Hydreigon EX", slug: "hydreigon", image: "/images/pokemons/hydreigon.png" },
  { name: "Bouffalant EX", slug: "bouffalant_ex", image: "/images/pokemons/bouffalant_ex.png" },
  { name: "Bouffalant SIR", slug: "bouffalant_sir", image: "/images/pokemons/bouffalant__sir.png" },
  { name: "Bouffalant Full Art", slug: "bouffalant_fullart", image: "/images/pokemons/bouffalant__fullart.png" },
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
